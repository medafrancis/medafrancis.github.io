# Personal academic site

A plain HTML/CSS/JS site (no build step, no framework) — five pages sharing one
stylesheet. Ready to push straight to GitHub Pages.

```
academic-site/
├── index.html        Home / About
├── cv.html            CV
├── research.html       Publications & working papers (the page from the screenshot)
├── teaching.html       Courses
├── grant.html           Grantssets / replication files
├── assets/
│   ├── css/style.css   All styling — colors, fonts, layout live here
│   ├── js/main.js       Abstract/bibtex toggle + active-tab highlighting
│   ├── img/             Put your photo here
│   └── cv.pdf            (add this yourself — linked from cv.html)
└── README.md
```

## 1. Fill in your details

Before publishing, do a project-wide find-and-replace for anything in
`[brackets]` and the placeholder links:

- `fmeda@africanschoolofeconomics`, `yourhandle`, `yourusername`, the Scholar `user=XXXXXXX` link
- The `[Paper Title Here]`, `[Course Title]`, `[Grantsset...]` placeholders in
  `research.html`, `teaching.html`, `grant.html`
- Swap the `FM` avatar circle for a real photo: drop an image at
  `assets/img/profile.jpg`, then in every page replace

  ```html
  <img src="assets/img/profile.jpg" alt="Francis Touola Meda" class="avatar">
  ```

  with

  ```html
  <img src="assets/img/profile.jpg" alt="Your Name" class="avatar">
  ```

- Add your real CV at `assets/cv.pdf` (the download button on `cv.html`
  already points there).

To add another publication, copy one `<div class="pub">…</div>` block in
`research.html`, give its two `id`s new unique names (e.g. `pub3-abstract`,
`pub3-bibtex`), and edit the text/links.

## 2. Preview locally (optional)

Any static file server works. From inside the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## 3. Push to GitHub

**Option A — user/organization site** (site lives at `https://yourusername.github.io`):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

The repository name must be exactly `yourusername.github.io`.

**Option B — project site** (site lives at `https://yourusername.github.io/repo-name`):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/repo-name.git
git push -u origin main
```

## 4. Turn on GitHub Pages

1. On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Wait a minute, then refresh — GitHub shows the live URL at the top of
   that page (also under the repo's **Actions** tab while it builds).

For Option A the site is live at `https://yourusername.github.io`.
For Option B it's at `https://yourusername.github.io/repo-name`.

## 5. Later edits

Any push to `main` redeploys automatically — edit the HTML/CSS files, then:

```bash
git add .
git commit -m "Update publications"
git push
```

## Customizing the look

Every color, font, and spacing value is a CSS variable at the top of
`assets/css/style.css`:

```css
:root {
  --accent: #7b241c;   /* change this one line to re-theme every button, link, and tab underline */
  --sidebar-width: 260px;
  --font-body: 'Inter', ...;
}
```

To use a different Google Font, swap the `<link>` tag in each page's `<head>`
and the `--font-body` value.
