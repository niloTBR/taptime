# TapTime Component Guide

## 🧩 Component Usage Examples

### UI Components

#### Button
```jsx
import Button from '@/components/ui/Button'

// Primary button
<Button variant="primary" size="lg">
  Get Started
</Button>

// Outline button
<Button variant="outline" size="md">
  Learn More
</Button>

// Ghost button
<Button variant="ghost" size="sm">
  Cancel
</Button>
```

#### Input & Textarea
```jsx
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

<Input 
  placeholder="Enter email"
  error={hasError}
  disabled={isLoading}
/>

<Textarea 
  placeholder="Your message"
  rows={4}
/>
```

#### Card
```jsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Expert Profile</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Expert information here...</p>
  </CardContent>
</Card>
```

### Specialized Components

#### ExpertCard
```jsx
import ExpertCard from '@/components/cards/ExpertCard'

<ExpertCard 
  expert={expertData}
  showActions={true}
  showCrown={isTopExpert}
  showBadge={true}
/>
```

#### SearchBar
```jsx
import SearchBar from '@/components/ui/SearchBar'

<SearchBar 
  placeholder="Search experts..."
  animatedPlaceholders={[
    "Find startup advice...",
    "Get marketing help...",
    "Design consultation..."
  ]}
  onSearch={handleSearch}
  size="lg"
/>
```

#### ReviewCard
```jsx
import ReviewCard from '@/components/feedback/ReviewCard'

<ReviewCard 
  review={{
    name: "John Doe",
    title: "CEO",
    rating: 5,
    text: "Amazing experience!",
    image: "/path/to/image.jpg"
  }}
/>
```

### Layout Components

#### Container
```jsx
import Container from '@/components/layout/Container'

<Container size="default">
  <h1>Page Content</h1>
</Container>

<Container size="sm">
  <p>Narrow content</p>
</Container>
```

#### Header & Footer
```jsx
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

<Header />
<main>Your content</main>
<Footer />
```

#### Breadcrumb
```jsx
import Breadcrumb from '@/components/navigation/Breadcrumb'

<Breadcrumb 
  items={[
    { label: 'Browse', href: '/browse' },
    { label: 'Expert Profile' }
  ]}
/>
```

### Form Components

#### SignUpForm
```jsx
import SignUpForm from '@/components/forms/SignUpForm'

<SignUpForm 
  title="Join TapTime"
  subtitle="Create your account"
  onSubmit={handleSignUp}
/>
```

## 🎨 Styling Guidelines

### Tailwind Classes
- Use semantic color classes: `text-gray-900`, `bg-white`, `border-gray-200`
- Responsive prefixes: `md:text-lg`, `lg:grid-cols-3`
- State variants: `hover:bg-gray-100`, `focus:ring-2`

### Component Props
- Keep props minimal and semantic
- Use TypeScript-ready prop patterns
- Default to sensible values

### Color Scheme
- Primary: Black (`bg-black`, `text-black`)
- Secondary: Gray scale (`gray-50` to `gray-900`)
- Success: Green (`green-100`, `green-600`)
- Error: Red (`red-100`, `red-600`)

## 📁 File Organization

```
components/
├── ui/              # Basic building blocks
├── layout/          # Page structure
├── cards/           # Content cards
├── forms/           # Form components
├── navigation/      # Navigation elements
├── feedback/        # User feedback
└── media/           # Images, videos
```

## 🔧 Development Tips

1. **Component First**: Always create a component before using it in pages
2. **Pure Tailwind**: No custom CSS, use Tailwind utilities
3. **Prop Validation**: Use PropTypes or TypeScript for type safety
4. **Responsive Design**: Mobile-first approach with responsive utilities
5. **Accessibility**: Include proper ARIA labels and keyboard navigation