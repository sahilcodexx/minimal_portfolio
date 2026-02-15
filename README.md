# Portfolio

> A modern, interactive portfolio website for a Full Stack Developer built with React, Vite, and Tailwind CSS. Showcases projects, blog posts, work experience, and skills with smooth animations and a clean design.

---

## ✨ Features

- 🎨 **Theme Support** — Dark and light mode with system preference detection, persisted in local storage
- ✨ **Smooth Animations** — Fluid transitions using Framer Motion for UI elements, GSAP for complex animations, and Lenis for smooth scrolling
- 📱 **Responsive Design** — Mobile-first approach ensuring perfect display on all devices
- 📝 **Blog System** — Technical articles rendered from markdown with syntax highlighting using react-markdown, remark-gfm, and rehype-highlight
- 💼 **Project Showcase** — Detailed project pages with live demo links, GitHub repositories, technology stacks, and project timelines
- 📧 **Contact Form** — Fully functional form with Zod validation, integrated with Appwrite backend for message storage
- 🔍 **SEO Optimized** — Meta tags and Open Graph support using react-helmet-async for better search visibility
- 🎯 **Smooth Scrolling** — Lenis integration provides a premium scroll experience
- 🃏 **Toast Notifications** — User feedback with sonner for success/error messages

---

## 🛠 Tech Stack

| Category       | Technologies                                              |
| -------------- | --------------------------------------------------------- |
| **Framework**  | React 18, Vite                                            |
| **Styling**    | Tailwind CSS, @tailwindcss/vite                           |
| **Animations** | Framer Motion, GSAP, Lenis                                |
| **Routing**    | React Router DOM v6                                       |
| **Forms**      | React Hook Form, Zod, @hookform/resolvers                 |
| **Backend**    | Appwrite                                                  |
| **SEO**        | React Helmet Async                                        |
| **Markdown**   | react-markdown, remark-gfm, rehype-highlight, gray-matter |
| **Icons**      | Lucide React, Custom SVG components                       |
| **Utilities**  | clsx, tailwind-merge                                      |

---

## 📂 Project Structure

```
src/
│
├── app/                         # Feature-based modules (route groups)
│   ├── blog/
│   │   ├── Blog.jsx            # Featured blogs section for homepage
│   │   ├── BlogCard.jsx       # Blog card component
│   │   ├── BlogContent.jsx    # Individual blog post page
│   │   └── BlogComponent.jsx  # Custom markdown components
│   │
│   ├── projects/
│   │   ├── Project.jsx         # Featured projects section
│   │   ├── ProjectCard.jsx    # Project card component
│   │   ├── ProjectContent.jsx # Individual project page
│   │   └── ProjectComponents.jsx # Custom markdown components
│   │
│   └── gear/
│       └── Gear.jsx            # Equipment/tools showcase page
│
├── components/                  # Reusable UI components
│   ├── common/                 # Shared components
│   │   ├── Navbar.jsx         # Navigation bar with links
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Layout.jsx         # Main layout wrapper
│   │   ├── Skills.jsx         # Skill tag component
│   │   ├── Quote.jsx          # Random quote display
│   │   ├── BackButton.jsx    # Back navigation button
│   │   ├── ScrollToTop.jsx   # Scroll to top on route change
│   │   ├── ThemeToggel.jsx    # Dark/light mode toggle
│   │   ├── SectionHeading.jsx # Reusable section heading
│   │   ├── ProjectNavigation.jsx # Next/prev project navigation
│   │   ├── BlogNavigation.jsx    # Next/prev blog navigation
│   │   └── MarkdownRenderer.jsx  # Markdown content renderer
│   │
│   ├── layouts/               # Layout-specific components
│   │   ├── Container.jsx      # Main content container
│   │   ├── Hero.jsx          # Hero section
│   │   ├── ResumePage.jsx    # Resume viewer page
│   │   └── ExperienceCard.jsx # Experience section wrapper
│   │
│   ├── ui/                   # shadcn/ui base components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   ├── form.jsx
│   │   ├── label.jsx
│   │   ├── separator.jsx
│   │   └── tooltip.jsx
│   │
│   ├── pages/                # Page components (routes)
│   │   ├── Home.jsx          # Homepage
│   │   ├── Blogs.jsx        # All blogs page
│   │   ├── Projects.jsx     # All projects page
│   │   ├── Work.jsx        # Experience page
│   │   ├── Contact.jsx     # Contact page
│   │   └── ...
│   │
│   ├── landing/             # Homepage sections
│   │   ├── Hero.jsx        # Hero section
│   │   ├── BioText.jsx     # Bio/about text with skills
│   │   ├── SocialLinks.jsx # Social media links
│   │   ├── CTA.jsx         # Call to action section
│   │   ├── TechSkills.jsx # Technical skills display
│   │   ├── Experience.jsx # Work experience section
│   │   ├── Featured.jsx   # Featured content section
│   │   ├── Setup.jsx       # Development setup/tools
│   │   ├── ResumeButton.jsx # Resume download button
│   │   └── ...
│   │
│   ├── Experience/          # Experience components
│   │   ├── ExperienceCard.jsx    # Experience card
│   │   ├── ExperienceContent.jsx # Experience details
│   │   └── ExpreienceList.jsx    # Experience list
│   │
│   └── icons/               # SVG icon components
│       ├── tech/            # Technology icons
│       │   ├── ReactIcon.jsx
│       │   ├── NodeJS.jsx
│       │   ├── MongoDB.jsx
│       │   ├── NextJS.jsx
│       │   ├── TypeScript.jsx
│       │   └── ... (30+ tech icons)
│       │
│       └── social/          # Social media icons
│           ├── Github.jsx
│           ├── LinkedIn.jsx
│           ├── Mail.jsx
│           └── ...
│
├── config/                   # Static configuration & data
│   ├── projects/
│   │   └── ProjectCardData.jsx # Project card data
│   │
│   ├── blog/
│   │   └── BlogCardData.jsx    # Blog card data
│   │
│   ├── resume.js           # Resume URL configuration
│   ├── Quote.js           # Random quotes
│   ├── Footer.js          # Footer configuration
│   └── Gear.jsx           # Gear/equipment data
│
├── data/                     # Static markdown content
│   ├── projects/           # Project detail pages (markdown)
│   │   ├── findmovie.md
│   │   ├── nova.md
│   │   ├── chefyai.md
│   │   ├── imageeditorai.md
│   │   └── pricetracker.md
│   │
│   └── blogs/              # Blog posts (markdown)
│       ├── react-state-management.md
│       ├── motion.md
│       └── test.md
│
├── lib/                      # Utility libraries
│   ├── appwrite.js         # Appwrite client configuration
│   ├── techIcons.js        # Tech icon exports
│   ├── lenis.js            # Lenis smooth scroll setup
│   └── utils.js            # Utility functions (cn helper)
│
├── App.jsx                  # Main app with route definitions
├── main.jsx                # Entry point with providers
└── index.css               # Global styles & Tailwind imports
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **bun** package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd frontend
```

2. **Install dependencies**

```bash
npm install
# or if using bun
bun install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_TABLE_ID=your_table_id
```

> **Note:** The contact form requires Appwrite backend. You can skip this or use a mock if you don't need the contact functionality.

4. **Start development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start Vite development server with HMR |
| `npm run build`   | Create production-optimized build      |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint for code quality            |

---

## ⚙️ Configuration

### Adding a New Project

1. Create a markdown file in `src/data/projects/`:

```markdown
---
title: "Project Name"
description: "Short description"
image: "/projects/project-image.jpg"
technologies: ["React", "Node.js", "MongoDB"]
timeline: "2 months"
role: "Full Stack Developer"
status: "completed"
statusVariant: "default"
live: "https://project-demo.com"
github: "https://github.com/user/project"
---

# Your content here
```

2. Add project data to `src/config/projects/ProjectCardData.jsx`

### Adding a New Blog Post

1. Create a markdown file in `src/data/blogs/`:

```markdown
---
title: "Blog Post Title"
description: "Short description"
date: "2024-01-01"
image: "/blogimage/cover.jpg"
tags: ["React", "Tutorial"]
---

# Your blog content here
```

2. Add blog data to `src/config/blog/BlogCardData.jsx`

### Customizing Theme

- Theme colors are defined in `tailwind.config.js`
- Theme provider is in `src/components/landing/theme-provider.jsx`
- Default theme is dark, stored in localStorage key `vite-ui-theme`

---

## 🌍 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to any static hosting (Netlify, Vercel, GitHub Pages)
```

---

## 📚 Dependencies Overview

### Core Dependencies

- `react` & `react-dom` — UI library
- `react-router-dom` — Client-side routing
- `vite` — Build tool and dev server

### Styling

- `tailwindcss` — Utility-first CSS framework
- `@tailwindcss/vite` — Tailwind Vite plugin
- `lucide-react` — Icon library

### Animations

- `framer-motion` — React animation library
- `gsap` — Advanced animations
- `@studio-freight/lenis` — Smooth scrolling

### Forms

- `react-hook-form` — Form state management
- `zod` — Schema validation
- `@hookform/resolvers` — Zod + React Hook Form integration

### Markdown & Content

- `react-markdown` — Markdown renderer
- `remark-gfm` — GitHub Flavored Markdown support
- `rehype-highlight` — Code syntax highlighting
- `gray-matter` — Parse markdown frontmatter

### Backend & Utils

- `appwrite` — Backend-as-a-Service
- `react-helmet-async` — Document head management
- `sonner` — Toast notifications

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

MIT License — feel free to use this project for your own portfolio!

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vite](https://vitejs.dev/) for the amazing build tool
