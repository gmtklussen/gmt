# GMT Klussen — website

Website voor **GMT Klussen**: schilderwerk, vloeren, stucwerk, behang, timmerwerk en
kleine klussen. Gebouwd met **Next.js 14 (App Router)** en TypeScript, zelfde opzet als
de Paris BV-site, klaar om te deployen op **Vercel**.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000

> **Let op:** schijf `D:` is geen NTFS-schijf. Next.js/webpack geeft daar de fout
> `EISDIR: illegal operation on a directory, readlink`. Draai `npm run dev` / `npm run build`
> daarom vanuit een map op `C:` (of deploy gewoon op Vercel, daar werkt het normaal).

## Structuur

```
lib/site.ts          # ALLE bedrijfsgegevens (e-mail, KvK, domein)
app/
  layout.tsx         # fonts, SEO-metadata, structured data
  page.tsx           # zet alle secties samen
  globals.css        # alle styling (kleuren bovenaan in :root)
  api/contact/       # contactformulier → e-mail via SMTP
  robots.ts, sitemap.ts
components/
  Header, Hero, Diensten, About, Waarom, Werkwijze, Faq, Contact, Footer, Reveal
```

## Nog aanpassen (placeholders)

Alles staat in **`lib/site.ts`**:

- E-mail `info@gmtklussen.nl`
- Domein `https://gmtklussen.nl` (ook in `app/robots.ts` en `app/sitemap.ts`)

Verder: teksten in de componenten, en eventueel echte projectfoto's toevoegen in `public/`.

## Contactformulier (SMTP)

Werkt precies zoals bij Paris BV. Zet in **Vercel → Settings → Environment Variables**
(of lokaal in `.env.local`, zie `.env.example`):

| Variabele     | Verplicht | Uitleg |
|---------------|-----------|--------|
| `SMTP_HOST`   | ja        | bv. `smtp.jouwprovider.nl` |
| `SMTP_PORT`   | nee       | `587` (standaard) of `465` |
| `SMTP_SECURE` | nee       | leeg = automatisch |
| `SMTP_USER`   | ja        | inlognaam mailaccount |
| `SMTP_PASS`   | ja        | (app-)wachtwoord |
| `SMTP_FROM`   | nee       | afzender, zelfde domein als `SMTP_USER` |
| `CONTACT_TO`  | nee       | ontvanger, standaard `info@gmtklussen.nl` |

De klant krijgt automatisch een bevestigingsmail.

## Deployen op Vercel

Push naar GitHub → vercel.com → **Add New… → Project** → importeer de repo → **Deploy**.
