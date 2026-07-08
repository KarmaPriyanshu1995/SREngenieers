# PHASE 1 — Project Setup + Site Shell
> First read `00-MASTER-CONTEXT.md`. Then do only the tasks below. No explanations, just build.

## Tasks
1. **Scaffold:** Next.js 14 App Router + TypeScript + Tailwind. Configure `next.config.mjs` with `output: 'export'` and `images: { unoptimized: true }`.
2. **Design tokens:** Put the §3 color tokens in `globals.css` as CSS variables + extend Tailwind theme (`steel`, `hydraulic` colors). Load Saira Condensed + Barlow via `next/font/google` in root layout, expose as `--font-display` / `--font-body`.
3. **`lib/data.ts`:** Export typed constants — `BUSINESS` (name, prop, address, phones[], whatsapp link), `PRODUCTS[]` (id, slug, name, capacity/spec, description 2 lines, features[4], image path `/products/<slug>.jpg`), `FEATURES[]` (the 5 key features from §1). All pages must import from here — single source of truth.
4. **Components:**
   - `Navbar.tsx` — sticky, steel-950/90 + backdrop-blur, logo text "SR ENGINEERING WORKS" in display font, links (Home/Products/About/Contact), yellow `Call Now` button (`tel:` first phone). Mobile: hamburger → Framer Motion slide-in panel.
   - `Footer.tsx` — 3 columns (About blurb + NAP / Product links / Contact with all 3 phones + WhatsApp), caution-stripe top border (CSS repeating-linear-gradient 45°, 8px, hydraulic/steel-950), bottom bar "© 2026 SR Engineering Works, Jaipur".
   - `Section.tsx` — wrapper with container + `whileInView` fade-up (y:24, 0.5s, once) respecting `prefers-reduced-motion`.
   - `SectionHeading.tsx` — small yellow eyebrow label (uppercase, tracking-widest) + big display-font heading.
   - `NameplateCard.tsx` — the signature card: steel-800 bg, 1px steel-600 border, 4 corner rivet dots (absolute positioned 4px circles), top row "MODEL" label + product name, spec row (e.g. "CAPACITY — 500–5000 KG") in mono/uppercase, image slot, hover: border turns hydraulic + translate-y -4px.
   - `CTABand.tsx` — full-width steel-800 band: "Need a custom lifting solution?" + phone + WhatsApp buttons.
5. Wire layout: root `layout.tsx` = Navbar + children + Footer. Placeholder home page rendering one `NameplateCard` to verify the design system.

## Acceptance
- `npm run build` passes with static export
- Navbar/footer responsive at 375px and 1440px
- Nameplate card visually matches spec (rivets, yellow hover)

**STOP after this phase. Do not start Phase 2.**