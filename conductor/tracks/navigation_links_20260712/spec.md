# Specification: Website Navigation & Topical Page Representation

## 1. Overview
Currently, the Solicate website has a large number of generated local SEO landing pages (21 cities), industry solutions pages (19 industries), and service pages (14 services), but many of these are not reachable from the main pages. 
This track will build a unified navigation and linking structure. It introduces a main Services Index page, expands lists on the Homepage (`index.html`) and the Business Growth Hub page (`/website-performance-questions/index.html`), and updates navigation links across all pages to ensure search engine crawler discoverability and improved user navigation.

## 2. Functional Requirements
### 2.1 Main Services Index Page (`/services/index.html`)
- Create a new, visually stunning services index page at `/services/index.html`.
- Feature a premium card-grid design displaying all 14 services listed in `sitemap-services.xml`.
- Each card should contain the service name, a concise summary, and a button pointing to the individual service page.
- Update header and footer navigation menus across all website pages to point the 'Services' link to `/services/` instead of the specific `/seo-first-website-revamp/` page.

### 2.2 Growth Hub Page Updates (`/website-performance-questions/index.html`)
- **Services section**: Expand to display and link to all 14 services (instead of only 4).
- **Locations ("Where We Work") section**: Expand to list all 21 locations from `sitemap-locations.xml` (adding Chennai, Bangalore, Pune, Coimbatore, Madurai).
- **Industries section**: Add a new section listing all 19 industry-specific solution pages from `sitemap-industries.xml` using a neat grid or link-group design.

### 2.3 Homepage Updates (`index.html`)
- **Navigation**: Update header navigation link for "Services" to `/services/`.
- **Footer served cities**: Expand to list all 21 cities.
- **Industry representation**: Add a new sub-section or footer section listing the 19 industry solution pages.

### 2.4 Case Study Representation (`/work/index.html`)
- Audit and confirm all 21 case studies from `sitemap-work.xml` are consistently styled and linked in the project portfolio.
- Update navigation header and footer on the work page to link to `/services/`.

## 3. Non-Functional Requirements
- **Performance**: Pure static HTML/CSS structure to maintain perfect Core Web Vitals (LCP, INP, CLS) and page speeds (<100ms load times).
- **Aesthetics**: Responsive card grids matching the design tokens (`css/tokens.css`) with smooth hover micro-animations and sleek dark glassmorphism styling.
- **SEO & Accessibility**: Use semantic HTML5 structural tags and correct metadata schema for the new services page. Ensure 100% crawlable `href` tags.

## 4. Acceptance Criteria
- [ ] A new page exists at `/services/index.html` with all 14 services linked.
- [ ] Header navigation on all pages links "Services" to `/services/`.
- [ ] Growth Hub page lists all 14 services, all 21 cities, and all 19 industries.
- [ ] Homepage footer lists all 21 cities and all 19 industries.
- [ ] All links are functional, crawlable, and responsive on mobile.

## 5. Out of Scope
- Creating new individual service or industry pages (this track only links/represents the existing ones).
- Modifying the core SEO auditing tool or ROI calculator logic.
