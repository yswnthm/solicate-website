# Solicate SEO Domination Plan
### Goal: Become the #1 website design agency in Google Search across Andhra Pradesh & Telangana

**Created:** 2026-07-05
**Status:** Active
**Current URL Count:** 33 indexed pages
**Target URL Count:** 120+ indexed pages by end of Phase 4

---

## Current State Audit

### What We Have (Strong Foundation)
- [x] 15 city/state landing pages (8 AP + 6 Telangana + 1 state page each)
- [x] 5 SEO guide articles (ranking, enquiries, performance, redesign vs revamp, wedding SEO)
- [x] 5 business growth articles (grow online, small business, organic vs paid, best company AP, best company Telangana)
- [x] 4 service pages (SEO revamp, website redesign, UI/UX design, SEO Kakinada)
- [x] Hub page linking all content
- [x] Expanded footer with Services + Cities across all pages
- [x] Clean sitemap.xml with 33 URLs
- [x] Canonical tags, hreflang, Open Graph, Twitter Cards on all pages

### What's Missing (The Gap)
- [ ] No FAQ schema on any page (missing rich results in Google)
- [ ] No LocalBusiness or Service schema (Google doesn't know what we are)
- [ ] No industry-specific pages (the highest-intent searches are unaddressed)
- [ ] No case studies as individual pages (no E-E-A-T proof for Google)
- [ ] No cross-linking between articles (weak internal link graph)
- [ ] No backlinks from directories or external sites
- [ ] No robots.txt optimization
- [ ] No WhatsApp pre-filled CTAs (generic messages = lower conversion)
- [ ] Blog content velocity is zero after initial push
- [ ] No Google Business Profile posts (suspended, but plan for reinstatement)
- [ ] No comparison pages ("Solicate vs [competitor]" or "agency vs freelancer")
- [ ] No pricing/packages page (one of the most searched queries)
- [ ] No testimonials/reviews page
- [ ] No "free tools" or calculators (lead magnets)

---

## Phase 1: Technical SEO & Schema (Week 1)
> **Goal:** Make Google understand exactly what Solicate is, where it operates, and what it offers. Get rich results.

### 1.1 FAQ Schema on All Content Pages
Add `FAQPage` structured data to every article and city page. Each page should have 3-5 genuine FAQs.

**Why:** FAQ rich results take up 2-3x more space in search results. Higher CTR without ranking higher.

**Pages to add FAQ schema:**
- [ ] All 15 city pages (FAQs about website design in that city)
- [ ] All 10 blog articles (FAQs answering related questions)
- [ ] Service pages (FAQs about pricing, timeline, process)
- [ ] Hub page (general FAQs)

**Example FAQ for Kakinada page:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does website design cost in Kakinada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional website design in Kakinada typically ranges from ₹15,000 to ₹1,50,000 depending on pages, features, and SEO requirements. Solicate offers SEO-first website revamps starting at ₹25,000."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best website design company in Kakinada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solicate is a Kakinada-based website design and SEO studio that builds websites optimized for Google rankings and business enquiries, not just visual appearance."
      }
    }
  ]
}
```

### 1.2 LocalBusiness Schema on Homepage
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Solicate",
  "description": "Website design and SEO studio based in Kakinada, Andhra Pradesh. We build SEO-first websites that rank on Google and convert visitors into enquiries.",
  "url": "https://solicate.in",
  "telephone": "+918367357447",
  "email": "solicate.team@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ismail Street",
    "addressLocality": "Kakinada",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "533001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "16.9891",
    "longitude": "82.2475"
  },
  "areaServed": [
    "Kakinada", "Rajahmundry", "Vijayawada", "Visakhapatnam",
    "Guntur", "Tirupati", "Nellore", "Kurnool",
    "Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar",
    "Andhra Pradesh", "Telangana"
  ],
  "priceRange": "₹₹",
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": [
    "https://instagram.com/solicatehq",
    "https://twitter.com/solicatehq",
    "https://www.linkedin.com/company/solicate/"
  ]
}
```

### 1.3 Service Schema on Service Pages
Add `Service` schema to each service page (SEO Revamp, Redesign, UI/UX, SEO Kakinada).

### 1.4 BreadcrumbList Schema
Already on some pages. Ensure it's on ALL pages with correct hierarchy.

### 1.5 robots.txt
Create a proper robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://solicate.in/sitemap.xml
```

### 1.6 Core Web Vitals Audit
- [ ] Run Lighthouse on homepage, 3 city pages, 3 articles
- [ ] Compress all images (WebP format)
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Preload critical CSS and fonts
- [ ] Minify CSS and JS for production
- [ ] Add `fetchpriority="high"` to hero images
- [ ] Target: LCP < 2.5s, INP < 200ms, CLS < 0.1

---

## Phase 2: Content Expansion — Industry × City Pages (Week 2-3)
> **Goal:** Capture every high-intent "website for [industry] in [city]" search query.

### 2.1 Industry Landing Pages (Top 10 Industries)
These are the industries that actually search for websites in AP/Telangana:

| # | Industry | Page Slug | Target Keyword |
|---|----------|-----------|----------------|
| 1 | Restaurants & Cafes | `/website-for-restaurants/` | "website design for restaurants India" |
| 2 | Real Estate Agents | `/website-for-real-estate/` | "real estate website design" |
| 3 | Doctors & Clinics | `/website-for-doctors/` | "website for doctors clinic India" |
| 4 | Coaching Institutes | `/website-for-coaching-institutes/` | "coaching institute website design" |
| 5 | Gyms & Fitness | `/website-for-gyms/` | "gym website design India" |
| 6 | Hotels & Resorts | `/website-for-hotels/` | "hotel website design India" |
| 7 | Schools & Colleges | `/website-for-schools/` | "school website design India" |
| 8 | Lawyers & Advocates | `/website-for-lawyers/` | "advocate website design India" |
| 9 | CA & Tax Consultants | `/website-for-chartered-accountants/` | "CA firm website design" |
| 10 | Interior Designers | `/website-for-interior-designers/` | "interior designer website" |

**Already Created:**
- [x] `/website-for-wedding-planners/`
- [x] `/website-for-photographers/`
- [x] `/website-for-event-businesses/`

**Total new pages: 10**

### 2.2 Industry × City Combo Pages (Highest Intent)
For the top 3 industries × top 5 cities. These are the money pages.

| Page | Target Query |
|------|-------------|
| `/website-for-restaurants-kakinada/` | "restaurant website design Kakinada" |
| `/website-for-restaurants-vijayawada/` | "restaurant website Vijayawada" |
| `/website-for-restaurants-hyderabad/` | "restaurant website design Hyderabad" |
| `/website-for-doctors-kakinada/` | "doctor website Kakinada" |
| `/website-for-doctors-rajahmundry/` | "doctor website Rajahmundry" |
| `/website-for-doctors-vijayawada/` | "doctor clinic website Vijayawada" |
| `/website-for-doctors-hyderabad/` | "doctor website design Hyderabad" |
| `/website-for-real-estate-vijayawada/` | "real estate website Vijayawada" |
| `/website-for-real-estate-hyderabad/` | "real estate website Hyderabad" |
| `/website-for-coaching-hyderabad/` | "coaching website Hyderabad" |

**Total new pages: 10**

### 2.3 Comparison & Decision Articles
High-intent searches from people about to buy:

| # | Article | Target Query |
|---|---------|-------------|
| 1 | `/how-much-does-website-design-cost-india/` | "website design cost India" (HIGH volume) |
| 2 | `/freelancer-vs-agency-for-website/` | "freelancer vs agency website" |
| 3 | `/do-i-need-website-if-i-have-instagram/` | "do I need website Instagram" |
| 4 | `/wordpress-vs-custom-website/` | "WordPress vs custom website India" |
| 5 | `/how-long-does-it-take-to-build-website/` | "how long website design takes" |
| 6 | `/what-to-look-for-in-website-design-company/` | "how to choose web design agency" |
| 7 | `/website-maintenance-cost-india/` | "website maintenance cost India" |
| 8 | `/why-is-my-website-slow/` | "website loading slow fix" |
| 9 | `/seo-vs-google-ads-for-small-business/` | "SEO vs Google ads small business" |
| 10 | `/how-to-get-more-leads-from-website/` | "how to get leads from website" |

**Total new pages: 10**

### 2.4 "Best Of" / Listicle Pages
These rank fast and attract backlinks:

| # | Article | Target Query |
|---|---------|-------------|
| 1 | `/best-website-design-company-kakinada/` | "best web design Kakinada" |
| 2 | `/best-website-design-company-rajahmundry/` | "best web design Rajahmundry" |
| 3 | `/best-website-design-company-vijayawada/` | "best web design Vijayawada" |
| 4 | `/best-website-design-company-visakhapatnam/` | "best web design Vizag" |
| 5 | `/best-website-design-company-hyderabad/` | "best web design Hyderabad" |
| 6 | `/top-seo-companies-andhra-pradesh/` | "SEO company AP" |
| 7 | `/top-seo-companies-telangana/` | "SEO company Telangana" |

**Total new pages: 7**

---

## Phase 3: Conversion & Trust Optimization (Week 4-5)
> **Goal:** Convert traffic into actual WhatsApp enquiries. Build trust signals.

### 3.1 Case Study Pages (Individual, Indexable)
Each project as its own page with full SEO:

| Page | Content |
|------|---------|
| `/work/project-name-1/` | Problem, approach, screenshots, results, testimonial |
| `/work/project-name-2/` | Same structure |
| `/work/project-name-3/` | Same structure |

**Structure per case study:**
- H1: "Website Redesign for [Business Name], [City]"
- Problem section (what was broken)
- Solution section (what we did)
- Before/after screenshots
- Results (traffic increase, enquiry count, ranking improvement)
- Client testimonial quote
- CTA: "Get the same results for your business"
- Schema: `CreativeWork` with `author`, `datePublished`

### 3.2 Testimonials / Reviews Page
`/reviews/` — dedicated page with:
- Google review screenshots
- WhatsApp testimonial screenshots
- Video testimonials if available
- Schema: `Review` markup for each testimonial

### 3.3 Pricing / Packages Page
`/pricing/` — one of the MOST searched queries for any service business:
- 3 tiers (Starter, Growth, Premium)
- What's included in each
- FAQ about pricing
- "Not sure which plan? Get a free audit" CTA
- Schema: `Offer` markup

### 3.4 Process / How We Work Page
`/process/` — builds trust and answers "what happens after I contact you":
- Step 1: Free audit call
- Step 2: Strategy document
- Step 3: Design & development
- Step 4: SEO setup & launch
- Step 5: 30-day post-launch support

### 3.5 About Page
`/about/` — E-E-A-T signal for Google:
- Yeswanth's background and expertise
- Why Solicate exists
- Based in Kakinada, serving AP & Telangana
- Team photo / workspace photo
- Schema: `Person` and `Organization`

### 3.6 WhatsApp Pre-filled CTAs (Per Page)
Every page gets a unique WhatsApp pre-filled message:

| Page Type | Pre-filled Message |
|-----------|-------------------|
| City page (Kakinada) | "Hi, I need a website for my business in Kakinada. Can you help?" |
| Industry page (Restaurants) | "Hi, I run a restaurant and need a website. Can we discuss?" |
| Article page | "Hi, I read your article on [topic]. I have questions about my website." |
| Service page | "Hi, I'm interested in your [service name] service. Can we talk?" |
| Pricing page | "Hi, I'd like to know more about your website packages." |

### 3.7 Exit-Intent / Scroll-Triggered CTA
Add a non-intrusive sticky bottom bar or slide-in CTA that appears after 60% scroll:
- "Your website not ranking? Get a free audit →"
- Links to `/seo-revamp-audit/`
- Dismissible, cookie-remembered

### 3.8 Contact Page
`/contact/` — simple, essential:
- WhatsApp button (primary)
- Email
- Phone
- Office address with Google Maps embed
- Contact form (optional, WhatsApp is primary)
- Working hours

---

## Phase 4: Authority & Backlinks (Week 6-12, Ongoing)
> **Goal:** Build domain authority through external signals. This is what separates page 1 from page 3.

### 4.1 Directory Listings (Free Backlinks + Citations)
Submit Solicate to every relevant directory:

**High Priority (Do This Week):**
- [ ] Google Business Profile (once reinstated — post weekly)
- [ ] Justdial — https://www.justdial.com
- [ ] Sulekha — https://www.sulekha.com
- [ ] IndiaMART — https://www.indiamart.com
- [ ] Yellow Pages India
- [ ] TradeIndia

**Design/Tech Directories:**
- [ ] Clutch.co (review-based, high DA)
- [ ] GoodFirms.co
- [ ] DesignRush
- [ ] TopDevelopers.co
- [ ] Sortlist
- [ ] The Manifest

**Local AP/Telangana Directories:**
- [ ] Kakinada business directory
- [ ] AP business listings
- [ ] Local chamber of commerce (if available)

**Social Profiles (Backlinks + Brand Signals):**
- [ ] LinkedIn company page (already exists)
- [ ] Instagram bio link
- [ ] Twitter/X bio link
- [ ] YouTube channel (even if empty — reserve the name)
- [ ] Pinterest business account
- [ ] Behance portfolio
- [ ] Dribbble portfolio

### 4.2 Content Syndication
Republish articles (with canonical back to solicate.in) on:
- [ ] Medium — create "Solicate" publication
- [ ] LinkedIn Articles — publish from company page
- [ ] Dev.to (technical articles)
- [ ] Hashnode (technical articles)

### 4.3 Guest Posting / PR
Write guest articles for:
- Local AP/Telangana business blogs
- Startup/business publications (YourStory, Inc42)
- Web design industry blogs
- Each with a backlink to solicate.in

### 4.4 HARO / Qwoted / Featured
Sign up for journalist query platforms. When a journalist asks about "website design trends" or "digital marketing in India," respond with expertise. Free high-DA backlinks.

### 4.5 Social Proof Velocity
- Ask every client for a Google review (once GBP is live)
- Screenshot WhatsApp thank-you messages (with permission)
- Create before/after carousels for Instagram
- Post 1 case study or tip per week on LinkedIn

---

## Phase 5: Advanced SEO Moves (Week 8-12)
> **Goal:** Technical edge over competitors. Most agencies in AP won't do this.

### 5.1 Programmatic Internal Linking
Write a script that:
- Scans all pages for keyword opportunities
- Auto-inserts contextual links between related pages
- Ensures every page links to at least 3-5 other pages
- No orphan pages in the site

### 5.2 Content Hub Architecture
Restructure content into topic clusters:

```
/website-design/ (pillar)
├── /website-for-restaurants/ (cluster)
├── /website-for-doctors/ (cluster)
├── /website-for-real-estate/ (cluster)
├── /website-redesign/ (cluster)
├── /website-redesign-vs-seo-revamp/ (cluster)
└── /how-much-does-website-design-cost-india/ (cluster)

/seo/ (pillar)
├── /seo-kakinada/ (cluster)
├── /why-is-my-website-not-ranking-on-google/ (cluster)
├── /seo-vs-google-ads-for-small-business/ (cluster)
└── /how-to-get-website-on-first-page-of-google/ (cluster)

/[city]/ (pillar per city)
├── /website-for-restaurants-[city]/ (cluster)
├── /website-for-doctors-[city]/ (cluster)
└── /best-website-design-company-[city]/ (cluster)
```

### 5.3 Hreflang + Multi-Language (Telugu)
Create Telugu versions of the top 5 city pages. Many local business owners search in Telugu. This is a massive untapped opportunity that ZERO competitors are doing.

| Page | Telugu Version |
|------|---------------|
| `/kakinada/` | `/te/kakinada/` |
| `/rajahmundry/` | `/te/rajahmundry/` |
| `/vijayawada/` | `/te/vijayawada/` |
| `/hyderabad/` | `/te/hyderabad/` |
| `/visakhapatnam/` | `/te/visakhapatnam/` |

### 5.4 XML Sitemap Split
As page count grows past 50, split sitemap into:
- `sitemap-pages.xml` (core pages + city pages)
- `sitemap-articles.xml` (blog articles)
- `sitemap-industries.xml` (industry pages)
- `sitemap-index.xml` (master sitemap)

### 5.5 Auto-Generated City × Service Pages
Build a template engine that generates pages like:
- `/seo-vijayawada/`
- `/seo-hyderabad/`
- `/website-redesign-kakinada/`
- `/website-redesign-vijayawada/`
- `/ui-ux-design-hyderabad/`

**4 services × 15 cities = 60 pages** (minus duplicates of existing ones)

### 5.6 Structured Data Testing
- [ ] Test all schema with Google's Rich Results Test
- [ ] Validate with Schema.org validator
- [ ] Monitor rich result performance in GSC
- [ ] Fix any schema errors flagged

### 5.7 Image SEO
- [ ] Rename all images descriptively (e.g., `website-design-kakinada-solicate.webp`)
- [ ] Add alt text with target keywords to every image
- [ ] Compress to WebP format
- [ ] Create an image sitemap
- [ ] Add OpenGraph images unique to each page

---

## Phase 6: Lead Magnets & Conversion Funnels (Week 10-12)
> **Goal:** Capture leads who aren't ready to buy yet.

### 6.1 Free Website Audit Tool
`/free-website-audit/` — a simple form:
- User enters their website URL
- User enters their email/WhatsApp
- You manually audit and send results
- Builds email list + starts conversation

### 6.2 Free SEO Checklist Download
`/seo-checklist/` — a downloadable PDF:
- "50-Point SEO Checklist for Indian Business Websites"
- Requires WhatsApp number to download
- Builds contact list

### 6.3 Free Website Performance Report
Automated or semi-automated:
- User submits URL
- You run Lighthouse + manual review
- Send a branded PDF report
- Follow up with service offer

### 6.4 Email/WhatsApp Newsletter
Weekly tips about website performance:
- "This week's tip: Why your website needs an SSL certificate"
- Links back to blog articles
- Builds authority + keeps Solicate top of mind

---

## Tracking & Measurement

### Key Metrics to Track Weekly
| Metric | Tool | Target |
|--------|------|--------|
| Total indexed pages | Google Search Console | 120+ by week 12 |
| Total impressions | Google Search Console | 10,000/month by week 12 |
| Total clicks | Google Search Console | 500/month by week 12 |
| Average position | Google Search Console | Top 10 for city keywords |
| WhatsApp enquiries | Manual tracking | 20+/month by week 12 |
| Rich results | GSC Enhancements | FAQ snippets on 20+ pages |
| Backlinks | GSC Links report | 50+ referring domains |
| Core Web Vitals | PageSpeed Insights | All green |

### Weekly Review Checklist
- [ ] Check GSC for new indexed pages
- [ ] Check GSC for crawl errors
- [ ] Review keyword positions for target queries
- [ ] Post 1x on GBP (when live)
- [ ] Publish 2 new articles/pages
- [ ] Add 1 new directory listing
- [ ] Review and respond to any enquiries

---

## Content Calendar (Rolling 4 Weeks)

### Week 1: Technical Foundation
- Day 1-2: FAQ Schema on all 33 existing pages
- Day 3: LocalBusiness + Service schema on homepage & service pages
- Day 4: robots.txt + Core Web Vitals audit
- Day 5: Internal cross-linking pass on all articles
- Day 6-7: WhatsApp pre-filled CTAs on all pages

### Week 2: Industry Pages Batch 1
- Day 1-2: Create 5 industry pages (restaurants, real estate, doctors, coaching, gyms)
- Day 3-4: Create 5 industry pages (hotels, schools, lawyers, CAs, interior designers)
- Day 5: Create `/how-much-does-website-design-cost-india/`
- Day 6-7: Create `/freelancer-vs-agency-for-website/` + `/do-i-need-website-if-i-have-instagram/`

### Week 3: City × Industry Combos
- Day 1-3: Create 10 city × industry combo pages
- Day 4-5: Create 5 "best of" city pages
- Day 6-7: Update sitemap, cross-link everything, push to live

### Week 4: Trust & Conversion
- Day 1-2: Create `/pricing/` page
- Day 3: Create `/about/` page
- Day 4: Create `/contact/` page
- Day 5: Create `/process/` page
- Day 6-7: Submit to 10 directories, set up Medium + LinkedIn syndication

---

## Competitor Intelligence

### Who Are We Competing Against?
Research and track these for each target keyword:
1. National agencies ranking for AP/Telangana terms
2. Local Hyderabad agencies with strong SEO
3. Freelancers with personal sites ranking locally
4. Directory sites (Justdial, Sulekha) ranking for "website design [city]"

### How We Beat Them:
1. **More pages** — They have 5-10 pages. We'll have 120+.
2. **More specific** — They say "we serve all of India." We say "website design for restaurants in Kakinada."
3. **Better content** — They have sales copy. We have genuine guides that answer real questions.
4. **Better technical SEO** — They don't have schema, FAQ rich results, or proper internal linking.
5. **Local signals** — They're in Hyderabad or Bangalore. We're actually in Kakinada, AP.
6. **Content velocity** — They publish once a quarter. We publish twice a week.

---

## Total Page Count Projection

| Category | Current | After Phase 2 | After Phase 3 | After Phase 5 |
|----------|---------|---------------|---------------|---------------|
| Core pages | 5 | 5 | 10 | 10 |
| Service pages | 4 | 4 | 4 | 64 |
| City pages | 15 | 15 | 15 | 15 |
| Industry pages | 3 | 13 | 13 | 13 |
| City × Industry | 0 | 10 | 10 | 10 |
| Blog articles | 10 | 20 | 20 | 30 |
| Best-of pages | 2 | 9 | 9 | 9 |
| Case studies | 0 | 0 | 3 | 5 |
| Trust pages | 0 | 0 | 4 | 4 |
| Telugu pages | 0 | 0 | 0 | 5 |
| **Total** | **39** | **76** | **88** | **165** |

---

## The Compounding Effect

Every page we add:
1. **Targets a new keyword** → captures new search traffic
2. **Links to other pages** → strengthens the entire site's authority
3. **Adds FAQ schema** → gets rich results → higher CTR
4. **Includes CTA** → drives WhatsApp enquiries
5. **Builds topical authority** → Google trusts the domain more for ALL related queries

This is how a 39-page site becomes a 165-page SEO machine that dominates every "website design" query in AP and Telangana.

---

> **Next action:** Start Phase 1 — FAQ Schema + LocalBusiness Schema + robots.txt. This is the fastest win with the highest impact.
