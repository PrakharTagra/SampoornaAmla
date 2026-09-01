# Pratapgarh Amla — Ecommerce Frontend

Premium D2C ecommerce frontend for Amla products from Pratapgarh, Uttar Pradesh.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Router
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    primitives/   Button, Card, Input, Modal, Price, etc.
    layout/       Header, Footer, MobileMenu, Layout
    product/      (added in Phase 2+)
    cart/         (added in Phase 5)
    story/        (added in Phase 7)
    checkout/     (added in Phase 6)
  context/        CartContext
  data/           product data (added in Phase 2)
  pages/          route-level page components
  lib/            utilities
  hooks/          custom hooks
```

## Design System

See `implementation.md` for the full design token reference and phase-by-phase engineering log.

Primary palette:

| Token | Value |
|---|---|
| Ivory | `#F7F1E3` |
| Forest Green | `#24452A` |
| Amla Green | `#718B3A` |
| Antique Gold | `#B99A5B` |
| Deep Brown | `#332C24` |

## Routes

```
/                Home
/products        Product collection
/products/:slug  Product detail
/story           Our Story / Pratapgarh Heritage
/cart            Shopping cart
/checkout        Checkout
```

## Current Status

See `implementation.md` — Phase 0 (Foundation) is complete. Product data, Quick View, cart logic, checkout, and the story page are implemented in subsequent phases.
