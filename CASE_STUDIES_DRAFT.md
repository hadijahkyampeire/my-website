# Case Study Drafts — for review

> Status: **content drafts** (not yet wired into the site). Review, correct any numbers marked `‹fill›`, then I'll build them into the portfolio in your chosen format.
>
> Two notes:
> 1. **PayPal** is written entirely from your CV — no confidential internals, no real metrics exposed.
> 2. **Zifah Voyages + MixedTrips** is written as **one flagship case study** because that's the truth of the code: a single monorepo serves both brands via domain-based routing. "Two production brands on one platform I architected" is a stronger senior signal than two smaller separate projects. Everything below is verified against the `safari-monorepo` source.

---

## Case Study 1 — PayPal · Buy Now, Pay Later

**Role:** Full-Stack Software Engineer (via Insight Global) · Austin, TX · Oct 2025 – Present
**Stack:** React · TypeScript · Node.js · GraphQL (Apollo Server + Express, BFF) · Datadog · RUM · Microservices

### The context
PayPal's Pay Later family (Pay in 4, Pay Monthly via WebBank) is embedded in millions of merchant checkouts across the US, UK, EU, AU, and CA. I work across onboarding, checkout, and credit-decisioning — the surfaces where a new customer first applies for and uses credit.

### What I own
After launch, I became the **sole engineering owner of the US "New To PayPal" (NTPP) Spinwheel prefill onboarding experience** — the flow that pre-fills applicant data to reduce friction at signup. Ownership here means more than features: I lead **production support, issue triage, stakeholder communication, and incident resolution** for a customer-facing credit flow where downtime directly blocks signups.

### Selected work
- **Nova Credit Open Banking** — delivered frontend and backend enabling secure bank-account linking for Pay in 4 and Pay Monthly, giving applicants an alternative to traditional credit checks and smoothing onboarding.
- **Production operations** — I run releases end-to-end: QA validation, monitoring, **rollback decisions**, and post-release verification on customer-facing credit-decisioning services.
- **Observability** — use **Datadog + Real User Monitoring (RUM)** to proactively detect, investigate, and resolve production issues before they widen.
- **GraphQL BFF architecture** — built schemas and resolvers on the BNPL experience layer (Apollo Server + Express, Backend-for-Frontend), aggregating credit-application, risk, offer, and user-profile microservices behind one endpoint; this work supported the **Australian Pay Later market migration**.
- **Developer tooling** — authored shared, environment-driven Postman workspaces (by country and product) used daily by engineers across the BNPL stack to validate multi-step REST/GraphQL flows.

### Engineering decisions worth calling out
- **Consolidating client orchestration into a BFF** reduced chatty client-side REST calls into single aggregated GraphQL queries — fewer round-trips on the onboarding critical path.
- **Owning the incident loop** (not just the code) — triage → comms → rollback/fix → post-release validation — is the difference between shipping a feature and operating a product.

### Business impact (framing — no confidential data)
- A more reliable onboarding funnel for new-to-credit customers.
- Open-banking linking expands who can qualify, beyond thin-file applicants.
- Faster, safer releases via owned monitoring and rollback discipline.

---

## Case Study 2 — Zifah Voyages & MixedTrips · Multi-Brand Travel-Booking Platform

**Role:** Founder & Principal Engineer (design, build, operate — solo) · 2024 – present
**Live:** zifahvoyages.com (sports & events travel — FIFA World Cup 2026, Commonwealth Games) · mixedtrips.com (safari / wildlife / nature travel)
**Stack:** Next.js (App Router) · React 19 · TypeScript · MUI · Zustand · TanStack Query · Java/Spring Boot API · PostgreSQL · Stripe · PayPal · AWS S3 · Duffel · Playwright · GA4

### Business problem
Two travel brands, one small operator (me): a sports & events travel brand (**Zifah Voyages**) and a safari / wildlife / nature travel brand (**MixedTrips**). Building and maintaining two independent codebases would have been unaffordable for one engineer. I needed **one platform that serves two fully-branded storefronts** — separate payments, separate analytics, separate content — without duplicating engineering.

### Architecture
A **Yarn-workspaces monorepo** with three apps over a shared library and a single REST backend:

```mermaid
graph TD
  subgraph Frontend Monorepo (TypeScript)
    SP["safari-public<br/>Next.js 16 App Router · SSR/SSG<br/>zifahvoyages.com"]
    SF["sports-fun<br/>Vite + React Router SPA<br/>mixedtrips.com"]
    AD["admin-portal<br/>Vite SPA · RBAC + MFA<br/>internal ops"]
    SH["packages/shared<br/>Atomic-design components · 25+ API services ·<br/>booking hooks · GA4 analytics · types"]
    SP --> SH
    SF --> SH
    AD --> SH
  end
  SH -->|Axios + JWT refresh| API["Java/Spring Boot REST API<br/>(+ PostgreSQL)"]
  API --> PG[(PostgreSQL)]
  API --> STR["Stripe / PayPal<br/>(per-domain accounts)"]
  API --> DUF["Duffel<br/>(hotel supplier)"]
  SP --> S3A["AWS S3<br/>safari-tours-bucket"]
  SF --> S3B["AWS S3<br/>zifah-bucket"]
  SP --> GA["GA4 + Google Ads"]
  SF --> GA
```

### Technical decisions (the interesting ones)
1. **Multi-brand from one codebase via domain routing.** Payment requests carry a `frontend_domain` so the backend selects the correct Stripe/PayPal account per brand. Deploy once → two storefronts with isolated payments and branding. This is the keystone decision that made a two-brand business viable solo.
2. **Right tool per surface, not one-size-fits-all.**
   - `safari-public` → **Next.js App Router** for SEO/SSR (discovery matters for a public travel brand; supports static export for cheap hosting).
   - `sports-fun` + `admin-portal` → **Vite SPAs** for fast DX where SEO is secondary (events brand + internal tooling).
3. **A shared library as the contract.** `packages/shared` holds an atomic-design component system, 25+ typed API services, booking hooks (`useBookingCalculator`, `useReservationSubmit`), and a GA4 analytics layer — so a fix or feature lands in both brands at once.
4. **Trust the server for money.** Reservation pricing is validated server-side; the frontend sends prices for reference only and the backend recalculates — frontends never own the source of truth for charges.

### Frontend
React 19 + TypeScript across all apps; MUI + Emotion design system; Zustand for local state, TanStack Query for server cache; React Hook Form + Zod for validation; Framer Motion + Swiper for motion/carousels. Next/Image with remote patterns (Unsplash, S3) and webpack chunk-splitting (framework / MUI / shared / vendors) for bundle control.

### Backend & data
External **Java/Spring Boot REST API** backed by **PostgreSQL**, fronted by a shared Axios client with **JWT access/refresh interceptors** and session-timeout handling. No GraphQL here — REST kept the supplier integrations and admin CRUD simple.

### Payments
**Stripe** (Elements) and **PayPal** (`@paypal/react-paypal-js`) on both brands, with **per-domain account routing**. Flows: package reservations with deposit calculation, multi-hotel selection, and Duffel-powered stays checkout (`createPayPalOrderDuffel`, `checkoutDuffel`).

### Admin portal
Internal Vite SPA with **role-based access control, MFA (setup + verify), session-expiry warnings, and audit logs**. Manages accommodations/rate plans, packages, reservations, custom admin-built itineraries with a payment ledger, Duffel hotel bookings, plus full content CMS (blog, news, testimonials, FAQs, locations). Recharts dashboards; QR + PDF generation (`@react-pdf/renderer`).

### Search & booking experience
Destination/date hero search, a **build-your-safari wizard** (country → city → activity), live pricing calculator, hotel-upgrade selection via Duffel, then Stripe/PayPal checkout and confirmation. Geonames autocomplete for locations; D3-geo / react-simple-maps for geographic visuals.

### Integrations
Google OAuth (server-side exchange via a Next.js route handler), **Duffel** hotel supplier, GA4 + Google Ads conversion tracking, reCAPTCHA v3 on forms, AI chatbot (Hugging Face / optional Anthropic), currency exchange-rate service, AWS S3 for media (per-brand buckets, custom image-optimization step).

### Performance & scalability
- Per-surface rendering strategy (SSR/SSG vs SPA) chosen for cost and discoverability.
- Webpack chunk-splitting + Next/Image optimization + a custom S3 image-optimization script.
- TanStack Query caching cuts redundant backend calls.
- The shared library means scaling to a **third brand is mostly configuration**, not a new codebase.

### Quality
**Playwright** e2e across all three apps (smoke / critical / regression tags, per-project auth state, CI auto-starts dev servers, screenshots on failure). Husky + lint-staged + Prettier on commit.

### Lessons learned
- **Shared-library boundaries are a product decision.** Getting the atomic-design + API-service split right is what let one person maintain two live brands.
- **Multi-tenancy by domain beats forking.** The `frontend_domain` routing pattern paid for itself the moment the second brand launched.
- **Match rendering to the job.** Next.js everywhere would have slowed internal tooling; Vite everywhere would have hurt public SEO. Mixing them deliberately was the right call.
- **Money logic belongs on the server**, always — the frontend is a courier, not an authority.

`‹fill›` — optional real numbers that would strengthen this: bookings processed, GMV, monthly visitors, conversion rate, Lighthouse scores. Add any you're comfortable sharing.

---

## Selected Impact — tile content (for the new section)

- **Sole owner** · PayPal NTPP Spinwheel onboarding (production, on-call)
- **Open Banking** · Nova Credit bank-linking for Pay in 4 / Pay Monthly
- **2 live brands, 1 platform** · founded & operate Zifah Voyages + MixedTrips
- **~90% coverage** · raised automated test coverage at Skye
- **35% faster** · analytics/reporting time cut at Sigma360
- **8 yrs · 5 markets** · US/UK/EU/AU/CA BNPL surfaces
