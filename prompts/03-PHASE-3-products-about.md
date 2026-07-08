# PHASE 3 — Products (`/products`) + About (`/about`)
> Read `00-MASTER-CONTEXT.md`. Reuse existing components. Build only what's below.

## `/products`
1. **Page header:** compact steel-800 band — eyebrow "PRODUCT RANGE", heading "SIX MACHINES. ONE STANDARD.", one-line sub about custom capacities available.
2. **Grid:** all 6 products as `NameplateCard`s (2-col mobile→1, 3-col desktop), data from `lib/data.ts`. Each card links to its detail section below via `#slug` anchor (smooth scroll).
3. **Detail sections:** for each product, alternating left/right layout — image (`/products/<slug>.jpg`) in nameplate frame, name, 2-line description, spec table (2-col: Capacity, Structure, Power, Warranty — fill sensible values per product, mark custom ones "As per requirement"), 4 feature ticks, yellow `Enquire on WhatsApp` button with prefilled message `"Hi, I want details of <Product Name>"`.
4. **Custom Fabrication** section gets a different treatment: full-width band, "Have a drawing? We'll build it." + upload nothing — just WhatsApp CTA.
5. End with `CTABand`.

## `/about`
1. **Header band:** eyebrow "ABOUT US", heading "10+ YEARS OF HEAVY LIFTING."
2. **Story:** 2-col — left photo `/work/2.jpg` nameplate-framed; right 2 short paragraphs (write them): trusted Jaipur manufacturer of hydraulic & material handling equipment, led by Prop. Bhawar Singh; mission = quality product, on-time delivery, best after-sales service. Plain confident tone, no fluff.
3. **Values row:** 3 items — Quality Build / On-Time Delivery / After-Sales Support — each with one concrete line (MS structure & safety rails; committed dispatch dates; installation + AMC pan-India).
4. **OUR WORK gallery:** 7 photos `/work/1.jpg`…`7.jpg` in a 4+3 grid (2-col on mobile). Each in a thin steel-600 border, hover: border → hydraulic + slight zoom on image (overflow hidden). Lazy-loaded, descriptive alt text like "Hydraulic scissor lift installed at client site, Jaipur".
5. **Process** (reuse Phase 2 process strip component — extract it to a shared component if it isn't already).
6. `CTABand`.

## Metadata
- /products title: "Hydraulic Scissor Lift & Material Handling Equipment Manufacturer Jaipur | SR Engineering Works"
- /about title: "About SR Engineering Works — Hydraulic Equipment Manufacturer, Jaipur"

**STOP after this phase.**