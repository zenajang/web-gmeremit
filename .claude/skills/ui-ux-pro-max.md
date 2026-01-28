# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 9 technology stacks.

## When to Apply

Reference these guidelines when:
- Designing new UI components or pages
- Choosing color palettes and typography
- Reviewing code for UX issues
- Building landing pages or dashboards
- Implementing accessibility requirements

---

## Design Thinking Process

Before coding, understand the context and commit to a BOLD aesthetic direction:

1. **Purpose**: What problem does this interface solve? Who uses it?
2. **Tone**: Pick an extreme direction:
   - Brutally minimal, maximalist chaos, retro-futuristic
   - Organic/natural, luxury/refined, playful/toy-like
   - Editorial/magazine, brutalist/raw, art deco/geometric
   - Soft/pastel, industrial/utilitarian
3. **Constraints**: Technical requirements (framework, performance, accessibility)
4. **Differentiation**: What makes this UNFORGETTABLE?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Both boldness and refined minimalism work - the key is intentionality.

---

## Rule Categories by Priority

| Priority | Category | Impact | Focus |
|----------|----------|--------|-------|
| 1 | Accessibility | CRITICAL | Color contrast, focus states, ARIA |
| 2 | Touch & Interaction | CRITICAL | Touch targets, feedback, cursors |
| 3 | Performance | HIGH | Image optimization, motion |
| 4 | Layout & Responsive | HIGH | Viewport, font sizes, spacing |
| 5 | Typography & Color | MEDIUM | Line height, font pairing |
| 6 | Animation | MEDIUM | Duration, transforms |
| 7 | Style Selection | MEDIUM | Consistency, icon usage |
| 8 | Charts & Data | LOW | Chart types, accessibility |

---

## Quick Reference by Priority

### 1. Accessibility (CRITICAL)

| Rule | Implementation |
|------|----------------|
| Color Contrast | Minimum 4.5:1 ratio for normal text |
| Focus States | Visible focus rings on all interactive elements |
| Alt Text | Descriptive alt text for meaningful images |
| ARIA Labels | `aria-label` for icon-only buttons |
| Keyboard Nav | Tab order matches visual order |
| Form Labels | Use `<label>` with `for` attribute |

### 2. Touch & Interaction (CRITICAL)

| Rule | Implementation |
|------|----------------|
| Touch Target Size | Minimum 44x44px touch targets |
| Hover vs Tap | Use click/tap for primary interactions |
| Loading Buttons | Disable button during async operations |
| Error Feedback | Clear error messages near the problem |
| Cursor Pointer | Add `cursor-pointer` to ALL clickable elements |

### 3. Performance (HIGH)

| Rule | Implementation |
|------|----------------|
| Image Optimization | Use WebP, srcset, lazy loading |
| Reduced Motion | Check `prefers-reduced-motion` |
| Content Jumping | Reserve space for async content |

### 4. Layout & Responsive (HIGH)

| Rule | Implementation |
|------|----------------|
| Viewport Meta | `width=device-width, initial-scale=1` |
| Readable Font Size | Minimum 16px body text on mobile |
| Horizontal Scroll | Ensure content fits viewport width |
| Z-Index Scale | Define scale (10, 20, 30, 50) |

### 5. Typography & Color (MEDIUM)

| Rule | Implementation |
|------|----------------|
| Line Height | Use 1.5-1.75 for body text |
| Line Length | Limit to 65-75 characters per line |
| Font Pairing | Match heading/body font personalities |

### 6. Animation (MEDIUM)

| Rule | Implementation |
|------|----------------|
| Duration | Use 150-300ms for micro-interactions |
| Transform Performance | Use `transform`/`opacity`, not `width`/`height` |
| Loading States | Skeleton screens or spinners |

---

## Frontend Aesthetics Guidelines

### Typography
- **AVOID**: Generic fonts like Arial, Inter, Roboto, Space Grotesk, system fonts
- Choose fonts that are beautiful, unique, and interesting
- Pair a distinctive display font with a refined body font
- Consider Google Fonts: Playfair Display, DM Serif, Archivo, Sora, Plus Jakarta Sans

### Color & Theme
- Commit to a cohesive aesthetic
- Use CSS variables for consistency
- Dominant colors with sharp accents > timid, evenly-distributed palettes
- **AVOID**: Cliched purple gradients on white backgrounds

### Motion
- CSS-only solutions preferred
- Use Motion library for React when needed
- One well-orchestrated page load with staggered reveals > scattered micro-interactions
- Focus on high-impact moments: scroll-triggering and hover states that surprise

### Spatial Composition
- Unexpected layouts, asymmetry, overlap, diagonal flow
- Grid-breaking elements
- Generous negative space OR controlled density

### Visual Details
- Create atmosphere and depth (never flat solid colors)
- Gradient meshes, noise textures, geometric patterns
- Layered transparencies, dramatic shadows
- Decorative borders, custom cursors, grain overlays

---

## Common Professional UI Rules

### Icons & Visual Elements

| Do | Don't |
|----|-------|
| Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| Use color/opacity transitions on hover | Use scale transforms that shift layout |
| Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| Use fixed viewBox (24x24) with `w-6 h-6` | Mix different icon sizes randomly |

### Interaction & Cursor

| Do | Don't |
|----|-------|
| Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| Provide visual feedback (color, shadow, border) | No indication element is interactive |
| Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### Light/Dark Mode Contrast

| Context | Do | Don't |
|---------|----|----- |
| Glass card (light) | Use `bg-white/80` or higher opacity | Use `bg-white/10` (too transparent) |
| Text (light) | Use `#0F172A` (slate-900) | Use `#94A3B8` (slate-400) for body |
| Muted text (light) | Use `#475569` (slate-600) minimum | Use gray-400 or lighter |
| Border (light) | Use `border-gray-200` | Use `border-white/10` (invisible) |

### Layout & Spacing

| Do | Don't |
|----|-------|
| Add `top-4 left-4 right-4` for floating navbar | Stick navbar to `top-0 left-0 right-0` |
| Account for fixed navbar height in content | Let content hide behind fixed elements |
| Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift
- [ ] Use theme colors directly (`bg-primary`) not `var()` wrapper

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

---

## Style References

### Popular UI Styles

| Style | Characteristics | Best For |
|-------|----------------|----------|
| Glassmorphism | Frosted glass, blur, transparency | Modern dashboards, overlays |
| Claymorphism | Soft, rounded, 3D clay-like | Friendly apps, children's products |
| Neumorphism | Soft shadows, embossed look | Calculator, music players |
| Brutalism | Raw, bold, intentionally rough | Creative portfolios, art sites |
| Minimalism | Clean, lots of whitespace | Professional, SaaS, corporate |
| Bento Grid | Card-based, asymmetric grid | Portfolios, feature showcases |
| Flat Design | No shadows, clean icons | Mobile apps, icons |
| Skeuomorphism | Realistic textures, 3D | Games, specialty apps |

### Recommended Font Pairings

| Style | Heading | Body |
|-------|---------|------|
| Elegant | Playfair Display | Lato |
| Modern | DM Sans | Inter |
| Professional | Archivo | Source Sans Pro |
| Playful | Poppins | Nunito |
| Editorial | Libre Baskerville | Merriweather |
| Tech | Space Grotesk | IBM Plex Sans |
| Luxury | Cormorant Garamond | Raleway |

### Color Psychology

| Industry | Primary Colors | Mood |
|----------|----------------|------|
| Fintech | Blue, Green, Navy | Trust, Security |
| Healthcare | Blue, Teal, White | Clean, Professional |
| E-commerce | Orange, Red, Yellow | Energy, Urgency |
| SaaS | Blue, Purple, Indigo | Innovation, Tech |
| Beauty/Wellness | Pink, Rose, Gold | Luxury, Softness |
| Gaming | Purple, Neon, Dark | Excitement, Energy |

---

## Chart Type Selection

| Data Type | Recommended Chart | Alternative |
|-----------|-------------------|-------------|
| Trend over time | Line chart | Area chart |
| Part-to-whole | Pie chart | Donut chart |
| Comparison | Bar chart | Horizontal bar |
| Distribution | Histogram | Box plot |
| Correlation | Scatter plot | Bubble chart |
| Hierarchy | Treemap | Sunburst |
| Flow/Process | Sankey | Funnel |

---

## Anti-Patterns to Avoid

**NEVER use generic AI-generated aesthetics:**
- Overused font families (Inter, Roboto, Arial, system fonts)
- Cliched color schemes (purple gradients on white)
- Predictable layouts and component patterns
- Cookie-cutter design lacking context-specific character

**Each design should be distinctly tailored to its context.**

> Remember: Claude is capable of extraordinary creative work. Don't hold back - show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
