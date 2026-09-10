# Canterbury — a free church website template for Eleventy

A free website template for Anglican, Episcopal and Catholic parishes. It knows the church year: the season is computed from the date and colours the page, and the movable feasts are worked out rather than typed in, so the calendar is never out of date. Pages for services, music, the church year, and weddings, baptisms and funerals. Self-hosted typefaces, dark mode, and no external requests.

**[Live demo](https://churchcreation.com/demo/canterbury/)** · **[About this template](https://churchcreation.com/templates/canterbury/)** · 8 pages · MIT

![Home page](images/preview.jpg)

| Dark mode | On a phone |
|---|---|
| ![The same page in dark mode](images/preview-dark.jpg) | ![The same page on a phone](images/preview-mobile.jpg) |

## Getting started

Needs Node 18+.

```bash
npm install
npm start
```

Then build:

```bash
npm run build          # writes _site/
```

## Making it your church's

Almost everything a church needs to change lives in one file — **`src/church.config.json`**: name, address, phone, service times, giving link, social accounts. Edit that and the header, footer, contact page, map link and structured data all update together, so they cannot drift apart.

The rest:

| Where | What |
|---|---|
| `src/_includes/base.njk` | the shared layout — header, footer, `<head>` |
| `src/*.njk` | one file per page; the front matter carries its title and description |
| `src/_data/nav.json` | the navigation, rendered by the layout with `aria-current` on the current page |

## What's included

8 pages: St Botolph's, Barwick, About, Contact, Weddings, baptisms and funerals, Music, Services, Plan a visit, The church year.

Self-contained: the typefaces are bundled and self-hosted, the CSS and JS ship with the template, and there are no external requests, no build step for the assets, and no tracking. Dark mode is included and respects the system setting.

## URLs are flat on purpose

Pages build to `about.html` rather than `/about/`. The template's own runtime depends on it: `core/js/ui.js` marks the current nav link by comparing the last path segment, and `core/js/config.js` fetches `church.config.json` by a relative path. Pretty URLs break both. If you would rather have them, change the two accordingly.

## Licence

MIT — see [LICENSE](LICENSE). Use it for your church, for a client, commercially, whatever. Attribution appreciated, not required. Bundled typefaces are SIL OFL 1.1; see `core/fonts/FONTS.md`.

Photography in the live demo is from Unsplash and is credited in `CREDITS.md`; the download ships neutral placeholders instead.

---

One of ten [free church website templates](https://churchcreation.com/templates/) from ChurchCreation. Built for [Eleventy](https://www.11ty.dev/).
