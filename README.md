# Louisiana Innovation Labs

A high-performance single-page React application showcasing Louisiana Innovation Labs' deployment engine for Louisiana's industrial and economic future.

## Overview

Louisiana Innovation Labs operates three core engines to drive innovation, commercialization, and workforce development:

- **Innovation Sandboxes**: De-risking technology via regulatory, technical, and physical access
- **Commercialization Studios**: Partner-led factories for spin-outs and wealth creation
- **Workforce & Talent**: Scaling human capacity for the $40B+ hyperscale economy

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** for blazing-fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Lucide React** for icon components

## Design System

### Colors
- **Primary Navy**: `#040F49`
- **Accent Teal**: `#00BFA6`
- **Background Slate**: `#0A2F30`

### Typography
- **Font**: Inter (sans-serif)

### Special Effects
- Custom 'tighten' animation for hero text
- Glassmorphism effects on cards
- High-contrast borders for institutional aesthetic

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with animated headline
│   ├── EngineCard.tsx       # Individual engine pillar card
│   ├── Engines.tsx          # Three pillars grid
│   ├── Foundation.tsx       # Trust & Capital Foundation bar
│   ├── ProjectCard.tsx      # Project portfolio card
│   ├── ProjectGrid.tsx      # 9-project portfolio grid
│   └── ProjectDrawer.tsx    # Slide-out project details drawer
├── types.ts                 # TypeScript interfaces
├── data.ts                  # Project portfolio data
└── App.tsx                  # Main application component
```

## Features

- ✅ Fully responsive mobile-first design
- ✅ Interactive project cards with slide-out drawer
- ✅ Smooth animations and transitions
- ✅ High-performance build optimizations
- ✅ Type-safe TypeScript implementation
- ✅ Accessible keyboard navigation (Escape to close drawer)
- ✅ Industrial Executive design aesthetic

## License

Private - Louisiana Innovation Labs
