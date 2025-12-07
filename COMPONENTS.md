# 📋 Component Documentation

## Component Index

### 1️⃣ Navbar Component
**File**: `src/components/Navbar.jsx`  
**CSS**: `src/components/Navbar.css`

**Features:**
- Sticky navigation with scroll detection
- Transparent on top, solid background on scroll
- Top bar with contact information
- Responsive mobile hamburger menu
- Smooth scroll to sections
- Logo with Royal Estates branding

**Props:** None (self-contained)

**Key Functions:**
- `handleScroll()` - Detects scroll position
- `scrollToSection(id)` - Smooth scroll to section

---

### 2️⃣ HeroSection Component
**File**: `src/components/HeroSection.jsx`  
**CSS**: `src/components/HeroSection.css`

**Features:**
- Animated gradient background
- Text animations with Framer Motion
- CTA buttons (Explore Properties, Our Services)
- Stats section (500+ Projects, 15+ Years, 98% Satisfaction)
- Scroll indicator with animation
- Floating decorative shapes

**Props:** None

**Animations:**
- Fade in/out on mount
- Slide up for text
- Floating shapes with continuous motion
- Bouncing scroll indicator

---

### 3️⃣ AboutSection Component
**File**: `src/components/AboutSection.jsx`  
**CSS**: `src/components/AboutSection.css`

**Features:**
- Two-column layout (content + images)
- Company description
- 4 Feature highlights with icons
- Image grid (3 images in creative layout)
- Experience badge (15+ Years)
- Scroll-triggered animations

**Props:** None

**Data:** Static content (can be moved to data file)

---

### 4️⃣ ServicesSection Component
**File**: `src/components/ServicesSection.jsx`  
**CSS**: `src/components/ServicesSection.css`

**Features:**
- 6 Service cards with glassmorphism
- Icon for each service (React Icons)
- Service description and feature list
- "Why Choose Us" section (4 reasons)
- Hover effects and animations
- Dark background with overlay effects

**Props:** None

**Data Source:** `src/data/servicesData.js`

**Services:**
1. Open Plots
2. Construction Services
3. Architecture Planning
4. Interior Design
5. Layout Development
6. Real Estate Projects

---

### 5️⃣ FeaturedProperties Component
**File**: `src/components/FeaturedProperties.jsx`  
**CSS**: `src/components/FeaturedProperties.css`

**Features:**
- Property filter buttons (All, Villa, Apartment, Plot, Penthouse)
- Grid layout with hover effects
- Favorite/Wishlist toggle
- Property details (bedrooms, bathrooms, area, price)
- Image overlay on hover
- Status badge (Ready to Move, Under Construction, Available)

**Props:** None

**State:**
- `filter` - Current filter selection
- `favorites` - Array of favorited property IDs

**Data Source:** `src/data/propertiesData.js`

**Functions:**
- `setFilter(type)` - Filters properties by type
- `toggleFavorite(id)` - Adds/removes from favorites

---

### 6️⃣ Testimonials Component
**File**: `src/components/Testimonials.jsx`  
**CSS**: `src/components/Testimonials.css`

**Features:**
- Swiper.js carousel slider
- Auto-play with 5-second delay
- 5-star rating display
- Client avatar (first letter of name)
- Pagination dots
- Navigation arrows (desktop only)
- Customer stats section (4 stats)

**Props:** None

**Data Source:** `src/data/testimonialsData.js`

**Swiper Config:**
- Loop: true
- Autoplay: 5000ms
- Responsive breakpoints:
  - Mobile: 1 slide
  - Tablet: 2 slides
  - Desktop: 3 slides

---

### 7️⃣ ContactSection Component
**File**: `src/components/ContactSection.jsx`  
**CSS**: `src/components/ContactSection.css`

**Features:**
- Contact form (name, email, phone, subject, message)
- Form validation (required fields)
- Contact info cards (Phone, Email, Address)
- Google Maps placeholder
- Hover effects on info cards
- Responsive two-column layout

**Props:** None

**State:**
- `formData` - Form field values

**Functions:**
- `handleChange(e)` - Updates form state
- `handleSubmit(e)` - Handles form submission (currently shows alert)

**Form Fields:**
- Full Name *
- Email Address *
- Phone Number *
- Subject *
- Message *

---

### 8️⃣ Footer Component
**File**: `src/components/Footer.jsx`  
**CSS**: `src/components/Footer.css`

**Features:**
- Four-column layout
  1. Company info + social links
  2. Quick navigation links
  3. Services list
  4. Contact information + business hours
- Bottom bar with copyright
- Social media icons (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- Hover effects on all links
- Animated heart icon

**Props:** None

**Data:** Static content (company info, links, services, contact)

**Sections:**
- Footer Main (4 columns)
- Footer Bottom (copyright, legal links)

---

## Data Files

### servicesData.js
```javascript
{
  id: number,
  title: string,
  description: string,
  icon: string (React Icon name),
  features: array of strings
}
```

### propertiesData.js
```javascript
{
  id: number,
  title: string,
  type: string, // Villa, Apartment, Plot, Penthouse
  location: string,
  price: string,
  area: string,
  bedrooms: number,
  bathrooms: number,
  status: string, // Ready to Move, Under Construction, Available
  features: array of strings
}
```

### testimonialsData.js
```javascript
{
  id: number,
  name: string,
  designation: string,
  rating: number (1-5),
  review: string
}
```

---

## Styling Approach

### CSS Architecture
- Component-scoped CSS files
- Global styles in `index.css`
- CSS Custom Properties (variables)
- BEM-like naming convention
- Mobile-first responsive design

### Animation Library
- **Framer Motion** for:
  - Scroll animations
  - Hover effects
  - Page transitions
  - Component mounting

### Key CSS Variables
```css
--primary-blue: #0A3D62
--primary-gold: #F1C40F
--primary-white: #FFFFFF
--gradient-primary: linear-gradient(135deg, #0A3D62 0%, #1E5A7D 100%)
--gradient-gold: linear-gradient(135deg, #F1C40F 0%, #D4A017 100%)
```

---

## Component Dependencies

### NPM Packages
```json
{
  "react": "^18.3.1",
  "framer-motion": "^11.11.11",
  "swiper": "^11.1.15",
  "react-icons": "^5.3.0"
}
```

### Icon Usage
- **React Icons** library
- Import from: `react-icons/fa` (Font Awesome)
- Used throughout: FaBed, FaBath, FaMapMarkerAlt, etc.

---

## Reusable Patterns

### Button Styles
- `.btn` - Base button
- `.btn-primary` - Blue gradient button
- `.btn-gold` - Gold gradient button
- `.btn-outline` - Transparent with border
- `.btn-large` - Larger padding

### Section Layout
- `.section` - Base section wrapper
- `.section-dark` - Dark background variant
- `.container` - Max-width wrapper
- `.section-header` - Centered section title

### Card Styles
- `.card` - Base card with shadow
- `.card-glass` - Glassmorphism effect
- Hover states: `translateY(-10px)` + enhanced shadow

---

## Best Practices Used

✅ Component composition  
✅ Separation of concerns  
✅ DRY principle  
✅ Semantic HTML  
✅ Accessibility (ARIA labels, keyboard navigation)  
✅ Performance optimization (lazy loading, code splitting)  
✅ Consistent naming conventions  
✅ Clean code with comments  

---

**For implementation details, refer to individual component files.**
