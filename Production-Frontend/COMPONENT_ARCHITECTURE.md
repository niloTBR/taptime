# Component Architecture Blueprint

## 🏗️ Universal Component Pattern

Every component follows the same 4-file structure:

```
src/components/[ComponentName]/
├── ComponentName.html     # Structure only (no styling)
├── ComponentName.scss     # All visual design
├── ComponentName.ts       # Logic & state management  
├── ComponentName.json     # Configuration & states
```

## 📋 Component States System

### State Categories

**1. Visual States**
- `default` - Normal appearance
- `hover` - Mouse hover effects
- `active` - When being clicked/pressed
- `focus` - Keyboard focus state
- `disabled` - Non-interactive state

**2. Data States**
- `empty` - No data to display
- `loading` - Fetching/processing data
- `error` - Something went wrong
- `success` - Operation completed

**3. Interactive States**
- `selected` - Item is chosen
- `expanded` - Collapsible content open
- `collapsed` - Collapsible content closed
- `dragging` - Being dragged (if applicable)

### State Implementation Pattern

**JSON Configuration:**
```json
{
  "states": {
    "default": { "class": "", "description": "Normal state" },
    "loading": { "class": "component--loading", "description": "Fetching data" },
    "error": { "class": "component--error", "description": "Error occurred" },
    "empty": { "class": "component--empty", "description": "No data" }
  }
}
```

**SCSS State Styling:**
```scss
.component {
  // Default styles
  
  &--loading {
    opacity: 0.6;
    pointer-events: none;
  }
  
  &--error {
    border-color: #dc2626;
    background: #fef2f2;
  }
  
  &--empty {
    background: #f9fafb;
    border-style: dashed;
  }
}
```

**TypeScript State Management:**
```typescript
class Component {
  private state: ComponentState = 'default';
  
  setState(newState: ComponentState) {
    this.state = newState;
    this.updateVisualState();
  }
  
  private updateVisualState() {
    const config = this.config.states[this.state];
    this.element.className = `component ${config.class}`;
  }
}
```

## 🎯 Component Examples

### ExpertCard Component
```
src/components/ExpertCard/
├── ExpertCard.html     # Card structure with avatar, name, rating
├── ExpertCard.scss     # Card styling, hover effects, layouts
├── ExpertCard.ts       # Click handlers, favorite toggle, share
├── ExpertCard.json     # States: default, loading, featured, unavailable
```

### SearchBar Component  
```
src/components/SearchBar/
├── SearchBar.html      # Input, button, suggestions dropdown
├── SearchBar.scss      # Styling for all states and animations
├── SearchBar.ts        # Search logic, autocomplete, debouncing
├── SearchBar.json      # States: empty, typing, searching, results, no-results
```

### ReviewCard Component
```
src/components/ReviewCard/
├── ReviewCard.html     # Review structure with rating, text, author
├── ReviewCard.scss     # Card styling, rating stars, responsive
├── ReviewCard.ts       # Expand/collapse, like functionality
├── ReviewCard.json     # States: default, expanded, featured, loading
```

## 🔄 State Management Best Practices

### 1. Predictable State Transitions
```typescript
// Define allowed state transitions
const stateTransitions = {
  'default': ['loading', 'error'],
  'loading': ['default', 'error', 'success'],
  'error': ['default', 'loading'],
  'success': ['default']
};
```

### 2. State Persistence
```typescript
// Save component state for page refreshes
localStorage.setItem(`component-${id}-state`, this.state);
```

### 3. Event-Driven State Changes
```typescript
// Listen for external state changes
document.addEventListener('dataUpdated', (event) => {
  if (event.detail.componentId === this.id) {
    this.setState(event.detail.newState);
  }
});
```

## 🎨 Styling State Guidelines

### Visual Feedback
```scss
.component {
  transition: all 0.2s ease-in-out;
  
  &--loading {
    &::after {
      content: '';
      position: absolute;
      // Spinner animation
      animation: spin 1s linear infinite;
    }
  }
  
  &--error {
    animation: shake 0.5s ease-in-out;
  }
  
  &--success {
    &::before {
      content: '✓';
      color: #10b981;
    }
  }
}
```

### Responsive States
```scss
.component {
  &--mobile {
    @media (max-width: 768px) {
      // Mobile-specific styling
    }
  }
  
  &--desktop {
    @media (min-width: 769px) {
      // Desktop-specific styling
    }
  }
}
```

## 📊 Data-Driven Component Creation

### Component Generator Template
```typescript
interface ComponentConfig {
  name: string;
  states: string[];
  variants: string[];
  props: Record<string, any>;
}

function generateComponent(config: ComponentConfig) {
  // Creates all 4 files with proper structure
  createHTMLTemplate(config);
  createSCSSTemplate(config);
  createTSTemplate(config); 
  createJSONConfig(config);
}
```

## 🔧 Implementation Steps

1. **Start with JSON** - Define all states and variants
2. **Create HTML** - Pure structure with placeholders
3. **Build SCSS** - All visual states and responsive design
4. **Add TypeScript** - State management and interactions
5. **Test all states** - Ensure smooth transitions

This architecture ensures:
- ✅ **Consistency** across all components
- ✅ **Maintainability** with clear separation
- ✅ **Scalability** for new components
- ✅ **Team collaboration** with defined responsibilities
- ✅ **State predictability** with clear transitions