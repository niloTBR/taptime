// Button Component Logic
import buttonConfig from './Button.json';

interface ButtonOptions {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: string;
  rightIcon?: string;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

class Button {
  private element: HTMLElement;
  private options: ButtonOptions;
  
  constructor(container: string | HTMLElement, options: ButtonOptions) {
    this.options = {
      variant: 'primary',
      size: 'medium',
      disabled: false,
      loading: false,
      fullWidth: false,
      type: 'button',
      ...options
    };
    
    // Find container element
    if (typeof container === 'string') {
      this.element = document.querySelector(container) as HTMLElement;
    } else {
      this.element = container;
    }
    
    if (!this.element) {
      throw new Error('Button container not found');
    }
    
    this.render();
    this.bindEvents();
  }
  
  private render(): void {
    // Load the HTML template
    this.loadTemplate().then(template => {
      // Replace placeholders with actual values
      const renderedHTML = this.replacePlaceholders(template, {
        variant: this.options.variant || 'primary',
        size: this.options.size || 'medium',
        disabled: this.options.disabled,
        icon: this.options.icon,
        rightIcon: this.options.rightIcon,
        text: this.options.text,
        type: this.options.type || 'button'
      });
      
      this.element.innerHTML = renderedHTML;
      this.updateButtonState();
    });
  }
  
  private async loadTemplate(): Promise<string> {
    try {
      const response = await fetch('/src/components/Button/Button.html');
      return await response.text();
    } catch (error) {
      // Fallback template if file can't be loaded
      return `
        <button class="btn btn--{{variant}} btn--{{size}}" {{#if disabled}}disabled{{/if}} type="{{type}}">
          {{#if icon}}
            <span class="btn__icon btn__icon--left">{{icon}}</span>
          {{/if}}
          <span class="btn__text">{{text}}</span>
          {{#if rightIcon}}
            <span class="btn__icon btn__icon--right">{{rightIcon}}</span>
          {{/if}}
        </button>
      `;
    }
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
    result = result.replace(/{{#if\s+(\w+)}}(.*?){{\/if}}/g, (match, condition, content) => {
      return data[condition] ? content : '';
    });
    
    // Clean up any remaining placeholders
    result = result.replace(/{{.*?}}/g, '');
    
    return result;
  }
  
  private bindEvents(): void {
    const button = this.element.querySelector('button');
    if (!button) return;
    
    // Click handler
    button.addEventListener('click', (event) => {
      if (this.options.disabled || this.options.loading) {
        event.preventDefault();
        return;
      }
      
      if (this.options.onClick) {
        this.options.onClick();
      }
    });
    
    // Keyboard accessibility
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        if (!this.options.disabled && !this.options.loading) {
          event.preventDefault();
          button.click();
        }
      }
    });
  }
  
  private updateButtonState(): void {
    const button = this.element.querySelector('button');
    if (!button) return;
    
    // Update classes based on current state
    const classes = ['btn'];
    
    classes.push(`btn--${this.options.variant}`);
    classes.push(`btn--${this.options.size}`);
    
    if (this.options.fullWidth) {
      classes.push('btn--full');
    }
    
    if (this.options.loading) {
      classes.push('btn--loading');
    }
    
    button.className = classes.join(' ');
    button.disabled = this.options.disabled || this.options.loading || false;
  }
  
  // Public methods for updating button state
  public setLoading(loading: boolean): void {
    this.options.loading = loading;
    this.updateButtonState();
  }
  
  public setDisabled(disabled: boolean): void {
    this.options.disabled = disabled;
    this.updateButtonState();
  }
  
  public setText(text: string): void {
    this.options.text = text;
    const textElement = this.element.querySelector('.btn__text');
    if (textElement) {
      textElement.textContent = text;
    }
  }
  
  public setVariant(variant: ButtonOptions['variant']): void {
    this.options.variant = variant;
    this.updateButtonState();
  }
  
  public destroy(): void {
    const button = this.element.querySelector('button');
    if (button) {
      button.removeEventListener('click', () => {});
      button.removeEventListener('keydown', () => {});
    }
    this.element.innerHTML = '';
  }
}

// Factory function for easier instantiation
export function createButton(container: string | HTMLElement, options: ButtonOptions): Button {
  return new Button(container, options);
}

// Utility function to initialize all buttons with data attributes
export function initializeButtons(): void {
  const buttonElements = document.querySelectorAll('[data-button]');
  
  buttonElements.forEach(element => {
    const htmlElement = element as HTMLElement;
    const options: ButtonOptions = {
      text: htmlElement.dataset.text || 'Button',
      variant: (htmlElement.dataset.variant as ButtonOptions['variant']) || 'primary',
      size: (htmlElement.dataset.size as ButtonOptions['size']) || 'medium',
      disabled: htmlElement.dataset.disabled === 'true',
      loading: htmlElement.dataset.loading === 'true',
      fullWidth: htmlElement.dataset.fullWidth === 'true',
      icon: htmlElement.dataset.icon,
      rightIcon: htmlElement.dataset.rightIcon,
      type: (htmlElement.dataset.type as ButtonOptions['type']) || 'button'
    };
    
    // Handle click events from data attributes
    if (htmlElement.dataset.onClick) {
      const functionName = htmlElement.dataset.onClick;
      if (typeof (window as any)[functionName] === 'function') {
        options.onClick = (window as any)[functionName];
      }
    }
    
    new Button(htmlElement, options);
  });
}

// Auto-initialize on DOM content loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeButtons);
}

export default Button;