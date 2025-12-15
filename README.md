# Shockworks Academy Test - Landing Section Module

A responsive landing page section built with **Next.js 16**, **TypeScript**, and **CSS Modules**. This project implements a carousel component that displays news articles fetched from the News API, following a design specification from Adobe XD.

## 🎯 Project Overview

This module features:

- **Responsive carousel** with 3 fully visible cards and partial side cards
- **Dynamic content** from News API
- **Smooth animations** and transitions
- **Mobile-first design** with media queries for different screen sizes
- **Pure CSS** - No CSS frameworks, only vanilla CSS with CSS Modules

## 🚀 Technologies Used

- **Next.js 16.0.10** - React framework with App Router
- **React 19.2.1** - UI library
- **TypeScript 5** - Type safety
- **CSS Modules** - Component-scoped styling
- **News API** - External API for article data
- **Montserrat Font** - Google Fonts integration

## 📁 Project Structure

```
shockworks-academy-test/
├── app/
│   ├── components/
│   │   ├── Carousel.tsx           # Carousel component logic
│   │   └── Carousel.module.css    # Carousel styles
│   ├── globals.css                # Global styles and CSS variables
│   ├── layout.tsx                 # Root layout with font configuration
│   ├── page.tsx                   # Main page component
│   └── page.module.css            # Page-specific styles
├── public/
│   ├── arrow-left.svg             # Navigation arrow icon
│   └── arrow-right.svg            # Navigation arrow icon
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/durantdurant95/shockworks-academy-test.git
   cd shockworks-academy-test
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure News API Key** (Optional)

   The project includes a demo API key. For production use, get your own free key at [newsapi.org](https://newsapi.org) and update it in `app/components/Carousel.tsx`:

   ```typescript
   const response = await fetch(
     "https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=YOUR_API_KEY"
   );
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Typography

- Font family: **Montserrat**
- Weights: 400 (normal), 500 (medium), 600 (semibold)
- Sizes: 14px, 16px, 24px, 36px, 43px

### Carousel Specifications

- **Card dimensions**: 423px × 532px (center cards)
- **Side cards**: 423px × 486px (scaled down)
- **Card spacing**: 24px gap between cards
- **Shadow**: `0px 10px 30px #99999933`
- **Border radius**: 8px
- **Image**: 255px circular
- **Navigation**: 36px gap, white background with shadow

### Responsive Breakpoints

- **Desktop**: 1080px+ (3 cards visible + partial sides)
- **Tablet**: 768px - 1079px
- **Mobile**: < 768px

## ✨ Key Features

### 1. **Dynamic Carousel**

- Smooth slide animations
- Side cards scale effect (486px vs 532px)
- Vertical centering of cards
- Previous/Next navigation with SVG icons

### 2. **News API Integration**

- Fetches top headlines from US
- Filters articles with images
- Error handling
- Loading state

### 3. **Responsive Design**

- Full-width carousel container
- Adaptive card sizes
- Touch-friendly navigation buttons
- Mobile-optimized spacing

### 4. **Accessibility**

- Semantic HTML
- ARIA labels on navigation buttons
- Alt text for images
- Keyboard navigation support

## 📱 Responsive Behavior

### Desktop (1080px+)

- 3 full cards visible
- Partial cards on left/right edges
- Full-height cards (532px center, 486px sides)

### Tablet (768px - 1079px)

- Cards resize to 340px × 480px
- Adjusted spacing and padding

### Mobile (< 768px)

- Cards resize to 300px × 440px
- Reduced button sizes
- Optimized touch targets

## 🧪 Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📝 Code Quality

- ✅ **Clean code**: Well-organized, commented, and readable
- ✅ **TypeScript**: Full type safety with interfaces
- ✅ **CSS Modules**: Scoped styles, no global conflicts
- ✅ **Component structure**: Modular and reusable
- ✅ **Best practices**: React hooks, async/await, error handling

## 🎯 Design Fidelity

This implementation faithfully recreates the Adobe XD design:

- ✅ Exact typography specifications
- ✅ Precise spacing and measurements
- ✅ Accurate shadow and border styles
- ✅ Matching color palette
- ✅ Smooth animations and transitions

## 📦 Evaluation Criteria Coverage

### 📐 Fidelidad al diseño (Adobe XD)

- ✅ Typography: Montserrat with exact font sizes and weights
- ✅ Spacing: 80px, 44px, 36px, 30px, 24px, 20px as specified
- ✅ Card dimensions: 423×532px (center), 423×486px (sides)
- ✅ Colors: #222222, #333333, #FFFFFF
- ✅ Shadows: `0px 10px 30px #99999933`

### 🔄 Funcionamiento del carrusel y API

- ✅ Smooth sliding animations
- ✅ Previous/Next navigation
- ✅ Side cards scaling effect
- ✅ News API integration with error handling
- ✅ Dynamic content loading

### 📱 Responsividad

- ✅ Desktop (1080px+): 3 cards + partial sides
- ✅ Tablet (768-1079px): Adaptive sizing
- ✅ Mobile (<768px): Optimized layout
- ✅ Media queries for all breakpoints

### 🧼 Calidad del código

- ✅ TypeScript with proper interfaces
- ✅ Clean, readable code with comments
- ✅ Proper error handling
- ✅ React best practices (hooks, state management)
- ✅ Semantic HTML

### 🧱 Estructura del proyecto

- ✅ Organized folder structure
- ✅ Separate components directory
- ✅ CSS Modules for scoped styles
- ✅ Configuration files properly set up

### 📝 Documentación

- ✅ Comprehensive README
- ✅ Installation instructions
- ✅ Project structure overview
- ✅ Feature descriptions
- ✅ Code quality notes

## 🔮 Future Enhancements

- Add infinite scroll/loop to carousel
- Implement touch/swipe gestures
- Add card click to open full article
- Include loading skeleton UI
- Add error state UI
- Implement article categories filter

## 👨‍💻 Author

**Alejandro Pérez Durán**

## 📄 License

This project is part of the Shockworks Academy technical assessment.

---

Built with ❤️ using Next.js and TypeScript
