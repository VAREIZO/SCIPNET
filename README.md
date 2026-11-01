# SCPINET Format Base

A simple, editable HTML/CSS/JavaScript starting point for an SCP-style document. The page includes examples of the available layouts and elements; replace the example labels and content with your own.

## Project files

- [`index.html`](./index.html) — page content and element structure.
- [`style.css`](./style.css) — colors, layout, typography, and responsive styles.
- [`script.js`](./script.js) — the example button interaction.
- `img/` — put your image files here.

## Get started

1. Open `index.html` in a browser, or use a local development server in your editor.
2. Edit the example text and headings in `index.html`.
3. Save and refresh the browser to see your changes.

The document is hidden at first and revealed by the example button. To make it visible immediately, remove the `hidden` attribute from `<main id="scpDocument">`. To remove the button interaction, delete the `.clearance-container` from the HTML and remove or update its handler in `script.js`.

## Common elements

### Change the title and metadata

Edit the heading and metadata spans inside `.document-header`:

```html
<header class="document-header">
  <h1 class="vt323-regular">SCP-1234</h1>
  <div class="metadata vt323-regular">
    <span>ITEM #: SCP-1234</span>
    <span class="object-class">CLASS: SAFE</span>
    <span>ACCESS: LEVEL 2</span>
  </div>
</header>
```

Add or remove `<span>` elements for metadata fields.

### Add a section or subheading

Place sections inside `<main id="scpDocument">`. Use headings in order: `h2` for a main section and `h3` for a subsection.

```html
<section>
  <h2 class="vt323-regular">Section heading</h2>
  <p class="vt323-regular">Add your paragraph here.</p>

  <h3 class="vt323-regular">Subheading</h3>
  <p class="vt323-regular">Add more details here.</p>
</section>
```

### Add an image

Save an image in `img/`, then add a figure where you want it to appear. Replace the filename and alternative text:

```html
<figure class="scp-image-container">
  <img
    src="img/example.jpg"
    alt="Describe what the image shows"
    class="scp-image"
  />
  <figcaption class="vt323-regular">Image caption</figcaption>
</figure>
```

Use `.plant-image-container` and `.plant-image` for the smaller image layout used beside a subsection. Always provide useful `alt` text; use `alt=""` for a purely decorative image.

### Add a callout

Use the existing classes for styled boxes:

```html
<aside class="info-box" role="note">
  <h3 class="vt323-regular">Information</h3>
  <p class="vt323-regular">Supporting details go here.</p>
</aside>

<aside class="warning-box" role="note">
  <h3 class="vt323-regular">Warning</h3>
  <p class="vt323-regular">Warning details go here.</p>
</aside>

<div class="addendum">
  <h3 class="vt323-regular">Addendum</h3>
  <p class="vt323-regular">Additional details go here.</p>
</div>
```

Use `class="prophecy-box"` for a centered, highlighted content block.

### Add an image gallery

Add or remove `<figure>` elements inside `.image-gallery`:

```html
<div class="image-gallery">
  <figure>
    <img src="img/example.jpg" alt="Describe the image" />
    <figcaption class="vt323-regular">Image caption</figcaption>
  </figure>
</div>
```

The gallery uses two columns on wider screens and one column on narrow screens.

### Add expandable content

Use the built-in HTML `<details>` and `<summary>` elements:

```html
<details class="level4-notice-container">
  <summary class="clearance-button">Show more</summary>
  <aside class="level4-notice" role="note">
    <h3 class="vt323-regular">More information</h3>
    <p class="vt323-regular">This content appears when expanded.</p>
  </aside>
</details>
```

## Styling

To change the overall font, colors, or spacing, edit the global rules near the top of `style.css`. To change one component, find its class selector (for example `.info-box` or `.image-gallery`) and adjust its styles. Add new styles near the related component styles.

Keep the `@media (max-width: 600px)` rules near the end of `style.css` in mind when changing layouts; they control the small-screen appearance.

## JavaScript

`script.js` demonstrates a button that displays a verification message, reveals the document, and disables itself. If you change the button or document IDs in the HTML, update the matching selectors in `script.js` too:

- `clearanceBtn`
- `scpDocument`

For any new interactive control, use a real button or native HTML control, and keep its state and accessible labels updated.
