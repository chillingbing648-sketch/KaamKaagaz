# 📄 KaamKaagaz

<p align="center">
  <strong>Kaagaz samjho. Kaam karo.</strong><br/>
  <sub>Paperwork, made simple.</sub>
</p>

<p align="center">
  <a href="https://chillingbing648-sketch.github.io/KaamKaagaz/"><img src="https://img.shields.io/badge/%E2%96%B6%20LIVE-KAAMKAAGAZ-0f172a?style=for-the-badge&labelColor=7c3aed" alt="Live KaamKaagaz"></a>
  <a href="https://github.com/chillingbing648-sketch/KaamKaagaz"><img src="https://img.shields.io/github/stars/chillingbing648-sketch/KaamKaagaz?style=for-the-badge&label=STARS&color=f59e0b" alt="GitHub stars"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NEXT.JS-15-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 15">
  <img src="https://img.shields.io/badge/REACT-19-149ECA?style=flat-square&logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/TYPESCRIPT-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TAILWIND-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/GITHUB_PAGES-DEPLOYED-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

---

## `>_` What is KaamKaagaz?

**KaamKaagaz** is a civic-tech web application designed to make complicated government paperwork easier to understand and act on.

Instead of forcing users to decode official portals, forms, terminology and scattered instructions, KaamKaagaz turns common document-related tasks into clear, structured guidance.

> **Find the kaam → understand the documents → prepare correctly → follow the process.**

The current service library includes:

- PAN Card
- Passport
- Income Certificate
- Document requirements
- Step-by-step application processes
- Fees and timelines
- Common mistakes and preparation guidance
- Official source and portal links
- Personal application checklists
- English, हिन्दी and मराठी content

---

## `// core_features`

### 🔎 Conversational Document Search
Search using natural language instead of having to know the exact official service name.

### 📋 Document Checklists
Understand what documents are required, what they are used for and how they should be prepared.

### 🧭 Step-by-Step Processes
Break complicated application workflows into smaller, actionable steps.

### 💰 Fees & Timelines
Surface documented fee and processing information alongside the relevant service.

### ⚠️ Common Mistakes
Highlight practical mistakes that can cause delays, rejected uploads or unnecessary visits.

### 🌐 Multilingual Guidance
Localized content is available in English, हिन्दी and मराठी.

### 🔗 Official Sources
Relevant guidance points users toward authoritative government portals and sources.

### ✅ Persistent Checklists
Checklist progress can be maintained in the browser through localStorage without requiring an account.

---

## `npm run stack`

<p>
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript_5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.6">
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/App_Router-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js App Router">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework, routing and static generation |
| **React 19** | UI and component architecture |
| **TypeScript 5.6** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **Next.js App Router** | File-based application routing |
| **GitHub Actions** | Automated build and deployment |
| **GitHub Pages** | Static production hosting |
| **localStorage** | Client-side checklist persistence |

### Architecture

KaamKaagaz is intentionally lightweight:

- No application database
- No user account system
- No server-side API dependency
- No fake API layer
- Service information is maintained as structured TypeScript data
- Reusable React components render the document workflows
- Dynamic-looking service routes are statically generated at build time


---

## `architecture.exe`

KaamKaagaz deliberately avoids a backend for the current scope.

    User Query
         ↓
    Conversational Search
         ↓
    Typed Process Library — data/processes.ts
         ↓
    Documents + Steps + Checklist
         ↓
    Next.js Static Export
         ↓
    GitHub Pages

**No database. No accounts. No server API. Just structured information, components and a static build.**

---

## `tree /project`

```text
KaamKaagaz/
├── app/
│   ├── checklist/
│   │   └── [slug]/
│   ├── process/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Checklist.tsx
│   ├── ChecklistView.tsx
│   ├── DocumentItem.tsx
│   ├── DocumentList.tsx
│   ├── DocumentView.tsx
│   ├── FAQSection.tsx
│   ├── FeesAndTimelines.tsx
│   ├── HomeHero.tsx
│   ├── HomeSearch.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Navbar.tsx
│   ├── OfficialSource.tsx
│   ├── ProcessCard.tsx
│   ├── ProcessSteps.tsx
│   └── ProcessView.tsx
│
├── data/
│   └── processes.ts
│
├── lib/
│   ├── checklist.ts
│   └── i18n/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## `localhost:3000`

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Type-check

```bash
npm run lint
```

### Production build

```bash
npm run build
```

Because KaamKaagaz uses Next.js static export, the production files are generated inside:

```text
out/
```

---

## `deploy.sh`

KaamKaagaz is configured for automatic GitHub Pages deployment using **Next.js static export + GitHub Actions**.

### Production URL

**https://chillingbing648-sketch.github.io/KaamKaagaz/**

### Deployment pipeline

```text
git push origin main
        ↓
GitHub Actions
        ↓
npm ci
        ↓
npm run build
        ↓
Next.js static export
        ↓
out/
        ↓
GitHub Pages
```

The configuration uses:

- `output: "export"`
- `basePath: "/KaamKaagaz"`
- `trailingSlash: true`
- Node.js 20
- GitHub Actions
- A dedicated `gh-pages` publishing branch
- Automatic deployment from `main`

### One-time GitHub setting

After the workflow is pushed:

1. Open the repository's **Settings**.
2. Open **Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Select branch **`gh-pages`** and folder **`/(root)`**.
5. Save, then push to `main`.

After the first successful run, future pushes to `main` automatically rebuild and publish the site.

---

## `data_integrity.md`

KaamKaagaz is intended to **simplify access to information, not replace official government instructions**.

The project follows these principles:

1. Prefer authoritative government sources.
2. Keep official portal links visible where relevant.
3. Separate practical guidance from official requirements.
4. Avoid inventing fees, documents or application requirements.
5. Make users aware when requirements can change.
6. Encourage verification on the relevant official source before submission.

Government procedures, fees, timelines and requirements can change. Users should verify current requirements with the relevant official authority.

---

## `privacy`

KaamKaagaz is currently a lightweight client-side application.

The current architecture does not require users to create an account or submit personal documents to a KaamKaagaz backend.

Checklist progress may be stored locally in the user's browser using `localStorage`.

**Do not upload sensitive identity documents into the application unless a future feature explicitly provides a secure and documented mechanism for doing so.**

---

## `dev.config`

KaamKaagaz aims to keep the experience:

- Clear before clever
- Accessible before decorative
- Practical before verbose
- Official-source-first
- Mobile-friendly
- Type-safe
- Lightweight
- Easy to maintain

The interface is designed for students, parents, first-time applicants and anyone who finds government paperwork unnecessarily difficult to navigate.

---

## `status`

The current service library includes:

- **PAN Card**
- **Passport**
- **Income Certificate**

The architecture is designed so additional document workflows can be added through structured TypeScript data rather than rebuilding the interface.

---

## `contribute()`

Contributions, corrections and improvements are welcome.

If you notice:

- outdated government information,
- an incorrect source,
- a broken official link,
- accessibility issues,
- translation problems,
- or a technical bug,

open an issue or submit a pull request.

For government requirements, include the authoritative source whenever possible.

---

## `license`

This repository currently does not declare an open-source license.

Unless a license is added, the source code should not be assumed to be freely reusable or redistributable.

---

## `author`

**Harsh Dubey**

Built as a practical civic-tech project focused on making Indian government paperwork easier to understand.

<p align="center">
  <sub>KaamKaagaz — Kaagaz samjho. Kaam karo.</sub>
</p>
