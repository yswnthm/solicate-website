# Implementation Plan: Website Navigation & Topical Page Representation

This plan outlines the phases, tasks, and manual verification steps required to complete this track.

---

## Phase 1: Audit and Mapping [checkpoint: c80dc08]
- [x] Task: Audit sitemaps and source directories to compile absolute lists of all service, location, and industry pages (c37975d)
    - [x] Extract all 14 services from `sitemap-services.xml`
    - [x] Extract all 21 locations from `sitemap-locations.xml`
    - [x] Extract all 19 industries from `sitemap-industries.xml`
    - [x] Map out all existing navigation links and footer elements that need updates
- [x] Task: Conductor - User Manual Verification 'Phase 1: Audit and Mapping' (Protocol in workflow.md)

---

## Phase 2: Services Index Page & Navigation Update
- [x] Task: Create the new main services index page at `/services/index.html` (e0d8ca2)
    - [x] Create `/services/` directory and `/services/index.html` file
    - [x] Implement a premium responsive card grid displaying all 14 services using design tokens
    - [x] Write SEO-optimized meta description, page title, and structured breadcrumb schema
- [x] Task: Update header and footer navigation menus to link to `/services/` across all core pages (e0d8ca2)
    - [x] Update `index.html` navigation and footer
    - [x] Update `work/index.html` navigation and footer
    - [x] Update `website-performance-questions/index.html` navigation and footer
    - [x] Update header/footer in the new `/services/index.html`
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Services Index Page & Navigation Update' (Protocol in workflow.md)

---

## Phase 3: Growth Hub & Homepage Expansion
- [ ] Task: Update the Growth Hub page (`/website-performance-questions/index.html`) to link to all assets
    - [ ] Expand the "Our Services" section from 4 to 14 service cards
    - [ ] Expand the "Where We Work" section from 15 to 21 location links
    - [ ] Create a new "Industries We Serve" section listing all 19 industry solution pages
- [ ] Task: Update the Homepage (`index.html`) to link to all assets
    - [ ] Expand the footer served cities list to display all 21 cities
    - [ ] Add a new section or column listing the 19 industry solution pages
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Growth Hub & Homepage Expansion' (Protocol in workflow.md)

---

## Phase 4: Sitemaps & Final Audit
- [ ] Task: Update sitemaps and verify layout responsiveness
    - [ ] Add `/services/` to `sitemap-core.xml`
    - [ ] Run checks to verify no broken links or 404s are introduced
    - [ ] Perform responsive design checks on desktop and mobile layout
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Sitemaps & Final Audit' (Protocol in workflow.md)
