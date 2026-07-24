# 71Squared website mockup

A private, local-only website concept for 71Squared: one commercial parent company with Construction, Flooring and Plumbing specialist divisions.

## Current pages

- Homepage
- Construction
- Flooring
- Plumbing
- Contact

## Run locally

Node.js 22.13 or newer is required.

```powershell
npm install
npm run dev
```

Then open the local address shown in the terminal. Nothing in this project has been published or deployed.

## Verify

```powershell
npm run lint
npm test
```

## Netlify deployment

The project now uses the standard Next.js build expected by Netlify. The included `netlify.toml` runs `npm run build` with Node.js 22.13.0. Netlify can keep its automatically detected Next.js adapter enabled.

After committing and pushing the latest files to the connected repository, retry the deploy in Netlify. The build will create the required `.next` directory.

## Content status

- The 71² parent mark and three division lockups are temporary, code-based identities that can be swapped for the graphic designer's final logos.
- Colours are controlled through the tokens at the top of `app/globals.css`.
- Projects, testimonials, location and contact details are deliberately labelled as sample or pending content.
- The current photographs are temporary mockup assets and should be replaced with approved 71Squared project photography before launch.
- `public/og.png` is a locally generated, original brand-preview image.
