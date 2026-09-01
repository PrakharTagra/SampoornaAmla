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
**Status:** NOT STARTED

### Planned
- Homepage
- Hero
- Trust strip
- Product collection
- Product cards
- Heritage section
- Footer
- Responsive homepage

### Output
`pratapgarh-amla-phase-1.zip`

---

## Phase 2
**Status:** NOT STARTED

### Planned
- Product data model
- Product variants
- Product Quick View
- Gallery
- Variant selector
- Quantity selector
- Dynamic price
- Add to Cart
- Buy Now
- Accessible modal

### Output
`pratapgarh-amla-phase-2.zip`

---

## Phase 3
**Status:** NOT STARTED

### Planned
- `/products/:slug`
- Product gallery
- Product information
- Product tabs
- Variant selection
- Quantity
- Add to Cart
- Buy Now
- Origin story
- Related products

### Output
`pratapgarh-amla-phase-3.zip`

---

## Phase 4
**Status:** NOT STARTED

### Planned
- `/products`
- Collection header
- Product grid
- Product navigation
- Quick View integration

### Output
`pratapgarh-amla-phase-4.zip`

---

## Phase 5
**Status:** NOT STARTED

### Planned
- Cart Context
- Cart Drawer
- Cart Page
- Variant-aware cart
- Quantity updates
- Remove item
- localStorage persistence
- Subtotal
- Shipping
- Total

### Output
`pratapgarh-amla-phase-5.zip`

---

## Phase 6
**Status:** NOT STARTED

### Planned
- `/checkout`
- Step indicator
- Contact form
- Delivery address
- Payment selection
- Order summary
- Validation
- Mock confirmation

### Output
`pratapgarh-amla-phase-6.zip`

---

## Phase 7
**Status:** NOT STARTED

### Planned
- `/story`
- Heritage hero
- Origin story
- Sourcing journey
- Timeline
- Brand values
- Responsive storytelling

### Output
`pratapgarh-amla-phase-7.zip`

---

## Phase 8
**Status:** NOT STARTED

### Planned
- Visual refinement
- Responsive refinement
- Typography refinement
- Spacing refinement
- Image refinement
- Modal refinement
- Cart drawer refinement
- Form refinement
- Accessibility refinement
- Animation refinement

### Output
`pratapgarh-amla-phase-8.zip`

---

## Phase 9
**Status:** NOT STARTED

### Planned
- Production build
- Route QA
- Responsive QA
- Cart QA
- Variant QA
- Checkout QA
- Accessibility QA
- Console error check
- Broken image check
- Final visual comparison
- Final cleanup

### Output
`pratapgarh-amla-final.zip`

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
