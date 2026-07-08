# How to Use These Files (Token-Efficient Workflow)

## Files
- `00-MASTER-CONTEXT.md` — single source of truth (business, stack, design system, rules)
- `01`–`04` — one phase per file, each ends with **STOP** so the AI never over-generates

## Workflow (Claude Code recommended)
1. Create empty project folder, copy all 5 `.md` files into a `/prompts` folder inside it.
2. Start Claude Code in that folder. First message:
   ```
   Read prompts/00-MASTER-CONTEXT.md and prompts/01-PHASE-1-setup-shell.md, then execute Phase 1.
   ```
3. Review the output, run `npm run dev`, check visually. Fix issues with SHORT targeted messages ("navbar overlaps hero on mobile, fix") — never re-paste the context.
4. Next phase, new message: `Execute prompts/02-PHASE-2-homepage.md`. (Context file is already read; only re-mention it in a fresh session.)
5. Repeat for phases 3 and 4.

## Why this saves tokens
- Context written once, referenced by file path — never re-pasted
- "Do not explain code back" rule kills long AI commentary
- `lib/data.ts` single source of truth = no repeated business info in every component
- Hard STOP per phase = no speculative extra pages/features
- Acceptance criteria = fewer fix-iteration loops

## Before going live
- Replace `/public/work/1.jpg`…`7.jpg` and `/public/products/*.jpg` with real photos (WebP, ≤200 KB)
- Verify all 3 phone numbers and the WhatsApp number
- Create a Google Business Profile for local SEO — biggest free ranking boost for "hydraulic scissor lift manufacturer Jaipur" searches