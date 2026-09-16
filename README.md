# Digital Marketing Consultant Website

Static one-page site. Plain HTML, CSS, and JavaScript. No build step.

## Files

- `index.html` - the page
- `styles.css` - styling
- `script.js` - mobile menu toggle
- `favicon.svg` - browser tab icon
- `404.html` - not-found page (Cloudflare Pages picks this up automatically)
- `robots.txt` - allows search engines to index the site
- `_headers` - basic security headers for Cloudflare Pages

## Before deploying

Replace the placeholders in `index.html`:

- `[MY FULL NAME]` (appears in the title, header, contact section, and footer)
- `[MY EMAIL]` (appears in the contact section, including the mailto links)

Quick way from the terminal, run inside this folder:

    sed -i '' 's/\[MY FULL NAME\]/Jane Smith/g; s/\[MY EMAIL\]/jane@example.com/g' index.html

## Deploy to Cloudflare Pages (direct upload, no Git needed)

1. Log in to https://dash.cloudflare.com
2. Go to Workers & Pages, then click Create, then the Pages tab, then Upload assets
3. Give the project a name (this becomes `your-name.pages.dev`)
4. Drag this whole folder in (or select all files), then click Deploy site
5. The site is live at `https://your-project.pages.dev` within a minute

## Deploy with Git (auto-redeploys on push)

1. Push this folder to a GitHub or GitLab repository
2. In Cloudflare, go to Workers & Pages, Create, Pages, Connect to Git
3. Select the repository
4. Build settings: Framework preset "None", build command empty, build output directory `/`
5. Click Save and Deploy

## Custom domain (optional)

In the Pages project, open Custom domains, click Set up a custom domain, and enter your domain. If the domain is already on Cloudflare the DNS record is added for you.
