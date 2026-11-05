# Eshwar Pest Solutions — Website

React + Vite + Tailwind CSS site for a pest control business, built in the same
structure as a typical local-service competitor site: full service catalogue,
sector pages, Hyderabad locality + Telangana district coverage, pricing, a
multi-step booking flow, and a floating WhatsApp/Call widget.

## Running locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Quick look without installing anything

```bash
npx vite build --config vite.config.preview.js
```

This produces `preview-build/index.preview.html` — a single, self-contained
HTML file with everything inlined (JS, CSS, images). Double-click it to open
it directly in a browser, no server or `npm install` needed. It's for quick
previews only, not for deploying — it's one large file instead of the
properly split, cached assets the real build produces.

## Editing content

**Everything editable lives in one file: `src/data/site.js`.**

- `business` — name, owner, phone, WhatsApp number, email, stats (years,
  customers, team size), social links
- `services` — the 10 services, each with description, bullet points and a
  starting price
- `sectors` — the commercial/residential sectors served
- `pricingPlans` — the 4 pricing cards on `/pricing`
- `branches` — the 3 branch office addresses on `/branches` and `/contact`
- `hyderabadAreas` — localities listed in the footer and the booking form's
  area dropdown
- `telanganaDistricts` — all 33 districts listed on `/branches` and in the
  booking form
- `testimonials` and `faqs` — swap in real customer reviews and your own FAQ
  answers

No other file needs touching for day-to-day content updates.

## What still needs real content before go-live

- [ ] `testimonials` in `site.js` are placeholders — replace with real,
      permissioned customer reviews
- [ ] `business.experienceYears`, `customersServed`, `corporateClients`,
      `teamSize` are estimates — confirm real figures
- [ ] `pricingPlans` and each service's `priceFrom` are illustrative starting
      prices — confirm against your actual rate card
- [ ] `branches` addresses are placeholders — replace with real office
      addresses
- [ ] Swap the Google Maps embed in `src/pages/Contact.jsx` for your actual
      office location
- [ ] Add a real logo (currently a text "E" mark) and favicon
- [ ] Hook up a real form backend if you don't want the Booking/Contact
      forms to hand off to WhatsApp — right now, "Confirm Booking" and "Send
      Message" open a pre-filled WhatsApp chat instead of hitting a server,
      which avoids needing backend infrastructure but means every lead
      currently requires the visitor to tap "send" in WhatsApp themselves

## How booking works

There's no backend. The booking form (`/booking`) and contact form
(`/contact`) collect details client-side, then generate a WhatsApp deep link
(`wa.me/<number>?text=<prefilled message>`) with everything filled in. The
visitor taps through to WhatsApp and sends it — Eshwar's team sees it land
as a normal WhatsApp message. This is the fastest way to get a working
booking system live without paying for form-backend infrastructure. If you
want it to also log into a spreadsheet or CRM, that needs a small serverless
function (e.g. a Zapier webhook) added to `handleSubmit` in both
`Booking.jsx` and `Contact.jsx`.

## Deploying

```bash
npm run build
# deploy the dist/ folder to Vercel, Netlify, or any static host
```
