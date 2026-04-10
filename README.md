# Ferdinand Pendon - Portfolio Website

A modern, professional single-page application (SPA) portfolio website built with Vue.js, Vite, and Tailwind CSS.

## 🎯 Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Stack**: Vue 3, Vite, and Tailwind CSS for optimal performance
- **Smooth Animations**: Elegant fade-in and slide-up animations
- **Professional Sections**:
  - Hero section with social links
  - About me with key accomplishments
  - Comprehensive skills organized by category
  - Detailed professional experience timeline
  - Education section
  - Contact form and social links
  - Footer with navigation

- **Dark & Light Support**: Beautiful gradient backgrounds and color palette
- **Fast Loading**: Optimized with Vite for quick development and production builds

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open automatically in your browser. The dev server supports hot module replacement (HMR), so changes are reflected instantly.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.vue              # Hero section with introduction
│   ├── About.vue             # About section
│   ├── Skills.vue            # Skills overview
│   ├── SkillCategory.vue     # Individual skill category card
│   ├── Experience.vue        # Professional experience
│   ├── ExperienceCard.vue    # Individual experience card
│   ├── Contact.vue           # Contact form and information
│   └── Footer.vue            # Footer
├── App.vue                   # Main app component
├── main.js                   # Vue app entry point
└── style.css                 # Global styles with Tailwind directives
```

## 🎨 Design Features

### Color Palette
- **Primary**: Professional blue tones (Primary 900 for dark text)
- **Accent**: Bright blue for CTAs and highlights (Accent 500)
- **Background**: Light gradient from primary to accent

### Typography
- Clean and professional using Inter font
- Clear hierarchy with proper font weights

### Components
- Reusable card components with hover effects
- Animated entrance transitions
- Responsive grid layouts
- Custom Tailwind components (buttons, badges, cards)

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration with Vue plugin
- `tailwind.config.js` - Tailwind CSS customization with extended colors
- `postcss.config.js` - PostCSS configuration for Tailwind
- `package.json` - Project dependencies and scripts

## 📧 Contact Information

- **Email**: fcpendon@gmail.com
- **Phone**: +63 977 175 3440
- **Location**: Dasmarinas, Cavite, Philippines
- **LinkedIn**: https://www.linkedin.com/in/ferdie-pendon/

## 🛠️ Technologies Used

- **Vue.js 3**: Progressive JavaScript framework
- **Vite**: Next-generation front-end build tool
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformations
- **Autoprefixer**: CSS vendor prefixing

## 📝 License

This portfolio website is personal property of Ferdinand C. Pendon.

## ✨ Development Notes

- The portfolio uses Vue 3's Composition API with `<script setup>` syntax
- Smooth scrolling is enabled globally
- Forms include proper validation
- All sections are lazy-loadable for better performance
- Mobile menu functionality for responsive navigation
- Social links are functional and point to LinkedIn and email

Enjoy! 🎉
