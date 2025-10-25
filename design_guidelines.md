# GTA: San Andreas Themed Portfolio - Design Guidelines

## Design Approach
Reference-based approach inspired by GTA: San Andreas UI, HUD elements, and aesthetic. The design draws directly from the iconic game's visual language: neon-lit street culture, mission briefing interfaces, and in-game HUD elements.

## Core Design Elements

### Typography
- **Headings**: Pricedown font or similar graffiti-style display font (Google Fonts alternative: "Press Start 2P" or use CDN for Pricedown-like font)
- **Hero Title**: "Grand Theft [Your Name]" treatment with outlined/stroked text effect
- **Body Text**: Clean sans-serif (Inter or Roboto) for readability contrast against decorative headings
- **Tagline/Secondary**: Medium weight, slightly condensed

### Color Palette
- **Base**: Black (#000000) and charcoal gray (#1a1a1a, #2d2d2d)
- **Neon Accents**: 
  - Primary green (#39FF14 - neon green)
  - Secondary orange (#FF6B00)
  - Tertiary red (#FF0055)
- **Text**: White (#FFFFFF) and light gray (#E0E0E0)
- **Glow Effects**: Apply CSS text-shadow and box-shadow for neon glow on accent elements

### Layout System
- **Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, m-8, gap-6, etc.)
- **Container**: max-w-7xl for content sections with full-width background treatments
- **Grid**: CSS Grid for Projects (2-column desktop, 1-column mobile) and Skills (4-column desktop, 2-column tablet, 1-column mobile)

## Component Library

### Hero Section
- Full viewport height (100vh) with blurred Los Santos skyline background image
- Centered content with "Grand Theft [Your Name]" as main heading with neon green glow
- Tagline: "Full-Stack Developer | Mission: Build Great Things" beneath
- Subtle animated neon flicker effect on title
- Smooth scroll-down indicator

### About Me Section
- Two-column layout (desktop): Profile photo on left, bio text on right
- Profile photo styled as GTA character render with green neon border glow
- Dark background (#1a1a1a) with contained max-width
- Text content with breathing room, left-aligned

### Projects Section (Mission Cards)
- 3-4 mission card boxes in grid layout
- Each card: dark background (#2d2d2d) with orange neon border on hover
- Card contents: Mission title (bold, uppercase), short description, "Start Mission" button
- Button: Neon green background with black text, glow effect on hover
- Cards have subtle lift animation on hover

### Skills Section
- Display as inventory-style grid
- Icons representing tools/languages styled as GTA weapon/item icons
- Each skill in bordered box with icon + label
- Green neon glow on hover
- 4-column grid on desktop, responsive to 2-column and 1-column

### Contact Section
- Centered layout with social media icons (LinkedIn, GitHub, etc.)
- Icons styled as GTA menu buttons with neon outline
- "Send Message" button prominent with red neon glow
- Form fields (if included) with dark backgrounds and neon borders on focus

### GTA UI Elements
- **Minimap/HUD Element**: Fixed position in bottom-left or top-right corner showing decorative radar-style graphic
- **Custom Cursor**: GTA hand icon cursor (via CSS cursor: url())
- **Music Toggle**: Fixed button in top-right with speaker icon, toggles background San Andreas radio theme (muted by default)

### Animations & Interactions
- **Entrance Animations**: Fade-in with slight upward movement for sections as user scrolls
- **Smooth Scrolling**: Enabled for anchor navigation
- **Neon Glow Hover**: All interactive elements (buttons, links, cards) get enhanced glow on hover
- **Mission Completed Popup**: Modal overlay with "Mission Completed" text and checkmark animation when contact form submitted

### Navigation
- Fixed header with links to sections, dark background with transparency
- Links with neon green underline on hover
- Hamburger menu on mobile with slide-in drawer

## Images
- **Hero Background**: Los Santos skyline silhouette or cityscape with purple/orange sunset glow, blurred (blur-sm to blur-md) for text contrast
- **Profile Photo**: Styled as GTA character render with green neon border glow effect

## Accessibility
- Maintain sufficient contrast despite dark theme
- Ensure neon text has dark backgrounds for readability
- All interactive elements keyboard accessible
- Focus states with visible neon outlines

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked sections, hamburger nav)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts, all effects visible)