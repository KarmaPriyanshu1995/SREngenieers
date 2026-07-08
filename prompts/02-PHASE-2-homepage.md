# PHASE 2 — Homepage (`/`)
> Read `00-MASTER-CONTEXT.md`. Reuse Phase 1 components. Build only what's below.

## Sections (top → bottom)

### 1. Hero (the thesis — spend the motion budget here)
- Full-viewport, steel-950. Left: eyebrow "JAIPUR · SINCE 2014+", display headline in 2 stacked lines:
  `WE BUILD MACHINES` / `THAT LIFT INDIA.` — second line's "LIFT" in hydraulic yellow.
- Sub: "Hydraulic scissor lifts, goods lifts & material handling equipment. 500 kg to 5000 kg. Built heavy, delivered on time, serviced for life."
- CTAs: yellow solid `View Products` (→ /products), outlined `Call +91 84268 65871`.
- Right side: hero image placeholder `/work/1.jpg` inside an oversized nameplate frame with a spec strip below it: `CAP 5000 KG · MS STRUCTURE · ISI GRADE`.
- **Load sequence (Framer Motion, staggered, once):** eyebrow → headline lines rise like a lift platform (translateY 100% → 0 with slight ease-out, 0.12s stagger) → sub + CTAs fade → nameplate frame border draws in.
- Bottom edge of hero: the caution-stripe divider (first of only two uses).

### 2. Trust strip
4 inline stats, display font numbers: `10+ Years` · `5000 KG Max Capacity` · `1 Yr Warranty` · `Pan-India Delivery`. Count-up animation on view (respect reduced motion → static).

### 3. Featured products
`SectionHeading` eyebrow "OUR MACHINES". 3 `NameplateCard`s (Scissor Lift, Goods Lift, Electro Trolley) from `lib/data.ts`, staggered fade-up. Link row → "View all 6 products →" to /products.

### 4. Why SR Engineering
2-column: left sticky heading "Built like it's ours."; right list of the 5 FEATURES — each row: yellow square bullet, bold title, one plain-language line (write it, benefit-first, no fluff).

### 5. Process mini-strip (real sequence, so numbering is justified)
01 Requirement & site visit → 02 Design & fabrication → 03 Installation & testing → 04 AMC & support. Horizontal on desktop, vertical on mobile, thin steel-600 connector line.

### 6. `CTABand` + Footer (already built)

## Acceptance
- LCP element is the headline (no image blocking)
- All copy from `lib/data.ts` where it exists; new copy follows §5 tone
- Lighthouse perf ≥ 90 on mobile

**STOP after this phase.**