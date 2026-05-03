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

Image paths in YAML should be relative to the site root. Templates apply `relative_url`, so images work with the GitHub Pages baseurl `/xu-lab`.

Example: replace the PI portrait.

1. Put the verified image here:

```text
assets/images/people/xu_tiantian.jpg
```

2. Update `_data/people.yml`:

```yaml
photo: "assets/images/people/xu_tiantian.jpg"
```

If you prefer a leading slash, this also works with the current templates because paths are passed through `relative_url`:

```yaml
photo: "/assets/images/people/xu_tiantian.jpg"
```

Project convention is to omit the leading slash in data files.

## Current Image Naming

- PI portrait: `assets/images/people/xu_tiantian.jpg`
- Homepage slider: `assets/images/slider/slider-1.jpg`, `slider-2.jpg`, `slider-3.jpg`
- Research cards: `assets/images/research/design.jpg`, `control.jpg`, `applications.jpg`
- Gallery full-size photos: place in `assets/images/gallery/`
- Gallery thumbnails: place in `assets/images/gallery/thumbs/`; when no thumbnail exists, use the full-size image as `thumb`

## Image Directories

- `assets/images/slider/`: Homepage slider images, recommended 900x480 px.
- `assets/images/people/`: PI and member portraits.
- `assets/images/research/`: Research card images.
- `assets/images/gallery/`: Full-size gallery photos.
- `assets/images/gallery/thumbs/`: Optional gallery thumbnails.
