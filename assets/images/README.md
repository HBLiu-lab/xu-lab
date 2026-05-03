# Image Asset Guide

Keep image paths in `_data/*.yml` relative to the site root, for example:

```yaml
photo: "assets/images/people/xu_tiantian.jpg"
```

All templates pass these paths through Jekyll's `relative_url` filter, so they work on the GitHub Pages project path `/xu-lab`.

## Directories

- `slider/`: Homepage carousel images. Recommended size: 900x480 px or the same wide aspect ratio.
- `people/`: PI and lab member portraits. Recommended square crop, at least 400x400 px.
- `research/`: Representative images for the three research direction cards. Recommended wide crop, 16:10 or 16:9.
- `gallery/`: Full-size lab photos for the Photos page.
- `gallery/thumbs/`: Optional thumbnails for gallery images. Use the same filename stem as the full-size image when possible.

## Naming Rules

Use lowercase English letters, numbers, and hyphens only. Avoid spaces, Chinese characters, parentheses, and punctuation.

Examples:

- `xu-tiantian.jpg`
- `member-01.jpg`
- `slider-01.png`
- `photo-01.jpg`

## Current Placeholders

The existing SVG files are placeholders and should remain as fallbacks. The first batch of real images has been connected in the YAML data files. When replacing or adding images, update the relevant YAML file instead of editing templates.
