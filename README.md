<div align="center">

# 📄 KAAMKAAGAZ

### **Kaagaz samjho. Kaam karo.**

A multilingual civic-tech web application that turns complicated Indian government paperwork into clear, structured guidance — helping users understand **what they need, where to go, what to do next, and which official source to verify**.

<p>
  <a href="https://chillingbing648-sketch.github.io/KaamKaagaz/"><strong>✦ Open Live App</strong></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/chillingbing648-sketch/KaamKaagaz"><strong>⌘ View Source</strong></a>
</p>

</div>

---


## 🧰 Built With

<div align="center">

<p>
  <img src="https://img.shields.io/badge/Next.js-15.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15.1">
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.6">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111" alt="JavaScript">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Node.js-20%2B-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" alt="PostCSS">
</p>

<p>
  <img src="https://img.shields.io/badge/App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js App Router">
  <img src="https://img.shields.io/badge/Static_Export-166534?style=for-the-badge" alt="Static Export">
  <img src="https://img.shields.io/badge/localStorage-7C3AED?style=for-the-badge" alt="localStorage">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

</div>

---

## `>_` The Problem

Government paperwork is rarely difficult because the form itself is difficult.

The real friction is usually:

~~~text
What do I need?
      ↓
Which document counts?
      ↓
Where do I apply?
      ↓
What happens next?
      ↓
What could go wrong?
~~~

**KaamKaagaz** turns that scattered information into a single, structured path from **question → documents → process → checklist → official source**.

It is designed as a practical civic-tech interface for people who do not want to decode a government portal before they can even begin.

> **Find the kaam. Understand the kaagaz. Follow the process.**

---

## `✦` What KaamKaagaz Is

KaamKaagaz is a **static, multilingual government-paperwork guidance application** built with Next.js, React and TypeScript.

The current experience combines:

- document and process guides
- conversational-style search
- document requirements and preparation guidance
- step-by-step workflows
- fees and timeline information
- common mistakes and FAQs
- official source links
- persistent browser checklists
- English, हिन्दी and मराठी content
- a dedicated higher-education / admissions flow

The application is intentionally **not** an official government portal and does not replace the instructions of the relevant authority.

---

## 🌐 Live Experience

<div align="center">

<a href="https://chillingbing648-sketch.github.io/KaamKaagaz/">
  <img src="https://img.shields.io/badge/OPEN%20KAAMKAAGAZ-From%20Question%20to%20Action-C8561B?style=for-the-badge" alt="Open KaamKaagaz">
</a>

<br><br>

<sub>Static deployment: Next.js export → GitHub Actions → gh-pages → GitHub Pages</sub>

</div>

---

## ⚡ Core Product Surface

| Area | What it does |
|---|---|
| 🔎 **Conversational Search** | Matches natural queries such as “mujhe PAN banana hai” against service names, descriptions, keywords and localized content. |
| 📄 **Document Guides** | Explains what a document is, why it is needed, examples, preparation, digital-copy expectations and special notes where documented. |
| 🧭 **Process View** | Breaks a task into structured steps instead of presenting one large block of instructions. |
| 💰 **Fees & Timelines** | Keeps fee entries and processing information alongside the relevant process. |
| ⚠️ **Common Mistakes** | Surfaces avoidable errors before a user submits an application. |
| ❓ **FAQs** | Gives focused answers to recurring process questions. |
| 🔗 **Official Sources** | Keeps authoritative source links attached to the process rather than hiding them behind generic references. |
| ✅ **Persistent Checklists** | Saves checklist progress locally in the browser without requiring an account. |
| 🌐 **English / हिन्दी / मराठी** | Localized service content and interface support for three languages. |
| 🎓 **Admissions Hub** | A dedicated education workflow covering major admissions and scholarship pathways. |

---

## 🎓 The Admissions Layer

KaamKaagaz also extends beyond individual documents into a larger **student-admissions ecosystem**.

The current interface exposes guidance around pathways such as:

~~~text
FYJC
CET Cell / CAP
Mumbai University Samarth
CDOE
PhD
MahaDBT Scholarships
Caste / Gap / Student Documents
~~~

The admissions experience follows the same philosophy as the document library:

> **Do not make the user know the portal before they can understand the process.**

The repository already treats admissions as a separate product surface rather than forcing every workflow into one generic document template.

---

## 🧠 Search That Feels Conversational

There is no hosted AI or remote search API behind the homepage search.

Instead, the current implementation uses a deterministic client-side matcher:

~~~text
User sentence
     ↓
Normalize query
     ↓
Remove common filler / stop words
     ↓
Match meaningful terms
     ↓
Search across:
  • title
  • category
  • description
  • localized fields
  • keywords
     ↓
Render matching services
~~~

This is deliberately transparent and cheap to run.

It also means the search behavior is **predictable, inspectable and editable in source** rather than hiding core discovery behind a model.

---

## 🧱 Information Architecture

KaamKaagaz is built around a structured process model rather than page-specific hardcoding.

A process can describe:

~~~text
Process
├── Identity
├── Slug
├── Category
├── Description
├── Localized content
├── Eligibility
├── Situations
├── Documents
├── Steps
├── Fees
├── Timelines
├── Common mistakes
├── FAQs
├── Last-checked metadata
└── Official source
~~~

That makes the interface reusable across different government procedures.

---

## 🏗️ Architecture

~~~text
                           KAAMKAAGAZ
                               │
                    Next.js App Router
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
      Home Search         Process Views        Admissions
          │                    │                    │
          └──────────────┬─────┴──────────────┬─────┘
                         │                    │
                         ▼                    ▼
                 Structured TypeScript     Localized
                     Data Model             Content
                         │                    │
                         └─────────┬──────────┘
                                   ▼
                           React Components
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                             ▼
               localStorage                 Static Export
                    │                             │
                    ▼                             ▼
             Checklist State              GitHub Pages
~~~

### Runtime model

~~~text
Request
  ↓
Static Next.js route
  ↓
Structured process data
  ↓
Reusable React view
  ↓
Localized content
  ↓
Checklist / interaction
  ↓
Official source
~~~

The current architecture does **not** depend on an application database, server-side API or user account system.

---

## 🧬 The Data Model

The central dataset lives in:

`data/processes.ts`

Its TypeScript interfaces explicitly model document-processing concepts such as:

~~~text
LocalizedString
LocalizedList
DocumentRequirement
DocumentFormatAndPrep
OfficialSource
Situation
FeeItem
CommonMistake
FAQ
ProcessStep
Process
~~~

This is one of the most important architectural choices in the project.

The UI is reusable because the **information model is richer than the individual page**.

---

## ✅ Data Integrity Philosophy

KaamKaagaz is designed around an **official-source-first** rule.

The repository's data layer distinguishes plain-language explanations from source-sensitive information, and process records retain metadata such as:

~~~text
examplesConfirmedOfficial
lastChecked
officialNotes
verifiedSource
officialSource
~~~

The project aims to:

1. prefer authoritative government sources
2. keep source links visible
3. distinguish explanatory guidance from official requirements
4. avoid inventing requirements or fees
5. make changing procedures visible
6. encourage verification before submission

Government rules, fees, documents and timelines can change. Users should verify current requirements with the relevant authority before acting.

---

## 🌍 Localization

KaamKaagaz currently supports:

| Language | Coverage |
|---|---|
| 🇬🇧 **English** | Core interface + process content |
| 🇮🇳 **हिन्दी** | Localized process and interface content |
| 🇮🇳 **मराठी** | Localized process and interface content |

The data model makes localization part of the structure rather than treating translated text as an afterthought.

---

## 💾 Local-First Checklists

The checklist layer is deliberately account-free.

~~~text
Checklist interaction
        ↓
useSyncExternalStore
        ↓
localStorage
        ↓
Browser-local progress
~~~

There are separate storage models for:

- standard document checklists
- admissions checklists
- checklist migration from the legacy storage key
- cross-tab storage updates

No checklist data needs to be sent to a KaamKaagaz backend because the current application has no such backend.

---

## ♿ Accessibility & Interaction

Accessibility is treated as part of the interface foundation rather than a final cosmetic pass.

The current UI includes:

- visible `:focus-visible` states
- semantic labels for interactive controls
- `aria-live` result updates
- keyboard-accessible controls
- minimum-height touch targets on important controls
- reduced-motion handling through `prefers-reduced-motion`
- language-aware text rendering

The accessibility roadmap remains active because a civic-tech product should work for as many people as its information is intended to serve.

---

## 🎨 Design System

The visual language intentionally combines **official clarity with editorial warmth**.

~~~text
Paper background
      +
Strong ink typography
      +
Saffron / terracotta accent
      +
Quiet borders
      +
Compact information hierarchy
      +
Generous touch targets
      +
Minimal decoration
      =
KaamKaagaz
~~~

The goal is not to make government paperwork look glamorous.

The goal is to make it feel **less intimidating**.

---

## 🧩 Developer Map

When making a change, these are the first places to inspect:

| File | Responsibility |
|---|---|
| `app/page.tsx` | Homepage composition and primary search surface |
| `data/processes.ts` | Core service/process schema and content |
| `components/HomeSearch.tsx` | Search matching, service discovery and admissions entry point |
| `components/HomeHero.tsx` | Homepage positioning and brand messaging |
| `lib/checklist.ts` | Persistent checklist state |
| `lib/i18n/` | Language system and localized content helpers |
| `app/process/[slug]/` | Dynamic process experiences |
| `app/checklist/[slug]/` | Checklist routes |
| `app/admissions/` | Admissions experience |
| `app/globals.css` | Tailwind theme tokens, typography, focus, motion and global UI rules |
| `next.config.mjs` | Static export + GitHub Pages path configuration |
| `.github/workflows/deploy.yml` | Type-check, build and deployment pipeline |

### Change map

~~~text
Change service information?
→ data/processes.ts

Change search behavior?
→ components/HomeSearch.tsx

Change checklist persistence?
→ lib/checklist.ts

Change language behavior?
→ lib/i18n/

Change visual system?
→ app/globals.css

Change deployment?
→ next.config.mjs + .github/workflows/deploy.yml
~~~

---

## 📁 Project Structure

~~~text
KaamKaagaz/
│
├── app/
│   ├── admissions/
│   ├── checklist/
│   │   └── [slug]/
│   ├── process/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Admissions/
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
│   ├── processes.ts
│   └── regularDocuments.ts
│
├── lib/
│   ├── checklist.ts
│   └── i18n/
│
├── assets/
│   ├── kaamkaagaz-header.svg
│   └── kaamkaagaz-product-map.svg
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json
~~~

> Folder names above describe the current repository architecture and the major product surfaces; individual supporting files may evolve as the project grows.

---

## ➕ Adding a New Process

The architecture is intentionally data-driven.

A new workflow should primarily be added to the structured dataset instead of creating another one-off page implementation.

Conceptually:

~~~ts
{
  id: "example",
  slug: "example-service",
  title: "Example Service",
  category: "Category",
  description: "...",
  examplesConfirmedOfficial: true,
  lastChecked: "YYYY-MM-DD",

  documents: [...],
  steps: [...],

  fees: [...],
  timelines: {...},
  commonMistakes: [...],
  faqs: [...],

  officialSource: {
    name: "Official Authority",
    url: "https://..."
  }
}
~~~

For source-sensitive fields, use the relevant authoritative portal and update the verification metadata.

---

---

## 🚀 Run Locally

### Requirements

- Node.js 20+
- npm

### 1. Clone

~~~bash
git clone https://github.com/chillingbing648-sketch/KaamKaagaz.git
cd KaamKaagaz
~~~

### 2. Install

~~~bash
npm install
~~~

### 3. Develop

~~~bash
npm run dev
~~~

Open:

~~~text
http://localhost:3000
~~~

### 4. Type-check

~~~bash
npm run lint
~~~

### 5. Production build

~~~bash
npm run build
~~~

Because the project uses Next.js static export, the generated site is written to:

~~~text
out/
~~~

---

## ☁️ Deployment Architecture

The repository deploys the exported site to GitHub Pages through a dedicated publishing branch.

~~~text
Developer
   │
   ▼
git push origin main
   │
   ▼
GitHub Actions
   │
   ├── npm ci
   ├── npm run lint
   └── npm run build
             │
             ▼
            out/
             │
             ▼
        .nojekyll
             │
             ▼
      gh-pages branch
             │
             ▼
       GitHub Pages
             │
             ▼
   Live KaamKaagaz
~~~

The Next.js configuration currently uses:

~~~js
output: "export"
trailingSlash: true
basePath: "/KaamKaagaz"
~~~

This keeps route generation compatible with the repository's GitHub Pages path.

---

## 🔐 Privacy & Boundaries

The current architecture has:

~~~text
No database
No account system
No KaamKaagaz backend
No server-side document storage
No analytics layer
~~~

Checklist progress is stored locally in the browser.

The project does **not** ask users to upload sensitive identity documents to a KaamKaagaz server.

That boundary is deliberate.

---

## ⚠️ Important Information Boundary

KaamKaagaz is a **guidance and organization layer**, not a government authority.

Use the application to understand a process, prepare for it, and locate the relevant official source.

Before submitting an application, verify:

- current document requirements
- current fees
- current eligibility
- current processing timelines
- current official portal
- any location-specific instructions

The repository's structured data includes verification metadata, but no static knowledge base can guarantee that a government procedure will never change after publication.

---

## 📊 Engineering Status

| Area | Status |
|---|:---:|
| Next.js application | 🟢 |
| Structured process data | 🟢 |
| Dynamic process routes | 🟢 |
| Document guidance | 🟢 |
| Persistent checklists | 🟢 |
| Admissions workflow | 🟢 |
| English / हिन्दी / मराठी | 🟢 |
| Static export | 🟢 |
| GitHub Actions deployment | 🟢 |
| Automated browser tests | 🟡 |
| Expanded accessibility audit | 🟡 |
| Content freshness automation | 🟡 |
| Broader service library | 🟡 |

**Project stage:** Active civic-tech development

---

## 🗺️ Roadmap

### Near term

- Expand the structured service library
- Improve content freshness workflows
- Expand admissions pathways
- Add deeper accessibility testing
- Strengthen automated route/build checks

### Later

- Import/export of saved checklists
- More advanced search semantics while keeping the core behavior explainable
- Better source-change monitoring
- Broader regional service coverage
- Additional document preparation helpers

The roadmap is directional; only the implemented repository state should be treated as current functionality.

---

## 🤝 Contributing

The project benefits most from contributions that improve **accuracy, accessibility or clarity**.

Good contribution examples:

~~~text
Broken official link
      ↓
Issue + authoritative source
      ↓
Corrected process data
      ↓
Type-check
      ↓
Build
      ↓
Pull Request
~~~

For government requirements, corrections should include the strongest available authoritative source.

---

## 📜 License

This repository currently does not declare an open-source license.

Without a license, the source should not be assumed to be freely reusable or redistributable.

---

<div align="center">

### Kaagaz samjho. Kaam karo.

**KAAMKAAGAZ**

<sub>A small civic-tech project for making complicated paperwork easier to understand.</sub>

<br><br>

<a href="https://chillingbing648-sketch.github.io/KaamKaagaz/"><strong>Enter the Experience ↗</strong></a>
&nbsp;&nbsp; · &nbsp;&nbsp;
<a href="https://github.com/chillingbing648-sketch/KaamKaagaz"><strong>Explore the Repository ↗</strong></a>

<br><br>

<sub>Next.js · React · TypeScript · Tailwind CSS · GitHub Actions · GitHub Pages</sub>

</div>
