# XuLab Research Group Website — Full Design & Architecture Blueprint
**PI:** Prof. Xu Tiantian (徐天添) | SIAT, Chinese Academy of Sciences  
**Target:** GitHub Pages static site  
**Style Reference:** Zhang Research Lab (http://microbot.mae.cuhk.edu.hk/)  
**Audience:** Codex AI coding agent

---

## 1. Executive Summary

Build a multi-page static research lab website hosted on **GitHub Pages** using **Jekyll + Liquid templating**, with all content managed through **YAML data files**. The visual design and page structure will mirror the Zhang Research Lab reference exactly: a white/light-gray academic aesthetic with a sticky top navigation bar, a full-width image slideshow on the homepage, and tabular layouts for people cards and news entries. No backend or CMS knowledge is required for future content updates — all edits are made to plain-text `.yml` files.

---

## 2. Reference Site Reverse-Engineering (Zhang Research Lab)

From inspection of `http://microbot.mae.cuhk.edu.hk/`, the following structural and visual patterns must be replicated:

### 2.1 Navigation Bar
- **Sticky top bar**, white background, lab name on the left as the logo/brand link
- **Nav links (right-aligned):** Home · People · Research · Grants · Publications · Teaching · Facilities · Photos · Openings · News
- Active page link is visually distinguished (underline or color change)
- Collapses to hamburger menu on mobile

### 2.2 Homepage Layout (index)
1. **Full-width image slideshow** (auto-play carousel, ~550px tall) — research highlight images cycle automatically
2. **Welcome paragraph** below the slider — 2–3 sentences describing the lab's mission
3. **"Recent Highlights" section** — a series of two-column table rows: left cell is blank spacer, center cell contains bold date + bold headline + description text + optional link. Newest entries at the top.
4. **Footer** — lab name, address, copyright

### 2.3 People Page
- Anchor-linked jump menu at the top: PI · Postdoctoral Associates · PhD Students · Research Assistants · Former Members
- Each category uses a **three-column table layout**: left spacer | photo | text block
- Text block contains: **Name (bold)**, PhD source (italic), current role, bio paragraph
- Former members listed as a simple bulleted or table list

### 2.4 Research Page
- **2–3 column card grid**; each card has a representative image (top), research area title (bold), 1–2 sentence description
- Cards are links that could expand to sub-pages or anchor sections

### 2.5 Publications Page
- Grouped by **year** (descending), each year as a heading
- Each entry is a numbered or bulleted list item: **Authors (PI name bolded)**, *Journal in italics*, Year, Volume/Pages, (impact factor tag optional), external DOI link
- Optional badge: ESI Highly Cited

### 2.6 Grants/Projects Page
- Numbered list of funded projects: Funding body, **Project title (bold)**, Grant number, Amount, Period, Status (Ongoing/Completed), Role (PI)

### 2.7 News Page
- Reverse-chronological list of announcements — same table format as homepage "Recent Highlights" but exhaustive

### 2.8 Openings Page
- Plain prose description of recruitment opportunities: PhD, Master's, Postdoc, RA
- Admission specialties, contact instructions

### 2.9 Photos/Gallery Page
- **CSS grid of thumbnails** (3–4 per row); clicking a thumbnail opens a lightbox overlay
- Images captioned

### 2.10 Teaching Page (optional stub)
- Course list table: Course code, Name, Level, Semester

---

## 3. Site Map

```
xu-lab/                         (GitHub repo root)
├── index.md                    → Home (slider + highlights)
├── people.md                   → People
├── research.md                 → Research
├── publications.md             → Publications
├── grants.md                   → Grants / Projects
├── news.md                     → News
├── openings.md                 → Openings / Recruitment
├── photos.md                   → Photo Gallery
├── teaching.md                 → Teaching (stub)
├── _config.yml                 → Jekyll global config
├── _data/
│   ├── nav.yml                 → Navigation link list
│   ├── highlights.yml          → Homepage news items
│   ├── people.yml              → All lab members
│   ├── publications.yml        → All papers (structured)
│   ├── grants.yml              → Funded projects
│   ├── news.yml                → Full news archive
│   ├── research.yml            → Research area cards
│   └── gallery.yml             → Photo gallery entries
├── _layouts/
│   ├── default.html            → Base HTML shell (head + nav + footer)
│   └── page.html               → Standard page wrapper (extends default)
├── _includes/
│   ├── nav.html                → Sticky nav bar component
│   ├── footer.html             → Footer component
│   ├── slider.html             → Homepage image carousel
│   ├── highlights.html         → News highlights table component
│   ├── people_card.html        → Reusable person card
│   └── pub_entry.html          → Reusable publication entry
├── assets/
│   ├── css/
│   │   └── main.css            → All custom styles
│   ├── js/
│   │   └── main.js             → Slider, mobile menu, lightbox
│   └── images/
│       ├── slider/             → Homepage carousel images
│       ├── people/             → Member headshots
│       ├── research/           → Research area thumbnails
│       └── gallery/            → Lab photos
└── .github/
    └── workflows/
        └── pages.yml           → GitHub Actions deploy workflow
```

---

## 4. Tech Stack Recommendation

| Layer | Choice | Rationale |
|---|---|---|
| **Static site generator** | Jekyll 4.x | Native GitHub Pages support; no build server needed; Liquid templating; YAML data files |
| **CSS framework** | Custom CSS (no framework) | Reference site uses minimal bespoke CSS; avoids Bootstrap bloat |
| **Image slider** | Swiper.js (CDN) | Lightweight, mobile-friendly, matches reference site carousel behavior |
| **Lightbox** | GLightbox (CDN) | Zero-dependency, accessible gallery lightbox |
| **Fonts** | Google Fonts — "Lato" or "Open Sans" | Clean academic sans-serif matching reference site typography |
| **Icons** | Font Awesome 6 (CDN) | Email, Google Scholar, etc. icons |
| **Deployment** | GitHub Actions → GitHub Pages | Automated build & deploy on every push to `main` |
| **Content management** | YAML `_data/` files | Non-technical editors update `.yml` files only |

---

## 5. Visual Design Specification

### 5.1 Color Palette
```css
:root {
  --color-primary:   #2c3e7a;   /* Navy blue — nav bar, headings, accent */
  --color-accent:    #c0392b;   /* Deep red — active link, highlight borders */
  --color-bg:        #ffffff;   /* Page background */
  --color-bg-alt:    #f5f7fa;   /* Section alternating background */
  --color-text:      #333333;   /* Body text */
  --color-text-muted:#777777;   /* Secondary text, dates */
  --color-border:    #dde1e7;   /* Table/card borders */
  --color-nav-bg:    #2c3e7a;   /* Nav background */
  --color-nav-text:  #ffffff;   /* Nav link color */
}
```

### 5.2 Typography
```css
body        { font-family: 'Lato', Arial, sans-serif; font-size: 15px; line-height: 1.7; }
h1          { font-size: 2rem; color: var(--color-primary); font-weight: 700; }
h2          { font-size: 1.5rem; color: var(--color-primary); border-bottom: 2px solid var(--color-primary); padding-bottom: 6px; }
h3          { font-size: 1.15rem; color: var(--color-primary); }
```

### 5.3 Navigation Bar
```css
nav.site-nav {
  position: sticky; top: 0; z-index: 1000;
  background: var(--color-nav-bg);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem; height: 58px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
nav .brand { color: #fff; font-size: 1.1rem; font-weight: 700; text-decoration: none; }
nav ul { list-style: none; display: flex; gap: 0; margin: 0; padding: 0; }
nav ul li a {
  display: block; padding: 0 14px; line-height: 58px;
  color: rgba(255,255,255,0.88); font-size: 0.875rem; font-weight: 500;
  text-decoration: none; transition: background 0.2s;
}
nav ul li a:hover, nav ul li a.active { background: rgba(255,255,255,0.18); color: #fff; }
```

### 5.4 Homepage Slider
- Width: 100% of content area (~900px centered)
- Height: 480px
- Auto-advance every 4 seconds
- Dot pagination below
- Images: research highlight figures (JPG/PNG, 900×480 recommended)

### 5.5 Recent Highlights / News Table
```html
<table class="highlights-table">
  <tr>
    <td class="spacer"></td>
    <td class="entry">
      <p><strong>Mar. 2026</strong>: <strong>Headline text.</strong> Description sentence with optional
      <a href="#">link</a>.</p>
    </td>
    <td class="spacer"></td>
  </tr>
</table>
```
```css
.highlights-table { width: 100%; border-collapse: collapse; }
.highlights-table td.spacer { width: 3%; }
.highlights-table td.entry { padding: 10px 0; border-bottom: 1px solid var(--color-border); font-size: 0.93rem; }
```

### 5.6 People Cards
```css
.people-table td.photo img { width: 120px; border-radius: 4px; }
.people-table td.bio { padding: 0 20px; vertical-align: top; }
.people-table td.bio .name { font-weight: 700; font-size: 1rem; }
.people-table td.bio .degree { font-style: italic; color: var(--color-text-muted); }
```

### 5.7 Publication Entries
```css
.pub-year-group h2 { color: var(--color-primary); margin-top: 2rem; }
.pub-list li { margin-bottom: 12px; line-height: 1.6; }
.pub-list .authors .pi-name { font-weight: 700; }
.pub-list .journal { font-style: italic; }
.pub-list .badge { background: var(--color-primary); color: #fff; font-size: 0.7rem; padding: 1px 5px; border-radius: 3px; vertical-align: middle; }
```

---

## 6. YAML Data File Schemas

### 6.1 `_data/highlights.yml` (Homepage news)
```yaml
- date: "Apr. 2026"
  headline: "Our paper on magnetofluid LAA occlusion published in Nature."
  body: "Wang Shu et al. demonstrated long-term thrombus-free left atrial appendage occlusion via magnetofluids."
  link: "https://doi.org/10.1038/xxx"
  link_text: "Read more"

- date: "Jan. 2026"
  headline: "Prof. Xu receives National Outstanding Youth Fund (B)."
  body: ""
  link: ""
```

### 6.2 `_data/people.yml`
```yaml
pi:
  name: "Xu Tiantian (徐天添)"
  title: "Principal Investigator, Researcher (研究员)"
  affiliation: "Shenzhen Institute of Advanced Technology (SIAT), Chinese Academy of Sciences"
  email: "tt.xu@siat.ac.cn"
  scholar: "https://scholar.google.com/citations?user=jSv44msAAAAJ&hl"
  photo: "/assets/images/people/xu_tiantian.jpg"
  bio: "Prof. Xu Tiantian is a Principal Researcher and National Outstanding Youth Fund recipient at SIAT. She has long conducted systematic research on magnetically-driven micro-robots for targeted therapy, establishing autonomous path planning and cooperative motion control methods. She has published 30+ IEEE Transactions papers (including 4 in TRO) and 10+ Nature-family papers as corresponding author."

postdocs:
  - name: "Member Name"
    degree_source: "Ph.D. University Name"
    photo: "/assets/images/people/placeholder.jpg"
    bio: "Brief bio."

phd_students:
  - name: "Student Name"
    enrollment_year: 2022
    topic: "Magnetic microrobot swarm control"
    photo: "/assets/images/people/placeholder.jpg"

research_assistants:
  - name: "RA Name"
    photo: "/assets/images/people/placeholder.jpg"

alumni:
  - name: "Former Member"
    period: "2019–2023"
    current_position: "Assistant Professor, University X"
```

### 6.3 `_data/publications.yml`
```yaml
- year: 2026
  authors: "Shu Wang; Wenhao Ju; ... **Tiantian Xu***"
  title: "Long-term thrombus-free left atrial appendage occlusion via magnetofluids"
  journal: "Nature"
  volume_pages: "651: 91–99"
  impact_factor: 48.5
  doi: "https://doi.org/10.1038/..."
  badges:
    - "Q1"
    - "ESI Highly Cited"

- year: 2025
  authors: "Ruijie Xie; Fei Han; ... **Xu Tiantian***; Zhiyuan Liu"
  title: "A movable long-term implantable soft microfibre for dynamic bioelectronics"
  journal: "Nature"
  volume_pages: "645(8081): 648–655"
  impact_factor: 48.5
  doi: "https://doi.org/10.1038/..."
  badges:
    - "Q1"
```

### 6.4 `_data/grants.yml`
```yaml
- number: "2023YFB4705300"
  funder: "National Key R&D Program (青年科学家项目)"
  title: "Cross-scale mother-child multi-functional catheter medical robot for extreme narrow cavities"
  amount: "¥2,000,000"
  period: "2023-12 – 2026-11"
  status: "Ongoing"
  role: "PI"

- number: "U22A2064"
  funder: "NSFC Joint Fund (联合基金项目)"
  title: "Efficient actuation and cooperative control of magnetically-driven bionic thin-film micro-robots for targeted drug delivery"
  amount: "¥2,550,000"
  period: "2023-01 – 2026-12"
  status: "Ongoing"
  role: "PI"
```

### 6.5 `_data/research.yml`
```yaml
- title: "Novel Magnetically-Controlled Micro-Robot Design & Fabrication"
  image: "/assets/images/research/design.jpg"
  description: "Covers magnetic fluids, micro-robot swarms, soft thin-film and bioinspired robots, and continuum soft surgical robots."

- title: "Multi-modal Motion & Cooperative Control"
  image: "/assets/images/research/control.jpg"
  description: "Explores multi-modal actuation mechanisms and multi-agent cooperative control strategies in complex environments."

- title: "Frontier Applications"
  image: "/assets/images/research/application.jpg"
  description: "Focuses on practical deployment of micro-robots for clinical targeted therapy and operations in special restricted spaces."
```

### 6.6 `_data/gallery.yml`
```yaml
- src: "/assets/images/gallery/lab2024.jpg"
  caption: "Lab group photo 2024"
  thumb: "/assets/images/gallery/thumbs/lab2024.jpg"

- src: "/assets/images/gallery/robot_demo.jpg"
  caption: "Micro-robot demonstration"
  thumb: "/assets/images/gallery/thumbs/robot_demo.jpg"
```

---

## 7. Jekyll Layout & Include Architecture

### 7.1 `_layouts/default.html` (base shell)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | Xu Research Lab</title>
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
  {% if page.use_swiper %}<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">{% endif %}
  {% if page.use_lightbox %}<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">{% endif %}
</head>
<body>
  {% include nav.html %}
  <main class="site-content">
    {{ content }}
  </main>
  {% include footer.html %}
  <script src="/assets/js/main.js"></script>
  {% if page.use_swiper %}<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>{% endif %}
  {% if page.use_lightbox %}<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>{% endif %}
</body>
</html>
```

### 7.2 `_includes/nav.html`
```html
<nav class="site-nav">
  <a class="brand" href="/">Xu Research Lab</a>
  <button class="nav-toggle" aria-label="Toggle menu">☰</button>
  <ul class="nav-links">
    {% for item in site.data.nav %}
    <li><a href="{{ item.url }}" {% if page.url == item.url %}class="active"{% endif %}>{{ item.label }}</a></li>
    {% endfor %}
  </ul>
</nav>
```

### 7.3 `_data/nav.yml`
```yaml
- label: "Home"
  url: "/"
- label: "People"
  url: "/people/"
- label: "Research"
  url: "/research/"
- label: "Grants"
  url: "/grants/"
- label: "Publications"
  url: "/publications/"
- label: "News"
  url: "/news/"
- label: "Photos"
  url: "/photos/"
- label: "Openings"
  url: "/openings/"
```

### 7.4 `index.md` (Homepage Front Matter)
```yaml
---
layout: default
title: Home
use_swiper: true
---
```
Homepage body (Liquid + HTML):
```html
{% include slider.html %}

<section class="welcome container">
  <p>Welcome to the <strong>Xu Research Lab</strong> at the Shenzhen Institute of Advanced Technology (SIAT),
  Chinese Academy of Sciences. Our lab is dedicated to the design, fabrication, and intelligent control of
  magnetically-driven micro-robots for targeted biomedical applications, including minimally invasive
  targeted therapy and navigation in complex biological environments.</p>
</section>

<section class="highlights container">
  <h2>Recent Highlights</h2>
  {% include highlights.html %}
</section>
```

---

## 8. Key Component Implementations

### 8.1 `_includes/slider.html`
```html
<div class="swiper homepage-slider">
  <div class="swiper-wrapper">
    {% for img in site.data.slider %}
    <div class="swiper-slide">
      <img src="{{ img.src }}" alt="{{ img.alt }}">
      {% if img.caption %}<div class="slide-caption">{{ img.caption }}</div>{% endif %}
    </div>
    {% endfor %}
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.homepage-slider', {
      loop: true, autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  });
</script>
```

### 8.2 Publications page (Liquid loop, grouped by year)
```html
---
layout: default
title: Publications
---
<div class="container">
  <h1>Publications</h1>
  {% assign sorted = site.data.publications | sort: "year" | reverse %}
  {% assign years = sorted | map: "year" | uniq %}
  {% for year in years %}
  <div class="pub-year-group">
    <h2>{{ year }}</h2>
    <ol class="pub-list">
      {% for pub in sorted %}{% if pub.year == year %}
      <li>
        {{ pub.authors | replace: "Tiantian Xu", "<strong>Tiantian Xu</strong>" | replace: "Xu Tiantian", "<strong>Xu Tiantian</strong>" }}.
        {{ pub.title }}.
        <em>{{ pub.journal }}</em>, {{ pub.year }}, {{ pub.volume_pages }}.
        {% if pub.doi %}<a href="{{ pub.doi }}" target="_blank">[DOI]</a>{% endif %}
        {% for badge in pub.badges %}<span class="badge">{{ badge }}</span>{% endfor %}
      </li>
      {% endif %}{% endfor %}
    </ol>
  </div>
  {% endfor %}
</div>
```

### 8.3 People page (Liquid loop)
```html
---
layout: default
title: People
---
<div class="container">
  <h1>People</h1>
  <div class="people-jump">
    <a href="#pi">PI</a> · <a href="#postdocs">Postdocs</a> · <a href="#phd">PhD Students</a> ·
    <a href="#ra">Research Assistants</a> · <a href="#alumni">Alumni</a>
  </div>

  <h2 id="pi">Principal Investigator</h2>
  <table class="people-table">
    <tr>
      <td class="spacer"></td>
      <td class="photo"><img src="{{ site.data.people.pi.photo }}" alt="{{ site.data.people.pi.name }}"></td>
      <td class="bio">
        <div class="name">{{ site.data.people.pi.name }}</div>
        <div class="title">{{ site.data.people.pi.title }}</div>
        <div class="affiliation">{{ site.data.people.pi.affiliation }}</div>
        <div class="contact">
          <i class="fa fa-envelope"></i> <a href="mailto:{{ site.data.people.pi.email }}">{{ site.data.people.pi.email }}</a> |
          <i class="fa-brands fa-google-scholar"></i> <a href="{{ site.data.people.pi.scholar }}" target="_blank">Google Scholar</a>
        </div>
        <p>{{ site.data.people.pi.bio }}</p>
      </td>
      <td class="spacer"></td>
    </tr>
  </table>

  <h2 id="postdocs">Postdoctoral Associates</h2>
  <table class="people-table">
    {% for member in site.data.people.postdocs %}
    {% include people_card.html member=member %}
    {% endfor %}
  </table>

  <!-- Repeat pattern for phd_students, research_assistants -->

  <h2 id="alumni">Former Group Members</h2>
  <ul class="alumni-list">
    {% for alum in site.data.people.alumni %}
    <li><strong>{{ alum.name }}</strong> ({{ alum.period }}) — {{ alum.current_position }}</li>
    {% endfor %}
  </ul>
</div>
```

---

## 9. `_config.yml`
```yaml
title: "Xu Research Lab"
description: "Magnetically-driven micro-robot research at SIAT, Chinese Academy of Sciences"
url: "https://xu-lab-siat.github.io"   # replace with actual GitHub Pages URL
baseurl: ""

# Jekyll settings
markdown: kramdown
highlighter: rouge
permalink: /:title/

# Exclude from build
exclude:
  - README.md
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor

# Plugins (all supported by GitHub Pages)
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
```

---

## 10. GitHub Actions Deployment (`.github/workflows/pages.yml`)
```yaml
name: Deploy Jekyll to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 11. Seed Content: PI Info Pre-populated

The following should be hardcoded or seeded into YAML files immediately:

**PI Block (`_data/people.yml`):**
- Name: Xu Tiantian (徐天添)
- Title: Principal Researcher (研究员) · Doctoral Supervisor (博导)
- Institution: Shenzhen Institute of Advanced Technology (SIAT), Chinese Academy of Sciences
- Email: tt.xu@siat.ac.cn
- Address: 1068 Xueyuan Avenue, Xili, Nanshan District, Shenzhen, Guangdong, 518055
- Google Scholar: https://scholar.google.com/citations?user=jSv44msAAAAJ&hl
- Awards: National Outstanding Youth Fund (B), IROS 2019 Best Application Paper (1/2494), China Electronics Society Natural Science 2nd Prize (Rank 1), Guangdong Science & Technology Progress 1st Prize, Shenzhen Youth Science Award, Shenzhen May 4th Youth Medal
- Editorial roles: IEEE T-RO, T-MECH, T-ASE, RAL Associate Editor

**Representative Publications (seed 5–6 top papers in `_data/publications.yml`):**
1. Wang Shu et al. **Tiantian Xu***, *Nature*, 2026, 651: 91–99
2. Ruijie Xie et al. **Xu Tiantian***, *Nature*, 2025, 645(8081): 648–655
3. Ben Wang et al. **Xu Tiantian***, *Nature Biomedical Engineering*, 2025, 9(9): 1471–1485
4. Pingyu Xiang et al. **Tiantian Xu***, *Nature Sensors*, 2026, 1(2): 181–193
5. **Tiantian Xu*** et al., *IEEE Transactions on Robotics*, 2022, 38(5): 2875

**Grants (seed all 6 from UCAS profile into `_data/grants.yml`)**

**Research Areas (seed 3 cards):**
1. Novel Magnetically-Controlled Micro-Robot Design & Fabrication
2. Multi-modal Motion & Cooperative Control
3. Frontier Scene Applications (Clinical & Restricted Spaces)

---

## 12. Step-by-Step Build Instructions for Codex Agent

Execute these steps sequentially:

### Step 1 — Repository Initialization
```bash
mkdir xu-lab && cd xu-lab
git init
echo "source 'https://rubygems.org'" > Gemfile
echo "gem 'jekyll', '~> 4.3'" >> Gemfile
echo "gem 'jekyll-seo-tag'" >> Gemfile
echo "gem 'jekyll-sitemap'" >> Gemfile
bundle install
```

### Step 2 — Create Directory Structure
```bash
mkdir -p _layouts _includes _data assets/css assets/js assets/images/{slider,people,research,gallery/thumbs} .github/workflows
```

### Step 3 — Create All YAML Data Files
Create these files with seed content as specified in Section 11:
- `_data/nav.yml`
- `_data/highlights.yml` (3+ entries)
- `_data/people.yml` (PI info + empty arrays for others)
- `_data/publications.yml` (5 seed papers)
- `_data/grants.yml` (all 6 grants from UCAS profile)
- `_data/research.yml` (3 research areas)
- `_data/gallery.yml` (empty array, placeholder)
- `_data/slider.yml` (placeholder image entries)

### Step 4 — Create `_config.yml`
Use schema from Section 9.

### Step 5 — Create Layouts and Includes
Create files in this order:
1. `_layouts/default.html`
2. `_layouts/page.html`
3. `_includes/nav.html`
4. `_includes/footer.html`
5. `_includes/slider.html`
6. `_includes/highlights.html`
7. `_includes/people_card.html`
8. `_includes/pub_entry.html`

### Step 6 — Create All Page Files (`.md`)
1. `index.md` (Home — includes slider + highlights)
2. `people.md`
3. `research.md`
4. `publications.md`
5. `grants.md`
6. `news.md`
7. `photos.md`
8. `openings.md`
9. `teaching.md`

### Step 7 — Create `assets/css/main.css`
Implement all styles from Section 5 (colors, nav, slider, tables, cards, publications, gallery grid, responsive breakpoints).

### Step 8 — Create `assets/js/main.js`
Implement: mobile nav toggle, active nav link detection.

### Step 9 — Add Placeholder Images
Download or create 3 placeholder slider images (900×480px) and 1 person placeholder (200×200px) into `assets/images/`.

### Step 10 — Add GitHub Actions Workflow
Create `.github/workflows/pages.yml` from Section 10.

### Step 11 — Local Test
```bash
bundle exec jekyll serve
# Open http://localhost:4000 and verify all pages render correctly
```

### Step 12 — Git Push & Enable GitHub Pages
```bash
git add .
git commit -m "Initial commit: Xu Lab website"
git remote add origin https://github.com/YOUR_ORG/xu-lab.git
git push -u origin main
# In GitHub repo Settings → Pages → Source: GitHub Actions
```

---

## 13. Future Maintainability Guide (for non-technical editors)

| Task | File to Edit | Action |
|---|---|---|
| Add a news item | `_data/highlights.yml` | Add a new block at the top of the list |
| Add a publication | `_data/publications.yml` | Add a new entry with year, authors, title, journal, doi |
| Add a team member | `_data/people.yml` | Add entry under the appropriate array |
| Update homepage slider | `_data/slider.yml` | Add image path + alt text; upload image to `assets/images/slider/` |
| Add a gallery photo | `_data/gallery.yml` | Add src + caption; upload image to `assets/images/gallery/` |
| Add/remove nav link | `_data/nav.yml` | Add or remove item from list |
| Update grants | `_data/grants.yml` | Add new entry or change `status` field |

**No HTML or code knowledge required for any of the above.**

---

## 14. Quality Checklist for Codex Agent

Before marking the project complete, verify:

- [ ] All 9 pages render without errors locally (`bundle exec jekyll serve`)
- [ ] Nav bar is sticky and highlights the active page on each page
- [ ] Homepage slider auto-advances and has working prev/next arrows
- [ ] Publications are grouped by year, descending, with PI name bolded
- [ ] People page has anchor jump links that work
- [ ] Grants page lists all 6 funded projects from PI's profile
- [ ] Site is responsive: nav collapses to hamburger at < 768px
- [ ] All external links (DOI, Scholar) open in `target="_blank"`
- [ ] GitHub Actions workflow triggers and Pages URL resolves after push
- [ ] No broken image references (use placeholder images where real ones are absent)
- [ ] `jekyll-seo-tag` outputs proper `<meta>` tags on every page
