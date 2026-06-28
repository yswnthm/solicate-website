# Solicate Website — Full SEO Audit

**Date:** 2026-06-20  
**Pages Audited:** 5 (index, services, audit form, work, hub)  
**Focus:** Ranking, searchability, crawlability, technical SEO

---

## Overall Score: 35 / 100

| Category | Score | Max |
|----------|-------|-----|
| Crawlability & Indexing | 2 | 20 |
| On-Page SEO (Headings, Meta, Content) | 12 | 20 |
| Structured Data / Schema | 0 | 15 |
| Internal Linking & Site Architecture | 5 | 15 |
| Performance & Core Web Vitals | 8 | 15 |
| Social / Sharing Signals (OG, Twitter) | 0 | 10 |
| Accessibility Basics (SEO-adjacent) | 8 | 5 |

---

## 🔴 CRITICAL — Fix Immediately

### 1. No `robots.txt`

**Impact:** Google has no crawl directives. No sitemap pointer. Googlebot will crawl blindly.

**Current state:** File does not exist.

**Fix:** Create `/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://solicate.com/sitemap.xml
```

---

### 2. No `sitemap.xml`

**Impact:** Google has no URL inventory. With only 5 indexable pages and 5 dead-link pages that don't exist yet, the crawler has to discover everything through internal links alone. For a new domain, this significantly delays indexing.

**Current state:** File does not exist.

**Fix:** Create `/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://solicate.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://solicate.com/seo-first-website-revamp/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://solicate.com/seo-revamp-audit/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://solicate.com/work/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://solicate.com/website-performance-questions/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Add Hub article pages to the sitemap as they are created.

---

### 3. No Canonical Tags on Any Page

**Impact:** If the site is ever crawled via both www and non-www, or via HTTP and HTTPS, Google will see duplicate content. Without canonical tags, you have zero duplicate-content protection.

**Current state:** Zero `<link rel="canonical">` tags across all 5 pages.

**Fix:** Add to the `<head>` of every page:

```html
<link rel="canonical" href="https://solicate.com/[page-path]/">
```

Example for homepage:
```html
<link rel="canonical" href="https://solicate.com/">
```

---

### 4. Five Internal Links Point to 404 Pages

**Impact:** This is a direct ranking penalty signal. Google crawls these links, hits 404s, and records broken internal linking. It also wastes crawl budget and creates a terrible user experience on the Hub page where all 5 articles link to dead pages.

**Dead links found:**

| Link Target | Linked From |
|-------------|-------------|
| `/why-is-my-website-not-performing/` | Hub page |
| `/website-redesign-vs-seo-revamp/` | Hub page + all footers (4 pages) |
| `/why-is-my-website-not-getting-enquiries/` | Hub page + all footers (4 pages) |
| `/why-is-my-website-not-ranking-on-google/` | Hub page |
| `/seo-strategy-for-wedding-businesses/` | Hub page |

**Fix:** Either:
- **(Recommended)** Create these 5 article pages with real content. These are high-intent long-tail keyword pages that will drive organic traffic. Each targets a question people actually Google.
- **(Temporary)** Remove the links from the Hub page and footers until the articles exist.

---

### 5. Zero Structured Data / Schema Markup

**Impact:** Google cannot generate rich snippets for your pages. No FAQ rich results, no organization card, no breadcrumbs, no service listings in SERPs. You are leaving significant SERP real estate on the table.

**Current state:** No `<script type="application/ld+json">` on any page. No microdata. No RDFa.

**Fix — add to every page where applicable:**

**a) Organization Schema (homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Solicate",
  "url": "https://solicate.com",
  "description": "SEO-first website revamps for visual businesses",
  "areaServed": "India",
  "serviceType": ["SEO", "Website Design", "Website Revamp"],
  "sameAs": ["https://instagram.com/solicatehq"]
}
```

**b) FAQPage Schema (homepage — 3 FAQs exist):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a visual redesign or an SEO revamp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your website looks bad, it hurts trust. But if your website has no SEO structure, nobody will ever see it to judge the design..."
      }
    }
  ]
}
```

**c) Service Schema (services page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO-First Website Revamp",
  "provider": { "@type": "Organization", "name": "Solicate" },
  "description": "A structured rebuild for businesses whose current website is outdated, unclear, not ranking, or not creating enquiries.",
  "areaServed": "India"
}
```

**d) BreadcrumbList Schema (all inner pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://solicate.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://solicate.com/seo-first-website-revamp/" }
  ]
}
```

---

## 🟠 HIGH — Fix This Week

### 6. No Open Graph or Twitter Card Meta Tags

**Impact:** When someone shares any page on WhatsApp, Instagram, LinkedIn, X, or Facebook, there is no preview image, no title control, and no description. The share preview will look broken or generic. For a business that sells website quality, this is embarrassing.

**Current state:** Zero `og:` or `twitter:` meta tags on all 5 pages.

**Fix — add to every page's `<head>`:**

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Page meta description]">
<meta property="og:url" content="https://solicate.com/[path]/">
<meta property="og:image" content="https://solicate.com/og-image.png">
<meta property="og:site_name" content="Solicate">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Page meta description]">
<meta name="twitter:image" content="https://solicate.com/og-image.png">
```

You will also need to create an OG image (1200×630px) for sharing.

---

### 7. No Favicon

**Impact:** Browser tabs show a blank icon. Google sometimes shows the favicon in search results. Missing favicon = less professional appearance in SERPs and bookmarks.

**Current state:** No `favicon.ico`, no `<link rel="icon">` in any page.

**Fix:** Create a favicon (use the Solicate "S" or logo mark) and add:

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

### 8. Zero `<img>` Tags on the Entire Site

**Impact:** Google Image Search generates zero traffic. There are no images for Google to index. The only image is a CSS `background-image` on the anatomy section, which Google does not index for image search. A website selling visual business services has zero images — this is a contradiction.

**Current state:** No `<img>` tags found across all 5 pages.

**Fix:**
- Convert the Stillness Co. mockup from `background-image` to an `<img>` tag with proper `alt`, `width`, `height`, and `loading="lazy"`.
- Add before/after screenshots to case studies on the Work page.
- Add `alt` text that includes relevant keywords:
  ```html
  <img src="/stillness-co-mockup.png"
       alt="Stillness Co website revamp by Solicate - e-commerce and events site redesigned for SEO"
       width="1024" height="1024"
       loading="lazy">
  ```

---

### 9. Meta Descriptions Are Too Thin

**Impact:** Weak meta descriptions reduce click-through rate from SERPs. Google may also replace them with auto-generated snippets that miss your key messaging.

| Page | Current Meta Description | Problem |
|------|------------------------|---------|
| Homepage | "SEO-first website revamps for visual businesses that need better search visibility and more serious enquiries." | OK but generic. Missing location signal. |
| Services | "A structured rebuild for businesses whose current website is outdated, unclear, not ranking, or not creating enquiries." | No differentiator, no CTA. |
| Audit | "Send your website. We will show what is hurting your search visibility and enquiries." | Too short (77 chars). Wastes SERP space. |
| Work | "See how we rebuilt websites for visual businesses to improve search visibility and serious enquiries." | Generic, no specifics. |
| Hub | "Answers for business owners asking why their site is not working." | Very weak. No keywords, no specificity. |

**Fix — rewrite all meta descriptions (aim for 140-160 characters each):**

| Page | Suggested Meta Description |
|------|---------------------------|
| Homepage | "Solicate builds SEO-first websites for wedding planners, photographers, and visual businesses across India. Better Google rankings. More serious enquiries." |
| Services | "SEO-First Website Revamp: search structure, local SEO pages, proof galleries, WhatsApp CTAs, and premium design for wedding and event businesses in India." |
| Audit | "Submit your website for a free manual SEO audit. We find missing local SEO, broken proof flow, and buried CTAs before you spend on a redesign. India-focused." |
| Work | "See how Solicate rebuilt websites for Grand Weddings, Stillness Co., and other visual businesses — with real case studies showing SEO and enquiry results." |
| Hub | "Common questions from wedding and event businesses: why your website isn't ranking, not getting enquiries, and what to fix before redesigning." |

---

### 10. Title Tags Missing Location and Intent Signals

| Page | Current Title | Problem |
|------|--------------|---------|
| Homepage | `Solicate \| SEO-First Website Revamps` | No location signal |
| Services | `SEO-First Website Revamp \| Solicate` | No location signal |
| Audit | `SEO Revamp Audit \| Solicate` | No action signal |
| Work | `Work \| Solicate SEO-First Revamps` | "Work" is not a search query |
| Hub | `Website Performance Hub \| Solicate` | "Hub" is not a search query |

**Fix:**

| Page | Suggested Title |
|------|----------------|
| Homepage | `Solicate — SEO-First Website Revamps for Visual Businesses in India` |
| Services | `SEO-First Website Revamp for Wedding & Event Businesses — Solicate` |
| Audit | `Free SEO Revamp Audit — Solicate` |
| Work | `Website Revamp Case Studies — Solicate` |
| Hub | `Website Performance Questions — Why Your Site Isn't Ranking or Converting` |

---

## 🟡 MEDIUM — Fix Within 2 Weeks

### 11. Homepage Has 10 `<h2>` Tags — Heading Dilution

**Impact:** 10 H2s on a single page means Google cannot determine a clear topical hierarchy. The page's "about" signal gets diluted across too many subtopics.

**Current H2s on homepage:**
1. "Built for businesses where Instagram runs ahead of Google."
2. "The problem is not only that your website looks old..."
3. "What you get vs. what you need."
4. "The 5-Step System"
5. "Grand Weddings"
6. "Anatomy of a Revamp"
7. "More Fixes"
8. "See exactly what's broken — before you pay for anything."
9. "Common Questions"
10. "Send the website you are thinking of redesigning."

**Fix:** Reduce to 4-5 core H2s. Demote supporting sections to H3:

| Keep as H2 | Demote to H3 |
|------------|--------------|
| Problem statement (#2) | "Built for businesses..." (this is a subtitle, not a section) |
| 5-Step System (#4) | "What you get vs what you need" |
| Case study (#5, #6) — combine under one H2 | "More Fixes" |
| Common Questions (#9) | "See exactly what's broken..." (CTA, not content) |
| | "Send the website..." (CTA, not content) |

---

### 12. Hub Page Lists 5 Articles That Don't Exist

**Impact:** The Hub (`/website-performance-questions/`) is your content marketing engine. It links to 5 long-tail keyword article pages — each one targeting a real Google search query. But none of them exist. This means:
- 5 wasted internal link signals
- Zero topical authority building
- The Hub page itself has no unique content depth

**These are the pages you should prioritize creating:**

| Target URL | Search Intent | Monthly Search Volume (est.) |
|-----------|---------------|------------------------------|
| `/why-is-my-website-not-performing/` | Informational — frustrated business owner | Medium |
| `/website-redesign-vs-seo-revamp/` | Comparison — decision-stage buyer | High |
| `/why-is-my-website-not-getting-enquiries/` | Problem-aware — mid-funnel lead | High |
| `/why-is-my-website-not-ranking-on-google/` | Problem-aware — SEO-curious | Very High |
| `/seo-strategy-for-wedding-businesses/` | Solution-aware — niche-specific | Medium |

Each article should be 800-1500 words, include an FAQ section with schema, internal link back to the services page and audit page, and end with a CTA.

---

### 13. Services Page Is Extremely Thin

**Impact:** The services page (`/seo-first-website-revamp/`) is only 76 lines of HTML. It's essentially a bulleted feature list with a CTA. Google needs substantial content to rank a service page. This page will not rank for "SEO website revamp" or similar queries.

**What's missing:**
- No case study reference or proof
- No FAQ section
- No process breakdown (the homepage has this but the service page doesn't)
- No pricing signals or "starting from" ranges
- No location/area served mention
- No testimonials or social proof
- No internal links to Hub articles

**Fix:** Expand to include at minimum:
- Detailed process explanation (reuse the 5-step system)
- A mini case study or link to Work page
- FAQ section with 3-5 questions
- Area served: "Available for businesses across India"
- CTA section at bottom

---

### 14. Work Page Has No Visual Proof

**Impact:** A portfolio page with zero images, screenshots, or before/after visuals. All 4 case studies are text-only. This contradicts Solicate's own positioning about "visual businesses" and "proof."

**Fix:**
- Add before/after screenshots for each project
- Add `<img>` tags with keyword-rich alt text
- Consider linking each case study to a dedicated page for deeper SEO content

---

### 15. Sub-Pages Have Old Footer Structure

**Impact:** The homepage footer was upgraded with 3-column layout, location signal, and Instagram link. But all 4 inner pages still have the old minimal footer with just 2 links — both of which point to 404 pages.

**Pages with old footer:**
- `/seo-first-website-revamp/`
- `/seo-revamp-audit/`
- `/website-performance-questions/`
- `/work/`

**Fix:** Replicate the homepage footer template across all inner pages.

---

### 16. Audit Form Page Has No "Get an Audit" Button in Header

**Impact:** Minor — the audit page header is missing the CTA button that appears on all other pages. This is inconsistent navigation.

**Fix:** Add the CTA button back, or intentionally remove it since the user is already on the audit page (this is a valid UX choice — but then add a different nav element).

---

## 🟢 LOW — Fix Within a Month

### 17. No `hreflang` Tag

If Solicate plans to target multiple English-speaking markets (India, US, UK), consider adding:
```html
<link rel="alternate" hreflang="en-in" href="https://solicate.com/">
```

### 18. No `preload` for Critical Assets

The Google Fonts are loaded via `preconnect`, which is good. But the two CSS files (`tokens.css`, `style.css`) could benefit from `preload` hints for faster first paint:

```html
<link rel="preload" href="/css/tokens.css" as="style">
<link rel="preload" href="/css/style.css" as="style">
```

### 19. Stillness Co. Mockup Image Is 525KB PNG

Convert to WebP for significant size reduction (~60-70% smaller). Add explicit `width` and `height` attributes to prevent layout shift (CLS).

### 20. No 404 Error Page

If someone hits a broken URL, they see the server's default error. Create a custom `404.html` with navigation back to the homepage and a CTA.

---

## Content Strategy Gaps

### Missing Pages That Would Drive Organic Traffic

These pages target real search queries with commercial intent. Each one builds topical authority and funnels traffic to the audit form.

| Priority | Page | Target Keyword | Type |
|----------|------|----------------|------|
| P0 | `/website-redesign-vs-seo-revamp/` | "website redesign vs seo" | Comparison article |
| P0 | `/why-is-my-website-not-ranking-on-google/` | "website not ranking on google" | FAQ/guide |
| P0 | `/why-is-my-website-not-getting-enquiries/` | "website not getting enquiries" | Problem/solution |
| P1 | `/seo-strategy-for-wedding-businesses/` | "seo for wedding business" | Niche guide |
| P1 | `/why-is-my-website-not-performing/` | "website not performing" | Problem/solution |
| P2 | `/seo-for-photographers/` | "seo for photographers" | Niche landing page |
| P2 | `/seo-for-wedding-venues/` | "seo for wedding venues" | Niche landing page |
| P2 | `/website-revamp-cost-india/` | "website revamp cost india" | Pricing guide |

### Missing Location Pages

Solicate targets India. Adding city-specific landing pages would capture local search intent:

- `/website-revamp-hyderabad/`
- `/website-revamp-bangalore/`
- `/website-revamp-mumbai/`

Each page should target "[service] in [city]" queries.

---

## Execution Priority Summary

| Priority | Task | Impact |
|----------|------|--------|
| 🔴 1 | Create `robots.txt` | Crawl directives |
| 🔴 2 | Create `sitemap.xml` | Indexing speed |
| 🔴 3 | Add canonical tags to all pages | Duplicate prevention |
| 🔴 4 | Fix 5 broken internal links (create articles or remove links) | Crawl errors / penalties |
| 🔴 5 | Add structured data (Organization, FAQ, Service, Breadcrumb) | Rich snippets |
| 🟠 6 | Add OG + Twitter meta tags to all pages | Social sharing |
| 🟠 7 | Add favicon | Browser/SERP appearance |
| 🟠 8 | Add `<img>` tags with alt text | Image search traffic |
| 🟠 9 | Rewrite all meta descriptions | Click-through rate |
| 🟠 10 | Optimize title tags | SERP rankings |
| 🟡 11 | Reduce H2 count on homepage | Heading hierarchy clarity |
| 🟡 12 | Create 5 Hub article pages | Topical authority + traffic |
| 🟡 13 | Expand services page | Service page ranking |
| 🟡 14 | Add images to Work page | Visual proof + image search |
| 🟡 15 | Sync footer across all pages | Consistent internal linking |
| 🟡 16 | Fix audit page header | Navigation consistency |
| 🟢 17 | Add hreflang | Multi-market targeting |
| 🟢 18 | Preload CSS | Performance |
| 🟢 19 | Convert PNG to WebP | Performance |
| 🟢 20 | Create custom 404 page | User experience |

---

## Files to Create/Modify

| Action | File | Purpose |
|--------|------|---------|
| CREATE | `/robots.txt` | Crawl directives + sitemap pointer |
| CREATE | `/sitemap.xml` | URL inventory for search engines |
| CREATE | `/404.html` | Custom error page |
| CREATE | `/og-image.png` | Social sharing image (1200x630) |
| CREATE | `/favicon.ico` + `/favicon.svg` | Browser tab icon |
| MODIFY | ALL 5 `index.html` files | Add canonical, OG, twitter, schema, favicon |
| MODIFY | `/index.html` | Heading hierarchy, img tags |
| MODIFY | `/seo-first-website-revamp/index.html` | Expand content, update footer |
| MODIFY | `/seo-revamp-audit/index.html` | Update footer, add schema |
| MODIFY | `/work/index.html` | Add images, update footer |
| MODIFY | `/website-performance-questions/index.html` | Fix dead links, update footer |
| CREATE | 5 article pages under Hub | Content marketing + SEO authority |

---
---

# PART 2: Homepage Content Audit (`index.html`)

Deep audit of the actual copy, keyword targeting, content flow, persuasion structure, and semantic gaps on the main landing page.

---

## Content Inventory

| Section | Word Count (approx.) | Primary Keyword Signal | Verdict |
|---------|---------------------|----------------------|---------|
| Hero (H1 + body) | ~65 | "website", "search structure" | ⚠️ Weak keyword density |
| "Is This You?" checklist | ~55 | "Google", "redesign", "enquiries" | ✅ Good pain-point copy |
| Niches | ~30 | "Wedding", "Instagram", "Google" | ⚠️ Too thin |
| Real Problem (merged) | ~110 | "local SEO", "service pages", "Core Web Vitals" | ✅ Strong |
| Compare Table | ~60 | "search intent", "WhatsApp" | ✅ Good |
| 5-Step System | ~75 | "metadata", "galleries", "FAQs" | ⚠️ Jargon-heavy, no keywords |
| Grand Weddings case study | ~100 | "local intent pages", "WhatsApp CTA" | ✅ Specific and credible |
| Anatomy of a Revamp | ~25 (text only) | "SEO Silos", "WhatsApp" | 🔴 Far too thin |
| More Fixes | ~95 | "Catalog-to-WhatsApp", "Instagram traffic" | ✅ Good |
| Audit CTA | ~40 | "audit", "local SEO" | ⚠️ Functional but thin |
| FAQ | ~130 | "redesign", "SEO revamp", "enquiries", "WhatsApp" | ✅ Strong long-tail targeting |
| Final CTA | ~15 | "redesigning" | ⚠️ One sentence, no content value |
| **Total** | **~800** | | **Below ideal (1200-1500 for a homepage)** |

**Total indexable body content: ~800 words.** This is thin for a homepage that needs to rank for competitive service queries. Google prefers 1200-1500+ words of quality content on service-oriented homepages.

---

## Keyword Analysis

### Primary Keywords the Homepage Should Target

| Keyword | Monthly Volume (India, est.) | Currently in H1/H2? | In body text? | In meta? |
|---------|------------------------------|---------------------|---------------|----------|
| "website revamp" | High | ❌ No | ❌ No | ❌ No |
| "SEO website redesign" | Medium | ❌ No | ❌ No | ❌ No |
| "website not ranking on google" | Very High | ❌ No | ❌ No | ❌ No |
| "SEO for wedding business" | Medium | ❌ No | ❌ No | ❌ No |
| "website redesign India" | Medium | ❌ No | ❌ No | ❌ No |
| "local SEO for visual businesses" | Low-Med | ❌ No | ✅ Mentioned once | ❌ No |
| "website not getting enquiries" | High | ❌ No | ✅ Paraphrased | ❌ No |
| "WhatsApp website integration" | Medium | ❌ No | ✅ Multiple mentions | ❌ No |

### Diagnosis

The homepage mentions "SEO" many times in the surrounding context (labels like "SEO-First Website Revamp") but the actual indexable H1, H2, and body text almost never use the exact keyword phrases people actually search for. The language is conceptual ("search structure", "proof flow", "capture") rather than matching real search queries.

**The H1 is:**
> "Your website does not need a newer look first. It needs better search structure."

This is excellent copywriting for conversion — it's provocative and specific. But it contains zero target keywords. Google reads the H1 as the page's primary topic signal. "Better search structure" is not a phrase anyone searches for.

**None of the 10 H2s contain a single target keyword phrase.** They are all conceptual section titles ("The 5-Step System", "More Fixes", "Common Questions") rather than keyword-rich headings.

---

## Section-by-Section Content Issues

### § Hero (Lines 31-46)

**Copy quality:** 9/10 — Strong, provocative, specific.

**SEO problems:**
- **H1 has zero keyword density.** "Search structure" is not a searched term. The H1 should include at least one of: "website revamp", "SEO", or the niche ("wedding businesses").
- The body paragraph stuffs 6 niche keywords into one sentence ("wedding, event, bridal, photography, venue, and visual-commerce businesses") — this reads as keyword stuffing to Google. Better to naturally weave 2-3 throughout different paragraphs.
- No mention of India/location in the hero.

**Suggested H1 rewrite (keeping the tone):**
> "Your website does not need a newer look. It needs an SEO-first revamp."

**Suggested body rewrite:**
> "Solicate builds SEO-first websites for wedding planners, event studios, and visual businesses across India. We restructure service pages, fix local search visibility, and build clear enquiry paths — before making the design premium."

This version naturally includes "SEO-first", "websites", "wedding planners", "India", "local search", and "enquiry" without stuffing.

---

### § "Is This You?" Checklist (Lines 48-61)

**Copy quality:** 10/10 — Perfect qualification filter. Every bullet is a real pain point.

**SEO problems:**
- This section has no heading. It's preceded by an uppercase label "DOES THIS SOUND FAMILIAR?" in a `<p>` tag. Google cannot parse this as a heading signal. If this section had an H2 or H3 like "Signs your website needs an SEO revamp" — that H2 alone would target a search query.

**Fix:** Add a visually hidden or styled `<h3>` above the checklist:
```html
<h3>Signs your website needs an SEO revamp</h3>
```

---

### § Niches (Lines 63-79)

**Copy quality:** 7/10 — The heading is good. But the pills are just a list of labels with no content depth.

**SEO problems:**
- 30 words of indexable content is far too thin.
- The niche pills ("Wedding Planners", "Wedding Photographers") are inside `<span>` tags. Google does not weight `<span>` content. These niche terms should appear in actual paragraph text or `<li>` elements.
- No internal links to niche-specific pages (which don't exist yet, but should).

**Fix:** Either:
- Expand into a brief paragraph: "We work with wedding planners, photographers, event decorators, bridal studios, venue owners, and Instagram-first shops across India."
- Or make each pill a link to a future niche landing page (`/seo-for-wedding-planners/`).

---

### § The Real Problem — merged section (Lines 81-113)

**Copy quality:** 8/10 — Strong problem framing. The two-column layout (leaks vs. what we delete) is effective.

**SEO problems:**
- The H2 is 25 words long: "The problem is not only that your website looks old. The problem is that Google and buyers do not understand it fast enough." This is too long for an H2. Google truncates long headings and dilutes their signal.
- Contains good keyword phrases naturally ("local SEO", "service pages", "Core Web Vitals") — this is the best section for SEO on the page.
- The "What We Regularly Delete" sub-column has no heading tag — it's just a `<p>` label. Add an `<h3>`.

**Suggested H2 rewrite:**
> "Why your website is invisible to Google — even if it looks good"

---

### § Compare Table (Lines 115-153)

**Copy quality:** 9/10 — The table format is persuasive. The added 5th row ("Costs money, fades in 6 months" → "Builds a compounding 12-month search asset") is the best line.

**SEO problems:**
- Table content is inside `<td>` and `<strong>` tags which Google can parse, but the H2 ("What you get vs. what you need.") is vague — it's not a search query.
- The content is excellent for conversion but the section title doesn't help with ranking.

**Suggested H2 rewrite:**
> "Website redesign vs. SEO-first revamp — what actually works"

This targets the comparison query "website redesign vs SEO" directly.

---

### § 5-Step System (Lines 155-199)

**Copy quality:** 7/10 — Clear and professional, but the step titles are internal jargon ("Search Structure", "Proof", "Clarity", "Capture", "Measurement"). A potential client doesn't think in these terms.

**SEO problems:**
- The H3 titles are single abstract words. "Proof" and "Clarity" contain zero keyword signal. Google reads these as meaningless headings.
- The body descriptions are short (1 sentence each) and jargon-heavy ("We rebuild the architecture Google reads first" — what architecture?).

**Fix:** Rewrite step titles to be more keyword-descriptive:

| Current | Better |
|---------|--------|
| Search Structure | Rebuild Your Page Structure for Google Rankings |
| Proof | Galleries & Testimonials That Convert |
| Clarity | Service Pages That Answer Buyer Questions |
| Capture | WhatsApp, Calls, and Booking Flows |
| Measurement | Track Enquiries and Search Performance |

These titles are still readable but now contain actual search terms.

---

### § Grand Weddings Case Study (Lines 201-223)

**Copy quality:** 9/10 — Specific, credible, uses real numbers. This is the strongest proof section.

**SEO problems:**
- The H2 is just "Grand Weddings" — a client name. Google cannot extract topical relevance from a brand name.
- No internal link to the Work page or to the Grand Weddings project (if a dedicated page existed).

**Suggested H2 rewrite:**
> "Case Study: How a Wedding Studio Reached Page One in 90 Days"

This targets "wedding studio SEO" and "page one ranking" search intents.

---

### § Anatomy of a Revamp (Lines 225-252)

**Copy quality:** 4/10 — This section is almost entirely visual (hotspots over an image). The only real text is: "Stillness Co. — E-commerce & Events, Hyderabad. Hover the hotspots to see the mechanical fixes applied to their previous site." That's 20 words.

**SEO problems:**
- **This is the weakest section on the page for SEO.** The tooltip text inside `.tooltip` divs is hidden by default (`opacity: 0; visibility: hidden`) — Google may not index hidden text.
- The image is loaded as a CSS `background-image`, which Google does not index for image search.
- Only ~25 words of visible content. Google sees this as a near-empty section.
- The H2 "Anatomy of a Revamp" is clever but has zero search query relevance.

**Fix:**
1. Convert the image from `background-image` to an `<img>` tag with keyword-rich `alt` text.
2. Add a visible paragraph describing what was fixed at Stillness Co. (rewrite the tooltip content as actual body text below the image).
3. Add at least 50-80 words of visible descriptive content.

---

### § More Fixes (Lines 254-292)

**Copy quality:** 8/10 — Good leak/fix format. Adding the city names (Bengaluru, Hyderabad) was a strong move for local SEO signals.

**SEO problems:**
- H2 is "More Fixes" — tells Google nothing. This should be something like "Website Revamp Case Studies" or "More SEO Revamp Projects."
- No internal links from these case studies to the Work page projects.

---

### § Audit CTA (Lines 294-321)

**Copy quality:** 8/10 — The headline "See exactly what's broken — before you pay for anything" is strong conversion copy.

**SEO problems:**
- This is a CTA section, not a content section. The H2 here is wasting heading signal on non-content. Consider demoting to `<h3>` or a styled `<p>`.

---

### § FAQ (Lines 323-347)

**Copy quality:** 9/10 — All 3 questions target real buyer queries. The answers are direct, specific, and include relevant terms.

**SEO problems:**
- **Only 3 FAQs.** For FAQ Schema to be effective for rich snippets, Google recommends 3-8 questions. Adding 2-3 more would strengthen the section.
- The H2 is "Common Questions" — should be "Frequently Asked Questions About Website Revamps" or similar for keyword targeting.
- No FAQ Schema markup (covered in Part 1).

**Missing FAQ opportunities:**

| Question | Why it matters |
|----------|---------------|
| "How long does an SEO revamp take?" | Timeline query — common pre-purchase question |
| "How much does an SEO website revamp cost in India?" | Pricing query — extremely high commercial intent |
| "Do you work with businesses outside India?" | Geo-qualification question |
| "What's the difference between SEO and a website redesign?" | Comparison query — high search volume |
| "Will my website look different after an SEO revamp?" | Trust/expectation management |

---

### § Final CTA (Lines 349-357)

**Copy quality:** 7/10 — "Send the website you are thinking of redesigning" is specific and low-friction.

**SEO problems:**
- 15 words total. The H2 is being used for a CTA sentence. This wastes a heading slot. Demote to `<p>` or `<h3>`.

---

## Content Flow Analysis

The page follows a classic long-form sales page structure:

```
Hook → Qualify → Niche → Problem → Compare → Process → Proof → More Proof → CTA → FAQ → Final CTA
```

**This flow is excellent for conversion.** But it has two content gaps:

### Gap 1: No Social Proof / Testimonials Section

The page has case studies (Grand Weddings, Stillness Co., Customized Gifts, Ayesha/Luxe) — but **zero direct quotes from clients.** No testimonial block. No star ratings. No "here's what they said" pull-quote.

For a service business selling to visual business owners, a testimonial section between the case studies and the FAQ would significantly increase trust. Even 2-3 short quotes would work:

> "We went from zero Google leads to 12 serious enquiries in the first month." — Grand Weddings

### Gap 2: No "About" or Credibility Signal

The page says "We" and "Solicate" but never explains who is behind it. There's no:
- Team size mention
- Years in business
- Number of projects completed
- Specific expertise credentials

This matters for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) — Google's quality signal for service pages. A single line like "Solicate has revamped 20+ websites for visual businesses across 8 cities in India" would add authority.

### Gap 3: No Pricing Signal

The page never mentions cost, investment range, or even "starting from." Google increasingly surfaces pricing information in SERPs, and pages with pricing signals tend to rank higher for commercial queries. Even a vague signal helps:
> "Our SEO-first revamps typically run between ₹X and ₹Y depending on scope."

---

## Keyword Placement Scorecard

For the homepage to rank, target keywords need to appear in these positions:

| Position | Should Contain | Currently Contains | Status |
|----------|---------------|-------------------|--------|
| `<title>` | "SEO website revamp" + "India" | "Solicate \| SEO-First Website Revamps" | ⚠️ No location |
| `<meta description>` | "wedding business" + "India" + "Google rankings" | Generic description | 🔴 Weak |
| `<h1>` | "SEO revamp" or "website revamp" | "search structure" | 🔴 No keywords |
| First `<h2>` | Niche keyword | "Built for businesses where Instagram runs ahead of Google" | ⚠️ Conceptual |
| Body (first 100 words) | Primary keyword 2-3x | "wedding, event, bridal..." comma list | ⚠️ Reads as stuffing |
| Image `alt` text | Target keyword | No `<img>` tags exist | 🔴 Missing entirely |
| Internal link anchor text | Descriptive keywords | "See website revamp work", "View All Work" | ⚠️ Decent |
| URL | Keyword in path | `/` (homepage) | ✅ N/A |
| FAQ questions | Long-tail queries | 3 good ones | ✅ Good |

---

## Summary: Homepage Content Fixes (Priority Order)

| # | Fix | Impact | Effort |
|---|-----|--------|--------|
| 1 | Rewrite H1 to include "SEO-first revamp" | 🔴 High — primary ranking signal | Low |
| 2 | Add FAQPage Schema for existing 3 FAQs | 🔴 High — rich snippet eligibility | Low |
| 3 | Demote 5 H2s to H3s (CTA sections + "More Fixes") | 🟠 Medium — heading hierarchy | Low |
| 4 | Rewrite 3 key H2s to include target keywords | 🟠 Medium — keyword signals | Low |
| 5 | Expand Anatomy section with visible text (~80 words) | 🟠 Medium — content depth | Low |
| 6 | Rewrite hero body paragraph to avoid keyword stuffing | 🟠 Medium — natural keyword flow | Low |
| 7 | Rewrite 5-step titles from jargon to keyword-descriptive | 🟡 Medium — keyword density | Low |
| 8 | Add 2-3 more FAQs (pricing, timeline, geo) | 🟡 Medium — FAQ Schema + content depth | Medium |
| 9 | Add a testimonials/social proof mini-section | 🟡 Medium — E-E-A-T + trust | Medium |
| 10 | Add an E-E-A-T credibility line ("20+ projects, 8 cities") | 🟡 Medium — authority signal | Low |
| 11 | Convert `background-image` to `<img>` with `alt` text | 🟠 Medium — image search | Low |
| 12 | Expand total word count from ~800 to ~1300 | 🟡 Medium — content depth | Medium |

