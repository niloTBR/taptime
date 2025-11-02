// ExpertCard Component Logic
import expertConfig from './ExpertCard.json';

interface ExpertData {
  id: string;
  name: string;
  title: string;
  company?: string;
  avatar?: string;
  bio?: string;
  specialties?: string[];
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
  duration: string;
  available: boolean;
  featured?: boolean;
  online?: boolean;
}

interface ExpertCardOptions {
  variant?: 'standard' | 'featured' | 'compact' | 'horizontal';
  state?: 'default' | 'loading' | 'error' | 'unavailable' | 'selected';
  data: ExpertData;
  onFavorite?: (expertId: string, isFavorited: boolean) => void;
  onShare?: (expertId: string) => void;
  onBook?: (expertId: string) => void;
  onView?: (expertId: string) => void;
  onRetry?: (expertId: string) => void;
}

class ExpertCard {
  private element: HTMLElement;
  private options: ExpertCardOptions;
  private state: string;
  private isFavorited: boolean = false;
  private retryCount: number = 0;
  private maxRetries: number = 3;

  constructor(container: string | HTMLElement, options: ExpertCardOptions) {
    this.options = {
      variant: 'standard',
      state: 'default',
      ...options
    };

    this.state = this.options.state || 'default';

    // Find container element
    if (typeof container === 'string') {
      this.element = document.querySelector(container) as HTMLElement;
    } else {
      this.element = container;
    }

    if (!this.element) {
      throw new Error('ExpertCard container not found');
    }

    // Load favorite status from localStorage
    this.loadFavoriteStatus();

    this.render();
    this.bindEvents();
  }

  private async render(): Promise<void> {
    this.setState('loading');

    try {
      const template = await this.loadTemplate();
      const renderedHTML = this.replacePlaceholders(template, this.prepareTemplateData());
      
      this.element.innerHTML = renderedHTML;
      this.setState(this.options.state || 'default');
      
    } catch (error) {
      console.error('Failed to render ExpertCard:', error);
      this.setState('error');
    }
  }

  private async loadTemplate(): Promise<string> {
    try {
      const response = await fetch('/src/components/ExpertCard/ExpertCard.html');
      if (!response.ok) throw new Error('Template not found');
      return await response.text();
    } catch (error) {
      // Fallback template
      return `
        <div class="expert-card expert-card--{{variant}} expert-card--{{state}}" data-expert-id="{{id}}">
          <div class="expert-card__header">
            <div class="expert-card__avatar">
              <img src="{{avatar}}" alt="{{name}}" class="expert-card__avatar-image">
            </div>
          </div>
          <div class="expert-card__content">
            <h3 class="expert-card__name">{{name}}</h3>
            <p class="expert-card__title">{{title}}</p>
            <div class="expert-card__rating">
              <div class="expert-card__stars" data-rating="{{rating}}"></div>
              <span class="expert-card__rating-text">({{reviewCount}})</span>
            </div>
            <div class="expert-card__pricing">
              <span class="expert-card__price">{{currency}}{{price}}</span>
              <span class="expert-card__duration">/{{duration}}</span>
            </div>
          </div>
          <div class="expert-card__footer">
            <button class="expert-card__book-btn" data-action="book">Book Now</button>
          </div>
        </div>
      `;
    }
  }

  private prepareTemplateData(): any {
    const data = this.options.data;
    const config = expertConfig.content.defaults;

    return {
      // Basic data
      id: data.id,
      name: data.name,
      title: data.title,
      company: data.company || '',
      avatar: data.avatar || '',
      bio: data.bio || '',
      specialties: data.specialties || [],
      
      // Ratings & pricing
      rating: data.rating,
      reviewCount: data.reviewCount,
      ratingPercent: (data.rating / 5) * 100,
      price: data.price,
      currency: data.currency,
      duration: data.duration,
      
      // Status
      available: data.available,
      featured: data.featured || false,
      online: data.online || false,
      
      // Component state
      variant: this.options.variant,
      state: this.state,
      
      // Computed values
      initials: this.getInitials(data.name),
      
      // Content from config
      featuredText: config.featuredText,
      bookText: config.bookText,
      notifyText: config.notifyText,
      viewProfileText: config.viewProfileText,
      errorMessage: config.errorMessage,
      retryText: config.retryText,
      favoriteIcon: this.isFavorited ? '♥' : '♡',
      shareIcon: config.shareIcon,
      errorIcon: config.errorIcon
    };
  }

  private replacePlaceholders(template: string, data: any): string {
    let result = template;

    // Replace simple placeholders
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (value !== undefined && value !== null) {
        result = result.replace(new RegExp(`{{${key}}}`, 'g'), value.toString());
      }
    });

    // Handle conditional blocks
    result = result.replace(/{{#if\s+(\w+)}}(.*?){{\/if}}/gs, (match, condition, content) => {
      return data[condition] ? content : '';
    });

    // Handle each loops for arrays
    result = result.replace(/{{#each\s+(\w+)}}(.*?){{\/each}}/gs, (match, arrayName, itemTemplate) => {
      const array = data[arrayName];
      if (Array.isArray(array)) {
        return array.map(item => {
          return itemTemplate.replace(/{{this}}/g, item);
        }).join('');
      }
      return '';
    });

    // Clean up any remaining placeholders
    result = result.replace(/{{.*?}}/g, '');

    return result;
  }

  private bindEvents(): void {
    // Action buttons
    this.element.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const action = target.dataset.action;

      if (!action || this.state === 'loading') return;

      event.preventDefault();
      this.handleAction(action);
    });

    // Keyboard navigation
    this.element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        const target = event.target as HTMLElement;
        if (target.dataset.action) {
          event.preventDefault();
          this.handleAction(target.dataset.action);
        }
      }
    });

    // Hover analytics (optional)
    this.element.addEventListener('mouseenter', () => {
      this.trackEvent('card_hover', { expertId: this.options.data.id });
    });
  }

  private handleAction(action: string): void {
    const expertId = this.options.data.id;

    switch (action) {
      case 'favorite':
        this.toggleFavorite();
        break;

      case 'share':
        this.shareProfile();
        break;

      case 'book':
        if (this.options.onBook) {
          this.options.onBook(expertId);
        }
        this.trackEvent('book_clicked', { expertId });
        break;

      case 'notify':
        this.notifyWhenAvailable();
        break;

      case 'view':
        if (this.options.onView) {
          this.options.onView(expertId);
        }
        this.trackEvent('profile_viewed', { expertId });
        break;

      case 'retry':
        this.retryLoad();
        break;

      default:
        console.warn(`Unknown action: ${action}`);
    }
  }

  private toggleFavorite(): void {
    this.isFavorited = !this.isFavorited;
    this.saveFavoriteStatus();

    // Update UI
    const favoriteButton = this.element.querySelector('[data-action="favorite"]') as HTMLElement;
    const favoriteIcon = favoriteButton?.querySelector('.expert-card__favorite-icon');
    
    if (favoriteIcon) {
      favoriteIcon.textContent = this.isFavorited ? '♥' : '♡';
    }

    if (favoriteButton) {
      favoriteButton.classList.toggle('is-favorited', this.isFavorited);
    }

    // Callback
    if (this.options.onFavorite) {
      this.options.onFavorite(this.options.data.id, this.isFavorited);
    }

    this.trackEvent('favorite_toggled', { 
      expertId: this.options.data.id, 
      isFavorited: this.isFavorited 
    });
  }

  private async shareProfile(): Promise<void> {
    const expertData = this.options.data;
    const shareData = {
      title: `${expertData.name} - ${expertData.title}`,
      text: `Book a session with ${expertData.name} on TapTime`,
      url: `${window.location.origin}/expert/${expertData.id}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareData.url);
        this.showToast('Profile link copied to clipboard!');
      }

      if (this.options.onShare) {
        this.options.onShare(expertData.id);
      }

      this.trackEvent('profile_shared', { expertId: expertData.id });

    } catch (error) {
      console.error('Share failed:', error);
      this.showToast('Failed to share profile');
    }
  }

  private notifyWhenAvailable(): void {
    // Implementation would integrate with notification system
    this.showToast('You\'ll be notified when this expert becomes available');
    this.trackEvent('notify_requested', { expertId: this.options.data.id });
  }

  private async retryLoad(): Promise<void> {
    if (this.retryCount >= this.maxRetries) {
      this.showToast('Maximum retry attempts reached');
      return;
    }

    this.retryCount++;
    this.setState('loading');

    try {
      // Simulate retry delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (this.options.onRetry) {
        this.options.onRetry(this.options.data.id);
      }

      this.setState('default');
      this.trackEvent('retry_success', { expertId: this.options.data.id, attempt: this.retryCount });

    } catch (error) {
      this.setState('error');
      this.trackEvent('retry_failed', { expertId: this.options.data.id, attempt: this.retryCount });
    }
  }

  public setState(newState: string): void {
    this.state = newState;
    this.updateVisualState();
  }

  private updateVisualState(): void {
    const stateConfig = expertConfig.states[this.state];
    if (!stateConfig) return;

    // Update classes
    const baseClasses = ['expert-card', `expert-card--${this.options.variant}`];
    if (stateConfig.class) {
      baseClasses.push(stateConfig.class);
    }

    this.element.className = baseClasses.join(' ');

    // Update interactive state
    if (stateConfig.interactive === false) {
      this.element.style.pointerEvents = 'none';
    } else {
      this.element.style.pointerEvents = 'auto';
    }
  }

  private loadFavoriteStatus(): void {
    const favorites = JSON.parse(localStorage.getItem('expert-favorites') || '[]');
    this.isFavorited = favorites.includes(this.options.data.id);
  }

  private saveFavoriteStatus(): void {
    const favorites = JSON.parse(localStorage.getItem('expert-favorites') || '[]');
    
    if (this.isFavorited && !favorites.includes(this.options.data.id)) {
      favorites.push(this.options.data.id);
    } else if (!this.isFavorited) {
      const index = favorites.indexOf(this.options.data.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }

    localStorage.setItem('expert-favorites', JSON.stringify(favorites));
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  private showToast(message: string): void {
    // Simple toast implementation - would integrate with app's toast system
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: black;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      z-index: 1000;
      font-size: 14px;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }

  private trackEvent(eventName: string, properties: any): void {
    // Analytics tracking - would integrate with app's analytics
    console.log(`[Analytics] ${eventName}:`, properties);
  }

  // Public methods
  public updateData(newData: Partial<ExpertData>): void {
    this.options.data = { ...this.options.data, ...newData };
    this.render();
  }

  public select(): void {
    this.setState('selected');
  }

  public deselect(): void {
    this.setState('default');
  }

  public destroy(): void {
    // Clean up event listeners
    this.element.removeEventListener('click', () => {});
    this.element.removeEventListener('keydown', () => {});
    this.element.removeEventListener('mouseenter', () => {});
    
    // Clear content
    this.element.innerHTML = '';
  }
}

// Factory function
export function createExpertCard(container: string | HTMLElement, options: ExpertCardOptions): ExpertCard {
  return new ExpertCard(container, options);
}

// Utility function to initialize all expert cards
export function initializeExpertCards(): void {
  const cardElements = document.querySelectorAll('[data-expert-card]');
  
  cardElements.forEach(element => {
    const htmlElement = element as HTMLElement;
    const expertId = htmlElement.dataset.expertId;
    
    if (!expertId) return;

    // Extract data from attributes
    const options: ExpertCardOptions = {
      variant: (htmlElement.dataset.variant as any) || 'standard',
      state: (htmlElement.dataset.state as any) || 'default',
      data: {
        id: expertId,
        name: htmlElement.dataset.name || 'Expert Name',
        title: htmlElement.dataset.title || 'Professional Title',
        rating: parseFloat(htmlElement.dataset.rating || '0'),
        reviewCount: parseInt(htmlElement.dataset.reviewCount || '0'),
        price: parseFloat(htmlElement.dataset.price || '0'),
        currency: htmlElement.dataset.currency || '$',
        duration: htmlElement.dataset.duration || 'hour',
        available: htmlElement.dataset.available === 'true'
      }
    };

    new ExpertCard(htmlElement, options);
  });
}

// Auto-initialize on DOM content loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeExpertCards);
}

export default ExpertCard;