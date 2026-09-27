# 6 Club Subdomain Website

Plain HTML, CSS and vanilla JavaScript pages prepared for `https://6club.6club.co.in`.

## Pages

- `/` — 6 Club overview and directory linking to every page
- `/6club-login/` — login and account-safety guide
- `/6club-game/` — game categories and responsible-play guide
- `/6club-app/` — mobile access and download-safety guide
- `/about-us/`, `/disclaimer/`, `/responsible-gaming/`
- `/privacy-policy/`, `/terms-and-conditions/`

Every route is a pre-rendered `index.html`; the deployed site has no framework runtime or build dependency. `build-pages.mjs` regenerates the HTML and XML sitemap from `site-data.mjs` using Node.js built-ins.

## Vercel setup

Import the existing GitHub repository as a separate Vercel project and set its Root Directory to `subdomain-site`. Use the `Other` framework preset, leave the build command empty, and publish the root directory as the output. Then add `6club.6club.co.in` under that project’s Domains; Vercel will show the DNS record required for the subdomain.

The current primary site's domain and Vercel project are not changed by this folder.
