# Chester Electrical, Plumbing, and Heating — Landing Page

A custom, premium one-page marketing site for **Chester Electrical, Plumbing, and Heating**,
a family owned and operated trades company serving Chester, Nova Scotia since 1988.

Built with **Next.js (App Router) + React + TypeScript + Tailwind CSS**. Fully static —
no backend, no database, no CMS. Deploys to Vercel as-is.

---

## 1. File structure

```
chester-eph/
├── app/
│   ├── layout.tsx        # <html> shell, SEO metadata, Google Fonts links
│   ├── page.tsx          # Page composition (imports every section in order)
│   └── globals.css       # Design tokens, blueprint texture, buttons, type
├── components/
│   ├── Header.tsx        # Sticky header: logo, nav, phone, CTA, mobile menu
│   ├── Hero.tsx          # Split hero + "Since 1988" stamp + service strip
│   ├── Services.tsx      # Electrical / Plumbing / Heating editorial bands
│   ├── TrustBand.tsx     # Dark credibility band (connected trade-run nodes)
│   ├── ResidentialCommercial.tsx  # Two image-backed panels w/ pipe seam
│   ├── About.tsx         # History section + Est. 1988 mark + stats
│   ├── Process.tsx       # 3-step conduit-run "how it works"
│   ├── ContactCTA.tsx    # High-contrast contact directory (direct lines)
│   └── Footer.tsx        # Logo, coverage, contact, copyright
├── lib/
│   └── site.ts           # ← Single source of truth for phone/email/Facebook
├── public/
│   ├── logo.png          # Black logo (used in the header)
│   ├── logo-white.png    # White logo (used in the dark footer)
│   └── images/           # Placeholder service/scene imagery (swap with photos)
├── package.json
├── tailwind.config.ts    # Brand colors + fonts (volt/pipe/copper accents)
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── README.md
```

**Where to edit common things**

| You want to change…            | Edit this file                              |
|--------------------------------|---------------------------------------------|
| Phone numbers / email / FB     | `lib/site.ts`                               |
| Brand colors / fonts           | `tailwind.config.ts`                        |
| Page title / meta description  | `app/layout.tsx`                            |
| Section order                  | `app/page.tsx`                              |
| Any section's copy/layout      | the matching file in `components/`          |

---

## 2. Run it locally

You need [Node.js](https://nodejs.org) 18.18+ (Node 20 LTS recommended).

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
```

To test a production build locally:

```bash
npm run build    # builds the static site (should finish with zero errors)
npm run start    # serves the production build at http://localhost:3000
```

---

## 3. Replace the placeholder logo & photos

The project ships with on-brand placeholders so it looks finished out of the box.
Swapping in real assets is just dropping files into `public/`:

- **Logo** — replace `public/logo.png` (header) and `public/logo-white.png`
  (footer, for dark backgrounds). Keep the same filenames and it just works.
- **Photos** — replace any file in `public/images/`
  (`hero.svg`, `electrical.svg`, `plumbing.svg`, `heating.svg`,
  `residential.svg`, `commercial.svg`, `about.svg`) with your own image.

  If your new photo is a `.jpg`/`.png` (recommended for real photos), either
  name it the same (e.g. save your hero photo as `hero.svg`’s replacement and
  update the path) **or** keep the extension and update the one matching path:
  - Hero image → `components/Hero.tsx` (`url('/images/hero.svg')`)
  - Service images → `components/Services.tsx` (`image:` field per service)
  - Residential/Commercial → `components/ResidentialCommercial.tsx`
  - About → `components/About.tsx`

  Tip: landscape photos around 1600×1200 look best. The dark gradient overlays
  are intentional — they keep white text readable on top of any photo.

---

## 4. Push it to GitHub

Create an empty repository on GitHub first (no README/license), then:

```bash
cd chester-eph
git init
git add .
git commit -m "Initial commit: Chester EPH landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/chester-eph.git
git push -u origin main
```

---

## 5. Deploy on Vercel

**Option A — Dashboard (easiest)**
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to the `chester-eph` repository.
3. Vercel auto-detects Next.js — leave all defaults (Framework: Next.js,
   Build Command: `next build`, Output: `.next`).
4. Click **Deploy**. Your site goes live at a `*.vercel.app` URL.
5. (Optional) Add the custom domain (e.g. `ceph.ca`) under
   **Project → Settings → Domains**.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # follow prompts to link/deploy a preview
vercel --prod   # deploy to production
```

Every push to `main` after that triggers an automatic production deploy.

---

## Notes

- Fonts (Archivo, Oswald, Inter) load from Google Fonts via a stylesheet link in
  `app/layout.tsx`. No build-time network calls are required.
- All phone numbers are `tel:` links, the email is a `mailto:` link, and the
  Facebook button points to https://www.facebook.com/ChesterEPH.
- Accessibility floor: semantic landmarks, visible keyboard focus, and
  `prefers-reduced-motion` respected.
```
