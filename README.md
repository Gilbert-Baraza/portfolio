# Gilbert Baraza - Personal Portfolio Web Application

A premium, modern, visually stunning, and highly responsive personal portfolio website designed for a Computer Science student seeking industrial attachments or software engineering internships.

Designed with a tech-inspired, minimalist aesthetic, this website features light/dark modes, custom page loaders, scroll indicators, interactive programming timelines, progress charts, live GitHub API integrations, and validation-ready contact forms.

---

## 🚀 Live Demo & Repository
- **Production Build (Vercel)**: [gilbert-baraza.vercel.app](https://gilbert-baraza.vercel.app)
- **Source Code Repository**: [GitHub - Gilbert-Baraza/portfolio](https://github.com/Gilbert-Baraza/portfolio)

---

## 🛠️ Technology Stack

- **Core**: React 19 (Functional Hooks & Context)
- **Tooling/Bundler**: Vite 8 & Tailwind CSS v3
- **Animations**: Framer Motion (Smooth page loading, section fades, card hover tilts)
- **Iconography**: React Icons (FontAwesome, SimpleIcons, DevIcons)
- **Client Routing**: React Router DOM (Single Page sections with 404 console redirection)
- **Contact Form**: EmailJS Integrations (Direct SMTP-less client message deliveries)

---

## 📁 Scalable Directory Structure

The project code is modularly structured to follow production standards and support future sections addition easily:

```
src/
├── assets/          # Project images (SaaS screenshots, developer SVGs)
│   └── projects/    # AI dashboard previews & planner illustrations
├── components/      # UI components and layout sections
│   ├── About.jsx    # Professional summary, stats counter, & timeline
│   ├── Certificates.jsx # Credentials card from Google, Cisco, Microsoft, FCC
│   ├── Contact.jsx  # EmailJS-ready contact portal with form validation
│   ├── Education.jsx # BSc. details & key coursework tags
│   ├── Experience.jsx # Work history timelines (Academic, Personal, Freelance, OS)
│   ├── Footer.jsx   # Copyright blocks, socials, & back-to-top button
│   ├── GitHub.jsx   # Dynamic profile and repository fetching via GitHub REST API
│   ├── Hero.jsx     # Greeting subtitle typewriter effect & vector SVGs
│   ├── Navbar.jsx   # Sticky mobile-responsive navbar with theme toggling
│   └── Skills.jsx   # Skill category tabs with progress indicators
├── data/            # Static data structures for straightforward content updates
│   ├── certificates.js
│   ├── education.js
│   ├── experience.js
│   ├── projects.js
│   └── skills.js
├── hooks/           # Custom React hooks (e.g. useTheme Context API)
├── layouts/         # Layout wrapper templates (MainLayout)
├── pages/           # High-level route pages (Home Dashboard & NotFound Console)
│   ├── Home.jsx     # Aggregated sections layout & custom boot loader
│   └── NotFound.jsx # Immersive console terminal-style 404 page
├── styles/          # Tailwind setup and customized scrolling utilities
│   └── index.css    # Custom scrollbars and glassmorphism helpers
├── App.jsx          # Route endpoint router
└── main.jsx         # App mounting entry point
```

---

## 🔧 Installation & Local Setup

Ensure you have **Node.js (v18.0.0 or higher)** and **npm** installed on your operating system.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gilbert-Baraza/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup (Optional for Contact Form)**:
   Create a `.env` file in the root directory and append your EmailJS keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *Note: If no environment keys are supplied, the contact form will automatically fall back to simulated successful transmissions to avoid breaking developer preview configurations.*

4. **Launch Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the website locally.

5. **Generate Production Bundle**:
   ```bash
   npm run build
   ```
   Compiles static assets into the `/dist` directory, optimizing bundles for speed and performance.

---

## ⚡ Deployment Instructions for Vercel

The portfolio is designed for instant deployment on Vercel:

### Option 1: Vercel Dashboard Git Integration (Recommended)
1. Push your portfolio code to your GitHub account.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** -> **Project** -> Import your `portfolio` repository.
4. Set the following configurations:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. *(Optional)* Add environment variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) in the Environment Variables dropdown.
6. Click **Deploy**. Vercel will build and host your site, auto-deploying every time you push to the `main` branch.

### Option 2: Vercel Command Line Interface (CLI)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Log in and initiate deployment in the project root:
   ```bash
   vercel
   ```
3. Set your deployment specifications (accept default settings for Vite).
4. Run production deployment:
   ```bash
   vercel --prod
   ```

---

## 👤 Customization Guide

To tailor this portfolio to another developer or update Gilbert's future credentials, modify the files inside the `src/data/` folder:
- **`projects.js`**: Add new projects, descriptions, tech stacks, and links.
- **`skills.js`**: Add skills or edit proficiency level values.
- **`education.js` / `experience.js`**: Update education timelines and work achievements.
- **`certificates.js`**: Append course verification URLs and issue dates.
- **`cv.pdf`**: Swap the placeholder file located at `public/cv.pdf` with your actual CV PDF.

---

## ⚖️ License
Licensed under the [MIT License](LICENSE).
