<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=E11D48&height=200&section=header&text=BKW%20Gears&fontSize=60&fontColor=ffffff&fontAlignY=35&desc=Banadurga%20Kinetic%20World%20%7C%20Odisha%E2%80%99s%20Oldest%20Helmet%20Gallery&descAlignY=58&descSize=18" width="100%" />

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 🏍️ About This Project

**BKW Gears** is a premium "Light Modern" e-commerce landing page built for **Banadurga Kinetic World**, Odisha's oldest and most trusted motorcycle helmet gallery located at **Patia Chowk, Infocity Ave, Bhubaneswar**.

---

## ✨ Features

- 🎠 **Hero Image Slider** — Auto-fading premium helmet photography
- 🪟 **Glassmorphism Design** — White frosted-glass cards and panels (`backdrop-blur-md`)
- 🗂️ **Multi-Page Routing** — Dedicated pages for Helmets, Jackets, Spare Parts, Accessories & About
- 🔍 **Product Filters** — Category-based live filtering on each product page
- ⭐ **Star Ratings** — Products display review scores and review count
- 🎬 **Framer Motion Animations** — Staggered card entrance on scroll, smooth slide-in sidebars
- 📱 **Mobile-First** — Responsive design with a slide-out sidebar navigation
- 📍 **Visit Patia Widget** — Google Maps embed in a glass tile with contact info

---

## 🗺️ Pages

| Route | Description |
|---|---|
| `/` | Home — Hero slider, New Arrivals grid, Patia Map |
| `/helmets` | 12+ helmets with Full Face / Half Face / Open Face / Modular filters |
| `/jackets` | Riding jackets: Textile, Leather, Mesh |
| `/spare-parts` | Visors, Pads, Mirrors, Hardware |
| `/accessories` | Gloves, Boots, Bags, Protection |
| `/about` | Brand story, stats, and partner brands |

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Racing Red | `#E11D48` | CTAs, Icons, Active states |
| Carbon Black | `#111827` | Typography, Navbar |
| Clean White | `#FFFFFF` | Primary background |
| Light Grey | `#F8F9FA` | Section transitions |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/rishabrath31/bkw.git
cd bkw

# Install dependencies
npm install

# Start development server
npm.cmd run dev      # Windows (if PowerShell restricts scripts)
# OR
npm run dev         # Mac / Linux / CMD

# Build for production
npm run build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite 7** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Router DOM** | Client-side routing |
| **Lucide React** | Minimal icon set |

---

## 📁 Project Structure

```
bkw/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky frosted-glass header + mobile sidebar
│   │   ├── Hero.jsx         # Fading image slider with glass overlay
│   │   ├── ProductGrid.jsx  # Homepage New Arrivals grid
│   │   └── VisitPatia.jsx   # Location widget with Google Maps
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Helmets.jsx      # Full product page with filters
│   │   ├── Jackets.jsx
│   │   ├── SpareParts.jsx
│   │   ├── Accessories.jsx
│   │   └── About.jsx        # Brand story & partners
│   ├── App.jsx              # Router setup
│   └── index.css            # Tailwind + glassmorphism classes
├── tailwind.config.js       # Brand colors configuration
└── vite.config.js
```

---

<div align="center">

Made with ❤️ by [Rishab Rath](https://github.com/rishabrath31) for **Banadurga Kinetic World**

<img src="https://capsule-render.vercel.app/api?type=waving&color=E11D48&height=80&section=footer" width="100%" />

</div>
