# Implementation Plan: Content Polish and SEO Blog Pillars

This plan outlines the phases, tasks, and manual verification steps required to complete the `content_polish_20260712` track.

---

## Phase 1: Content Audit & Strategy Mapping [checkpoint: d8464f5]
- [x] Task: Audit existing location and industry pages to list content polish requirements
    - [x] Review current copy for location pages (`/kakinada/`, `/hyderabad/`, `/bangalore/`, `/rajahmundry/`)
    - [x] Review current copy for industry hubs (`/website-for-real-estate/`, `/website-for-dental-clinics/`, `/website-for-lawyers/`)
    - [x] Identify gaps in schema markup (LocalBusiness, FAQ, Service)
    - [x] Map out specific case study links to embed on each page
- [x] Task: Select and detail the 5 high-intent blog pillars to be implemented
    - [x] Verify keyword targets and LSI lists for all 5 blogs
    - [x] Confirm sitemap placement and URL routes
- [x] Task: Conductor - User Manual Verification 'Phase 1: Content Audit & Strategy Mapping' (Protocol in workflow.md)

---

## Phase 2: Polishing Existing Pages Content [checkpoint: 05a8c09]
- [x] Task: Polish location pages content (injecting local case studies, FAQs, and local business JSON-LD schemas) (07d8f80)
    - [x] Update Kakinada, Rajahmundry, Visakhapatnam, Hyderabad location directories
    - [x] Embed local testimonials and city-specific client case studies
    - [x] Inject LocalBusiness and FAQ schema JSON-LD scripts in headers
- [x] Task: Polish industry pages content (injecting industry-specific case studies, FAQs, and service JSON-LD schemas) (b17c3bc)
    - [x] Update Real Estate, Dental Clinics, and Lawyers industry directories
    - [x] Inject Service and FAQ schema JSON-LD scripts in headers
- [x] Task: Conductor - User Manual Verification 'Phase 2: Polishing Existing Pages Content' (Protocol in workflow.md)

---

## Phase 3: Blog Pillars Implementation
- [x] Task: Implement Blog Pillar 1 (Custom vs WordPress) (b5d4bd4)
    - [x] Create `/custom-website-vs-wordpress/index.html`
    - [x] Write rich, comparison-focused copywriting matching Paper & Ink theme styles
    - [x] Add internal links to pricing guides and case studies
- [x] Task: Implement Blog Pillar 2 (Custom Website Cost in India) (8d3f54c)
    - [x] Create `/website-development-cost-in-india/index.html` or refine existing pricing guide page
    - [x] Write transparent pricing matrix tables
    - [x] Integrate enquiry forms and ROI calculator link
- [x] Task: Implement Blog Pillar 3 (Local SEO in AP & Telangana) (4ec5368)
    - [x] Create `/local-seo-andhra-pradesh-telangana/index.html`
    - [x] Write local citation guides, Maps setup, and city marketing strategies
- [x] Task: Implement Blog Pillar 4 (Why Website is Not Getting Enquiries) (1a11ce4)
    - [x] Create `/why-website-not-getting-enquiries/index.html`
    - [x] Write conversion copy, check-list lists, and call-to-action details
- [x] Task: Implement Blog Pillar 5 (AI Website Builder vs Custom) (94bad2d)
    - [x] Create `/ai-website-builder-vs-custom-website/index.html`
    - [x] Write performance comparison figures, scalability constraints, and migration paths
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Blog Pillars Implementation' (Protocol in workflow.md)

---

## Phase 4: Sitemaps & Final Review
- [ ] Task: Update static XML sitemaps to include new blog posts and verify internal linking graph
    - [ ] Add new posts to `sitemap-blog-pillars.xml`
    - [ ] Verify that all internal links resolve correctly (no 404s)
- [ ] Task: Run final HTML/CSS validation and accessibility checks
    - [ ] Validate HTML markup of modified pages
    - [ ] Test page responsiveness and mobile view optimization
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Sitemaps & Final Review' (Protocol in workflow.md)
