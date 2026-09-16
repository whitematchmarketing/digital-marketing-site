# Elina Agnaeva - Digital Marketing Consultant Website

Static one-page site. Plain HTML, CSS, and JavaScript. No build step.

Live: https://elinaagnaeva.pages.dev (Cloudflare Pages)
Backup: https://whitematchmarketing.github.io/digital-marketing-site/ (GitHub Pages)

## Files

- `index.html` - the page (hero, platforms, services, process, about, FAQ, contact)
- `styles.css` - styling
- `script.js` - mobile menu and contact form (opens a pre-filled email, no backend)
- `favicon.svg` - browser tab icon
- `404.html` - not-found page
- `robots.txt` - allows search engines to index the site
- `_headers` - basic security headers for Cloudflare Pages

## Redeploy on Cloudflare Pages

Export the token and account id from `~/CLAUDE/outfit-styler-v2/.env`, then run from this folder:

    npx wrangler pages deploy . --project-name elinaagnaeva --branch main --commit-dirty=true

## Redeploy on GitHub Pages

    git push

## Custom domain (optional)

In the Cloudflare dashboard open Workers & Pages, the `elinaagnaeva` project, Custom domains, and add your domain.

## Optional: replace the "EA" monogram with a photo

Add `photo.jpg` to this folder and swap the `about-avatar` div in `index.html` for `<img class="about-avatar" src="photo.jpg" alt="Elina Agnaeva">`.
