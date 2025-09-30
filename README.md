
# Float • Fire & Ice — Rebrand (Static HTML for GitHub Pages)

This is a static, fast website designed for GitHub Pages. It includes:
- Home, Terms, Float Therapy, AW Hair, Makeup by L
- Accessible, responsive layout (no frameworks)
- Fresha booking placeholders
- Worldpay (Hosted Payment Pages) deposit form placeholders
- Lightweight SVG logos you can replace later

## How to deploy on GitHub Pages
1. Create a new repo and upload this folder.
2. In Settings → Pages, select the `main` branch and `/root` as source.
3. Your site will publish at `https://YOUR-USER.github.io/REPO/`.

## Connect Fresha
- In Fresha, go to **Online booking → Link builder** and copy your shareable link (to your full profile or specific services / staff).
- Replace the `href` values that start with `https://www.fresha.com/a/YOUR-...` in `aw-hair.html`, `makeup-by-l.html`, and `float-therapy.html`.
- If you prefer an embedded popup modal rather than a new tab, add `data-fresha` to your anchor (the JS already supports it).

## Deposits with Worldpay (optional)
- This project uses **Hosted Payment Pages (HPP)** so you can keep the site static and PCI-light.
- Replace placeholder fields in the `<form>` elements with your **instId**, `amount`, etc.
- Configure return URLs and confirmation pages in your Worldpay dashboard.
- If you enable deposits **inside Fresha**, you can remove the Worldpay deposit forms and use Fresha only.

## Customising logos & colours
- Replace the SVGs in `assets/img/logos/` with your own.
- Edit colours in `assets/css/styles.css` under the `:root` CSS variables.

## Image tips
- Put your price chart image at `assets/img/placeholders/aw-price-list.jpg` and update the `img` tag alt text for accessibility.
- Add real gallery photos to `assets/img/` and update `<img>` paths and `alt` text.

## Tracking
- Add your Analytics tag (e.g., Google Analytics) in each HTML file `<head>` if needed.

---
Made to be clean, fast, and easy to extend.
