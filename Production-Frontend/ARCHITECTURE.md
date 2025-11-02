# Proper Website Architecture

## 🏗️ Correct File Structure

You're absolutely right! Each page should have separate files for different concerns:

```
src/
├── pages/
│   ├── HomePage/
│   │   ├── HomePage.html          # Pure HTML structure
│   │   ├── HomePage.scss          # Page-specific styles
│   │   ├── HomePage.tsx           # TypeScript logic & data handling
│   │   └── content.json           # All page content/text
│   ├── AboutPage/
│   │   ├── AboutPage.html
│   │   ├── AboutPage.scss
│   │   ├── AboutPage.tsx
│   │   └── content.json
│   └── [each page follows this pattern]
├── components/
│   ├── Button/
│   │   ├── Button.html
│   │   ├── Button.scss
│   │   ├── Button.tsx
│   │   └── Button.json
│   └── [each component follows this pattern]
├── content/                       # Global content files
│   ├── navigation.json
│   ├── footer.json
│   └── site-config.json
├── styles/
│   ├── globals.scss              # Global styles
│   ├── variables.scss            # Design tokens
│   └── mixins.scss               # Reusable style patterns
└── assets/                       # Images, icons, etc.
```

## 🔧 Current Issues with Mixed Files

**Problem:** Everything is hardcoded in JSX files like this:
```jsx
// BAD - Content mixed with structure
const HomePage = () => {
  return (
    <div>
      <h1>Your time. Expertly matched</h1>  {/* Hardcoded! */}
      <p>Get personalized guidance...</p>    {/* Hardcoded! */}
    </div>
  )
}
```

## ✅ Correct Separation

### 1. **Pure HTML Structure (HomePage.html)**
```html
<div class="homepage">
  <section class="hero">
    <h1 class="hero__title">{{hero.title}}</h1>
    <p class="hero__subtitle">{{hero.subtitle}}</p>
  </section>
</div>
```

### 2. **Content Data (content.json)**
```json
{
  "hero": {
    "title": "Your time. Expertly matched",
    "subtitle": "Get personalized guidance from world-class experts"
  }
}
```

### 3. **Styles (HomePage.scss)**
```scss
.homepage {
  .hero {
    padding: 4rem 0;
    text-align: center;
    
    &__title {
      font-size: 3rem;
      font-weight: 600;
    }
    
    &__subtitle {
      font-size: 1.25rem;
      color: #666;
    }
  }
}
```

### 4. **Logic (HomePage.tsx)**
```typescript
interface HomePageData {
  hero: {
    title: string;
    subtitle: string;
  }
}

export class HomePage {
  private data: HomePageData;
  
  constructor() {
    this.data = require('./content.json');
  }
  
  render() {
    // Handle data binding and interactions
  }
}
```

## 🎯 Benefits of Proper Separation

1. **Content Team** can edit JSON files without touching code
2. **Designers** can work on SCSS files independently  
3. **Developers** focus on TypeScript logic
4. **HTML** stays clean and semantic
5. **Easy to maintain** and update
6. **Scalable** for large websites

## 🚀 Next Steps

I'll restructure the production frontend to follow this proper architecture pattern.