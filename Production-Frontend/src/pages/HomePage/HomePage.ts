// HomePage TypeScript Logic and Data Handling

interface HeroContent {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  searchButton: string;
  primaryCta: string;
  secondaryCta: string;
}

interface Expert {
  id: string;
  name: string;
  title: string;
  rate: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge: string;
  expertise: string[];
  bio: string;
}

interface Review {
  id: number;
  name: string;
  title: string;
  rating: number;
  text: string;
  image: string;
}

interface HomePageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroContent;
  featuredExperts: {
    label: string;
    title: string;
    description: string;
    viewAllButton: string;
  };
  reviews: {
    label: string;
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

class HomePage {
  private content: HomePageContent;
  private experts: Expert[];
  private reviews: Review[];
  private searchQuery: string = '';

  constructor() {
    this.loadContent();
    this.loadData();
    this.initializeEventListeners();
  }

  private async loadContent(): Promise<void> {
    try {
      // Load page content
      const contentResponse = await fetch('./content.json');
      this.content = await contentResponse.json();
      
      // Update page title
      document.title = `${this.content.meta.title} - TapTime`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', this.content.meta.description);
      }
      
    } catch (error) {
      console.error('Error loading content:', error);
    }
  }

  private async loadData(): Promise<void> {
    try {
      // Load experts data
      const expertsResponse = await fetch('../../data/experts.json');
      const expertsData = await expertsResponse.json();
      this.experts = expertsData.featured;

      // Load reviews data  
      const reviewsResponse = await fetch('../../data/reviews.json');
      const reviewsData = await reviewsResponse.json();
      this.reviews = reviewsData.testimonials;

      // Render dynamic content
      this.renderContent();
      this.renderExperts();
      this.renderReviews();
      
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  private renderContent(): void {
    if (!this.content) return;

    // Update hero section
    this.updateTextContent('.hero__title', this.content.hero.title);
    this.updateTextContent('.hero__subtitle', this.content.hero.subtitle);
    this.updateAttribute('.search-form__input', 'placeholder', this.content.hero.searchPlaceholder);
    this.updateTextContent('.search-form__button', this.content.hero.searchButton);

    // Update section headers
    this.updateTextContent('.featured-experts .section-header__label', this.content.featuredExperts.label);
    this.updateTextContent('.featured-experts .section-header__title', this.content.featuredExperts.title);
    this.updateTextContent('.featured-experts .section-header__description', this.content.featuredExperts.description);

    // Update CTA section
    this.updateTextContent('.cta-card__title', this.content.cta.title);
    this.updateTextContent('.cta-card__description', this.content.cta.description);
    this.updateTextContent('.cta .btn', this.content.cta.button);
  }

  private renderExperts(): void {
    const expertsGrid = document.querySelector('.experts-grid');
    if (!expertsGrid || !this.experts) return;

    expertsGrid.innerHTML = this.experts.map(expert => `
      <div class="expert-card" data-expert-id="${expert.id}">
        <div class="expert-card__header">
          <div class="expert-card__avatar">
            <img src="${expert.image}" alt="${expert.name}" />
          </div>
          ${expert.badge === 'Top Expert' ? '<span class="expert-card__badge">Top Expert</span>' : ''}
        </div>
        <div class="expert-card__content">
          <h3 class="expert-card__name">${expert.name}</h3>
          <p class="expert-card__title">${expert.title}</p>
          <div class="expert-card__rating">
            <span class="rating">${expert.rating}</span>
            <span class="review-count">(${expert.reviewCount})</span>
          </div>
          <div class="expert-card__expertise">
            ${expert.expertise.slice(0, 2).map(skill => `<span class="expertise-tag">${skill}</span>`).join('')}
          </div>
          <p class="expert-card__bio">${expert.bio}</p>
        </div>
        <div class="expert-card__actions">
          <button class="btn btn--primary btn--medium book-btn" data-expert-id="${expert.id}">
            ${expert.rate} Book
          </button>
          <button class="btn btn--outline btn--medium favorite-btn" data-expert-id="${expert.id}">
            ♡
          </button>
        </div>
      </div>
    `).join('');

    // Add event listeners for expert interactions
    this.addExpertEventListeners();
  }

  private renderReviews(): void {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (!reviewsGrid || !this.reviews) return;

    reviewsGrid.innerHTML = this.reviews.slice(0, 3).map(review => `
      <div class="review-card">
        <div class="review-card__rating">
          ${'★'.repeat(review.rating)}
        </div>
        <blockquote class="review-card__text">
          "${review.text}"
        </blockquote>
        <div class="review-card__author">
          <div class="review-card__avatar">
            ${this.getInitials(review.name)}
          </div>
          <div class="review-card__info">
            <div class="review-card__name">${review.name}</div>
            <div class="review-card__title">${review.title}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  private initializeEventListeners(): void {
    // Search form submission
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', this.handleSearch.bind(this));
    }

    // Search input for live search
    const searchInput = document.querySelector('.search-form__input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', this.handleSearchInput.bind(this));
    }
  }

  private addExpertEventListeners(): void {
    // Book expert buttons
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
      button.addEventListener('click', this.handleBookExpert.bind(this));
    });

    // Favorite expert buttons
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
      button.addEventListener('click', this.handleFavoriteExpert.bind(this));
    });

    // Expert card clicks
    const expertCards = document.querySelectorAll('.expert-card');
    expertCards.forEach(card => {
      card.addEventListener('click', this.handleExpertCardClick.bind(this));
    });
  }

  private handleSearch(event: Event): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get('search') as string;
    
    if (query.trim()) {
      this.searchQuery = query;
      // Navigate to browse page with search query
      window.location.href = `/browse?q=${encodeURIComponent(query)}`;
    }
  }

  private handleSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    
    // Implement live search suggestions here if needed
    // this.showSearchSuggestions(this.searchQuery);
  }

  private handleBookExpert(event: Event): void {
    event.stopPropagation();
    const button = event.target as HTMLElement;
    const expertId = button.getAttribute('data-expert-id');
    
    if (expertId) {
      // Navigate to booking page
      window.location.href = `/book/${expertId}`;
    }
  }

  private handleFavoriteExpert(event: Event): void {
    event.stopPropagation();
    const button = event.target as HTMLElement;
    const expertId = button.getAttribute('data-expert-id');
    
    if (expertId) {
      // Toggle favorite status
      button.classList.toggle('favorited');
      button.textContent = button.classList.contains('favorited') ? '♥' : '♡';
      
      // Save to localStorage or send to API
      this.toggleFavoriteInStorage(expertId);
    }
  }

  private handleExpertCardClick(event: Event): void {
    const card = event.target as HTMLElement;
    const expertId = card.getAttribute('data-expert-id');
    
    if (expertId) {
      // Navigate to expert profile page
      window.location.href = `/expert/${expertId}`;
    }
  }

  private toggleFavoriteInStorage(expertId: string): void {
    const favorites = JSON.parse(localStorage.getItem('favoriteExperts') || '[]');
    const index = favorites.indexOf(expertId);
    
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(expertId);
    }
    
    localStorage.setItem('favoriteExperts', JSON.stringify(favorites));
  }

  private updateTextContent(selector: string, content: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = content;
    }
  }

  private updateAttribute(selector: string, attribute: string, value: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, value);
    }
  }

  private getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HomePage();
});

// Export for module usage
export default HomePage;