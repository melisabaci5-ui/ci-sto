# Ci Sto · Host Partner Web Platform

Desktop web platform for the **Host** area of Ci Sto (Politecnico di Milano student activity platform).

## Figma Design Mockups
The full Figma project, including Design System Tokens, UI Components, and Desktop Web boards (1440px), is available at:
👉 **[Ci Sto Web Platform – Figma Mockups](https://www.figma.com/design/D95RZY3vB6rgl6BoSax0vM/Ci-Sto-Web-Platform---Mockups)**

---

## Features Implemented

### 1. Host Onboarding (`step-onboarding`)
- **Desktop 2-Column Split:**
  - Left: Hero section explaining the value proposition (*"Fill your venue on quiet days with university students"*), value cards with icons (Groups of 4–8 students, Zero upfront costs, Verified Polimi crowd), and pilot badge for Bovisa & Isola.
  - Right: Partner registration card with venue name, category chips (Bar & Café, Aperitivo, Coworking & Study, Restaurant), address fields, manager details, and primary CTA.

### 2. Business Setup (`step-setup`)
- **Desktop 2-Column Split:**
  - Left: Group capacity selection (4–6, 6–8 standard, 8–12, 12+), preferred time slots (Morning, Afternoon study, Evening aperitivo, Late night), and Ci Sto Plus discount builder.
  - Right: **Live Student Feed Preview** card showing how Politecnico students see the venue in the mobile app & web feed.

### 3. Host Dashboard & Filters (`step-filters`)
- **Desktop Top Metrics Bar:**
  - 24 Students Hosted, 5 Confirmed Plans, €340 Estimated Spend, 4.9 ★ Vibe Score.
- **Desktop 2-Column Grid:**
  - Left: Accepted plan filters management (language, Polimi faculty / study field, student budget bracket, 24h confirmation rule).
  - Right: Real-time upcoming group reservations calendar with status badges and quick action buttons (*Confirm Table Ready*, *Message Group*).

---

## Design System Tokens
- **Colours:**
  - `blue`: `#2347FF` (Secondary buttons, focus ring, links, KPIs)
  - `ci-sto-red`: `#D63A24` (Main CTA button: 56px pill)
  - `cream`: `#FFF7F0` (Platform page background)
  - `ink`: `#16131D` (Typography and selected chips)
  - `lime`: `#CBEF4A` / `lime-tint`: `#EEF9C8` (Badges and highlights)
  - `line`: `#E4DCE6` (Dividers and card borders)
- **Typography:**
  - `Bricolage Grotesque` (800) for titles and big numbers.
  - `Figtree` (400–800) for all interface body, labels, and buttons.

---

## How to Run Locally
Open `index.html` in any modern web browser or start a local server:
```bash
# From the repo root
npx serve host
# Or open host/index.html directly
```
