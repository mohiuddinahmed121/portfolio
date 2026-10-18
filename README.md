# Mohiuddin Ahmed — Portfolio (Next.js + Tailwind)

## Requirements
- Node.js 18.18 ba tar upore (`node -v` diye check korun). Na thakle https://nodejs.org theke LTS install korun.

## Local-e run korar upay
```bash
cd portfolio
npm install
npm run dev
```
Tarpor browser-e http://localhost:3000 kholun. File save korlei page auto reload hobe.

## Production build (deploy-er age test)
```bash
npm run build
npm start
```

## Folder structure
```
portfolio/
├── package.json            # dependencies ar scripts
├── next.config.mjs         # Next.js config
├── postcss.config.mjs      # Tailwind setup
├── jsconfig.json           # "@/..." import alias
├── .gitignore
├── public/                 # static file: CV PDF, profile.jpg, project screenshot
└── src/
    ├── app/
    │   ├── layout.js       # <html>, title, SEO metadata
    │   ├── page.js         # section gulo ekshathe joro kore
    │   └── globals.css     # Tailwind import + global style
    ├── components/         # Navbar, Hero, Stats, About, Education,
    │                       # Skills, Projects, Contact, Footer
    └── data/
        └── portfolio.js    # SHOB content (text, link, project) ekhane
```

## Content change korbo kibhabe
Text, project, skill, link: `src/data/portfolio.js` edit korun. Design: `src/components/` er file gulo.

## Contact form chalu korar jonno
1. https://formspree.io e free account khule ekta form baniye ID nin.
2. Project root-e `.env.local` file baniye likhun: `NEXT_PUBLIC_FORMSPREE_ID=apnar_id`
3. `npm run dev` abar chalu korun.

## CV
Apnar CV PDF `public/Mohiuddin_Ahmed_CV.pdf` naam-e rakhun.

## Deploy (free)
**Vercel (sobcheye sohoj):** code GitHub-e push korun, vercel.com e repo import korun, Deploy chapun.
**GitHub Pages:** `next.config.mjs` e `output: "export"` uncomment kore `npm run build` din; `out/` folder deploy hobe.
