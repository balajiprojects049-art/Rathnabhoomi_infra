# 🏗️ Royal Estates - Premium Construction & Real Estate Website

A stunning, fully responsive React.js website for a Construction & Real Estate business, featuring modern UI/UX design with smooth animations, premium aesthetics, and interactive components.

![Royal Estates](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4-purple)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-pink)

## ✨ Features

### 🎨 Premium UI/UX
- **Modern Landing Page** with animated hero section
- **Glassmorphism Effects** throughout the design
- **Smooth Scroll Animations** using Framer Motion
- **Premium Color Scheme**: Royal Blue (#0A3D62), Gold (#F1C40F), White (#FFFFFF)
- **Gradient Backgrounds** with animated floating elements
- **Responsive Design** for mobile, tablet, and desktop

### 📦 Complete Pages & Components

1. **Navbar**
   - Sticky navigation with transparency effect
   - Smooth scroll on navigation links
   - Mobile responsive hamburger menu
   - Contact information in top bar

2. **Hero Section**
   - Animated gradient background
   - Eye-catching text animations
   - Call-to-action buttons
   - Stats counter (500+ Projects, 15+ Years, 98% Satisfaction)
   - Scroll indicator with animation

3. **About Section**
   - Company overview with feature highlights
   - Premium image grid layout
   - Experience badge with 15+ years
   - 4 key features with icons

4. **Services Section**
   - 6 Service cards with glassmorphism effect
   - Icons for each service:
     - Open Plots
     - Construction Services
     - Architecture Planning
     - Interior Design
     - Layout Development
     - Real Estate Projects
   - "Why Choose Us" section with 4 reasons
   - Feature lists for each service

5. **Featured Properties**
   - Filterable property grid (All, Villa, Apartment, Plot, Penthouse)
   - 6 Premium property listings
   - Favorite/Wishlist functionality
   - Hover effects with overlay
   - Property details (bedrooms, bathrooms, area, price)

6. **Testimonials**
   - Swiper.js powered slider
   - Auto-play with 5-second intervals
   - 5-star rating display
   - Client avatars and designations
   - Customer stats section

7. **Contact Section**
   - Functional contact form
   - Contact information cards
   - Google Maps placeholder
   - Phone, email, and address details

8. **Footer**
   - Company information
   - Quick links navigation
   - Services list
   - Contact details
   - Social media links
   - Business hours
   - Copyright and legal links

### 🚀 Technical Features

- **Framer Motion** for smooth page and scroll animations
- **Swiper.js** for testimonials slider
- **React Icons** for beautiful iconography
- **CSS Modules** with custom properties for theming
- **Google Fonts** (Inter & Poppins)
- **SEO Optimized** with meta tags
- **Fully Responsive** breakpoints
- **Clean Code** with comments
- **Reusable Components**

## 📁 Project Structure

```
construction-realestate/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.css
│   │   ├── AboutSection.jsx
│   │   ├── AboutSection.css
│   │   ├── ServicesSection.jsx
│   │   ├── ServicesSection.css
│   │   ├── FeaturedProperties.jsx
│   │   ├── FeaturedProperties.css
│   │   ├── Testimonials.jsx
│   │   ├── Testimonials.css
│   │   ├── ContactSection.jsx
│   │   ├── ContactSection.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── data/
│   │   ├── servicesData.js
│   │   ├── propertiesData.js
│   │   └── testimonialsData.js
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css (Global Styles)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone or navigate to the project directory:**
```bash
cd construction-realestate
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette

```css
--primary-blue: #0A3D62    /* Royal Blue */
--primary-gold: #F1C40F    /* Gold */
--primary-white: #FFFFFF   /* White */
--dark-blue: #051E34       /* Dark Blue (Footer) */
--light-blue: #1E5A7D      /* Light Blue */
```

### Typography

- **Headings**: Poppins (700-900 weight)
- **Body**: Inter (300-600 weight)
- **Font Sizes**: Responsive with `clamp()` function

### Spacing System

```css
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
--spacing-2xl: 4rem
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1025px

## 🎭 Animations & Effects

- **Fade In/Out** transitions
- **Slide In** from left/right
- **Scale animations** on hover
- **Gradient animations** on hero background
- **Floating elements** with continuous motion
- **Smooth scroll** behavior
- **Hover effects** on all interactive elements

## 📊 Data Structure

### Services Data
Located in `src/data/servicesData.js`
- 6 services with icons, descriptions, and feature lists

### Properties Data
Located in `src/data/propertiesData.js`
- 6 properties with:
  - Title, type, location
  - Price, area, bedrooms, bathrooms
  - Status, features array

### Testimonials Data
Located in `src/data/testimonialsData.js`
- 5 client reviews with:
  - Name, designation, rating
  - Review text

## 🔧 Customization

### Changing Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #YourColor;
  --primary-gold: #YourColor;
}
```

### Adding New Properties
Add to `src/data/propertiesData.js`:
```javascript
{
  id: 7,
  title: "Your Property",
  type: "Villa",
  location: "Your Location",
  price: "₹X Cr",
  // ... other fields
}
```

### Modifying Services
Edit `src/data/servicesData.js` to add/modify services.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Real estate property management system
- [ ] User authentication for saved properties
- [ ] Advanced property filtering
- [ ] Virtual tour integration
- [ ] Blog section
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Property comparison feature
- [ ] Mortgage calculator

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built with ❤️ by Royal Estates Development Team

## 📞 Support

For support, email info@royalestates.com or call +91 98765 43210

---

**Note**: This is a frontend demo project. The contact form submissions and property inquiries are currently client-side only. Backend integration required for production use.

## 🎯 Key Highlights

✅ Premium, modern UI that looks like a high-budget company  
✅ Smooth animations and transitions throughout  
✅ Fully responsive on all devices  
✅ SEO optimized with proper meta tags  
✅ Clean, maintainable code with comments  
✅ Reusable component architecture  
✅ Interactive elements with hover effects  
✅ Glassmorphism and modern design trends  
✅ Production-ready code structure  

---

**Enjoy building with Royal Estates! 🏗️✨**
