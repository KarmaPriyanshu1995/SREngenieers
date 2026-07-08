# PHASE 4 — Contact (`/contact`) + SEO + Polish + Deploy
> Read `00-MASTER-CONTEXT.md`. Final phase.

## `/contact`
1. **Header band:** eyebrow "CONTACT", heading "TALK TO THE MANUFACTURER. DIRECTLY."
2. **2-col layout:**
   - **Left — contact plate:** oversized nameplate card. Rows: PROP — Bhawar Singh · ADDRESS — 60, Sana Dungar, Jaipur, Rajasthan 302012 · PHONES — all 3 as big tappable `tel:` links with phone icon · HOURS — Mon–Sat, 9 AM–7 PM. Below: full-width green-tinted `Chat on WhatsApp` button (`wa.me` link, prefilled "Hi, I have an enquiry about material handling equipment").
   - **Right — enquiry composer (no backend):** Name, Product (select from 6), Message fields held in React state; single button `Send via WhatsApp` builds `wa.me` URL with encoded message and opens it. Note under button: "Opens WhatsApp with your message ready to send."
3. **Map:** full-width Google Maps embed iframe (search query "Sana Dungar Jaipur 302012"), `loading="lazy"`, steel border, grayscale filter that removes on hover.
4. `CTABand` variant: "Prefer a call? We pick up." + phones.

## SEO / Final polish (whole site)
1. `app/sitemap.ts` + `app/robots.ts` (static export compatible).
2. JSON-LD `LocalBusiness` schema in root layout: name, address, geo (Jaipur), telephone (all 3), openingHours, `@type: "Organization"` products mention.
3. OpenGraph metadata + `/public/og.jpg` placeholder reference on every page.
4. `not-found.tsx` styled page: "404 — This load couldn't be lifted." + home link.
5. Favicon: simple "SR" monogram SVG, hydraulic yellow on steel-950.
6. Accessibility pass: focus-visible rings (hydraulic), skip-to-content link, contrast check on yellow-on-steel (use steel-950 text on yellow buttons).
7. `prefers-reduced-motion`: verify all Framer Motion animations degrade to opacity-only or none.
8. Run `npm run build`; fix any static-export errors (no dynamic APIs, no server actions).

## Deploy checklist (output as final message, briefly)
- Push to GitHub → import in Vercel → framework auto-detected → deploy
- Replace placeholder images in `/public/work` and `/public/products` (compress to WebP ≤ 200 KB each)
- Add real Google Maps place link once business is on Google Maps / add Google Business Profile

**END OF PROJECT.**