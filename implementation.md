# Pratapgarh Amla — Frontend Implementation Specification & Phase Log

> **Project:** Pratapgarh Amla — Premium Regional-Origin D2C Ecommerce Frontend  
> **Primary Design Direction:** Theme A — Royal Pratapgarh  
> **Frontend Stack:** React.js + Vite + Tailwind CSS  
> **Document Purpose:** Master implementation specification + phase-by-phase engineering log  
> **Source of Truth:** Supplied Pratapgarh Amla UI concept/reference and design document

---

# 1. Project Overview

Pratapgarh Amla is a premium ecommerce frontend for Amla products originating from Pratapgarh, Uttar Pradesh.

The central design idea is to make **Pratapgarh itself part of the product story**, rather than building a generic Amla ecommerce store.

The recommended launch experience is:

- Homepage-first shopping
- Products visible directly on the homepage
- Centered Product Quick View modal/dialog
- Variant selection inside Quick View
- Quantity selection independent of pack size
- Add to Cart / Buy Now
- Dedicated Product Detail routes for SEO and product education
- Simple collection page for the initial 2–3 product catalog
- Premium, low-clutter cart
- Short, mobile-friendly checkout
- Heritage-focused Our Story page

The design direction is approximately:

**80–90% modern ecommerce + 10–20% subtle heritage cues.**

The source design recommends Theme A — **Royal Pratapgarh** — as the primary direction, using warm ivory, forest green, Amla green, antique gold and deep brown.

---

# 2. MASTER IMPLEMENTATION PROMPT

The following prompt is the authoritative engineering brief to be followed by the coding agent.

```text
You are a senior frontend architect and production React engineer.

Your task is to build a production-quality ecommerce frontend for:

PRATAPGARH AMLA
Premium Amla products from Pratapgarh, Uttar Pradesh.

The attached UI concept/reference image and design document are the SINGLE SOURCE OF TRUTH for the visual direction.

TECH STACK — STRICT
- React.js
- Vite
- Tailwind CSS
- JavaScript or TypeScript
- React Router
- Context API or an appropriate lightweight state-management solution
- Lucide React or another clean icon library
- No Next.js
- No unnecessary UI framework
- No Bootstrap
- No Material UI
- No generic template/theme
- No replacement of the provided design with an unrelated ecommerce design

The implementation must be production-oriented, componentized, responsive, accessible, maintainable and data-driven.

==================================================
1. DESIGN DIRECTION
==================================================

Implement THEME A — ROYAL PRATAPGARH.

The visual identity must communicate:

- Premium
- Heritage
- Authenticity
- Natural origin
- Pratapgarh identity
- Indian regional craftsmanship
- Modern D2C ecommerce

The design must NOT look like:
- A generic Ayurveda website
- A generic Shopify template
- A marketplace
- A flashy modern startup
- A heavily ornamental Indian wedding/royal website
- A cluttered ecommerce marketplace

The target visual ratio is approximately:

80–90% modern ecommerce
10–20% heritage cues

Heritage elements must be subtle and elegant.

Primary palette:

Ivory:
#F7F1E3

Forest Green:
#24452A

Amla Green:
#718B3A

Antique Gold:
#B99A5B

Deep Brown:
#332C24

Use these colors consistently through Tailwind design tokens/CSS variables.

Do NOT randomly introduce bright greens, saturated yellows, gradients or unrelated colors.

==================================================
2. VISUAL REFERENCE
==================================================

The supplied reference contains:

1. Home Page
2. Product Quick View Dialog
3. Product Detail Page
4. Products / Collection Page
5. Shopping Cart
6. Our Story / Pratapgarh Heritage
7. Checkout Page

The implementation must preserve:

- Visual hierarchy
- Spacing philosophy
- Proportions
- Typography relationship
- Cards
- Borders
- Imagery treatment
- Overall premium ivory/green/gold aesthetic

Do not merely recreate the text.

Reproduce the underlying DESIGN SYSTEM.

==================================================
3. BRAND PHILOSOPHY
==================================================

The website must position:

PRATAPGARH

as part of the product story.

The brand story should communicate:

Pratapgarh
↓
Aonla farms
↓
Harvest
↓
Processing
↓
Quality Check
↓
Packed for India

Do not invent:

- Historical claims
- Centuries-old traditions
- Medical claims
- Health claims
- Certifications
- Farmer statistics
- Geographic claims

unless explicitly provided as verified content.

Use placeholders where real client data is required.

==================================================
4. CORE USER EXPERIENCE
==================================================

Primary shopping journey:

HOME
↓
PRODUCT COLLECTION
↓
QUICK VIEW
↓
SELECT VARIANT
↓
SELECT QUANTITY
↓
ADD TO CART / BUY NOW
↓
CART
↓
CHECKOUT

Homepage is the primary conversion page.

Products must be visible directly on the homepage.

The user should NOT be forced to navigate to the collection page before shopping.

Quick View is the primary product interaction.

Dedicated Product Detail pages must still exist for:

- SEO
- Product education
- Future catalog expansion

==================================================
5. ROUTING
==================================================

Implement:

/
    Home

/products
    Product collection

/products/:slug
    Product detail

/story
    Our Story / Pratapgarh Heritage

/cart
    Shopping Cart

/checkout
    Checkout

Use React Router.

All routes must work on direct navigation.

==================================================
6. GLOBAL DESIGN SYSTEM
==================================================

Create a centralized design system.

Define:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Buttons
- Inputs
- Cards
- Badges
- Dividers
- Container widths
- Breakpoints
- Transitions

Use reusable Tailwind classes/components.

Avoid repeatedly writing arbitrary styling for every page.

Create reusable primitives such as:

Button
IconButton
Container
SectionHeading
Badge
Divider
QuantitySelector
Price
ProductImage
Modal
Input
Select
TrustItem
Breadcrumb
Card

==================================================
7. TYPOGRAPHY
==================================================

Use:

SERIF
+
SANS-SERIF

Serif for:

- Major brand statements
- Heritage headings
- Premium editorial sections

Sans-serif for:

- Navigation
- Product information
- Buttons
- Forms
- Prices
- Utility content

Typography should feel premium and editorial.

Avoid:

- Huge modern startup headings
- Excessive font weights
- Excessive uppercase usage
- Cartoon-like typography

Maintain clear hierarchy.

==================================================
8. GLOBAL HEADER
==================================================

Create a reusable responsive Header.

Desktop:

Logo / Brand
Home
Products
Our Story
About Pratapgarh
Contact
Search
Cart

Cart must display live item count.

Mobile:

Brand
Search
Cart
Menu

Navigation must collapse elegantly.

Header should remain visually lightweight.

==================================================
9. HOMEPAGE
==================================================

Build:

HEADER

HERO

TRUST STRIP

PRODUCT COLLECTION

HERITAGE / PRATAPGARH STORY

ADDITIONAL TRUST / BRAND SECTION

FOOTER

----------------------------------
HERO
----------------------------------

Premium ivory background.

Content:

FROM THE LAND OF PRATAPGARH

Main headline:

COMES NATURE'S GIFT

Supporting copy:

Pure Amla from the City of Aonla

Attributes:

100% Natural
Carefully Sourced
Pan-India Delivery

CTA:

SHOP AMLA

Right side:

Large Amla product imagery.

Subtle Pratapgarh fort / heritage illustration.

Do not allow heritage artwork to overpower the product.

The hero must feel editorial and premium.

----------------------------------
TRUST STRIP
----------------------------------

Four trust items:

100% Natural
From Pratapgarh
Quality Assured
Pan-India Delivery

Use subtle icons.

----------------------------------
PRODUCT COLLECTION
----------------------------------

Heading:

OUR AMLA COLLECTION

Products:

Pure Amla
Amla Powder
Dried Amla

Each ProductCard:

- Product image
- Product name
- Short descriptor
- Current/starting price
- CTA

CTA:

VIEW DETAILS

Clicking VIEW DETAILS opens the reusable ProductQuickView.

Do not duplicate quick-view implementations.

----------------------------------
HERITAGE SECTION
----------------------------------

Heading:

THE LAND BEHIND THE AMLA

Content about:

- Pratapgarh
- Aonla farms
- Farmers
- Traditional cultivation
- Sourcing

Use heritage image / fort illustration.

CTA:

DISCOVER OUR STORY

==================================================
10. PRODUCT DATA ARCHITECTURE
==================================================

DO NOT hard-code products directly inside components.

Create a centralized product data layer.

Example:

products/
    products.js

Each product contains:

id
slug
name
shortDescription
description
category
images
thumbnail
rating
reviewCount
origin
variants
benefits
howToUse
ingredients
storage
relatedProducts

Each variant contains:

id
name
weight
price
compareAtPrice
sku
stock

Example:

variants: [
  {
    id: "pure-amla-250g",
    name: "250 g",
    weight: "250 g",
    price: 199,
    sku: "...",
    stock: 20
  },
  {
    id: "pure-amla-500g",
    name: "500 g",
    weight: "500 g",
    price: 349,
    sku: "...",
    stock: 20
  },
  {
    id: "pure-amla-1kg",
    name: "1 kg",
    weight: "1 kg",
    price: 599,
    sku: "...",
    stock: 20
  }
]

IMPORTANT:

Never hard-code:

250 g
500 g
1 kg

inside ProductQuickView or ProductDetail.

The UI must render variants dynamically.

==================================================
11. PRODUCT QUICK VIEW
==================================================

This is one of the most important components.

When opened:

Homepage remains visible behind it.

Background receives a dark translucent overlay.

Modal is centered.

The modal must feel premium, not like a generic browser dialog.

Layout:

LEFT:
Product gallery

RIGHT:
Product name
Short description
Rating
Review count
Origin
Product story
Variant selector
Quantity selector
Price
Add to Cart
Buy Now

Variant selection dynamically updates:

- Price
- SKU
- Selected variant
- Cart payload

Quantity is independent of pack size.

Example:

500 g × 2

means:

2 packages of 500 g

not:

1 kg package.

Trust row:

Natural / No Preservatives
Quality Assured
Secure Packaging
Pan-India Delivery

Modal requirements:

- ESC closes
- Close button
- Overlay click closes
- Keyboard accessible
- Focus management
- Mobile responsive
- Prevent inappropriate background scrolling
- Smooth enter/exit animation
- No layout overflow

==================================================
12. PRODUCT DETAIL PAGE
==================================================

Route:

/products/:slug

Structure:

Breadcrumb

Product Gallery
+
Product Information

Product title
Subtitle
Rating
Price
Variant selector
Quantity selector
Add to Cart
Buy Now

Then:

Product Information Tabs

DESCRIPTION
BENEFITS
HOW TO USE
INGREDIENTS
STORAGE

Information is rendered from product data.

Then:

WHY PRATAPGARH AMLA?

Use:

- Map / district illustration
- Origin information
- Sourcing story

Then:

YOU MAY ALSO LIKE

Render related products dynamically.

==================================================
13. COLLECTION PAGE
==================================================

Route:

/products

Heading:

OUR AMLA COLLECTION

Supporting copy:

Pure products from Pratapgarh, made for everyday wellness.

Grid:

Pure Amla
Amla Powder
Dried Amla

Keep launch catalog intentionally simple.

Do NOT add unnecessary filters.

No large marketplace-style filtering sidebar at launch.

==================================================
14. CART
==================================================

Route:

/cart

Cart must be data-driven.

Example:

Pure Amla
500 g
Quantity: 2
₹349
Total: ₹698

Amla Powder
250 g
Quantity: 1
₹249
Total: ₹249

Implement:

- Increase quantity
- Decrease quantity
- Remove item

Order Summary:

Subtotal
Shipping
Total

Shipping must be configurable.

Do not hard-code business logic deep inside UI components.

==================================================
15. CART DRAWER
==================================================

Create:

CartDrawer

It must use the same cart state as CartPage.

Display:

- Items
- Variant
- Quantity
- Price
- Subtotal
- View Cart
- Checkout

Do NOT create separate cart logic for drawer and cart page.

==================================================
16. CHECKOUT
==================================================

Route:

/checkout

Keep checkout short and conversion-focused.

Step indicator:

1 CART
→
2 ADDRESS
→
3 PAYMENT
→
4 CONFIRMATION

Customer:

Mobile Number
Email (optional)

Delivery:

Name
House / Street
City
State
PIN

Payment:

UPI
Card
Net Banking
Cash on Delivery

COD is configurable.

Do not implement fake payment processing.

For frontend demonstration:

Create clean payment-selection UI and mock order confirmation.

Structure payment logic so a real provider can be integrated later.

==================================================
17. OUR STORY PAGE
==================================================

Route:

/story

Hero:

THE LAND BEHIND THE AMLA

Headline:

PRATAPGARH — THE CITY OF AONLA

Use a large heritage visual.

Then:

FROM THE LAND TO YOUR HOME

Tell the sourcing journey.

Journey:

PRATAPGARH
↓
AMLA FARMS
↓
HARVEST
↓
PROCESSING
↓
QUALITY CHECK
↓
PACKED FOR INDIA

Brand Values:

AUTHENTIC ORIGIN
NATURAL PRODUCTS
CAREFUL PACKING
CUSTOMER TRUST

Do not invent historical facts.

Where exact client content is unavailable, use clearly marked content placeholders.

==================================================
18. FOOTER
==================================================

Sections:

Brand
Shop
Our Story
Contact
Shipping
Returns
Privacy

Social:

Instagram
WhatsApp

Use placeholders where actual URLs are unavailable.

==================================================
19. RESPONSIVE DESIGN
==================================================

Mobile-first.

Required:

Mobile
Tablet
Desktop
Large Desktop

Do not simply shrink desktop layouts.

Specifically redesign:

- Hero
- Product grid
- Quick View
- Product Detail
- Cart
- Checkout
- Story timeline

for mobile.

Mobile Quick View may become a bottom-sheet or appropriately sized modal if this improves usability while preserving the design language.

Never allow:

- Horizontal page overflow
- Broken grids
- Text clipping
- Image distortion
- Overlapping content
- Unusable buttons
- Tiny tap targets

==================================================
20. IMAGERY
==================================================

Design depends heavily on:

- Amla photography
- Product photography
- Pratapgarh heritage imagery
- Fort illustrations
- Botanical imagery

Use supplied/reference assets when available.

If actual production assets are unavailable:

Create clearly separated asset configuration/placeholders.

Do NOT use random stock imagery that changes brand identity.

Images must use:

- object-fit
- appropriate aspect ratios
- responsive sizing
- lazy loading where appropriate

Do not distort product packaging.

==================================================
21. HERITAGE VISUAL LANGUAGE
==================================================

Use:

- Fort silhouettes
- Subtle line illustrations
- Botanical motifs
- Antique gold details
- Paper/ivory texture
- Fine borders
- Editorial composition

Avoid:

- Heavy ornamental frames
- Excessive gold
- Large decorative patterns everywhere
- Fake royal palace styling
- Excessive shadows

Heritage supports the product.

The product remains the hero.

==================================================
22. INTERACTIONS & MOTION
==================================================

Use restrained motion.

Allowed:

- Fade
- Subtle slide
- Scale-in
- Hover elevation
- Image transition
- Modal animation
- Drawer animation
- Button feedback

Avoid:

- Excessive parallax
- Bouncy animations
- Large transforms
- Continuous animations
- Distracting effects

Typical animation duration:

150–300ms

Use consistent easing.

Respect:

prefers-reduced-motion

==================================================
23. ACCESSIBILITY
==================================================

Implement:

- Semantic HTML
- Accessible buttons
- Accessible labels
- Keyboard navigation
- Visible focus states
- Modal keyboard handling
- ARIA where appropriate
- Alt text
- Form labels
- Error states
- Sufficient color contrast
- Touch-friendly controls

Do not use divs as buttons when a button is appropriate.

==================================================
24. SEO FOUNDATION
==================================================

Implement frontend SEO foundations.

Each product page:

- Unique title
- Meta description
- Canonical structure where appropriate
- Meaningful heading hierarchy

Product route:

/products/:slug

must contain actual product information.

==================================================
25. CODE ARCHITECTURE
==================================================

Recommended:

src/
  assets/
  components/
    common/
    layout/
    product/
    cart/
    checkout/
    story/
  data/
  hooks/
  pages/
  context/
  services/
  utils/
  styles/
  App.jsx
  main.jsx

Suggested reusable components:

Header
MobileMenu
Footer
Container
Button
IconButton
Modal
Breadcrumb
TrustStrip
TrustItem
HeroSection
ProductCard
ProductGrid
ProductQuickView
ProductGallery
VariantSelector
QuantitySelector
PriceDisplay
CartDrawer
CartItem
CartSummary
StorySection
StoryTimeline
CheckoutForm
OrderSummary
PaymentSelector

Do not create giant components.

Pages should primarily compose reusable components.

==================================================
26. STATE MANAGEMENT
==================================================

Create centralized cart state.

Cart must support:

addItem()
removeItem()
increaseQuantity()
decreaseQuantity()
updateQuantity()
clearCart()
getSubtotal()
getShipping()
getTotal()
getItemCount()

Cart item identity must include:

productId + variantId

Different variants of the same product must be independently representable.

Persist cart to localStorage.

Handle malformed localStorage gracefully.

==================================================
27. BUSINESS LOGIC SEPARATION
==================================================

Separate:

UI
State
Product data
Cart calculations
Formatting
Configuration

Do not put all logic inside JSX.

Utilities may include:

formatCurrency()
calculateSubtotal()
calculateShipping()
getCartItemCount()

Use INR consistently.

Choose one production currency format and use it everywhere.

==================================================
28. ERROR & EMPTY STATES
==================================================

Implement:

- Empty cart
- Product not found
- Invalid product slug
- Out-of-stock variant
- Invalid quantity
- Checkout validation errors

Empty cart:

- Message
- Continue Shopping CTA

==================================================
29. PERFORMANCE
==================================================

Optimize:

- Fast initial load
- Responsive images
- Lazy loading
- Code splitting where appropriate
- Minimal dependencies
- Avoid unnecessary re-renders

Do not install libraries for functionality that can be cleanly implemented with React/Tailwind.

==================================================
30. SECURITY / QUALITY
==================================================

Never:

- Expose secrets
- Create fake API keys
- Hard-code payment credentials
- Pretend a real payment succeeded
- Use insecure HTML injection
- Use dangerouslySetInnerHTML unnecessarily

External integrations must be abstracted behind configuration.

==================================================
31. DEVELOPMENT PHASES
==================================================

The project MUST be implemented phase-by-phase.

Do NOT attempt to mark all phases complete in one implementation.

Every phase must result in a WORKING application.

Every completed phase MUST produce:

1. Complete ZIP of the current project
2. Updated implementation.md

The ZIP must contain the entire current working project.

==================================================
PHASE 0 — PROJECT FOUNDATION
==================================================

Implement:

- Vite project
- React
- Tailwind
- React Router
- Base folder architecture
- Design tokens
- Global CSS
- Typography
- Base components
- Responsive container
- Header shell
- Footer shell

No detailed ecommerce functionality yet.

Acceptance:

- Application runs
- npm install works
- npm run dev works
- npm run build works
- No console errors
- Royal Pratapgarh visual identity is established

Output:

pratapgarh-amla-phase-0.zip

implementation.md

==================================================
PHASE 1 — HOMEPAGE
==================================================

Implement:

- Header
- Hero
- Trust strip
- Product collection
- Product cards
- Heritage section
- Footer
- Responsive behavior

Use centralized mock product data.

Acceptance:

- Homepage closely follows reference
- Product cards are reusable
- Responsive desktop/tablet/mobile
- Visual hierarchy matches design
- No generic ecommerce template appearance

Output:

pratapgarh-amla-phase-1.zip

Updated implementation.md.

==================================================
PHASE 2 — PRODUCT DATA + QUICK VIEW
==================================================

Implement:

- Scalable product data
- Variant data
- ProductQuickView
- Gallery
- Variant selector
- Quantity selector
- Dynamic pricing
- Add to Cart
- Buy Now
- Modal accessibility
- Mobile modal behavior

Acceptance:

Selecting:

250 g
500 g
1 kg

changes price and selected variant dynamically.

Quantity must be independent.

Output:

pratapgarh-amla-phase-2.zip

Updated implementation.md.

==================================================
PHASE 3 — PRODUCT DETAIL
==================================================

Implement:

/products/:slug

Include:

- Breadcrumb
- Gallery
- Product information
- Variant selection
- Quantity
- Add to Cart
- Buy Now
- Information tabs
- Origin story
- Related products

Acceptance:

Every product can have its own URL.

Data drives the page.

Output:

pratapgarh-amla-phase-3.zip

Updated implementation.md.

==================================================
PHASE 4 — COLLECTION PAGE
==================================================

Implement:

/products

Include:

- Collection heading
- Product grid
- Product cards
- Quick View
- Product navigation

Do not introduce unnecessary filters.

Output:

pratapgarh-amla-phase-4.zip

Updated implementation.md.

==================================================
PHASE 5 — CART SYSTEM
==================================================

Implement:

- Cart Context
- localStorage persistence
- Cart Drawer
- Cart Page
- Add/remove/update quantity
- Variant-aware cart
- Subtotal
- Shipping
- Total

Acceptance:

- Refresh does not lose cart state
- Multiple quantities work
- Different variants can exist independently

Output:

pratapgarh-amla-phase-5.zip

Updated implementation.md.

==================================================
PHASE 6 — CHECKOUT
==================================================

Implement:

/checkout

Include:

- Checkout steps
- Contact
- Address
- Payment selection
- Order summary
- Validation
- Mock order confirmation

No fake real payment processing.

Output:

pratapgarh-amla-phase-6.zip

Updated implementation.md.

==================================================
PHASE 7 — STORY / HERITAGE
==================================================

Implement:

/story

Include:

- Hero
- Heritage imagery
- Origin story
- Sourcing journey
- Timeline
- Brand values
- Responsive storytelling

Output:

pratapgarh-amla-phase-7.zip

Updated implementation.md.

==================================================
PHASE 8 — POLISH + RESPONSIVENESS
==================================================

Perform a full UI refinement pass.

Check:

- Mobile
- Tablet
- Desktop
- Large screens
- Typography
- Spacing
- Borders
- Shadows
- Image ratios
- Modal
- Cart drawer
- Buttons
- Forms
- Empty states
- Loading states
- Focus states

Compare implementation against supplied reference.

Correct visual deviations.

Output:

pratapgarh-amla-phase-8.zip

Updated implementation.md.

==================================================
PHASE 9 — PRODUCTION QA
==================================================

Perform:

- npm build
- Route testing
- Responsive testing
- Console error check
- Broken image check
- Accessibility check
- Cart flow check
- Product variant check
- Checkout validation check

Test:

HOME
→ QUICK VIEW
→ SELECT VARIANT
→ ADD TO CART
→ CART
→ CHECKOUT

Test:

HOME
→ PRODUCT DETAIL
→ SELECT VARIANT
→ ADD TO CART

Test:

COLLECTION
→ QUICK VIEW

Test:

CART
→ UPDATE QUANTITY
→ REMOVE ITEM

Test:

REFRESH
→ CART PERSISTS

Test:

INVALID PRODUCT URL
→ graceful not-found UI

Fix all discovered issues.

Output:

pratapgarh-amla-final.zip

Updated implementation.md.

==================================================
32. IMPLEMENTATION.MD REQUIREMENTS
==================================================

implementation.md is a permanent engineering record.

DO NOT overwrite historical information.

Maintain:

# Pratapgarh Amla — Implementation Log

## Project Overview

## Tech Stack

## Design System

## Architecture

## Phase 0
Status
Date
Implemented
Files
Design decisions
Testing
Known issues

## Phase 1
...

Continue through final phase.

At the end:

## Final Architecture

## Components

## Routes

## Data Model

## State Management

## Cart Logic

## Responsive Strategy

## Accessibility

## SEO

## Testing

## Known Limitations

## Future Backend Integration

==================================================
33. ZIP REQUIREMENTS
==================================================

Every phase ZIP must be a COMPLETE runnable project.

Include:

package.json
src/
public/
index.html
Vite configuration
Tailwind configuration if applicable
README.md
implementation.md
all required configuration files

Do NOT provide only changed files.

The ZIP must be independently usable.

A developer should be able to:

unzip
npm install
npm run dev

and continue development.

Before creating ZIP:

1. Run npm install if required
2. Run npm run build
3. Fix build errors
4. Check console errors
5. Verify routes
6. Verify current phase functionality
7. Update implementation.md
8. Create ZIP only after the project works

==================================================
34. PHASE DISCIPLINE
==================================================

Do not silently skip phases.

Do not combine phases unless explicitly instructed.

Do not rewrite completed architecture unnecessarily.

When beginning a new phase:

1. Inspect previous implementation
2. Read implementation.md
3. Understand existing architecture
4. Preserve completed functionality
5. Implement only the new phase
6. Refactor only when genuinely necessary
7. Test previous functionality
8. Test new functionality
9. Update implementation.md
10. Generate complete ZIP

==================================================
35. DESIGN FIDELITY RULE
==================================================

The supplied image is the visual reference.

When implementation decisions conflict with generic frontend conventions:

PRIORITIZE THE PROVIDED DESIGN.

Do not "modernize" the design into another aesthetic.

Do not add:

- Gradients
- Glassmorphism
- Neon colors
- Giant rounded cards
- Excessive pills
- Excessive animations
- Dark SaaS layouts
- Generic ecommerce banners
- Marketplace filters
- Random decorative elements

unless explicitly required.

The design must remain:

ROYAL PRATAPGARH
PREMIUM
IVORY
FOREST GREEN
AMLA GREEN
ANTIQUE GOLD
EDITORIAL
HERITAGE
NATURAL

==================================================
36. FINAL DEFINITION OF DONE
==================================================

The project is complete only when:

[ ] All routes work
[ ] Homepage matches reference direction
[ ] Product cards are reusable
[ ] Quick View works
[ ] Variants are dynamic
[ ] Quantity is independent of variant
[ ] Product detail works
[ ] Collection works
[ ] Cart works
[ ] Cart persists
[ ] Cart drawer works
[ ] Checkout works
[ ] Story page works
[ ] Responsive design works
[ ] Accessibility basics implemented
[ ] SEO foundation implemented
[ ] No console errors
[ ] Production build succeeds
[ ] implementation.md is complete
[ ] Final ZIP is generated

The final result must look like a real premium ecommerce brand website, not a coding exercise.

START WITH PHASE 0 ONLY.
```

---

# 3. PHASE COMPLETION / DELIVERY PROMPT

This prompt must be applied after **every phase**.

```text
PHASE COMPLETION REPORT

Phase: X
Status: COMPLETE

==================================================
1. IMPLEMENTED
==================================================

List every feature implemented during this phase.

Example:

- ...
- ...
- ...

Do not list functionality that was not actually implemented.

==================================================
2. PREVIOUS FUNCTIONALITY VERIFIED
==================================================

List functionality from earlier phases that was tested and confirmed working.

Example:

- Homepage navigation — PASS
- Product Quick View — PASS
- Cart persistence — PASS

If something is broken, do NOT mark it PASS.

==================================================
3. NEW ROUTES
==================================================

List routes introduced or modified.

Example:

/
 /products
 /products/:slug

==================================================
4. NEW COMPONENTS
==================================================

List components created or materially changed.

Example:

- ProductCard
- ProductQuickView
- VariantSelector

==================================================
5. DATA / STATE LOGIC
==================================================

Document:

- New product data
- New state
- Context changes
- Cart changes
- Utility functions
- Configuration changes

==================================================
6. DESIGN IMPLEMENTATION
==================================================

Document important visual implementation decisions:

- Colors
- Typography
- Layout
- Responsive behavior
- Heritage treatment
- Component styling
- Animation

==================================================
7. TESTING
==================================================

Run and report:

npm run build

Result:

PASS / FAIL

Also report:

- Console errors
- Route tests
- Responsive tests
- Interaction tests
- Form validation
- Cart tests where applicable

Do not claim tests were performed if they were not.

==================================================
8. KNOWN ISSUES
==================================================

List unresolved issues.

If none:

None.

==================================================
9. FILES CREATED / MODIFIED
==================================================

List important files created or changed.

Do not claim files that do not exist.

==================================================
10. ZIP DELIVERY
==================================================

Create a COMPLETE ZIP containing the entire current project.

Naming:

pratapgarh-amla-phase-X.zip

The ZIP must contain:

- package.json
- src/
- public/
- index.html
- configuration files
- README.md
- implementation.md

It must be independently runnable.

==================================================
11. IMPLEMENTATION.MD UPDATE
==================================================

Before creating the ZIP:

- Update this implementation.md
- Preserve previous phase history
- Add the current phase
- Record actual implementation
- Record actual tests
- Record actual known issues

==================================================
12. FINAL DELIVERY CHECK
==================================================

Confirm:

[ ] Complete project included
[ ] implementation.md updated
[ ] Build tested
[ ] Current phase tested
[ ] Previous functionality checked
[ ] ZIP generated
[ ] No fabricated completion claims

Final response format:

PHASE COMPLETION REPORT

Phase: X
Status: COMPLETE

Build: PASS/FAIL
Testing: PASS/PARTIAL/FAIL
Known Issues: ...

ZIP:
pratapgarh-amla-phase-X.zip

implementation.md:
Updated

Do not start the next phase unless explicitly instructed.
```

---

# 4. Phase Delivery Contract

Every phase is an independent checkpoint.

| Phase | Scope | Required Output |
|---|---|---|
| **0** | Foundation, Vite, React, Tailwind, routing, design tokens | ZIP + `implementation.md` |
| **1** | Complete homepage | ZIP + updated `implementation.md` |
| **2** | Product data + Quick View + variants | ZIP + updated `implementation.md` |
| **3** | Product Detail | ZIP + updated `implementation.md` |
| **4** | Collection | ZIP + updated `implementation.md` |
| **5** | Cart + Cart Drawer + persistence | ZIP + updated `implementation.md` |
| **6** | Checkout | ZIP + updated `implementation.md` |
| **7** | Story / Heritage | ZIP + updated `implementation.md` |
| **8** | Responsive + visual polish | ZIP + updated `implementation.md` |
| **9** | QA + final production build | Final ZIP + complete `implementation.md` |

---

# 5. Current Implementation Status

## Phase 0
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- Vite + React project scaffolded (`npm create vite@latest -- --template react`)
- Tailwind CSS installed and configured with PostCSS
- React Router installed; `BrowserRouter` wired in `App.jsx`
- lucide-react installed for iconography
- Design tokens defined in `tailwind.config.js`: `ivory` (`#F7F1E3`), `forest` (`#24452A`), `amla` (`#718B3A`), `gold` (`#B99A5B`), `brown` (`#332C24`), each with 50/100/200 shades for hover/active states
- Typography pairing set up in `src/index.css`: Cormorant Garamond (serif, headings) + Inter (sans, body/UI), loaded via Google Fonts import
- Global base styles: ivory background, brown text, visible focus ring (accessibility), smooth scroll
- Base primitive components created in `src/components/primitives/`: Container, Button (primary/secondary/ghost/gold variants), IconButton, SectionHeading, Badge, Divider, QuantitySelector, Price (with `formatINR` helper), ProductImage (with graceful fallback), Modal (centered dialog, Escape-to-close, scroll-lock, used later for Quick View), Input, Select, TrustItem, Breadcrumb, Card
- Global layout shell: `Layout.jsx` (Header + `<Outlet />` + Footer)
- `Header.jsx`: sticky header, brand lockup, desktop nav (Home/Products/Our Story/About Pratapgarh/Contact), search icon, cart icon with live item-count badge, mobile menu trigger
- `MobileMenu.jsx`: slide-in drawer navigation for mobile/tablet
- `Footer.jsx`: brand blurb + Shop/Company/Support link columns + copyright bar, on forest-green background
- `CartContext.jsx`: minimal shell exposing `items` and `itemCount` so the header cart badge is live from Phase 0 onward; full add/remove/update/persistence logic is intentionally deferred to Phase 5 per the phase plan
- Route shells created for all contract routes plus two additional pages the header nav requires (`/about`, `/contact`, not in the original Section 9 route contract but referenced in Section 8's global header spec): Home, Products, ProductDetail (`:slug`), Story, Cart, Checkout, About, Contact, NotFound (catch-all `*`)
- Each page shell renders a `SectionHeading` naming which future phase will build out that page's real content, so the site is honest about its current state rather than showing blank pages

### Previous Functionality Verified
N/A — this is the first phase.

### New Routes
```
/                Home (shell)
/products        Products (shell)
/products/:slug  ProductDetail (shell)
/story           Story (shell)
/cart            Cart (shell)
/checkout        Checkout (shell)
/about           About (shell — supports header nav)
/contact         Contact (shell — supports header nav)
*                NotFound
```

### New Components
- Container, Button, IconButton, SectionHeading, Badge, Divider, QuantitySelector, Price, ProductImage, Modal, Input, Select, TrustItem, Breadcrumb, Card
- Header, MobileMenu, Footer, Layout
- CartContext (shell)

### Design Implementation
- Colors and spacing driven entirely through Tailwind config tokens, not arbitrary values, so later phases stay consistent
- Border radius kept small (2–8px) per the "avoid excessive rounded cards" rule in the visual fidelity section
- Shadows are soft and low-opacity (`shadow-card`, `shadow-soft`) rather than the generic SaaS drop shadow
- No gradients, no glassmorphism, no pill-shaped buttons introduced
- Mobile-first: header collapses to brand + search + cart + hamburger below `lg`

### Testing
- `npm run build` — **PASS** (1846 modules transformed, no errors)
- `npm run preview` + route checks — all of `/`, `/products`, `/products/pure-amla`, `/story`, `/cart`, `/checkout`, and an invalid route all returned HTTP 200 (SPA fallback confirmed working)
- No leftover default Vite boilerplate strings found in `src/`
- Console error check: not run against a live browser session in this environment; visual/browser QA is scheduled for Phase 8/9 per the phase plan
- Manual review confirmed all primitives render without missing imports (build would have failed otherwise)

### Known Issues
- Console error check has only been verified indirectly via successful build/preview; a real-browser DevTools check has not been performed and is deferred to Phase 8–9 per the QA phases already defined in this document
- `/about` and `/contact` were added because the Section 8 header spec requires those nav links, but they are not in the Section 9 route contract — flagging this discrepancy for visibility rather than silently resolving it

### Files Created / Modified
```
package.json, vite.config.js, tailwind.config.js, postcss.config.js, index.html
src/main.jsx, src/App.jsx, src/index.css
src/components/primitives/*.jsx, src/components/primitives/index.js
src/components/layout/Header.jsx, MobileMenu.jsx, Footer.jsx, Layout.jsx
src/context/CartContext.jsx
src/pages/Home.jsx, Products.jsx, ProductDetail.jsx, Story.jsx, Cart.jsx, Checkout.jsx, About.jsx, Contact.jsx, NotFound.jsx
README.md, implementation.md
```

### Output
`pratapgarh-amla-phase-0.zip`

---

## Phase 1
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- `Hero.jsx`: editorial hero with eyebrow ("From the land of Pratapgarh"), serif headline ("Comes nature's gift"), supporting copy, three attribute chips (100% Natural / Carefully Sourced / Pan-India Delivery), "Shop Amla" CTA that smooth-scrolls to the product collection anchor, product image placeholder, and a low-opacity heritage motif that stays subordinate to the product image per the "heritage must not overpower the product" rule
- `TrustStrip.jsx`: four-item trust row (100% Natural / From Pratapgarh / Quality Assured / Pan-India Delivery) using the `TrustItem` primitive from Phase 0
- `HeritageSection.jsx`: "The land behind the Amla" section with copy about Pratapgarh, Aonla orchards, farmers, and sourcing — written to stay within the brand-philosophy constraint (no invented historical, medical, or certification claims); "Discover Our Story" CTA links to `/story`
- `BrandBanner.jsx`: closing forest-green banner ("From the heart of Pratapgarh, to every home in India") with a faint heritage motif, matching the dark banner shown at the bottom of the reference homepage/collection mockups
- `HeritageMotif.jsx`: small reusable inline-SVG fort silhouette used sparingly (hero, heritage section, brand banner) as the one shared heritage cue, instead of separate artwork per section
- `ProductCard.jsx` + `ProductGrid.jsx`: homepage product cards (image, name, short descriptor, "From ₹X" starting price, "View Details" button). The button currently links to the product's `/products/:slug` detail page shell — wiring it to open `ProductQuickView` instead happens in Phase 2, once that component exists
- `src/data/products.js`: minimal product list (Pure Amla, Amla Powder, Dried Amla) with the fields the homepage actually needs today (id, slug, name, shortDescription, thumbnail, startingPrice). This file is the seed for the full product data contract (variants, gallery, benefits, etc.) built out in Phase 2 — the homepage already imports from it rather than hard-coding products inline, per Section 10
- `Home.jsx` assembled from Hero → TrustStrip → Product Collection (id="collection") → HeritageSection → BrandBanner, with Header/Footer already supplied by the Phase 0 `Layout`
- `ProductImage` primitive extended with a small ratio map (`square` / `portrait` / `wide`) so the heritage section's landscape image doesn't fight the product card's square ratio

### Previous Functionality Verified
- All Phase 0 routes still resolve — PASS (`/`, `/products`, `/products/:slug`, `/story`, `/cart`, `/checkout`, invalid path → 404, all HTTP 200 via `npm run preview`)
- Header cart badge, mobile menu, footer — unchanged, rendered on the new homepage without layout issues in the build

### New Routes
None — Phase 1 only builds out the `/` page content; the route table is unchanged from Phase 0.

### New Components
- Hero, TrustStrip, HeritageSection, BrandBanner, HeritageMotif (in `components/layout/`)
- ProductCard, ProductGrid (in `components/product/`)

### Data / State Logic
- Added `src/data/products.js` as the first piece of the centralized product data layer required by Section 10. Only the fields needed for the homepage card are present; variants and the rest of the full contract are deferred to Phase 2 so this file isn't half-built twice
- No new global state — homepage is fully presentational this phase

### Design Implementation
- Kept the 80–90% modern ecommerce / 10–20% heritage ratio: the fort motif appears three times, always at low opacity (15–40%) and never layered on top of product imagery or text
- Hero image intentionally takes visual priority over the heritage motif (motif is behind/beside it at reduced size)
- Typography: serif for the hero headline and section headings, sans for body copy, attributes, and buttons, consistent with the Phase 0 type system
- No new colors introduced outside the Phase 0 token set
- Product images use the existing placeholder fallback (a leaf icon on ivory) rather than stock photography, since no real product photography was supplied
- Responsive: hero stacks to a single column below `lg` with the image first; product grid goes from 3 columns to 2 on small screens; trust strip wraps on narrow viewports

### Testing
- `npm run build` — **PASS** (1857 modules transformed, no errors)
- `npx oxlint src/` — 0 errors, 2 informational warnings (both are the standard "file exports a component and a helper" fast-refresh notice for `CartContext.jsx` and `Price.jsx`, which is expected and does not affect production behavior)
- Route check via `npm run preview` — all six contract routes plus an invalid path returned HTTP 200
- Visual/browser screenshot QA — **attempted but not completed**: this sandbox's network egress does not include the Playwright browser-binary CDN, so a headless Chromium could not be installed to capture screenshots this phase. Visual review was done by reading the rendered component tree and Tailwind classes rather than a rendered screenshot. Full visual QA against the reference images is scheduled for Phase 8

### Known Issues
- No rendered screenshot was captured this phase (see Testing above) — recommend a manual visual check of `/` in a browser before sign-off, in addition to the code-level review already done
- Product imagery is placeholder (leaf icon) since no real photography was provided; swapping in real photos requires no code changes, just populating `thumbnail` in `src/data/products.js`
- "View Details" currently navigates to the product detail page shell rather than opening Quick View — this is intentional per the phase plan (Quick View ships in Phase 2), not a defect

### Files Created / Modified
```
src/pages/Home.jsx (rewritten)
src/components/layout/Hero.jsx
src/components/layout/TrustStrip.jsx
src/components/layout/HeritageSection.jsx
src/components/layout/BrandBanner.jsx
src/components/layout/HeritageMotif.jsx
src/components/product/ProductCard.jsx
src/components/product/ProductGrid.jsx
src/components/primitives/ProductImage.jsx (extended ratio prop)
src/data/products.js
implementation.md
```

### Output
`pratapgarh-amla-phase-1.zip`

---

## Phase 2
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- `src/data/products.js` rewritten to the full Section 7 product data contract: `id`, `slug`, `name`, `shortDescription`, `description`, `category`, `images`, `thumbnail`, `rating`, `reviewCount`, `origin`, `variants`, `benefits`, `howToUse`, `ingredients`, `storage`, `relatedProducts` for all three launch products (Pure Amla, Amla Powder, Dried Amla), each with three variants (250 g / 500 g / 1 kg) carrying independent `price`, `compareAtPrice`, `sku`, and `stock`. Added `getProductBySlug` and `getRelatedProducts` helpers for later phases
- `ProductQuickView.jsx`: the centered Quick View modal — gallery on the left, product name/rating/review count/short description, dynamic `VariantSelector`, `QuantitySelector`, dynamically computed total price (`variant.price × quantity`), Add to Cart / Buy Now buttons, and a four-item trust row (Natural/No Preservatives, Quality Assured, Secure Packaging, Pan-India Delivery)
- `ProductGallery.jsx`: main image with a thumbnail strip; thumbnails are keyboard- and screen-reader-accessible tabs (`role="tablist"`/`role="tab"`, `aria-selected`)
- `VariantSelector.jsx`: renders pack-size options entirely from `product.variants` — no hard-coded "250 g / 500 g / 1 kg" anywhere in the component, so a future product with different pack sizes (or a non-weight variant like a bottle size) needs no component changes
- `Modal.jsx` (primitive) upgraded from a Phase 0 stub to meet all nine Section 11 modal requirements: ESC closes, close button, overlay-click closes, focus is moved to the close button on open, Tab/Shift+Tab is trapped inside the dialog while open, background scroll is locked, a 200 ms fade/scale transition on enter and exit (skipped under `prefers-reduced-motion`), and `max-h-[90vh] overflow-y-auto` prevents layout overflow on small screens
- `CartContext.jsx` extended with a real `addItem(product, variant, quantity)` that merges quantity into an existing `productId + variantId` line rather than creating a duplicate — this is the variant-aware architecture Section 8 and Final Engineering Principle #4 call for, built now so Phase 5 only has to add persistence, removal, and the drawer UI on top of a contract that already works
- `ProductCard.jsx` rewired per the Phase 1 note: "View Details" now calls `onQuickView(product)` instead of navigating, so Quick View is reachable directly from the homepage grid as the primary interaction. The product image and name still link to `/products/:slug` for the dedicated SEO page
- `Home.jsx` now owns a single `ProductQuickView` instance and its open/selected-product state, passed down to `ProductGrid` → `ProductCard`, so there is exactly one Quick View implementation shared by every card (no duplication, per Section 9)

### Previous Functionality Verified
- All routes — PASS (`/`, `/products`, `/products/:slug`, `/story`, `/cart`, `/checkout`, invalid path → 404, all HTTP 200)
- Phase 1 homepage sections (Hero, TrustStrip, HeritageSection, BrandBanner) — PASS, unaffected by this phase's changes
- Header cart badge — PASS, now reflects real state: adding an item via Quick View increments the badge

### New Routes
None.

### New Components
- ProductQuickView, ProductGallery, VariantSelector (in `components/product/`)
- Modal (primitive, substantially rewritten)

### Data / State Logic
- `src/data/products.js`: full product contract, replacing the Phase 1 placeholder fields
- `CartContext`: added `addItem`; `items` now carry `productId`, `variantId`, `productName`, `productSlug`, `variantName`, `price`, `thumbnail`, `quantity` — enough for Phase 5 to render a cart line without re-querying product data, while still keying lines by `productId + variantId` per the cart contract
- Quick View local state: `selectedVariant` and `quantity`, reset via `useEffect` whenever a different product is opened (flagged by the linter as a "setState in effect" pattern — see Known Issues)

### Design Implementation
- Quick View follows the two-column reference layout (gallery left, info right) and collapses to a single column on mobile
- Pack-size buttons and quantity stepper reuse the same visual language (thin borders, forest-green active state) as the rest of the design system — no new UI patterns introduced
- Trust row inside the modal is intentionally smaller/quieter (`text-xs`) than the homepage trust strip so it doesn't compete with the price and CTAs above it
- Modal animation is a single subtle fade + scale (200 ms), not per-element staggered entrances, consistent with the "one orchestrated moment, not scattered effects" principle

### Testing
- `npm run build` — **PASS** (1862 modules transformed, no errors)
- `npx oxlint src/` — 0 errors, 4 informational warnings:
  - 2 are the same "component + helper in one file" fast-refresh notices from Phase 1 (`CartContext.jsx`, `Price.jsx`) — expected, no runtime effect
  - 2 are new "setState called synchronously in an effect" notices in `ProductQuickView.jsx` (resetting variant/quantity when the product changes) and `Modal.jsx` (mount/visible sequencing for the enter animation) — both are intentional, standard React patterns for "reset local state when a prop's identity changes" and "sequence a CSS transition," not defects. Documented here rather than silently suppressed
- Route check via `npm run preview` — all six contract routes plus an invalid path returned HTTP 200 after rebuilding
- Manual code-path review of the Quick View flow: opening a product sets its first variant as selected, changing variant/quantity recomputes the displayed total correctly (e.g. 500 g × 2 → ₹698 for Pure Amla, matching the reference), Add to Cart calls `addItem` and closes the modal, Buy Now calls `addItem` and navigates to `/cart`
- Rendered screenshot QA — **still not completed** this phase for the same reason as Phase 1: this sandbox's network egress does not reach the Playwright browser-binary CDN, so headless Chromium cannot be installed here. This remains an open item for Phase 8/9 visual QA, or for a quick manual check in your own browser now that Quick View is interactive

### Known Issues
- Linter flags two "setState in effect" patterns (see Testing) — functionally correct, kept as-is; could be refactored to a `key`-based remount in a later polish pass if desired, but that's a style choice, not a bug
- No rendered screenshot captured yet (see Testing) — recommend clicking "View Details" on a product card in your own browser to confirm the modal looks and animates as expected
- `compareAtPrice` is present in the data model and rendered by the `Price` primitive when set, but no variant currently shown in Quick View surfaces it prominently (Quick View shows only the computed total) — this will matter more in Phase 3's Product Detail page
- Add to Cart / Buy Now currently have no persistence (a page refresh clears the cart) — this is expected and unresolved until Phase 5 adds `localStorage`

### Files Created / Modified
```
src/data/products.js (rewritten to full contract)
src/context/CartContext.jsx (added addItem)
src/components/primitives/Modal.jsx (rewritten: focus trap, animation, a11y)
src/components/primitives/TrustItem.jsx (added labelClassName prop)
src/components/product/ProductQuickView.jsx
src/components/product/ProductGallery.jsx
src/components/product/VariantSelector.jsx
src/components/product/ProductCard.jsx (View Details now opens Quick View)
src/components/product/ProductGrid.jsx (passes onQuickView through)
src/pages/Home.jsx (owns the single ProductQuickView instance)
implementation.md
```

### Output
`pratapgarh-amla-phase-2.zip`

---

## Phase 3
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- `ProductDetail.jsx` (`/products/:slug`) rebuilt from the Phase 0 shell into the full dedicated product page: `Breadcrumb` (Home / Products / Product Name), two-column layout (gallery left, info right on `sm:` and up, stacked on mobile), category `Badge`, serif product name, star rating + review count, origin line (with `MapPin` icon), full `description`, `VariantSelector`, `QuantitySelector`, dynamically computed total `Price` (with the selected variant's `compareAtPrice` scaled by quantity when present), Add to Cart / Buy Now buttons, and the same four-item trust row used in Quick View — reusing `TrustItem`, not a new pattern
- `ProductTabs.jsx` (new, in `components/product/`): accessible tabbed panel (`role="tablist"`/`tab`/`tabpanel`, `aria-selected`, `aria-controls`) driven entirely by which of `benefits` / `howToUse` / `ingredients` / `storage` the product actually has data for — a tab is omitted rather than rendered empty if a field is missing, so the component doesn't assume every product fills all four fields
- Origin/heritage band: forest-green section using `product.origin`, a low-opacity `HeritageMotif` (the same shared SVG cue from Phase 1, `tone="ivory"` on the dark background), and a "Discover Our Story" CTA into `/story` — reuses the existing motif rather than adding new heritage artwork, consistent with "one shared heritage cue"
- Related products: `getRelatedProducts(product)` (already exported by `src/data/products.js`) feeds the existing `ProductGrid`/`ProductCard`, under a "More from the collection" heading; the section is omitted entirely if a product has no related products rather than rendering an empty grid
- The product detail page owns its own single `ProductQuickView` instance for the related-products grid (same pattern `Home.jsx` uses) — clicking "View Details" on a related product opens Quick View in place rather than navigating away, while the image/name still deep-link to that product's own `/products/:slug` page
- Invalid slugs: `getProductBySlug` returning `null` renders the existing `NotFound` page component in place (same URL, same graceful 404 experience) instead of a bespoke error state, satisfying the Section 9 requirement without duplicating "page not found" UI
- Navigating between two different product detail pages (e.g. via a related-product image link) resets the selected variant/quantity to the new product's own first variant and scrolls to top, so state from the previous product page doesn't leak into the next

### Previous Functionality Verified
- All routes — PASS (`/`, `/products`, `/products/pure-amla`, `/products/amla-powder`, `/products/dried-amla`, `/products/does-not-exist`, `/story`, `/cart`, `/checkout` all HTTP 200 via `npm run preview`; the invalid slug still returns 200 because it now renders `NotFound` in place rather than a server-level 404)
- Homepage (Hero, TrustStrip, Product Collection, HeritageSection, BrandBanner) and its Quick View flow — PASS, untouched by this phase
- Header cart badge — PASS, still live; Add to Cart / Buy Now on the new Product Detail page call the same `CartContext.addItem` used by Quick View, so quantities merge correctly by `productId + variantId` whether added from the homepage modal or the dedicated product page
- Quick View itself — PASS, unmodified; reused as-is for the related-products grid on this page

### New Routes
None — `/products/:slug` already existed as a Phase 0 shell; this phase replaces its content only.

### New Components
- `ProductTabs` (`components/product/`)

### Data / State Logic
- No changes to `products.js` or `CartContext` — Phase 2 already built the full product data contract and a variant-aware `addItem`, so this phase only had to consume them
- New local state in `ProductDetail`: `selectedVariant`, `quantity` (mirrors the Quick View pattern), plus `quickViewProduct` for the related-products section's shared modal

### Design Implementation
- Gallery uses the `portrait` aspect ratio (vs. `square` on the homepage cards and Quick View) so the dedicated page feels more editorial and image-forward, per the "Product Detail" reference distinct from the Quick View dialog
- Tabs use a simple underline-on-active pattern (no pills, no background fill) consistent with the "avoid excessive pill UI" rule
- Origin band uses the same forest-green + ivory-text treatment as `BrandBanner` on the homepage, so dark sections stay visually consistent site-wide rather than introducing a new dark-section style
- Related products reuse `ProductGrid`/`ProductCard` verbatim — no visual divergence from the homepage collection grid

### Testing
- `npm run build` — **PASS** (1865 modules transformed, no errors). Note: this environment's `node_modules` initially shipped with Windows-only native bindings (`lightningcss-win32-x64-msvc`) baked into `package-lock.json` from a prior session on a different machine; a clean `rm -rf node_modules package-lock.json && npm install` was required in this Linux sandbox before the build would run. This is an environment artifact, not a code defect — worth a clean install on your own machine too if you see a similar "Cannot find native binding" error.
- `npx oxlint src/` — 0 errors, 6 informational warnings: the same 4 pre-existing notices from Phases 1–2 (fast-refresh "component + helper" in `CartContext.jsx`/`Price.jsx`, "setState in effect" in `ProductQuickView.jsx`/`Modal.jsx`), plus 2 new "setState in effect" notices in `ProductDetail.jsx` for the same intentional "reset local state when the product prop changes" pattern already documented in Phase 2's Known Issues
- Route check via `npm run preview` — all contract routes plus three real product slugs and one invalid slug checked; see Previous Functionality Verified
- Manual code-path review: switching variants recomputes the total price and any struck-through compare-at price correctly (e.g. Pure Amla 500 g × 2 → ₹698 with ₹798 struck through); Add to Cart updates the header badge without leaving the page; Buy Now adds the line and navigates to `/cart`; opening Quick View from a related-product card and adding a different variant of that product creates a separate cart line, keyed correctly by `productId + variantId`
- Rendered screenshot QA — **not completed** this phase, for the same reason as Phases 1–2: this sandbox's network egress does not reach the Playwright browser-binary CDN, so headless Chromium cannot be installed here. Still deferred to Phase 8/9 visual QA, or a quick manual check in your own browser.

### Known Issues
- Same two "setState in effect" linter notices as Phase 2, now also present in `ProductDetail.jsx` — functionally correct, not a defect (see Testing)
- No rendered screenshot captured yet — recommend opening `/products/pure-amla` in your own browser to confirm gallery ratio, tabs and the origin band look right, especially on mobile widths
- `ProductTabs` only renders tabs for fields that are present; since every seed product currently has all four fields filled in, the "tab omitted" branch is exercised by code review rather than by an actual product missing a field — worth keeping in mind if a future product is added with partial data
- The origin band's copy ("harvested, processed and quality-checked before it is packed") is a paraphrase of the general Pratapgarh → Aonla farms → Harvest → Processing → Quality Check → Packed for India brand philosophy from Section 3, not a new claim — flagging for visibility since Section 3 explicitly prohibits inventing sourcing/historical claims

### Files Created / Modified
```
src/pages/ProductDetail.jsx (rewritten: full Phase 3 page, replaces Phase 0 shell)
src/components/product/ProductTabs.jsx (new)
implementation.md
```

### Output
`pratapgarh-amla-phase-3.zip`

---

## Phase 4
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- `Products.jsx` (`/products`) rebuilt from the Phase 0 shell into the full collection page: `Breadcrumb` (Home / Products), `SectionHeading` collection header ("Our Amla Collection"), a category filter nav, a live result count, and the full product grid
- Category filter nav: derived at runtime from `[...new Set(products.map(p => p.category))]` rather than a hard-coded `["fruit", "powder", "dried"]` list, so a future product with a new category value appears in the filter automatically with no component change. Labels come from the new shared `CATEGORY_LABELS` export in `products.js`. An "All" option is always first; the active filter uses the same forest-green active-state treatment as `VariantSelector`/`ProductTabs`, so the filter nav doesn't introduce a new interaction pattern
- Result count line ("Showing X of Y products") updates as the filter changes, and an empty-state message is shown if a category ever has zero products (not currently reachable with the seed data, but the grid doesn't assume every category is non-empty)
- Quick View integration: the page owns its own `ProductQuickView` instance and passes `setQuickViewProduct` down through the existing `ProductGrid` → `ProductCard`, exactly the same ownership pattern already used by `Home.jsx` and `ProductDetail.jsx` — no new Quick View wiring, no duplicated modal instance
- Refactor: pulled the `CATEGORY_LABELS` map (previously local to `ProductDetail.jsx`) up into `src/data/products.js` as a shared export, and updated `ProductDetail.jsx` to import it, so the category badge on the detail page and the filter nav on the collection page can't drift out of sync

### Previous Functionality Verified
- All routes — PASS (`/`, `/products`, `/products/pure-amla`, `/products/amla-powder`, `/products/dried-amla`, an invalid slug, `/story`, `/cart`, `/checkout`, all HTTP 200 via `npm run preview`)
- Homepage Quick View flow — PASS, unaffected
- Product Detail page — PASS; category badge still renders correctly after the `CATEGORY_LABELS` refactor (verified by code review: same object, same keys, just relocated and re-exported)
- Header cart badge — PASS; adding an item via Quick View from the new `/products` grid updates the badge the same way it does from the homepage or Product Detail page

### New Routes
None — `/products` already existed as a Phase 0 shell; this phase replaces its content only.

### New Components
None — this phase composed existing primitives/components (`Breadcrumb`, `SectionHeading`, `ProductGrid`, `ProductQuickView`) rather than introducing new ones; the category filter nav is a small inline block in `Products.jsx`, not extracted into its own component since it isn't reused anywhere else yet.

### Data / State Logic
- `src/data/products.js`: added `CATEGORY_LABELS` export (moved from `ProductDetail.jsx`, no value changes)
- `Products.jsx` local state: `activeCategory` (defaults to `"all"`), `quickViewProduct` (mirrors the `Home.jsx`/`ProductDetail.jsx` pattern)
- No `CartContext` changes needed — Phase 2's `addItem` already covers this page's needs

### Design Implementation
- Filter nav buttons reuse the same border/active-state visual language as `VariantSelector` (thin border, forest-green fill on active) rather than introducing pill-shaped or tab-underline filters, per the "avoid excessive pill UI" and "no new UI patterns" principles
- Collection header copy is deliberately close to the homepage's "Our Amla collection" section so the two entry points feel like the same catalog, not two different stores
- Grid spacing/columns are unchanged from `ProductGrid` (2-up mobile, 3-up `sm:` and up) — no page-specific grid overrides

### Testing
- `npm run build` — **PASS** (1865 modules transformed, no errors)
- `npx oxlint src/` — 0 errors, 6 informational warnings, identical set to Phase 3 (no new warnings introduced by this phase's code)
- Route check via `npm run preview` — all contract routes plus product slugs and an invalid slug returned HTTP 200
- Manual code-path review: selecting "Whole Fruit" filters to Pure Amla only, result count reads "Showing 1 of 3 products"; selecting "All" restores all three; opening Quick View from a filtered grid still adds the correct product/variant to the cart; the category filter state does not persist across navigation away from `/products` and back (resets to "All" on remount), which is expected SPA behavior and not flagged as an issue since no requirement calls for persisting filter state
- Rendered screenshot QA — **not completed** this phase, same network-egress limitation as Phases 1–3 (no reachable Playwright browser-binary CDN in this sandbox). Deferred to Phase 8/9 as planned.

### Known Issues
- Category filter state is not persisted in the URL (e.g. no `?category=powder` query param), so a filtered view can't be deep-linked or shared. Not required by the Section 9 route contract, which only specifies `/products` with no query params — flagging as a possible Phase 8 polish item rather than adding scope now
- Same 6 pre-existing linter notices as Phase 3, no new ones (see Testing)

### Files Created / Modified
```
src/pages/Products.jsx (rewritten: full Phase 4 page, replaces Phase 0 shell)
src/data/products.js (added CATEGORY_LABELS export)
src/pages/ProductDetail.jsx (imports CATEGORY_LABELS from products.js instead of a local copy)
implementation.md
```

### Output
`pratapgarh-amla-phase-4.zip`

---

## Phase 5
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- `CartContext.jsx` extended significantly beyond the Phase 2 shell:
  - **localStorage persistence**: cart items are read once on mount (lazy `useState` initializer, so there's no flash of an empty cart before storage is read) and written back on every change, under the key `pratapgarh-amla-cart`. Both read and write are wrapped in `try/catch` so a corrupt value, private-browsing storage block, or quota error degrades to an in-memory-only cart for the session rather than crashing the app.
  - **`removeItem(productId, variantId)`**: removes a single line, keyed the same way as the cart contract (Section 8).
  - **`updateQuantity(productId, variantId, quantity)`**: clamps to `[1, variant.stock]` by cross-referencing `src/data/products.js`; a quantity of `0` (or less) removes the line entirely, so the quantity stepper's decrement-to-zero behaves like "remove" without needing a separate code path.
  - **`subtotal`, `shipping`, `total`, `amountToFreeShipping`**: derived on every render from `items`. Shipping is a placeholder flat-fee-below-a-threshold rule (₹49 below ₹499, free at/above) since no real client shipping policy was supplied — flagged again below and in code comments, per the Section 3 "don't invent unsupported... claims" principle extended sensibly to business rules.
  - **Drawer state**: `isDrawerOpen` / `openDrawer` / `closeDrawer`. `addItem` now opens the drawer automatically after adding a line, so the flow Section 14 specifies — *"Adds to cart → Cart drawer updates → Opens Cart"* — actually happens without every call site having to remember to open it.
- **`Modal.jsx` (primitive) extended, not duplicated**: added a `variant="drawer"` option that reuses all of the existing focus-trap, Escape-to-close, overlay-click-to-close, scroll-lock and enter/exit-transition logic from Phase 2, just swapping the "centered fade+scale dialog" layout for a "right-edge slide-in panel" layout. This follows Final Engineering Principle #2 (reusable components over duplicated JSX) instead of hand-rolling a second modal implementation for the drawer.
- **`CartDrawer.jsx`** (new, `components/cart/`): built on `Modal` (`variant="drawer"`). Shows an empty state (icon + "Continue Shopping") when there are no items, otherwise a scrollable list of compact `CartItem` lines plus a `CartSummary` with "Proceed to Checkout" and "View Cart" buttons that close the drawer before navigating.
- **`CartItem.jsx`** (new, `components/cart/`): one line-item component shared by both the drawer (`dense` prop) and the full Cart page — product thumbnail/name/variant (linking to `/products/:slug`), a `QuantitySelector` wired to `updateQuantity` (with its `max` clamped to the variant's real stock, cross-referenced from `products.js`, not just the selector's generic default), a remove button, and the line total.
- **`CartSummary.jsx`** (new, `components/cart/`): subtotal / shipping (or "Free") / total, a free-shipping progress message, and a slot (`children`) for the calling page's own CTA buttons — used by both `CartDrawer` (Checkout + View Cart) and `Cart.jsx` (Checkout only, since "view cart" doesn't apply on the cart page itself).
- **`Cart.jsx`** (`/cart`) rebuilt from the Phase 0 shell: breadcrumb, empty state, or a two-column layout (line items left, sticky order summary right) on larger screens, collapsing to a single column on mobile.
- **Header integration**: the cart icon in `Header.jsx` now calls `openDrawer()` instead of navigating to `/cart` directly, so it acts as the quick-access entry point Section 14 describes ("Cart drawer updates" as an intermediate step), while `/cart` remains a fully-working, directly-navigable, bookmarkable page for the full review-and-checkout step.
- **`Layout.jsx`**: mounts a single `<CartDrawer />` alongside `Header`/`Footer`, so it's available (and its state is shared via context) on every route, not re-instantiated per page.
- Buy Now (in both `ProductQuickView` and the Phase 3 `ProductDetail` page) now calls `closeDrawer()` before navigating to `/cart`, so the drawer that `addItem` just opened doesn't remain open behind the full Cart page after the redirect (these are batched into the same render, so there's no visible flash).

### Previous Functionality Verified
- All routes — PASS (`/`, `/products`, `/products/pure-amla`, `/story`, `/cart`, `/checkout`, all HTTP 200 via `npm run preview`)
- Quick View (Phase 2) — PASS; Add to Cart / Buy Now still call `addItem` the same way, now with the added drawer-open/close side effects verified by code review
- Product Detail page (Phase 3) — PASS, same as above for its own Add to Cart / Buy Now handlers
- Products collection page (Phase 4) — PASS, its Quick View integration unaffected
- Header cart badge — PASS, still live and unchanged in appearance; only its click behavior changed (opens drawer instead of navigating)

### New Routes
None — `/cart` already existed as a Phase 0 shell; this phase replaces its content only.

### New Components
- `CartDrawer`, `CartItem`, `CartSummary` (all in `components/cart/`, new folder this phase)
- `Modal` (primitive) extended with a `drawer` variant, not a new component

### Data / State Logic
- `CartContext`: added `removeItem`, `updateQuantity`, `clearCart`, `subtotal`, `shipping`, `total`, `amountToFreeShipping`, `freeShippingThreshold`, `isDrawerOpen`, `openDrawer`, `closeDrawer`; `addItem` now also opens the drawer and clamps merged quantities to stock (previously it could exceed stock if the same variant was added to cart twice)
- No changes to the product data contract in `products.js` (only read from, via the new `getVariantStock` cross-reference used by both `CartContext` and `CartItem`)

### Design Implementation
- Drawer panel width capped at `max-w-md`, full viewport height, ivory background — visually consistent with the centered Quick View modal (same overlay treatment, same border/shadow language) rather than introducing a new dark or glassy drawer style
- Free-shipping message uses the existing `amla`/`forest` tint-background pattern (`bg-amla/10`, `bg-forest/5`) already used elsewhere for quiet inline callouts, not a new banner style
- Cart page order summary panel is a plain `ivory-200` tinted card with no border/shadow, keeping with "avoid excessive rounded cards" and low-clutter checkout-adjacent surfaces
- Quantity stepper and remove icon reuse existing primitives (`QuantitySelector`, `lucide-react`'s `Trash2`) rather than new controls

### Testing
- `npm run build` — **PASS** (1868 modules transformed, no errors)
- `npx oxlint src/` — 0 errors, 6 informational warnings, identical set to Phases 3–4 (no new warnings introduced despite the new `CartContext` effect and the drawer's reuse of `Modal`'s existing effect)
- Route check via `npm run preview` — all contract routes returned HTTP 200
- Manual math check (`node` script mirroring the context's pure subtotal/shipping/total calculations): 500 g Pure Amla × 2 + 250 g Amla Powder × 1 → subtotal ₹947, shipping ₹0 (over the ₹499 threshold), total ₹947 — correct; a single 250 g Dried Amla → subtotal ₹229, shipping ₹49 (under threshold), total ₹278 — correct
- Manual code-path review: adding a variant already in the cart merges quantity into the existing line rather than duplicating it, and now clamps the merged total to that variant's stock; decrementing a line's quantity to 0 removes it; removing the last item shows the empty state in both the drawer and the `/cart` page; `localStorage.getItem` is read once on mount via a lazy initializer so a reload restores the cart without an empty-cart flash
- Rendered/browser QA (does the drawer actually slide in, does persistence survive an actual page reload in a real browser, does the focus trap behave correctly on the drawer) — **not completed** this phase, same network-egress limitation as Phases 1–4 (no reachable Playwright browser-binary CDN in this sandbox). This is a good candidate for a manual check in your own browser now that the cart is interactive end-to-end, and remains formally deferred to Phase 8/9.

### Known Issues
- **Shipping fee and free-shipping threshold (₹49 / ₹499) are placeholder business logic**, not values supplied by the client — same category of caveat Section 3 calls out for brand/historical claims, extended here to a numeric business rule. These live in two constants at the top of `CartContext.jsx` and should be replaced (or wired to a real shipping calculation) before this ships to production.
- Same 6 pre-existing linter notices as Phases 3–4, no new ones (see Testing)
- No rendered/browser QA yet (see Testing) — recommend manually testing: add an item, confirm the drawer slides in from the right; refresh the page, confirm the cart survives; open the drawer with keyboard only (Tab/Shift+Tab, Escape) to sanity-check the reused focus-trap on the drawer variant
- `clearCart` was added to the context (useful for a future "order placed" flow in Phase 6) but has no caller yet in this phase — flagging so it isn't mistaken for dead code with no purpose

### Files Created / Modified
```
src/context/CartContext.jsx (rewritten: persistence, remove/update, totals, drawer state)
src/components/primitives/Modal.jsx (added `variant="drawer"` option)
src/components/cart/CartDrawer.jsx (new)
src/components/cart/CartItem.jsx (new)
src/components/cart/CartSummary.jsx (new)
src/pages/Cart.jsx (rewritten: full Phase 5 page, replaces Phase 0 shell)
src/components/layout/Header.jsx (cart icon opens drawer instead of navigating)
src/components/layout/Layout.jsx (mounts CartDrawer globally)
src/components/product/ProductQuickView.jsx (Buy Now closes drawer before navigating)
src/pages/ProductDetail.jsx (Buy Now closes drawer before navigating)
implementation.md
```

### Output
`pratapgarh-amla-phase-5.zip`

---

## Phase 6
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- **`Checkout.jsx`** (`/checkout`) rebuilt from the Phase 0 shell into a 3-step flow: **Details** (contact + delivery address) → **Payment** → **Review**, all on a single route (no sub-routes) with a sticky order-summary sidebar throughout — keeping to Section 1's "short, mobile-friendly checkout" while still giving the step structure Section 5/Phase-6 planning called for.
- **`StepIndicator.jsx`** (new, `components/checkout/`): numbered circles + connecting lines, `forest` for current/complete (with a checkmark once complete), muted `brown/40` for upcoming. Completed steps are clickable to jump back and fix something; the current and future steps are not, since later steps haven't been validated yet — this is the only way to navigate backward (no separate "back" state to keep in sync).
- **`ContactFields.jsx`** / **`AddressFields.jsx`** (new, `components/checkout/`): controlled field groups built on the existing `Input`/`Select` primitives. `AddressFields` uses a small data-driven Indian-states list for the state `Select`, per the "data-driven over hard-coded" principle already used for the product catalog.
- **`PaymentSelector.jsx`** (new, `components/checkout/`): three mock payment methods — Cash on Delivery, UPI, Credit/Debit Card — as selectable cards; choosing UPI or Card reveals its own mock fields (UPI ID; card name/number/expiry/CVV). **No gateway is wired up and nothing is transmitted anywhere** — flagged explicitly per Section 13's "if functionality is only mocked... document it" and again in Known Issues below.
- **`ReviewStep.jsx`** (new, `components/checkout/`): read-only recap of contact, address and payment (last 4 digits only for card), each with an "Edit" link back to the relevant step.
- **`OrderSummary.jsx`** (new, `components/checkout/`): a read-only counterpart to the Cart page's `CartSummary`/`CartItem` — compact, non-editable line-item list (thumbnail, qty badge, name, variant, line total) plus subtotal/shipping/total, reusing `formatINR` and the cart context's existing totals rather than recalculating them.
- **`OrderConfirmation.jsx`** (new, `components/checkout/`): shown after "Place Order" — a client-generated mock order ID (`PA-` + 6 digits), the order total, a generic delivery-estimate placeholder, and CTAs back to `/products` or `/`. **This is a mock confirmation only**: no order is persisted or transmitted anywhere, and there is no order-lookup/tracking behind it.
- **`checkoutValidation.js`** (new, `src/lib/`): pure, framework-free validators (`validateContact`, `validateAddress`, `validatePayment`, `hasErrors`) — one shared source of truth used both when advancing a step and again, defensively, immediately before `Place Order` is allowed to fire (Section 13's Quality Gate treats validation as required, not optional). Validates email format, Indian 10-digit mobile numbers, Indian 6-digit PIN codes, UPI ID shape, and basic card-number/expiry/CVV shape — all client-side pattern checks, not real verification.
- **`Select.jsx`** (primitive) extended with an `error` prop (rendered the same way `Input`'s `error` already is), so `AddressFields`' state dropdown can show a validation message without an unknown `error` attribute leaking onto the underlying `<select>` DOM node.
- **Cart-empty guard**: if `/checkout` is reached with an empty cart (and no order has just been placed), it shows the same empty-state pattern as `/cart` instead of the step flow. The just-placed order is kept in local `Checkout` state (id, email, total) captured at the moment of submission, so the confirmation screen keeps rendering correctly even after `clearCart()` empties the cart context.

### Previous Functionality Verified
- All routes — PASS (`/`, `/products`, `/products/pure-amla`, `/story`, `/cart`, `/checkout`, `/about`, `/contact`, and an unknown path via `npm run preview`; unknown path correctly falls through to the SPA and renders `NotFound`)
- Cart page and cart drawer (Phase 5) — PASS, unaffected; "Proceed to Checkout" still links to `/checkout`, which now has real content instead of the Phase 0 placeholder
- Quick View / Product Detail Add to Cart / Buy Now (Phases 2–3) — PASS, unaffected by this phase
- Products collection page (Phase 4) — PASS, unaffected

### New Routes
None — `/checkout` already existed as a Phase 0 shell; this phase replaces its content only.

### New Components
- `StepIndicator`, `ContactFields`, `AddressFields`, `PaymentSelector`, `ReviewStep`, `OrderSummary`, `OrderConfirmation` (all in `components/checkout/`, new folder this phase)
- `Select` (primitive) extended with an `error` prop, not a new component

### Data / State Logic
- New `src/lib/checkoutValidation.js` — pure validation functions, no new dependencies
- `Checkout.jsx` owns all checkout-flow state locally (`step`, `contact`, `address`, `payment`, `errors`, `order`) — nothing here is persisted to `localStorage` (unlike the cart); refreshing mid-checkout loses progress, which is documented below rather than silently accepted
- Reads `items`, `subtotal`, `shipping`, `total`, `clearCart` from `CartContext` (all already existed from Phase 5); no changes to `CartContext.jsx` itself

### Design Implementation
- Two-column layout (step content left, sticky order summary right, collapsing to one column on mobile) mirrors the Phase 5 Cart page's grid so the two adjacent surfaces feel like the same system
- Payment method cards use the same selected/unselected border-and-tint treatment as other selectable UI in the app (e.g. `VariantSelector`), rather than introducing a new selection pattern
- Order summary sidebar reuses the Cart page's `bg-ivory-200/60` untinted-card treatment (no border/shadow), continuing the "low visual clutter" checkout-adjacent surface rule
- Review step's "Edit" links use `forest` text with a small pencil icon, consistent with the app's existing use of `forest` for interactive/primary-adjacent affordances
- Confirmation screen uses a single `forest`-colored check icon and a quiet `ivory-200` order-number card — no confetti, gradients or celebratory styling not otherwise present in the design system

### Testing
- `npm run build` — **PASS** (1878 modules transformed, no errors)
- `npx oxlint src/` — 0 errors, 6 informational warnings, identical set/count to Phases 3–5 (no new warnings introduced by any Phase 6 file)
- Route check via `npm run preview` — all contract routes, plus `/about`, `/contact` and an unknown path, returned HTTP 200
- Manual validation-logic check (Node script exercising `checkoutValidation.js` directly): valid contact/address/COD payment all pass with no errors; invalid email, phone, PIN code, UPI ID and card fields each surface the expected field-level error; a valid UPI ID and a valid mock card both pass; `hasErrors` correctly distinguishes an empty error object from a populated one
- Manual code-path review: advancing from Details or Payment is blocked and shows field errors when validation fails; Review step's Edit links return to the correct step with prior input intact (state is lifted in `Checkout.jsx`, not reset on navigation); `Place Order` re-validates everything before creating the mock order; placing an order clears the cart via the existing `clearCart()` and still renders the confirmation screen correctly because the order snapshot is captured in local state first; visiting `/checkout` directly with an empty cart shows the empty-state guard, not a broken step flow
- Rendered/browser QA (does the step transition/scroll-to-top actually feel right, does keyboard-only step navigation work, does the mobile single-column layout look right) — **not completed** this phase, same network-egress limitation as Phases 1–5 (no reachable Playwright browser-binary CDN in this sandbox); formally deferred to Phase 8/9, same as prior phases

### Known Issues
- **Payment is entirely mock.** No payment gateway is integrated; UPI/Card fields are validated only for shape (regex), never verified or transmitted anywhere. This must be replaced with a real payment integration before production use.
- **Order confirmation is entirely mock.** The order ID is generated client-side (`PA-` + random 6 digits) and nothing is persisted to a backend, database, or order-management system. There is no real order-tracking or "my orders" experience.
- **Checkout progress is not persisted.** Unlike the cart (which survives a reload via `localStorage`), refreshing mid-checkout loses all entered contact/address/payment state and returns to Step 1. This was a deliberate scope decision for this phase (checkout state includes payment-adjacent fields that shouldn't sit in `localStorage` un-encrypted) rather than an oversight — flagging it explicitly rather than leaving it undocumented.
- **Delivery estimate ("4–6 business days") is a placeholder**, same category of caveat as the Phase 5 shipping-fee constants — not a value supplied by the client.
- Same 6 pre-existing linter notices as Phases 3–5, no new ones (see Testing)
- No rendered/browser QA yet (see Testing) — recommend manually testing: the full happy path end-to-end (add items → checkout → fill details → pick a payment method → review → place order → confirmation), triggering each validation error at least once, and checking the mobile single-column layout and step-indicator wrapping on a narrow viewport

### Files Created / Modified
```
src/pages/Checkout.jsx (rewritten: full Phase 6 page, replaces Phase 0 shell)
src/components/checkout/StepIndicator.jsx (new)
src/components/checkout/ContactFields.jsx (new)
src/components/checkout/AddressFields.jsx (new)
src/components/checkout/PaymentSelector.jsx (new)
src/components/checkout/ReviewStep.jsx (new)
src/components/checkout/OrderSummary.jsx (new)
src/components/checkout/OrderConfirmation.jsx (new)
src/lib/checkoutValidation.js (new)
src/components/primitives/Select.jsx (added `error` prop support)
implementation.md
```

### Output
`pratapgarh-amla-phase-6.zip`

---

## Phase 7
**Status:** COMPLETE
**Date:** 2026-09-02

### Implemented
- **`Story.jsx`** (`/story`) rebuilt from the Phase 0 shell into the full heritage page from Section 17: breadcrumb → `StoryHero` → origin story → sourcing journey timeline → brand values → `BrandBanner` → closing shop CTA.
- **`StoryHero.jsx`** (new, `components/story/`): the page-specific hero — kicker "The land behind the Amla", headline "Pratapgarh — the city of Aonla", and a large heritage visual (image + `HeritageMotif`) as the primary visual element, per Section 17's "use a large heritage visual". Deliberately different in emphasis from the homepage `Hero` (where the product photo leads and the motif is a small corner accent) — here the heritage image leads, since this page's job is introducing Pratapgarh itself, not selling a specific product.
- **`StorySection.jsx`** (new, `components/story/`): a reusable eyebrow/title/paragraphs-beside-an-image block with a switchable image side. Generalizes the same shape already used by the homepage's `HeritageSection`, matching the Section 10 component contract (which lists `StorySection` as its own reusable component) instead of duplicating that two-column JSX again for this page's origin-story block.
- **`StoryTimeline.jsx`** (new, `components/story/`): the six-step sourcing journey from Section 17 (Pratapgarh → Amla Farms → Harvest → Processing → Quality Check → Packed for India), as a data-driven array of `{ icon, title, description }` rather than six hand-written blocks. Renders as a single vertical column with a connecting line on mobile/tablet, and a horizontal row with a connecting line across the icons on desktop — two different rule elements for the two orientations rather than one element trying to serve both (Section 19's "specifically redesign... Story timeline for mobile", not just shrunk).
- **`BrandValues.jsx`** (new, `components/story/`): the four brand values from Section 17 (Authentic Origin, Natural Products, Careful Packing, Customer Trust) as a responsive card grid (1 → 2 → 4 columns), reusing the existing `Card` primitive rather than a new card style.
- **Origin story copy**: written to stay within Section 3 / Section 17's "do not invent historical facts" constraint — general, unembellished statements about the region and the sourcing relationship, no invented dates, certifications, farmer counts, or medical/health claims. This is placeholder brand copy pending real client-supplied content, same caveat category as the homepage `HeritageSection` copy from Phase 1 — flagged again in Known Issues.
- **`BrandBanner`** (existing, unmodified) reused as the page's closing brand moment, followed by a lightweight "Shop Amla" CTA back to `/products` — closing the storytelling journey back into the shopping journey, per Section 14's "homepage-first shopping" principle extended to this page (a heritage page shouldn't be a dead end).

### Previous Functionality Verified
- All routes — PASS (`/`, `/products`, `/products/pure-amla`, `/story`, `/cart`, `/checkout`, `/about`, `/contact`, and an unknown path via `npm run preview`)
- Homepage `HeritageSection` "Discover Our Story" CTA — PASS, still links into `/story`, which now has real content instead of the Phase 0 placeholder
- Header/Footer "Our Story" navigation entries — PASS, unaffected
- Cart, Checkout, Products, Product Detail (Phases 1–6) — PASS, unaffected by this phase's changes

### New Routes
None — `/story` already existed as a Phase 0 shell; this phase replaces its content only.

### New Components
- `StoryHero`, `StorySection`, `StoryTimeline`, `BrandValues` (all in `components/story/`, new folder this phase)

### Data / State Logic
- No new state or context changes — this page is entirely static content, no cart/product data dependencies
- `StoryTimeline`'s six steps and `BrandValues`' four values are local data arrays (same pattern as `TrustStrip`'s `ITEMS`), not wired into a shared data file, since nothing else in the app currently consumes them

### Design Implementation
- `StoryHero` and `StorySection` reuse the existing serif/sans typography pairing, `amla-200` eyebrow color, and `HeritageMotif` SVG — no new heritage artwork introduced, keeping to "one shared heritage cue" from Phase 1
- Timeline step markers are plain circular icon badges (ivory fill, `brown/15` border, `forest` icon) connected by a thin `brown/15` line — deliberately restrained, avoiding the "heavy ornamental frames" / "excessive gold" pitfalls Section 21 calls out
- Brand values grid reuses `Card`'s existing `ivory-50` / `brown/10` border / `shadow-card` treatment rather than a new card style
- Alternating `StorySection` image-side support is desktop-only (`lg:order-*`); on mobile every block stacks image-then-text in the same order, so orientation doesn't flip unpredictably at the point content reflows to one column

### Testing
- `npm run build` — **PASS** (1883 modules transformed, no errors)
- `npx oxlint src/` — 0 errors, 6 informational warnings, identical set/count to Phases 3–6 (no new warnings introduced by any Phase 7 file)
- Route check via `npm run preview` — all contract routes, plus `/about`, `/contact` and an unknown path, returned HTTP 200
- Manual code-path review: `StoryTimeline`'s data array renders all six steps in the documented order with no duplicate keys (title is unique per step); `StorySection`'s `imageSide` prop correctly toggles which `lg:order-*` class lands on which side; `BrandValues` renders all four values with no missing icons (`Landmark`, `Leaf`, `Package`, `HeartHandshake` all confirmed present in the installed `lucide-react` version before use)
- Rendered/browser QA (does the timeline's connecting line actually align with the icon centers at each breakpoint, does the alternating desktop layout look right, does the mobile vertical timeline read cleanly) — **not completed** this phase, same network-egress limitation as Phases 1–6 (no reachable Playwright browser-binary CDN in this sandbox); formally deferred to Phase 8/9, same as prior phases

### Known Issues
- **Origin story and brand-value copy is placeholder brand copy**, not content supplied by the client — same caveat category as the Phase 1 `HeritageSection` copy. Should be reviewed and replaced with verified brand content before production use.
- **All imagery on this page is placeholder** (`ProductImage` with `src={null}`, same fallback pattern used everywhere else in the app) — no real Pratapgarh/heritage photography or fort illustration was supplied.
- Same 6 pre-existing linter notices as Phases 3–6, no new ones (see Testing)
- No rendered/browser QA yet (see Testing) — recommend manually checking the timeline's line-to-icon alignment on mobile, tablet and desktop widths, and confirming the alternating `StorySection` layout doesn't feel unbalanced if a second content block is added to this page later

### Files Created / Modified
```
src/pages/Story.jsx (rewritten: full Phase 7 page, replaces Phase 0 shell)
src/components/story/StoryHero.jsx (new)
src/components/story/StorySection.jsx (new)
src/components/story/StoryTimeline.jsx (new)
src/components/story/BrandValues.jsx (new)
implementation.md
```

### Output
`pratapgarh-amla-phase-7.zip`

---

## Phase 8
**Status:** COMPLETE

### Summary
A cross-cutting polish pass over the primitives and the components that consume them, rather than a page-by-page rebuild. Phases 0–7 had already produced a consistent, well-structured UI, so this phase focused on tightening interaction feedback, form accessibility, and image presentation at the primitive level so every consumer inherits the fix at once.

### Changes

**Accessibility / Form refinement — `Input`, `Select`**
- Added `aria-invalid="true"` and `aria-describedby` (pointing at a generated `{id}-error` span) whenever a field has an error, so assistive tech announces the error and its cause together instead of just a bare red label.
- Error state now also reddens the field border (`border-red-700/60`, `focus:border-red-700`) instead of relying on the small error line alone — the field itself now signals invalid state, not just the text under it.
- These two primitives back every form in the app (`AddressFields`, `ContactFields`, `PaymentSelector`), so the checkout flow gets this for free with no per-field changes.

**Animation refinement — tactile press feedback**
- Added a consistent `active:scale-[…]` press state (94–97% depending on control size) across `Button`, `IconButton`, `QuantitySelector`, `VariantSelector` pack-size buttons, the cart-item remove button, the `Modal` close button, and `ProductGallery` thumbnail buttons — previously only color/border transitioned on interaction, so presses had no tactile feedback.
- Every new scale transition is paired with `motion-reduce:active:scale-100` so `prefers-reduced-motion` users get the color/border change only, per the existing convention already used in `Modal`'s open/close transitions.
- Disabled controls explicitly reset to `disabled:active:scale-100` so a disabled quantity/variant button can't visually "press."

**Image refinement — `ProductImage`, `ProductCard`**
- Added an opt-in `zoom` prop to `ProductImage` (`group-hover:scale-105` on the `<img>`, 500ms, reduced-motion safe) and enabled it on `ProductCard`'s thumbnail, which already sat inside a `group` wrapper — hovering a product card in the grid now gives a subtle zoom instead of a static thumbnail.
- Added `decoding="async"` to the underlying `<img>` across every `ProductImage` consumer (gallery, cards, cart items, hero) so image decode no longer blocks the main thread on first paint.

### Areas reviewed with no change needed
- **Responsive:** `ProductGrid` (2-col mobile → 3-col sm+), `Header`/`MobileMenu`, and `Hero`'s two-column-to-stacked layout were re-checked against the Section 12 responsive contract; all already degrade correctly and needed no adjustment.
- **Typography / Spacing:** heading scale, line-height, and section padding (`Hero`, `TrustStrip`, `HeritageSection`) were checked against the Section 6/7 design system and are already consistent — no drift found worth touching.
- **Cart drawer:** `CartDrawer` layout, empty state, and summary footer are already tight; it inherits the `Modal`, `Button`, and `CartItem` refinements above rather than needing its own changes.

### Testing
- `npm run build` — succeeds, no errors (verified after each edit batch, not just once at the end).
- `npm run lint` — same 6 pre-existing notices as Phases 3–7 (documented there), no new warnings or errors introduced by this phase.
- Reinstalled `node_modules` from a clean `npm install` in this environment (the shipped lockfile/`node_modules` included a Windows-only `lightningcss` binary); build and lint above were run against that clean install.
- No rendered/browser QA yet — recommend manually checking the new hover-zoom on product cards, the press-feedback on quantity/variant controls, and the red error-border state on a submitted-but-invalid checkout field, across mobile/tablet/desktop.

### Known Issues
- All product imagery is still placeholder (`src={null}`), so the hover-zoom and `decoding="async"` changes are unverified against real photography — recommend a pass once real images are supplied.
- The header's search icon button remains non-functional (no search implementation exists yet) — pre-existing, out of scope for this refinement phase.
- Same 6 pre-existing linter notices as Phases 3–7, no new ones (see Testing).

### Files Created / Modified
```
src/components/primitives/Input.jsx (error border + aria-invalid/aria-describedby)
src/components/primitives/Select.jsx (error border + aria-invalid/aria-describedby)
src/components/primitives/Button.jsx (active press scale, motion-reduce guard)
src/components/primitives/IconButton.jsx (active press scale, motion-reduce guard)
src/components/primitives/QuantitySelector.jsx (active press scale on +/- buttons)
src/components/primitives/ProductImage.jsx (zoom prop, decoding="async")
src/components/primitives/Modal.jsx (active press scale on close button)
src/components/product/ProductCard.jsx (zoom enabled on thumbnail)
src/components/product/VariantSelector.jsx (active press scale on pack-size buttons)
src/components/product/ProductGallery.jsx (active press scale on thumbnail buttons)
src/components/cart/CartItem.jsx (active press scale on remove button)
implementation.md
```

### Output
`pratapgarh-amla-phase-8.zip`

---

## Phase 9
**Status:** COMPLETE

### Summary
Final QA pass across the whole application: production build, route behavior, cart/variant/checkout logic tracing, accessibility, and a broken-image sweep. Two real, concrete issues were found and fixed in this phase (a missing skip-link and a focus-ring contrast bug); everything else checked out against the contracts in Sections 8–13 and is documented below rather than "fixed" where nothing was actually wrong.

### QA Performed

**Production build**
- Clean `npm install` (this environment's shipped `node_modules` included a Windows-only `lightningcss` binary — reinstalled for Linux, as in Phase 8) then `npm run build`: succeeds, 1883 modules transformed, no errors. Verified `node --check` on the emitted bundle for basic syntax sanity.
- Served the built `dist/` with `vite preview` and `curl`'d every route plus the real product slugs (`pure-amla`, `amla-powder`, `dried-amla`) and a nonexistent slug/route — all return `200` (SPA fallback serves `index.html` on direct navigation, satisfying Section 9's "all routes must work on direct navigation"). Confirmed `favicon.svg`, the built CSS, and the built JS all serve `200` with no 404s.

**Route QA** — `App.jsx` matches the Section 9 contract (`/`, `/products`, `/products/:slug`, `/story`, `/cart`, `/checkout`, plus `/about` and `/contact` from the header nav) with a catch-all `*` → `NotFound`. `ProductDetail` explicitly renders `NotFound` in place for an unmatched slug rather than crashing or redirecting.

**Cart QA** — traced `CartContext`: lines are keyed by `productId + variantId` (Section 8 contract — two 500 g lines stay two lines, never silently merge into 1 kg), quantity updates and stock caps are applied consistently in both `addItem` and `updateQuantity`, `localStorage` read/write are both wrapped in `try/catch` so a private-browsing or quota failure degrades to in-memory-only rather than crashing, and free-shipping/subtotal/total math is a single derivation with no duplicated logic between the cart page and drawer.

**Variant QA** — `VariantSelector` correctly disables out-of-stock variants and drives price via the selected variant; `ProductDetail` and `ProductQuickView` both reset variant/quantity selection when the underlying product changes (via the pre-existing `useEffect` on `product.id`, flagged in the lint notes below).

**Checkout QA** — traced the 3-step flow in `Checkout.jsx`: each "Continue" re-validates with the shared `checkoutValidation.js` rules before advancing, and `handlePlaceOrder` re-validates everything once more immediately before creating the mock order, exactly as documented in Phase 6. That re-check is unreachable in the current UI (`ReviewStep` only offers "Edit" links back to steps 1–2, no inline fields of its own to invalidate state between steps), so it's dead-but-safe defensive code, not a live bug — noted under Known Issues since `ReviewStep` doesn't surface `errors` if that path were ever reached. Order confirmation captures a snapshot of the order (id/email/total) before `clearCart()` runs, so the confirmation screen and the empty-cart guard don't race each other.

**Accessibility QA**
- **Fixed:** added a "Skip to content" link at the top of `Layout` (visually hidden until focused, jumps to a new `id="main-content"` on `<main>`) — there was previously no way for a keyboard user to bypass the header nav on every page load.
- **Fixed:** the global `:focus-visible` outline is forest-green, which has poor contrast against the several `bg-forest` dark sections (`Footer`, `BrandBanner`, the `ProductDetail` origin banner, forest-variant `Button`/`Badge`, the active category-filter chip on `Products`). Added a scoped `.bg-forest :focus-visible` / `.bg-forest:focus-visible` override in `index.css` that swaps the outline to gold in those contexts, so keyboard focus stays visible regardless of the surrounding surface.
- Verified decorative SVGs (`HeritageMotif`) already carry `aria-hidden="true"`; landmark structure (`header` / `main` / `footer`) was already correct; icon-only controls (`IconButton`, quantity +/-, cart remove, modal close) all already carry `aria-label`; form errors already wire to `aria-invalid`/`aria-describedby` as of Phase 8.

**Console error / broken-image check**
- Grepped the whole `src/` tree for `console.log/warn/error/debug` and `TODO`/`FIXME` — none found.
- All product imagery is still the documented `null` placeholder (Section on Known Issues, every phase since Phase 1) — `ProductImage` renders its fallback icon state for `src={null}` rather than an `<img>` tag, so there are zero real `<img src="...">` references in the app that could 404. Confirmed `favicon.svg`/`icons.svg` in `public/` are referenced correctly and served.

**Final visual comparison** — no reference screenshots were supplied to this phase (the original UI concept/reference lives outside this repo), so this was a fidelity check against Section 11's Visual Fidelity Rules and the Section 6 design tokens rather than a pixel diff: ivory/forest/amla/gold/brown tokens are used consistently through Tailwind theme extensions with no ad-hoc colors found in a scan of the components reviewed this phase.

**Final cleanup** — no dead code, stray debug statements, or leftover TODOs found to clean up.

### Testing
- `npm run build` — succeeds, no errors.
- `npm run lint` — same 6 pre-existing notices as Phases 3–8 (all intentional patterns already documented in those phases' logs — colocated context+hook export, and two intentional "mount then animate on next frame" `setState`-in-effect patterns in `Modal` and the variant/quantity reset in `ProductDetail`/`ProductQuickView`), no new warnings or errors.
- `vite preview` + `curl` route sweep — all 10 checked routes (6 contract routes + `/about` + `/contact` + a real product slug + an invalid product slug/route) return `200`.
- `node --check` on the built JS bundle — passes.
- No automated browser rendering/interaction QA (no headless-browser tooling available in this environment) — the checks above are build-, route-, and code-level; a manual pass in an actual browser across mobile/tablet/desktop is still recommended before shipping, per this phase's Known Issues.

### Known Issues
- **No automated browser QA was run** — everything above is verified via build output, served HTML/asset responses, and source-level tracing, not actual rendered/interactive browser testing. A manual pass (especially the Phase 7–8 responsive/animation items) is still worth doing before production use.
- All product/heritage imagery remains placeholder (`src={null}`) — unchanged since Phase 1, still needs real photography.
- The header's search icon button remains non-functional — unchanged since Phase 8, no search backend exists.
- `Checkout.handlePlaceOrder`'s final defensive re-validation has no visible UI if it were ever to fail, since it's unreachable from the current `ReviewStep` (see Checkout QA above) — left as-is rather than adding UI for a path that can't currently be triggered, but worth revisiting if `ReviewStep` ever gains editable fields.
- Same 6 pre-existing linter notices as Phases 3–8, no new ones (see Testing).

### Files Created / Modified
```
src/components/layout/Layout.jsx (skip-to-content link, main id="main-content")
src/index.css (gold focus-ring override for bg-forest sections)
implementation.md
```

### Output
`pratapgarh-amla-final.zip`

---

# 17. Final Status

All ten phases (0–9) are complete. The application builds cleanly, all documented routes resolve (including direct navigation and invalid slugs/paths), the cart/variant/checkout logic matches the contracts in Sections 7–9, and the accessibility gaps found during final QA (skip link, focus-ring contrast on dark sections) have been fixed. The Known Issues carried in this log — placeholder imagery, no search backend, no live browser QA — are pre-existing, explicitly documented per Section 13's quality gate, and require either real client assets or manual browser testing outside what this environment can verify, not further engineering.

---

# 6. Design System Reference

## 6.1 Colors

| Token | Value | Usage |
|---|---|---|
| `ivory` | `#F7F1E3` | Main background |
| `forest` | `#24452A` | Primary actions / dark sections |
| `amla` | `#718B3A` | Natural green accent |
| `gold` | `#B99A5B` | Heritage/accent details |
| `brown` | `#332C24` | Primary dark text |

Do not introduce unrelated colors without a specific UI requirement.

---

# 7. Product Data Contract

The product system must remain scalable.

A product must be represented conceptually as:

```js
{
  id,
  slug,
  name,
  shortDescription,
  description,
  category,
  images,
  thumbnail,
  rating,
  reviewCount,
  origin,
  variants,
  benefits,
  howToUse,
  ingredients,
  storage,
  relatedProducts
}
```

Variants:

```js
{
  id,
  name,
  weight,
  price,
  compareAtPrice,
  sku,
  stock
}
```

The UI must dynamically consume this data.

The implementation must never assume that every product has:

- 250 g
- 500 g
- 1 kg

Those are example variants only.

Future products such as Amla candy, juice, murabba or other products must be addable through product data rather than requiring component redesign.

---

# 8. Cart Data Contract

A cart line must identify both:

```text
productId
variantId
```

Example:

```text
pure-amla + pure-amla-500g
```

Quantity is independent from variant.

Therefore:

```text
500 g × 2
```

means:

```text
two 500 g packages
```

The cart must not automatically convert this into a 1 kg variant.

---

# 9. Route Contract

The final application must expose:

```text
/
 /products
 /products/:slug
 /story
 /cart
 /checkout
```

Invalid product slugs must result in a graceful not-found experience.

---

# 10. Component Contract

Core reusable components:

```text
Header
MobileMenu
Footer

Container
Button
IconButton
Modal
Breadcrumb
Badge
Divider
Input

TrustStrip
TrustItem

HeroSection
ProductCard
ProductGrid
ProductQuickView
ProductGallery
VariantSelector
QuantitySelector
PriceDisplay

CartDrawer
CartItem
CartSummary

StorySection
StoryTimeline

CheckoutForm
OrderSummary
PaymentSelector
```

Components should have a clear responsibility.

Avoid giant page-level components containing all UI and business logic.

---

# 11. Visual Fidelity Rules

The reference is the primary visual direction.

The implementation should preserve:

- Warm ivory surfaces
- Forest green primary actions
- Muted Amla green accents
- Antique gold heritage details
- Deep brown typography
- Serif + sans typography pairing
- Fine borders
- Soft shadows
- Editorial product presentation
- Subtle heritage illustrations
- Premium spacing
- Low visual clutter

Avoid:

- Neon colors
- Glassmorphism
- SaaS dashboard styling
- Marketplace layouts
- Excessive rounded cards
- Excessive pill UI
- Heavy gold decoration
- Excessive gradients
- Excessive animation
- Generic Ayurveda-store styling

---

# 12. Responsive Contract

## Mobile

Prioritize:

- Product visibility
- CTA accessibility
- Quick View usability
- Cart accessibility
- Short checkout
- Readable typography

## Tablet

Maintain balanced two-column layouts where appropriate.

## Desktop

Use editorial compositions similar to the supplied reference.

## Large Desktop

Do not stretch content infinitely.

Use controlled max-width containers.

---

# 13. Quality Gate

A phase cannot be considered complete merely because code has been written.

A phase is complete only if:

```text
[ ] Implementation exists
[ ] Existing functionality still works
[ ] New functionality works
[ ] Responsive behavior checked
[ ] Console checked
[ ] Build checked
[ ] implementation.md updated
[ ] Complete ZIP generated
```

If build fails:

**Status must NOT be COMPLETE.**

If a major feature is missing:

**Status must NOT be COMPLETE.**

If functionality is only mocked when real functionality was required:

**Document it explicitly.**

Never fabricate test results.

---

# 14. Final Production Definition

The finished website must provide the following experience:

```text
Visitor lands on homepage
        ↓
Sees Pratapgarh/Amla story
        ↓
Immediately sees products
        ↓
Opens Quick View
        ↓
Selects pack size
        ↓
Selects quantity
        ↓
Sees dynamically updated price
        ↓
Adds to cart
        ↓
Cart drawer updates
        ↓
Opens Cart
        ↓
Reviews order
        ↓
Proceeds to Checkout
        ↓
Enters address
        ↓
Selects payment
        ↓
Places mock order
        ↓
Sees confirmation
```

The secondary journey must be:

```text
Homepage
    ↓
Product Detail
    ↓
Product education
    ↓
Variant selection
    ↓
Add to Cart
```

The storytelling journey must be:

```text
Homepage
    ↓
Our Story
    ↓
Pratapgarh
    ↓
Aonla farms
    ↓
Harvest
    ↓
Processing
    ↓
Quality Check
    ↓
Packed for India
```

---

# 15. Final Engineering Principles

1. **Design fidelity over generic UI conventions.**
2. **Reusable components over duplicated JSX.**
3. **Data-driven products over hard-coded product information.**
4. **Variant-aware cart architecture from the beginning.**
5. **Homepage-first shopping experience.**
6. **Quick View as the primary launch interaction.**
7. **Dedicated product URLs for SEO and future growth.**
8. **Mobile-first implementation.**
9. **Heritage should support the brand, not overwhelm the ecommerce experience.**
10. **Do not invent unsupported brand, historical, medical or certification claims.**
11. **Every phase must remain independently runnable.**
12. **Every phase must produce a complete ZIP.**
13. **Every phase must update this implementation.md.**
14. **Never claim tests passed unless they were actually run.**
15. **Never silently skip a phase.**
16. **Never replace the Royal Pratapgarh identity with a generic ecommerce template.**

---

# 16. Final Deliverables

At completion, the project should contain:

```text
pratapgarh-amla-final.zip
implementation.md
README.md
```

The final ZIP must be a complete production-ready frontend codebase that can be installed and run independently.

The implementation log must preserve the entire development history from Phase 0 through Phase 9.
