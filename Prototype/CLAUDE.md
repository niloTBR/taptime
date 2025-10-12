# TapTime Prototype - Claude Code Setup Guide

## 🚀 Quick Start Commands

When launching Claude Code, run these commands in order:

```bash
cd Prototype
npm install
npm run dev
```

The application will be available at: **http://localhost:5173/**

## 🏗️ Project Architecture

### Core Principles
- **No hardcoded content**: All text, data, and content comes from JSON files
- **Pure shadcn/ui**: Uses official shadcn/ui theming and components only
- **Tailwind utilities**: Styling via Tailwind CSS classes, no custom CSS
- **Data-driven**: Everything is configurable through JSON
- **Responsive first**: Mobile-first design with Tailwind responsive utilities

### Folder Structure
```
src/
├── components/
│   ├── ui/               # shadcn/ui components (Button, Card, etc.)
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   └── common/           # Reusable components
├── pages/                # Page components
├── data/                 # JSON data files (ALL content stored here)
├── lib/                  # Utilities (utils.js for shadcn/ui)
└── modules/              # Feature modules

root/
├── components.json       # shadcn/ui configuration
├── jsconfig.json        # Path aliases configuration
├── tailwind.config.js   # Tailwind + shadcn/ui theming
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Styling System

### Pure shadcn/ui + Tailwind CSS
- **Official shadcn/ui theming**: Uses the standard shadcn/ui CSS variables and components
- **Tailwind utilities**: All styling via Tailwind CSS classes
- **No custom CSS**: Everything achievable with shadcn/ui + Tailwind
- **Responsive design**: Mobile-first with Tailwind responsive prefixes (sm:, md:, lg:)
- **Path aliases**: (@/) for clean imports
- **Accessibility**: Built-in with Radix UI primitives

### Styling Guidelines
- **Use shadcn/ui components**: Button, Card, etc. with their variants
- **Tailwind for layout**: Classes like `flex`, `grid`, `space-y-4`, `gap-6`
- **Responsive**: Always use responsive utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- **Theme consistency**: Use shadcn/ui color tokens (`text-muted-foreground`, `bg-primary`)

## 📊 Data Management

### JSON Structure
All content stored in `src/data/` as JSON files:
- `content.json` - Page content, text, labels
- `config.json` - App configuration, settings
- `navigation.json` - Menu items, routes
- `features.json` - Feature lists, capabilities

### Data Usage
```jsx
import content from '@/data/content.json'

const MyComponent = () => {
  return <h1>{content.pages.home.title}</h1>
}
```

## 🔧 Dependencies

### Core Stack
- **React 18** with Vite
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **SCSS** - For custom styling when needed
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### shadcn/ui Components Installed
- `Button` - All variants (default, outline, secondary, ghost, destructive, link)
- `Card` - Complete card system (Header, Title, Description, Content, Footer)

### Adding More shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

### Animation Libraries
- **Framer Motion** (installed) - Production-ready motion library
- **Tailwind CSS animations** - Built-in `animate-bounce`, `animate-pulse`, etc.
- **CSS transitions** - Native browser animations

#### Framer Motion Usage
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
>
  Content
</motion.div>
```

## 🛠️ Development Workflow

### Starting Development
1. `cd Prototype`
2. `npm run dev`
3. Open http://localhost:5173/

### Adding New Components
1. Create component in appropriate folder
2. Add SCSS file only if absolutely necessary
3. Import data from JSON files
4. Use shadcn/ui components when possible

### Content Updates
- Edit JSON files in `src/data/`
- Never hardcode text or data in components
- Use descriptive JSON structure

### Styling Updates
- Global changes: `src/styles/globals.scss`
- Component-specific: `src/styles/components/[component].scss`
- Prefer global styles over component-specific

## 📝 Code Standards

### Component Structure
```jsx
import { Component } from '@/components/ui/component'
import data from '@/data/content.json'
import './ComponentName.scss' // Only if needed

const ComponentName = () => {
  return (
    <div className="component-wrapper">
      <h1>{data.section.title}</h1>
      <Component variant="default">
        {data.section.content}
      </Component>
    </div>
  )
}
```

### SCSS Structure
```scss
// globals.scss
:root {
  // CSS variables for colors
  --color-primary: #000;
  --font-family-main: 'Inter', sans-serif;
}

.component-wrapper {
  // Only structural styles that can't be achieved with utilities
}
```

### Data Structure
```json
{
  "pages": {
    "home": {
      "title": "Welcome to TapTime",
      "sections": {
        "hero": {
          "title": "Connect with Experts",
          "description": "Find and book time with industry professionals"
        }
      }
    }
  }
}
```

## 🧪 Testing Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linting (if configured)
```

## 📦 Key Files to Remember

- `CLAUDE.md` - This guide (always read first!)
- `src/styles/globals.scss` - Main stylesheet
- `src/data/content.json` - All content
- `components.json` - shadcn/ui config
- `tailwind.config.js` - Tailwind + theming

## 🌍 Internationalization & RTL Support

### **CRITICAL: Multilingual Requirements**
TapTime is being built as a **multilingual platform** supporting both **LTR (Left-to-Right)** and **RTL (Right-to-Left)** languages.

#### **RTL/LTR Design Requirements:**
1. **All components MUST support both RTL and LTR layouts**
2. **Use logical properties** instead of directional ones:
   - ✅ `margin-inline-start` instead of `margin-left`
   - ✅ `padding-inline-end` instead of `padding-right`
   - ✅ `border-inline-start` instead of `border-left`
3. **Tailwind CSS logical classes** (when available):
   - ✅ `ms-4` instead of `ml-4` (margin-start)
   - ✅ `pe-4` instead of `pr-4` (padding-end)
   - ✅ `text-start` instead of `text-left`

#### **Implementation Guidelines:**
```jsx
// ❌ BAD - Hardcoded direction
<div className="ml-4 text-left">

// ✅ GOOD - Logical properties
<div className="ms-4 text-start">

// ❌ BAD - Fixed positioning
<div className="absolute left-0">

// ✅ GOOD - Logical positioning  
<div className="absolute start-0">
```

#### **Icon & Layout Considerations:**
- **Arrows and directional icons** must flip in RTL
- **Navigation flows** must reverse in RTL
- **Text alignment** should use logical properties
- **Flexbox order** may need RTL adjustments

#### **Testing Requirements:**
- Test all components in both `dir="ltr"` and `dir="rtl"`
- Verify icon orientations and layouts work correctly
- Ensure text flows properly in both directions

## ⚠️ Important Rules

1. **Never hardcode text or data** - Always use JSON
2. **No inline styles** - Use global SCSS or shadcn/ui
3. **Minimal HTML structure** - Semantic only
4. **Data-driven everything** - Content, configuration, navigation
5. **Global styles first** - Component SCSS only when absolutely necessary
6. **🌍 RTL/LTR COMPLIANCE** - All components must work in both directions

---

💡 **Pro Tip**: Always update this CLAUDE.md file when making architectural changes so future Claude sessions understand the project structure!