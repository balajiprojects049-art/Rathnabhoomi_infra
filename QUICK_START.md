# 🚀 Quick Start Guide - Royal Estates

## Running the Project

1. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Opens at: http://localhost:5173

2. **Build for Production:**
   ```bash
   npm run build
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## Project Overview

### Technology Stack
- **Framework**: React 18.3 + Vite 5.4
- **Animations**: Framer Motion 11.11
- **Slider**: Swiper.js
- **Icons**: React Icons
- **Styling**: Pure CSS with CSS Variables
- **Fonts**: Google Fonts (Inter, Poppins)

### Main Components

1. **Navbar** → Sticky navigation with mobile menu
2. **HeroSection** → Animated landing with stats
3. **AboutSection** → Company info with image grid
4. **ServicesSection** → 6 service cards + why choose us
5. **FeaturedProperties** → Filterable property listings
6. **Testimonials** → Auto-play slider with reviews
7. **ContactSection** → Form + contact info
8. **Footer** → Links, social media, contact details

### Data Files

- `src/data/servicesData.js` - Services information
- `src/data/propertiesData.js` - Property listings
- `src/data/testimonialsData.js` - Client reviews

## Customization Quick Tips

### 1. Change Theme Colors
**File**: `src/index.css`
```css
:root {
  --primary-blue: #0A3D62;    /* Change this */
  --primary-gold: #F1C40F;    /* Change this */
}
```

### 2. Update Company Name
**Files to update**:
- `src/components/Navbar.jsx` (line 45-47)
- `src/components/Footer.jsx` (line 39-41)
- `index.html` (title tag)

### 3. Add New Property
**File**: `src/data/propertiesData.js`
```javascript
{
  id: 7,
  title: "Property Name",
  type: "Villa",
  location: "Location",
  price: "₹X Cr",
  area: "XXXX sq.ft",
  bedrooms: 4,
  bathrooms: 3,
  status: "Ready to Move",
  features: ["Feature 1", "Feature 2"]
}
```

### 4. Modify Services
**File**: `src/data/servicesData.js`
- Add/remove service objects
- Update icons from React Icons library

### 5. Change Contact Information
**Files to update**:
- `src/components/Navbar.jsx` (top bar)
- `src/components/ContactSection.jsx`
- `src/components/Footer.jsx`

## Available Sections (Scroll Navigation)

- `#home` - Hero Section
- `#about` - About Us
- `#services` - Our Services
- `#properties` - Featured Properties
- `#testimonials` - Client Reviews
- `#contact` - Contact Form

## File Size Reference

**Before Build:**
- Components: ~15 files
- Data Files: 3 files
- CSS Files: ~10 files

**After Build (Production):**
- Optimized bundle size: ~200-300KB (gzipped)
- All assets minified and optimized

## Common Tasks

### Add a New Section
1. Create component in `src/components/YourSection.jsx`
2. Create styles in `src/components/YourSection.css`
3. Import in `src/App.jsx`
4. Add to Navbar links

### Update Navbar Links
**File**: `src/components/Navbar.jsx`
```jsx
<li>
  <a onClick={() => scrollToSection('your-section')} className="nav-link">
    Your Section
  </a>
</li>
```

### Change Animation Speed
**Files**: Component-specific CSS files
```css
transition: all 0.3s ease-in-out; /* Adjust duration */
```

## Performance Tips

✅ Images are optimized  
✅ Lazy loading implemented  
✅ Code splitting enabled  
✅ CSS minified in production  
✅ Animations use GPU acceleration  

## Troubleshooting

**Issue**: Port 5173 already in use
**Solution**: 
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

**Issue**: Animations not smooth
**Solution**: 
- Check if GPU acceleration is enabled
- Reduce animation complexity on low-end devices

**Issue**: Build fails
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
# Update vite.config.js with base path
# Push to GitHub
# Enable GitHub Pages in repo settings
```

## SEO Checklist

✅ Meta tags in index.html  
✅ Semantic HTML structure  
✅ Alt texts for images  
✅ Proper heading hierarchy  
✅ Mobile responsive  
✅ Fast load times  
✅ Schema markup (add if needed)  

## Browser Testing Checklist

- [ ] Chrome Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop
- [ ] Edge Desktop
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Samsung Internet

## Accessibility Features

✅ Keyboard navigation  
✅ Focus indicators  
✅ ARIA labels  
✅ Semantic HTML  
✅ Color contrast ratios  

---

**Happy Developing! 🎉**

For detailed documentation, see [README.md](./README.md)
