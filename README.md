# Ornate Solar — Premium Next.js Website

A fully functional, premium solar company website rebuilt for Vercel deployment with Supabase backend.

## 🚀 Quick Start

### 1. Deploy to Vercel

**Option A — Vercel CLI:**
```bash
npm install -g vercel
cd ornate-solar
npm install
vercel
```

**Option B — GitHub:**
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project → Select the repo
3. Add environment variables (see below)
4. Deploy

---

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to **SQL Editor** and paste the contents of `supabase-schema.sql`
3. Click **Run** — this creates all tables with RLS policies
4. Go to **Settings → API** and copy:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

### 3. Add Environment Variables

Create `.env.local` (copy from `.env.local.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...   # optional, for admin operations
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

In **Vercel**: Go to your project → Settings → Environment Variables → add the same.

---

## 📁 Project Structure

```
ornate-solar/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About Us
│   │   ├── contact/page.tsx      # Contact + Quote form
│   │   ├── blog/page.tsx         # Blog listing
│   │   ├── careers/page.tsx      # Careers + Application form
│   │   ├── pm-kusum/page.tsx     # PM KUSUM Yojana
│   │   └── products/
│   │       ├── solar-panels/     # Solar panels page
│   │       ├── inverters/        # Inverters page
│   │       ├── energy-storage/   # UnityESS BESS page
│   │       └── inroof/           # InRoof + Ornate products
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky nav with mega-menu
│   │   │   └── Footer.tsx        # Comprehensive footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx  # Animated counters
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── InnovationSection.tsx
│   │   │   ├── PMKusumBanner.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ClientsSection.tsx  # Auto-scrolling ticker
│   │   │   ├── BlogSection.tsx
│   │   │   └── QuoteSection.tsx  # Supabase-connected form
│   │   └── ui/
│   │       └── WhatsAppWidget.tsx
│   └── lib/
│       └── supabase.ts           # Supabase client + types
├── supabase-schema.sql           # Database schema — run this first
├── .env.local.example            # Environment variables template
├── vercel.json                   # Vercel config
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🗄️ Supabase Tables

| Table | Purpose |
|-------|---------|
| `quote_requests` | Homepage + contact quote form submissions |
| `contact_messages` | Contact page messages |
| `career_applications` | Job applications from careers page |
| `blog_posts` | Blog content (CMS-ready) |

All tables have Row Level Security enabled. Public users can **insert** (forms) and **read** blog posts.

---

## 🎨 Design System

- **Background:** `#0A0E1A` (deep midnight navy)
- **Accent:** `#FFC107` (solar amber) → gradient to `#FF8F00`
- **Typography:** Syne (display/headings) + Inter (body)
- **Components:** Glass-morphism cards, amber gradients, grid backgrounds

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Homepage with hero, stats, products, blog, quote form |
| `/about` | Company history, timeline, R&D, values |
| `/contact` | Contact form (Supabase) + offices |
| `/blog` | Blog listing with featured post |
| `/careers` | Job listings + application form (Supabase) |
| `/pm-kusum` | PM KUSUM Yojana detail page |
| `/products/solar-panels` | RenewSys, First Solar, Canadian Solar |
| `/products/inverters` | Hopewind, SolarEdge, Enphase, Fronius |
| `/products/energy-storage` | UnityESS A, C, Infinity |
| `/products/inroof` | InRoof, OJAS, Solar Carport, AgriPV |

---

## 🔧 Customisation

**Logo:** Replace the `Zap` icon in `Navbar.tsx` with an `<Image>` component pointing to your logo file.

**Colors:** Edit `tailwind.config.js` — change `solar` palette to your brand colors.

**Content:** All content is in the page files under `src/app/`. Edit directly.

**Blog:** Manage posts via Supabase dashboard → `blog_posts` table, or build an admin panel.

**Images:** Replace emoji placeholders in blog cards with `<Image>` components from Next.js.

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Icons:** Lucide React
- **Language:** TypeScript

---

## 🚢 Production Checklist

- [ ] Add real logo image
- [ ] Add real product images (replace emoji placeholders)
- [ ] Set up Supabase project and run schema SQL
- [ ] Add all environment variables to Vercel
- [ ] Update contact phone numbers and email
- [ ] Configure custom domain in Vercel
- [ ] Add Google Analytics or Plausible
- [ ] Test all forms submit correctly to Supabase
- [ ] Set up email notifications in Supabase (via webhooks or pg_notify)
