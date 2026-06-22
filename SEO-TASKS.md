# Solicate SEO — Execution Checklist

**Source:** [SEO-AUDIT.md](file:///Users/yswnth/Documents/solicate-website/SEO-AUDIT.md)
**Created:** 2026-06-20
**Current Score:** 35 / 100

---

## 🔴 TIER 1 — Critical (Fix Immediately)

### 1. Create `robots.txt`

- [x] Create `/robots.txt` at project root
- [x] Add `User-agent: *` with `Allow: /`
- [x] Add `Sitemap: https://solicate.in/sitemap.xml`
- [x] Verify file is accessible at `localhost:3000/robots.txt`

**File:** `CREATE` → `/robots.txt`

---

### 2. Create `sitemap.xml`

- [x] Create `/sitemap.xml` at project root
- [x] Add all 5 existing page URLs:
  - [x] `https://solicate.in/`
  - [x] `https://solicate.in/seo-first-website-revamp/`
  - [x] `https://solicate.in/seo-revamp-audit/`
  - [x] `https://solicate.in/work/`
  - [x] `https://solicate.in/website-performance-questions/`
- [x] Set `<changefreq>` and `<priority>` values per page
- [x] Verify file is accessible at `localhost:3000/sitemap.xml`
- [ ] Update sitemap whenever new Hub articles are published

**File:** `CREATE` → `/sitemap.xml`

---

### 3. Add Canonical Tags to All Pages

- [x] `/index.html` → `<link rel="canonical" href="https://solicate.in/">`
- [x] `/seo-first-website-revamp/index.html` → `<link rel="canonical" href="https://solicate.in/seo-first-website-revamp/">`
- [x] `/seo-revamp-audit/index.html` → `<link rel="canonical" href="https://solicate.in/seo-revamp-audit/">`
- [x] `/work/index.html` → `<link rel="canonical" href="https://solicate.in/work/">`
- [x] `/website-performance-questions/index.html` → `<link rel="canonical" href="https://solicate.in/website-performance-questions/">`

**Files:** `MODIFY` → All 5 `index.html` files

---

### 4. Fix 5 Broken Internal Links (404s)

All linked from the Hub page. Two are also linked from all footers.

| Dead Link | Linked From |
|-----------|-------------|
| `/why-is-my-website-not-performing/` | Hub |
| `/website-redesign-vs-seo-revamp/` | Hub + all footers |
| `/why-is-my-website-not-getting-enquiries/` | Hub + all footers |
| `/why-is-my-website-not-ranking-on-google/` | Hub |
| `/seo-strategy-for-wedding-businesses/` | Hub |

**Choose one:**

- [ ] **Option A (Recommended):** Create all 5 article pages with real content (see Tier 2, Task 12)
- [x] **Option B (Temporary):** Remove dead links from Hub page and footers until articles exist

**Files:** `MODIFY` → `/website-performance-questions/index.html` + all footer sections

---

### 5. Add Structured Data / Schema Markup

#### a) Organization Schema — Homepage

- [x] Add `<script type="application/ld+json">` to `/index.html`
- [x] Use `@type: ProfessionalService`
- [x] Include: name, url, description, areaServed, serviceType, sameAs

#### b) FAQPage Schema — Homepage

- [x] Add FAQPage JSON-LD to `/index.html`
- [x] Include all 3 existing FAQ Q&A pairs
- [x] Add more FAQs later as they are written (see Task 8c below)

#### c) Service Schema — Services Page

- [x] Add Service JSON-LD to `/seo-first-website-revamp/index.html`
- [x] Include: name, provider, description, areaServed

#### d) BreadcrumbList Schema — All Inner Pages

- [x] `/seo-first-website-revamp/index.html` → Home > Services
- [x] `/seo-revamp-audit/index.html` → Home > Audit
- [x] `/work/index.html` → Home > Work
- [x] `/website-performance-questions/index.html` → Home > Hub

**Files:** `MODIFY` → All 5 `index.html` files

---

## 🟠 TIER 2 — High Priority (Fix This Week)

### 6. Add Open Graph + Twitter Card Meta Tags

Add to `<head>` of every page:

- [x] `/index.html`
  - [x] `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`
  - [x] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [x] `/seo-first-website-revamp/index.html` — same set
- [x] `/seo-revamp-audit/index.html` — same set
- [x] `/work/index.html` — same set
- [x] `/website-performance-questions/index.html` — same set
- [x] Create OG image (`/og-image.png`, 1200×630px)

**Files:** `MODIFY` → All 5 `index.html` | `CREATE` → `/og-image.png`

---

### 7. Add Favicon

- [x] Design favicon using Solicate "S" or logo mark
- [x] Create `/favicon.ico`
- [x] Create `/favicon.svg`
- [x] Create `/apple-touch-icon.png`
- [x] Add `<link rel="icon">` tags to all 5 pages:
  - [x] `/index.html`
  - [x] `/seo-first-website-revamp/index.html`
  - [x] `/seo-revamp-audit/index.html`
  - [x] `/work/index.html`
  - [x] `/website-performance-questions/index.html`

**Files:** `CREATE` → `/favicon.ico`, `/favicon.svg`, `/apple-touch-icon.png` | `MODIFY` → All 5 `index.html`

---

### 8. Add `<img>` Tags with Alt Text (Zero Images Currently)

- [x] Convert Stillness Co. mockup from CSS `background-image` to `<img>` tag
  - [x] Add `alt` text with keywords
  - [x] Add `width` and `height` attributes
  - [x] Add `loading="lazy"`
- [ ] Add before/after screenshots to Work page case studies
  - [ ] Grand Weddings — before/after
  - [ ] Stillness Co. — before/after
  - [ ] Customized Gifts — before/after
  - [ ] Ayesha + Luxe — before/after
- [ ] All `alt` text should include relevant keywords (e.g., "website revamp by Solicate")

**Files:** `MODIFY` → `/index.html`, `/work/index.html`

---

### 9. Rewrite All Meta Descriptions (140-160 chars each)

| Page | New Meta Description |
|------|---------------------|
| Homepage | "Solicate builds SEO-first websites for wedding planners, photographers, and visual businesses across India. Better Google rankings. More serious enquiries." |
| Services | "SEO-First Website Revamp: search structure, local SEO pages, proof galleries, WhatsApp CTAs, and premium design for wedding and event businesses in India." |
| Audit | "Submit your website for a free manual SEO audit. We find missing local SEO, broken proof flow, and buried CTAs before you spend on a redesign. India-focused." |
| Work | "See how Solicate rebuilt websites for Grand Weddings, Stillness Co., and other visual businesses — with real case studies showing SEO and enquiry results." |
| Hub | "Common questions from wedding and event businesses: why your website isn't ranking, not getting enquiries, and what to fix before redesigning." |

- [x] Update `/index.html` meta description
- [x] Update `/seo-first-website-revamp/index.html` meta description
- [x] Update `/seo-revamp-audit/index.html` meta description
- [x] Update `/work/index.html` meta description
- [x] Update `/website-performance-questions/index.html` meta description

**Files:** `MODIFY` → All 5 `index.html` files

---

### 10. Optimize Title Tags

| Page | New Title |
|------|----------|
| Homepage | `Solicate — SEO-First Website Revamps for Visual Businesses in India` |
| Services | `SEO-First Website Revamp for Wedding & Event Businesses — Solicate` |
| Audit | `Free SEO Revamp Audit — Solicate` |
| Work | `Website Revamp Case Studies — Solicate` |
| Hub | `Website Performance Questions — Why Your Site Isn't Ranking or Converting` |

- [x] Update `/index.html` title tag
- [x] Update `/seo-first-website-revamp/index.html` title tag
- [x] Update `/seo-revamp-audit/index.html` title tag
- [x] Update `/work/index.html` title tag
- [x] Update `/website-performance-questions/index.html` title tag

**Files:** `MODIFY` → All 5 `index.html` files

---

## 🟡 TIER 3 — Medium Priority (Fix Within 2 Weeks)

### 11. Fix Homepage Heading Hierarchy (10 H2s → 4-5 H2s)

**Keep as H2:**
- [x] Problem statement ("The problem is not only that your website looks old...")
- [x] 5-Step System
- [x] Case study section (combine Grand Weddings + Anatomy under one H2)
- [x] Common Questions / FAQ

**Demote to H3:**
- [x] "Built for businesses where Instagram runs ahead of Google."
- [x] "What you get vs. what you need."
- [x] "More Fixes"
- [x] "See exactly what's broken — before you pay for anything." (CTA)
- [x] "Send the website you are thinking of redesigning." (CTA)

**File:** `MODIFY` → `/index.html`

---

### 12. Create 5 Hub Article Pages

Each article: 800-1500 words, FAQ section with schema, internal links to services + audit pages, CTA at bottom.

| # | Page | Target Keyword | Status |
|---|------|----------------|--------|
| 1 | `/why-is-my-website-not-ranking-on-google/` | "website not ranking on google" | [x] |
| 2 | `/website-redesign-vs-seo-revamp/` | "website redesign vs seo" | [x] |
| 3 | `/why-is-my-website-not-getting-enquiries/` | "website not getting enquiries" | [x] |
| 4 | `/seo-strategy-for-wedding-businesses/` | "seo for wedding business" | [x] |
| 5 | `/why-is-my-website-not-performing/` | "website not performing" | [x] |

For each article:
- [x] Create `index.html` in the correct directory
- [ ] Write 800-1500 words of content
- [ ] Add FAQPage schema
- [x] Add internal links to `/seo-first-website-revamp/` and `/seo-revamp-audit/`
- [x] Add canonical tag
- [x] Add OG + Twitter meta tags
- [x] Add to sitemap.xml
- [x] Add BreadcrumbList schema

**Files:** `CREATE` → 5 new `index.html` files | `MODIFY` → `/sitemap.xml`

---

### 13. Expand Services Page Content

Currently only 76 lines of HTML. Missing critical content.

- [x] Add detailed process breakdown (reuse 5-step system from homepage)
- [x] Add mini case study or link to Work page
- [ ] Add FAQ section with 3-5 questions + FAQPage schema
- [x] Add "Area served: Available for businesses across India"
- [ ] Add testimonials or social proof section
- [ ] Add pricing signal (e.g., "starting from" range)
- [x] Add internal links to Hub articles
- [x] Add CTA section at bottom

**File:** `MODIFY` → `/seo-first-website-revamp/index.html`

---

### 14. Add Visual Proof to Work Page

- [ ] Add before/after screenshots for Grand Weddings
- [ ] Add before/after screenshots for Stillness Co.
- [ ] Add before/after screenshots for Customized Gifts
- [ ] Add before/after screenshots for Ayesha + Luxe
- [x] All images use `<img>` tags with keyword-rich `alt` text
- [ ] Consider linking each case study to a dedicated page

**File:** `MODIFY` → `/work/index.html`

---

### 15. Sync Footer Across All Pages

Homepage footer has 3-column layout, location signal, Instagram link. Inner pages have old minimal footer with 2 dead links.

- [x] Copy homepage footer template to `/seo-first-website-revamp/index.html`
- [x] Copy homepage footer template to `/seo-revamp-audit/index.html`
- [x] Copy homepage footer template to `/website-performance-questions/index.html`
- [x] Copy homepage footer template to `/work/index.html`
- [x] Verify all footer links point to live pages

**Files:** `MODIFY` → 4 inner page `index.html` files

---

### 16. Fix Audit Page Header

- [x] Add "Get an Audit" CTA button to header (matches other pages)
- [ ] OR intentionally remove and add different nav element (since user is already on audit page)

**File:** `MODIFY` → `/seo-revamp-audit/index.html`

---

## 🟢 TIER 4 — Low Priority (Fix Within a Month)

### 17. Add `hreflang` Tag

- [x] Add `<link rel="alternate" hreflang="en-in" href="https://solicate.in/">` to all pages (if targeting India-specific English)

**Files:** `MODIFY` → All 5 `index.html` files

---

### 18. Preload Critical CSS

- [x] Add `<link rel="preload" href="/css/tokens.css" as="style">` to all pages
- [x] Add `<link rel="preload" href="/css/style.css" as="style">` to all pages

**Files:** `MODIFY` → All 5 `index.html` files

---

### 19. Convert Stillness Co. PNG to WebP

- [x] Convert `stillness-co-mockup.png` (525KB) to WebP format (~60-70% smaller)
- [x] Add explicit `width` and `height` attributes to prevent CLS
- [x] Update all references in HTML and CSS

**Files:** `MODIFY` → `/index.html`, relevant CSS files

---

### 20. Create Custom 404 Page

- [x] Create `/404.html`
- [x] Add navigation back to homepage
- [x] Add CTA (e.g., "Get a free audit" or "Browse our work")
- [x] Match site design and branding
- [x] Configure server to serve this page for 404 responses

**File:** `CREATE` → `/404.html`

---

## 📝 TIER 5 — Homepage Content Fixes

These are content-level rewrites specifically for `/index.html`.

### H1 Rewrite

- [x] Change H1 from "Your website does not need a newer look first. It needs better search structure." to include "SEO-first revamp"
- [x] Suggested: "Your website does not need a newer look. It needs an SEO-first revamp."

### Hero Body Paragraph

- [x] Rewrite to avoid keyword stuffing (current: 6 niche keywords in one sentence)
- [x] Naturally include: "SEO-first", "websites", "wedding planners", "India", "local search", "enquiry"
- [x] Suggested: "Solicate builds SEO-first websites for wedding planners, event studios, and visual businesses across India. We restructure service pages, fix local search visibility, and build clear enquiry paths — before making the design premium."

### "Is This You?" Section

- [x] Add `<h3>Signs your website needs an SEO revamp</h3>` above the checklist

### H2 Rewrites (Keyword-Rich)

- [x] "The problem is not only that your website looks old..." → "Why your website is invisible to Google — even if it looks good"
- [x] "What you get vs. what you need." → "Website redesign vs. SEO-first revamp — what actually works"
- [x] "Grand Weddings" → "Case Study: How a Wedding Studio Reached Page One in 90 Days"
- [x] "More Fixes" → "Website Revamp Case Studies" or "More SEO Revamp Projects"
- [x] "Common Questions" → "Frequently Asked Questions About Website Revamps"

### 5-Step System Titles

- [x] "Search Structure" → "Rebuild Your Page Structure for Google Rankings"
- [x] "Proof" → "Galleries & Testimonials That Convert"
- [x] "Clarity" → "Service Pages That Answer Buyer Questions"
- [x] "Capture" → "WhatsApp, Calls, and Booking Flows"
- [x] "Measurement" → "Track Enquiries and Search Performance"

### Anatomy Section

- [x] Convert `background-image` to `<img>` with keyword-rich `alt`
- [x] Add 50-80 words of visible descriptive text (rewrite tooltip content as body text)
- [x] Change H2 to something keyword-relevant

### Expand FAQ Section

- [x] Add: "How long does an SEO revamp take?"
- [x] Add: "How much does an SEO website revamp cost in India?"
- [x] Add: "Do you work with businesses outside India?"
- [x] Add: "What's the difference between SEO and a website redesign?"
- [x] Add: "Will my website look different after an SEO revamp?"
- [x] Update FAQPage schema with new questions

### Add Missing Content Sections

- [x] Add testimonials / social proof section (2-3 client quotes)
- [x] Add E-E-A-T credibility line (e.g., "Solicate has revamped 20+ websites for visual businesses across 8 cities in India")
- [x] Add pricing signal (even vague: "Our SEO-first revamps typically run between ₹X and ₹Y depending on scope")
- [x] Expand niches section from 30 words to a proper paragraph with `<li>` elements or paragraph text

### Word Count Target

- [x] Expand total homepage content from ~800 words to ~1300 words

**File:** `MODIFY` → `/index.html`

---

## 📊 TIER 6 — Future Content Strategy

These are new pages to create for organic traffic growth. Not urgent, but high-value.

### Niche Landing Pages

- [ ] `/seo-for-photographers/` — "seo for photographers"
- [ ] `/seo-for-wedding-venues/` — "seo for wedding venues"
- [ ] `/website-revamp-cost-india/` — "website revamp cost india"

### Regional and Location SEO

**Strategy:** [LOCAL-SEO-STRATEGY.md](file:///Users/yswnth/Documents/solicate-website/LOCAL-SEO-STRATEGY.md)

#### Phase 1: Establish Solicate's Location

- [x] State that Solicate is based in Kakinada, Andhra Pradesh
- [x] Update all page footers to mention Andhra Pradesh and Telangana
- [x] Add Kakinada, Andhra Pradesh, and Telangana to homepage and service-page copy
- [x] Expand Organization and Service `areaServed` schema
- [x] Update the audit form field to collect the business city or service area

#### Phase 2: First Location Pages

- [ ] Validate the best Kakinada service keyword before choosing the final slug
- [ ] Create `/website-revamp-kakinada/`
- [ ] Create `/website-revamp-hyderabad/` using the existing Hyderabad case-study proof
- [ ] Add each published page to `sitemap.xml` and relevant internal links

#### Phase 3: Regional Expansion

- [ ] Evaluate `/website-revamp-andhra-pradesh/`
- [ ] Evaluate `/website-revamp-telangana/`
- [ ] Add later city pages only when supported by demand, local proof, or unique content

Priority Andhra Pradesh candidates: Rajamahendravaram, Visakhapatnam, Vijayawada, Guntur, Tirupati, Nellore, and Kurnool.

Priority Telangana candidates: Hyderabad, Warangal, Khammam, Karimnagar, and Nizamabad.

Do not create duplicate pages that only replace the city name. Each page must contain distinct service context, proof, FAQs, internal links, and a useful enquiry path.

---

## Files Summary

| Action | File | Tasks |
|--------|------|-------|
| CREATE | `/robots.txt` | Task 1 |
| CREATE | `/sitemap.xml` | Task 2 |
| CREATE | `/404.html` | Task 20 |
| CREATE | `/og-image.png` | Task 6 |
| CREATE | `/favicon.ico` + `.svg` + `apple-touch-icon.png` | Task 7 |
| CREATE | 5 article pages | Task 12 |
| CREATE | `/LOCAL-SEO-STRATEGY.md` | Kakinada, Andhra Pradesh, and Telangana location strategy |
| MODIFY | `/index.html` | Tasks 3, 5a, 5b, 5d, 6, 7, 8, 9, 10, 11, all Tier 5 |
| MODIFY | `/seo-first-website-revamp/index.html` | Tasks 3, 5c, 5d, 6, 7, 9, 10, 13, 15 |
| MODIFY | `/seo-revamp-audit/index.html` | Tasks 3, 5d, 6, 7, 9, 10, 15, 16 |
| MODIFY | `/work/index.html` | Tasks 3, 5d, 6, 7, 8, 9, 10, 14, 15 |
| MODIFY | `/website-performance-questions/index.html` | Tasks 3, 4, 5d, 6, 7, 9, 10, 15 |
| MODIFY | `/SEO-TASKS.md` | Link and phase the regional SEO plan |
