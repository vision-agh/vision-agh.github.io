# How to Add Images to Publications

This guide explains how to add featured images to publications on the Vision AGH website.

## Quick Start

To add an image to a publication:

1. Navigate to the publication's folder in `content/publication/`
2. Add an image file named `featured.jpg` or `featured.png` to that folder
3. (Optional) Configure image settings in the publication's `index.md` file

## Step-by-Step Instructions

### 1. Locate Your Publication

Publications are stored in individual folders under `content/publication/`. Each publication has its own folder containing an `index.md` file with the publication metadata.

For example, existing publications in this repository:
- `content/publication/journal-article/` (example publication)
- `content/publication/badap-agh-118434/` (actual publication)
- `content/publication/conference-paper/` (example publication)

Your publication folder will typically be named after the publication ID or a descriptive slug.

### 2. Add Your Image File

Add your image to the publication's folder with one of these exact filenames:
- `featured.jpg` (for JPEG images)
- `featured.png` (for PNG images)

**Example:**
```bash
content/publication/my-publication/
├── index.md
├── cite.bib
└── featured.jpg  ← Add your image here
```

### 3. (Optional) Configure Image Settings

You can customize how the image is displayed by adding or modifying the `image` section in your publication's `index.md` file:

```yaml
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/example)'
  focal_point: ""
  preview_only: false
```

#### Image Configuration Options

- **`caption`**: Text displayed below the image (supports Markdown for links)
- **`focal_point`**: Controls the cropping focus when the image is resized
  - Options: `Smart`, `Center`, `TopLeft`, `Top`, `TopRight`, `Left`, `Right`, `BottomLeft`, `Bottom`, `BottomRight`
  - Default: `""` (empty, uses Smart cropping)
- **`preview_only`**: If `true`, the image appears only in listings, not on the publication page
  - Default: `false`

### 4. Enable Featured Status (Optional)

To highlight a publication with its image on the homepage or featured publications section, set:

```yaml
featured: true
```

## Complete Example

Here's a complete example of a publication with a featured image:

**Folder structure:**
```
content/publication/conference-paper/
├── index.md
├── cite.bib
├── conference-paper.pdf
└── featured.jpg
```

**index.md (excerpt):**
```yaml
---
title: 'An example conference paper'
authors:
  - admin
  - Robert Ford
date: '2013-07-01T00:00:00Z'
publication_types: ['paper-conference']
featured: true

# Featured image
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false
---
```

## Best Practices

1. **Image Quality**: Use high-resolution images (at least 1200px wide) for best results
2. **Aspect Ratio**: Images with a 16:9 or 3:2 aspect ratio work well
3. **File Size**: Optimize images to keep file sizes under 500KB for faster loading
4. **Format**: Use JPEG for photographs, PNG for graphics with transparency
5. **Naming**: Always use exactly `featured.jpg` or `featured.png` (lowercase)

## Troubleshooting

### Image Not Showing Up?

1. **Check the filename**: It must be exactly `featured.jpg` or `featured.png` (lowercase, in the publication folder)
2. **Check file location**: The image should be in the same folder as the publication's `index.md`
3. **Rebuild the site**: If testing locally, restart your Hugo server
4. **Check image file**: Ensure the image file is valid and not corrupted

### Image Looks Cropped or Positioned Poorly?

Try different `focal_point` settings to control how the image is cropped:

```yaml
image:
  focal_point: "Center"  # or Top, Bottom, Left, Right, etc.
```

## For Publications Imported from BibTeX

If you're using the automatic publication import from `publications.bib`:

1. After the import creates the publication folder, manually add the `featured.jpg/png` file
2. You may also need to manually add the `image` configuration to the generated `index.md`

The automatic import workflow doesn't include images, so they must be added manually.

## Examples in This Repository

See these publications for working examples with featured images:
- [`content/publication/journal-article/`](/content/publication/journal-article/) - Journal article example
- [`content/publication/conference-paper/`](/content/publication/conference-paper/) - Conference paper example
- [`content/publication/preprint/`](/content/publication/preprint/) - Preprint example

All three examples include a `featured.jpg` file and image configuration in their `index.md` files.

## Additional Resources

- [Hugo Blox Documentation](https://docs.hugoblox.com/)
- [Hugo Blox Featured Images Guide](https://docs.hugoblox.com/content/page-features/#featured-image)
