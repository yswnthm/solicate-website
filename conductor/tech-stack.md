# Technology Stack: Solicate Website

This document records the technology stack used for the Solicate agency website.

---

## 1. Core Architecture
- **Type**: Pure Static Website (Jamstack-ready).
- **Hosting / Server**: Static file serving (e.g. Netlify, Vercel, or GitHub Pages).

---

## 2. Frontend Technologies
- **HTML5**: Semantic markup including structural tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) to maximize accessibility and SEO topical relevance.
- **CSS3 (Vanilla)**: Styling based on design tokens (`css/tokens.css`) for consistent typography, sizing, colors, and transitions, with page and layout styling in `css/style.css`.
- **JavaScript (Vanilla ES6+)**: Native scripting without frontend framework dependencies, keeping the execution bundle extremely lightweight and ensuring fast performance.

---

## 3. Data & Storage
- **Database**: None. The site relies entirely on hardcoded content and static files to ensure maximum speed and safety.
- **Dynamic Data**: Interactivity (like calculations or speed check tools) is handled entirely in-memory using client-side JavaScript.

---

## 4. Search Engine Optimization (SEO)
- **Metadata**: Hardcoded meta titles, descriptions, open graph tags, and JSON-LD schema tags inside individual page structures.
- **Sitemaps**: Static sitemap files partitioned by page categorizations (industries, locations, services, blog pillars) indexed via a root `sitemap_index.xml` file.
