# Pixel & Co. — Portfolio Website

**Live site:** [pixel-and-co-portfolio.vercel.app](https://pixel-and-co-portfolio.vercel.app)

A bilingual portfolio site for **Pixel & Co.**, a creative studio led by **Maen Al-Khatib** in Amman, Jordan. The site presents senior-level graphic design, motion, and digital work for international and regional clients — built as a fast, responsive React application with a polished dark UI.

---

## About the Studio

Pixel & Co. combines corporate sophistication with experimental creativity. With visual strategy experience since **2012**, the studio delivers branding, print and editorial design, UI/UX, motion graphics, and 3D event environments for organizations including **UNICEF**, **Roche**, **AstraZeneca**, **Novartis**, **GIZ**, **IFC**, **MAADEN**, and **Jordan Phosphate Mines Co.**

This repository is both a **portfolio showcase** and a **front-end project** — demonstrating design sensibility alongside modern web implementation.

---

## What Employers Will Find Here

| Area | Highlights |
| --- | --- |
| **Creative scope** | Brand identity, sustainability reports, social campaigns, UI/UX, motion, and event visuals |
| **Client credibility** | 14+ institutional logos in an interactive client carousel |
| **Selected work** | 12 curated projects spanning pharma, NGOs, mining, automotive, and digital products |
| **Tooling** | Adobe Creative Cloud, Figma, Adobe XD, After Effects, Premiere |
| **Languages** | Full **English / Arabic** support with RTL layout |
| **Contact** | Direct email and phone in the contact section |

---

## Site Features

- **Hero visual carousel** — Infinite looping slide showcase with smooth transitions
- **Client logo marquee** — Continuous slow scroll with click-and-drag interaction
- **Responsive layout** — Content width aligned across sections; adapts from mobile to desktop
- **Bilingual toggle** — Instant EN ↔ AR switch with document direction updates
- **Accessible structure** — Semantic sections, alt text on logos, keyboard-friendly navigation
- **Performance-focused** — Lightweight stack (React + Vite), optimized static build

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 6 |
| Styling | Custom CSS (Klar-inspired dark theme) |
| i18n | React Context + translation data |
| Deployment | Vercel |
| Fonts | Inter (Google Fonts) |

---

## Project Structure

```
src/
├── components/       # UI sections (Hero, Toolkit, Clients, Projects, Contact, etc.)
├── context/          # Language provider and toggle
├── data/             # Translations, clients, and project listings
├── assets/           # Brand and client logo images
├── utils/            # Shared helpers
├── App.jsx           # Page composition
├── main.jsx          # App entry point
└── styles.css        # Global styles and responsive rules
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ recommended
- npm

### Install and run locally

```bash
git clone https://github.com/KWMIOK/Pixel-Co.git
cd Pixel-Co
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

---

## Deployment

The site is deployed on **Vercel**. To deploy updates:

```bash
npx vercel deploy --prod --yes
```

---

## Contact

**Maen Al-Khatib** — Pixel & Co.  
📍 Amman, Jordan  

- **Email:** [al.khatib.maen@gmail.com](mailto:al.khatib.maen@gmail.com)  
- **Phone:** [+962 79 669 1119](tel:+962796691119)  
- **GitHub:** [KWMIOK](https://github.com/KWMIOK)

---

## License

This project is the proprietary portfolio of Pixel & Co. Please do not reuse assets or copy without permission.
