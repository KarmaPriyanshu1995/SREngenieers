# MASTER CONTEXT — SR Engineering Works Website
> Read this file ONCE at the start of every phase. Do not re-explain it back to me. Follow it exactly.

## 1. Business
- **Name:** SR Engineering Works | **Prop:** Bhawar Singh
- **Tagline:** Manufacturer of Hydraulic & Material Handling Equipment — Jaipur, since 10+ years
- **Address:** 60, Sana Dungar, Jaipur, Rajasthan - 302012
- **Phones:** +91 84268 65871 · 94686 13064 · 82395 46188 (all click-to-call `tel:` links)
- **Promise:** Quality Product + On-Time Delivery + Best After-Sales Service
- **Products (6):**
  1. Hydraulic Scissor Lift — 500kg to 5000kg capacity
  2. Hydraulic Goods Lift & Lift Table — loading/unloading
  3. Electro Platform Trolley — battery & electric operated
  4. Industrial Loading Trolley — heavy duty wheels
  5. Pneumatic Lifting System — custom solution
  6. Custom Fabrication Work — as per drawing
- **Key features:** Heavy Duty MS Structure · Safety Railing & Emergency Stop · 1 Year Warranty · Installation + AMC · Pan-India Delivery

## 2. Tech Stack (fixed — do not suggest alternatives)
- Next.js 14+ App Router, **TypeScript**, static export (`output: 'export'` in next.config)
- Tailwind CSS, Framer Motion for animation
- `next/image` with `unoptimized: true` (static export), `next/font` for Google Fonts
- No backend. Contact = `tel:` + WhatsApp deep link (`https://wa.me/918426865871?text=...`)
- Deploy target: Vercel

## 3. Design System — "Factory Floor" (use these tokens, never invent new colors)
Grounded in the subject: hydraulic lifts are steel machines painted in safety colors. The site should feel like a machine spec sheet, not a SaaS landing page.

```
--steel-950: #14181D   (page background, near-black steel)
--steel-800: #232A33   (cards, panels)
--steel-600: #46525F   (borders, dividers)
--steel-300: #9AA7B4   (secondary text)
--white:     #F2F4F6   (primary text)
--hydraulic: #F5B300   (safety yellow — CTAs, accents, ONE accent only)
```
- **Display font:** Saira Condensed (700/800) — uppercase, tight tracking, industrial signage feel
- **Body font:** Barlow (400/500)
- **Signature element:** "Machine Nameplate" cards — product cards styled like riveted metal spec plates (thin steel border, corner rivet dots, MODEL / CAPACITY rows in mono-style labels). This is the ONE memorable device; everything else stays quiet.
- **Secondary device:** thin caution-stripe (45° yellow/steel) used ONLY as section divider on hero and footer — nowhere else.
- Motion: restrained. One orchestrated hero load sequence, scroll-fade-up (`whileInView`, once:true, y:24, duration 0.5) for sections, subtle hover lift on cards. Respect `prefers-reduced-motion`. No parallax spam, no floating blobs, no gradients.

## 4. Pages (4)
1. `/` Home — hero, why-us, featured products (3), stats strip, CTA
2. `/products` — all 6 products as nameplate cards + detail sections
3. `/about` — story, process, features, gallery (7 photos: grid 4+3, use `/public/work/1.jpg`…`7.jpg` placeholders)
4. `/contact` — phones, WhatsApp CTA, address + embedded Google Map iframe, enquiry via WhatsApp prefilled message

## 5. Shared Rules
- Components in `/components`, one file per component, reuse everywhere
- Every page: proper `metadata` export (title, description with keywords like "hydraulic scissor lift manufacturer Jaipur")
- Sticky navbar (steel-950/90 blur), yellow "Call Now" button always visible; mobile: hamburger with slide-in menu
- Footer: NAP (name-address-phone) repeated for local SEO, product links, caution-stripe top border
- Mobile-first, semantic HTML, alt text on all images, visible focus states
- Copy tone: plain, confident, benefit-first. No marketing fluff like "revolutionize". Numbers over adjectives ("5000kg capacity", "10+ years", "1 year warranty").

## 6. Output Rules (token efficiency)
- Do NOT explain the code back to me. Write files directly.
- Do NOT repeat this context in responses.
- If something is ambiguous, pick the option consistent with §3 and move on.