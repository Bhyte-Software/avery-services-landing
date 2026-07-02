# Foresight — Design System & Home Page Spec

> **Status:** Draft for sign-off · **Do not build** until this document is approved.
>
> **Sources:**
> - [Brand Guidelines](https://www.figma.com/design/zwR4TFel54k0P450yo07Vg/Foresight-Waitlist?node-id=81-6779) (Figma `81-6779`)
> - [Home](https://www.figma.com/design/zwR4TFel54k0P450yo07Vg/Foresight-Waitlist?node-id=25-4) (Figma `25-4`)
> - Home.pdf export (layout reference)

---

## Brand

| Item | Value |
|------|-------|
| Product name | **Foresight** |
| Tagline | Financial Intelligence. Built on Your Data. |
| Logo | Logotype (icon + wordmark) + standalone logo mark |
| Logo variants | Green/black on white · White on primary green |

### Logo usage

- **Header / footer:** Logotype (icon + "Foresight")
- **Favicon / compact contexts:** Logo mark only
- Do not stretch, recolor outside brand palette, or place on busy backgrounds without sufficient contrast

---

## Color tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `color/primary` | `#087443` | Primary buttons, logo, comparison column (Foresight side), key accents |
| `color/secondary` | `#F1F2EF` | Page background, alternate section backgrounds |
| `color/black` | `#0A0A0A` | Headlines, primary text |
| `color/white` | `#FFFFFF` | Cards, inputs, button text on primary, text on green surfaces |

### Semantic / UI colors (from Home — confirm in Figma)

These appear on the Home page but are not defined in Brand Guidelines. Treat as component-level until confirmed:

| Role | Notes |
|------|-------|
| Body text gray | Medium gray for subcopy, nav links (~`#656665` range) |
| Border | Light gray for cards, inputs, dividers (~`#E5E7EB` range) |
| Info accent | Blue — alert card icons, links |
| Warning accent | Orange — spend/anomaly alert cards |
| Success / active | Bright green — toggle switches, status indicators |

---

## Typography

### Font families

| Token | Family | Usage |
|-------|--------|-------|
| `font/sans` | **Geist** | Headlines, body, nav, buttons |
| `font/mono` | **Geist Mono** | Badges/pills ("Get early access today", "Measurable Results", etc.) |

**Source:** [Geist](https://vercel.com/font) (Vercel) — use official package or hosted files. No substitute fonts in production.

### Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `weight/regular` | 400 | Body copy |
| `weight/medium` | 500 | Nav links, labels |
| `weight/semibold` | 600 | Headlines, buttons, stat numbers |

### Type scale

| Token | Size | Usage |
|-------|------|-------|
| `text/h1` | **64px** | Hero headline |
| `text/h2` | **48px** | Section titles ("Real Impact Across Finance Teams") |
| `text/h3` | **36px** | Feature titles ("The Autonomous Bookkeeper") |
| `text/h4` | **24px** | Stat labels, FAQ questions, smaller headings |
| `text/body` | *TBD* | Body copy — confirm in Figma (likely 16px or 18px) |

### Open typography values

Confirm in Figma before build:

- [ ] Line height per level (H1–H4, body)
- [ ] Letter spacing per level
- [ ] Body text size and weight
- [ ] Geist Mono sizes for badge/pill components
- [ ] Button text size and weight

---

## Layout

| Rule | Value |
|------|-------|
| Design frame width | **1512px** (desktop canonical) |
| Content max-width | ~1200px centered (confirm in Figma) |
| Section rhythm | Generous vertical padding between sections |
| Background pattern | Subtle **+ grid** on hero, stats, FAQ sections |
| Stats grid | 3 columns, vertical dividers |
| Feature rows | Alternating 50/50 — text + illustration |
| Logo cloud | Multi-column grid, thin dividers, grayscale logos |

### Breakpoints

Only desktop is defined in Figma today.

| Breakpoint | Status |
|------------|--------|
| Desktop (1512px) | Defined — Home frame |
| Tablet | **TBD** — needs Figma frame or agreed rules |
| Mobile | **TBD** — needs Figma frame or agreed rules |

---

## Home page — section map

Single long-scroll landing page. Anchor nav: **Impact · Agents · Why Us · FAQs**

### 1. Header

- Logo (left)
- Nav links (center): Impact, Agents, Why Us, FAQs
- CTA button (right): **Join Waitlist** — primary green

### 2. Hero

- Badge/pill: **"Get early access today"** with arrow → (Geist Mono)
- H1: **"Financial Intelligence. Built on Your Data."**
- Subcopy: Deploy AI agents on your financial stack — bookkeeping, reconciliation, anomaly detection
- Email capture: input ("Enter your email") + **Join Waitlist** button
- Visual: Integration hub diagram — app logos (Slack, QuickBooks, Google Sheets, Salesforce, etc.) connected by lines to floating alert cards
  - Warning card (orange): duplicate SaaS spend
  - Info card (blue): unmapped ledger lines

### 3. Logo cloud

Grayscale partner logos in a divided grid:

- Magnolia, Leapyear, Powersurge, Hexahedron, Ikigai Labs (some may repeat as placeholders)

### 4. Impact / stats

- Badge: **"Measurable Results"**
- H2: **"Real Impact Across Finance Teams"**
- Intro copy: Teams using our workflows report faster cycles, higher accuracy, time savings
- 3-column stats:

| Stat | Label | Caption |
|------|-------|---------|
| **100%** | Finance workflows automated | Early-stage startups and growing finance teams |
| **10x** | Time saved on operations | Replaced manual spreadsheets and reconciliations |
| **42%** | Faster financial reporting | AI-powered forecasting and anomaly detection |

### 5. Meet the Agents

- Badge: **"Built for Financial Leaders"**
- H2: **"Meet the Agents"**
- Subcopy: Autonomous digital specialists running financial operations in the background

**The Autonomous Bookkeeper** (text left, illustration right)

- Operating continuously — map-matches transactions against chart of accounts
- Contextual Categorization — learns vendor logic, tags with precision
- Ledger Synchronization — keeps ledgers/sheets updated in real-time

**The Sentinel** (illustration left, text right)

- Models operational velocity to protect cash flows from anomalies
- SaaS & Vendor Drift — alerts on subscription price jumps, duplicate billing
- Irregularity Isolation — flags outlier transactions when they clear

### 6. Why Foresight — comparison

- Badge: **"Why Foresight"**
- H2: **"Smarter Alternative to Traditional Tools"**
- Subcopy: Replaces manual finance workflows and fragmented tools with AI-driven intelligence

Two-column comparison:

| Traditional Tools (gray) | Foresight / AI-Powered (primary green) |
|--------------------------|----------------------------------------|
| Long setup, manual config | Fast onboarding, minimal setup |
| Static models | Adaptive AI forecasting on live data |
| Manual periodic reports | Real-time insights, automated reporting |
| Breaks as data/teams grow | Proactive anomaly detection |
| Issues discovered after the fact | Built to scale with complex operations |

- Traditional: × icons, light background
- Foresight: ✓ icons, primary green background, white text

### 7. FAQs

- Badge: **"Common Questions"**
- H2: **"Answers Before You Get Started"**
- Subcopy: Setup, security, integrations, how Foresight fits your stack
- Accordion: collapsed shows **+**, expanded shows **×** and answer body
- First item expanded by default

**Questions:**

1. How exactly does Foresight interact with my existing Avery setup?
2. Can Foresight agents execute transactions or move funds?
3. Can we customize what the Sentinel agent considers an "irregularity"?
4. How are notifications delivered?
5. How do you prevent AI hallucinations?

> **Content flag:** FAQ #1 answer in the PDF export contained placeholder copy about "Lexos" (moving company inventory). Replace with final Foresight copy before build.

### 8. Final CTA

- Eyebrow: **"Get Started"**
- H2: **"Move Faster With Financial Confidence"**
- Subcopy: AI-driven clarity, real-time insights, control for better financial decisions
- Buttons: **Join Waitlist** (primary) · **Request Demo** (outlined/secondary)
- Background: subtle green dot/stipple gradient (bottom-right)

### 9. Footer

- Logo + tagline: "Financial Intelligence. Built on Your Data."
- **Explore:** Impact, Agents, Why Us, FAQs
- **Get Early Access:** email input + Join Waitlist
- Copyright: **Avery, Inc.** All rights reserved. *(confirm legal entity name)*

---

## Components

### Primary button

- Background: `color/primary` · Text: white · Font: Geist semibold
- Used for: Join Waitlist (nav, hero, footer, final CTA)
- States needed: default, hover, focus, disabled
- Radius / padding: *TBD — confirm in Figma*

### Secondary button

- Outlined — white background, gray border, dark text
- Used for: **Request Demo**
- States needed: default, hover, focus, disabled

### Email capture

- White input, light border, placeholder "Enter your email"
- Primary button attached (hero) or inline (footer)
- Two variants: hero (wide, centered) · footer (compact)

### Section badge / pill

- Dark or muted pill with optional icon
- Geist Mono, small size
- Examples: "Get early access today", "Measurable Results", "Built for Financial Leaders"

### Alert card

- White surface, soft shadow, rounded corners
- **Info variant:** blue icon — ledger/sync alerts
- **Warning variant:** orange icon — spend/anomaly alerts
- Title (semibold) + body + optional action link/button

### Stat column

- Large number (H1-scale weight/size) + H4 label + small muted caption
- Separated by vertical 1px dividers

### Feature bullet

- Small icon (green diamond/star) + title (semibold) + description
- Used under agent descriptions

### Comparison table

- Two equal columns, row-aligned feature pairs
- Left: gray bg, × icons · Right: primary bg, ✓ icons, white text

### FAQ accordion

- Full-width rows, question in H4 scale, +/× toggle right
- Expanded: answer body below, subtle divider between items

### Integration tile

- White rounded square, thin border, centered app logo
- Connected by thin gray lines in hero diagram

### Agent UI mockup

- Product-style card showing agent interface (categorize, reconcile, sync)
- Export as SVG/PNG from Figma — do not recreate from scratch unless assets unavailable

---

## Assets to export from Figma

Before build, export at **1x and 2x**:

- [ ] Logo — logotype SVG
- [ ] Logo mark SVG
- [ ] Integration logos (Slack, QuickBooks, Google Sheets, Salesforce, etc.)
- [ ] Partner logos (logo cloud)
- [ ] Hero diagram lines / grid pattern (SVG or CSS)
- [ ] Agent section illustrations / UI mockups
- [ ] FAQ icons (+ / ×)
- [ ] Feature bullet icons
- [ ] Comparison ✓ and × icons
- [ ] Social icons (if in footer — confirm)

---

## Acceptance criteria

Build is complete when:

1. Side-by-side with Figma Home frame at **1512px** width matches layout and spacing (±2px)
2. All color tokens match hex values in this document
3. Geist and Geist Mono loaded — no fallback drift visible
4. Type scale matches H1–H4 sizes; body matches once confirmed
5. All copy matches approved Figma text (no placeholder content)
6. All assets sourced from Figma exports
7. Interactive states defined: button hover/focus, FAQ accordion, mobile nav (once breakpoints exist)

---

## Open items (sign-off checklist)

- [ ] Confirm body text size, line heights, letter spacing
- [ ] Confirm button radius, height, padding
- [ ] Confirm footer legal entity (Avery, Inc. vs Foresight)
- [ ] Fix FAQ #1 placeholder copy in Figma
- [ ] Confirm semantic colors (blue, orange, borders) or add to brand palette
- [ ] Provide mobile/tablet frames or agree responsive rules
- [ ] Export all assets listed above
- [ ] Approve this document → then begin implementation
