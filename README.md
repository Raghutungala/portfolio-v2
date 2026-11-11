# Raghu Vardhan — Glassy Portfolio V6.5

A fixed-viewport, high-performance glassmorphic portfolio application showcasing the technical writing, developer documentation, and structured authoring expertise of **Tungala Raghu Vardhan**, alongside an active engineering roadmap in AI systems.

[![Deploy to GitHub Pages](https://github.com/Raghutungala/portfolio-v2/actions/workflows/deploy.yml/badge.svg)](https://github.com/Raghutungala/portfolio-v2/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Professional Profile

- **Primary Identity**: Senior Technical Writer with 7+ years of experience in REST API references, developer portals, software installation guides, and enterprise structured authoring.
- **Enterprise Track Record**: Check Point Software Technologies, Google, FedEx, and JOSH.
- **Core Specialties**:
  - DITA XML, Oxygen XML Editor, Content Fusion, MadCap Flare
  - REST APIs, OpenAPI / Swagger specifications, Postman collections, JSON payload schemas
  - Information architecture, user manuals, release notes, and single-sourcing
  - Git version control, CI/CD documentation workflows, and Docs-as-Code
- **Emerging Focus**: AI Engineering Explorer — active hands-on learning in retrieval-augmented generation (RAG), LLM orchestration, automated schema drift detection, and developer search tools.

---

## 🖥️ Application Features & Six Decoupled Views

The portfolio is architected as an interactive dashboard with six independent views synchronized via React state and URL hash navigation (`#view`):

1. **Overview (`#overview`)**: Executive summary, system status, verified enterprise statistics, 5 structured domain capability cards, and recent enterprise focus.
2. **Experience (`#experience`)**: 4 verified career roles presented in a responsive 2×2 grid with full responsibilities inspection modals.
3. **Projects (`#projects`)**: Verified showcase items covering enterprise DITA modernizations, open-source UI prototypes ([RUNAWAY](https://github.com/Raghutungala/runaway-login)), and active AI engineering exploration.
4. **Gallery (`#gallery`)**: Category-filtered visual showcase with interactive interactive diagrams, UI experiments, and architecture flows.
5. **About (`#about`)**: Detailed background, verified competencies across 4 core pillars, and the AI engineering active learning roadmap with zero background line artifacts.
6. **Contact (`#contact`)**: Two-column contact center featuring a validated message form (honeypot anti-spam, Formspree endpoint, direct mailto fallback) and verified professional direct channels.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + procedural CSS glassmorphism & gradients
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React
- **Quality Assurance**: Oxlint
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Local Development

### Prerequisites
- Node.js 20+
- npm 10+

### Setup
```bash
# Clone the repository
git clone https://github.com/Raghutungala/portfolio-v2.git
cd portfolio-v2

# Install dependencies (respecting package-lock.json)
npm ci

# Start the local development server
npm run dev
```

### Verification & Linting
```bash
# Run Oxlint
npm run lint

# Run Vite production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment

The application deploys automatically to GitHub Pages through the workflow in `.github/workflows/deploy.yml`:

1. **Push trigger**: Pushing to the `main` or `master` branch triggers the GitHub Pages deployment action.
2. **Workflow dispatch**: Can be triggered manually from the GitHub Actions tab.
3. **Artifact generation**: Runs `npm ci` and `npm run build`, packaging the generated `dist/` folder with relative `./` asset paths.
4. **Hosting URL**:
   - Repository URL: [https://github.com/Raghutungala/portfolio-v2](https://github.com/Raghutungala/portfolio-v2)
   - Published Portfolio: [https://raghutungala.github.io/portfolio-v2/](https://raghutungala.github.io/portfolio-v2/)

---

## 📬 Contact & Professional Links

- **Email**: [raghuvardhantungala@gmail.com](mailto:raghuvardhantungala@gmail.com)
- **LinkedIn**: [linkedin.com/in/raghu-tungala](https://www.linkedin.com/in/raghu-tungala/)
- **GitHub**: [github.com/Raghutungala](https://github.com/Raghutungala)
- **Location**: Hyderabad, India • Available for Remote, Hybrid & Global Teams
