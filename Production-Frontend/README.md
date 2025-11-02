# TapTime Production Frontend

## 🏗️ Clean Architecture

This is the production-ready frontend codebase with a clean, scalable architecture.

## 📁 Folder Structure

```
src/
├── components/          # All reusable components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── forms/          # Form components (ContactForm, etc.)
│   ├── cards/          # Card components (ExpertCard, etc.)
│   ├── navigation/     # Navigation components (Breadcrumb, etc.)
│   ├── feedback/       # User feedback components (Review, etc.)
│   └── media/          # Media components (Image, Video, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── data/               # Static data and JSON files
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
└── styles/             # Global styles and Tailwind config
```

## 🎨 Design System

- **Pure Tailwind CSS**: No custom CSS, all styling via Tailwind classes
- **Component-based**: Every UI element is a reusable component
- **Black & White Theme**: Clean, professional color scheme
- **No hardcoded styles**: All styling comes from components
- **Responsive**: Mobile-first design

## 🧩 Component Architecture

### UI Components
- Button: All button variants
- Input: Form inputs with validation
- Card: Base card component
- Badge: Status and category badges
- Avatar: User profile images

### Layout Components
- Header: Site navigation
- Footer: Site footer with links
- Breadcrumb: Navigation breadcrumbs
- Container: Page containers with responsive sizing

### Specialized Components
- ExpertCard: Expert profile cards
- ReviewCard: User review cards
- SearchBar: Search functionality
- Ticker: Scrolling category ticker
- StatisticBox: Statistics with icons
- SignUpForm: User registration

## 📄 Complete Website Pages

All pages have been built and are fully functional:

✅ **Home** (`/`) - Landing page with hero, featured experts, stats, reviews  
✅ **Browse Experts** (`/browse`) - Expert search and filtering  
✅ **Join as Expert** (`/join-expert`) - Expert application form  
✅ **About** (`/about`) - Company story, values, and mission  
✅ **Contact** (`/contact`) - Contact form and information  
✅ **FAQ** (`/faq`) - Frequently asked questions with search  
✅ **Feedback** (`/feedback`) - User feedback and rating system  
✅ **Blog** (`/blog`) - Articles, success stories, and updates  
✅ **How it Works** (`/how-it-works`) - Process explanation  
✅ **Login** (`/login`) - User authentication  
✅ **Signup** (`/signup`) - User registration  

## 📦 Installation

```bash
npm install
npm run dev
```

## 🛠️ Development Guidelines

1. **Component First**: Create components before pages
2. **No Hardcoded Styles**: Use Tailwind classes in components
3. **Prop-driven**: Make components configurable via props
4. **Clean Imports**: Use absolute imports with @ prefix
5. **TypeScript Ready**: Structure supports easy TS migration