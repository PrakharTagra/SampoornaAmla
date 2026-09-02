# Image placeholders

Drop your images at these exact paths/filenames and they'll appear
automatically — no code changes needed. Until an image is added (or if
one fails to load), each spot gracefully falls back to a themed
placeholder so nothing ever looks broken.

| Where it's used                              | Path                                  | Suggested size |
|-----------------------------------------------|----------------------------------------|-----------------|
| Navbar logo                                    | `/images/logo.png`                     | ~240×80px, transparent PNG/SVG |
| Footer logo (light version, optional)          | `/images/logo-light.png`               | ~240×80px, transparent PNG/SVG |
| Homepage hero banner — slide 1                 | `/images/hero/banner-1.jpg`            | 1920×1080px |
| Homepage hero banner — slide 2                 | `/images/hero/banner-2.jpg`            | 1920×1080px |
| "Our Story" banner (top of Home #story section)| `/images/story/story-hero.jpg`         | 1920×1080px |
| "Rooted in Pratapgarh" section image           | `/images/story/rooted-in-pratapgarh.jpg` | 1200×900px |
| "Sourcing journey" section (just below the story hero) | `/images/story/sourcing-journey.jpg` | 1920×1080px |
| Product page "Origin" story card               | `/images/story/product-origin.jpg`     | 1000×1200px (portrait, fills left half of the card) |

To add more hero slides, add another object to the `SLIDES` array in
`src/components/layout/Hero.jsx` with a new `image` path (e.g.
`/images/hero/banner-3.jpg`).
