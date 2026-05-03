# Xu Research Lab Website

Jekyll static website for GitHub Pages:

```text
https://HBliu-lab.github.io/xu-lab/
```

The site uses Jekyll + Liquid templates + YAML data files. Content editors should update `_data/*.yml` and Markdown pages instead of changing templates whenever possible.

## Local Preview

```powershell
bundle exec jekyll build --trace
bundle exec jekyll serve
```

Preview at:

```text
http://localhost:4000/xu-lab/
```

## How to Replace Images

Image paths in YAML should use site paths such as `/assets/images/...`. Templates apply `relative_url`, so images work with the GitHub Pages baseurl `/xu-lab`.

Example: replace the PI portrait.

1. Put the verified image here:

```text
assets/images/people/xu-tiantian.jpg
```

2. Update `_data/people.yml`:

```yaml
photo: "/assets/images/people/xu-tiantian.jpg"
```

Project convention is to use `/assets/images/...` paths in data files.

## Current Image Naming

- PI portrait: `assets/images/people/xu-tiantian.jpg`
- Pending-confirmation member portraits: `assets/images/people/member-01.jpg`, `member-02.jpg`, etc.
- Homepage slider: `assets/images/slider/slider-01.png`, `slider-02.png`, `slider-03.png`
- Research cards: `assets/images/research/design.jpg`, `control.jpg`, `applications.jpg`
- Gallery full-size photos: place in `assets/images/gallery/`
- Gallery thumbnails: place in `assets/images/gallery/thumbs/`; when no thumbnail exists, use the full-size image as `thumb`
- News images: place in `assets/images/news/`, named `news-01.png`, `news-02.png`, etc.

Use lowercase English letters, numbers, and hyphens only. Avoid spaces, Chinese characters, parentheses, and punctuation in filenames.

## Material Import Rules

- Homepage slider images are appended by default, not replaced. Continue numbering from the current maximum filename, for example `slider-04.png` after `slider-01.png` through `slider-03.png`.
- News images go in `assets/images/news/`.
- News items may use optional fields in `_data/news.yml`:

```yaml
image: "/assets/images/news/news-01.png"
image_alt: "News image"
image_caption: "TODO: confirm news image caption"
```

## Image Directories

- `assets/images/slider/`: Homepage slider images, recommended 900x480 px.
- `assets/images/people/`: PI and member portraits.
- `assets/images/research/`: Research card images.
- `assets/images/gallery/`: Full-size gallery photos.
- `assets/images/gallery/thumbs/`: Optional gallery thumbnails.
- `assets/images/news/`: Optional images displayed on the News page.
