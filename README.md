# KaamKaagaz (कामकागज़)

> **Kaagaz samjho. Kaam karo.**  
> *Paperwork, made simple.*

KaamKaagaz is a modern civic-tech navigation layer between ordinary citizens and complicated government paperwork. It explains documentation in plain language with verified official requirements, formats, preparations, situational checklists, and authoritative portal links.

## Tech Stack
- Next.js 15 (App Router, Static Site Generation)
- React 19 + TypeScript
- Tailwind CSS v4
- Multilingual localization (English, हिन्दी, मराठी)
- Client-side persistent checklist (`localStorage`)
- Zero external backend / Zero fake APIs

## Development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production static build
npm run lint     # typescript check
```

## Supported Core Services
1. **PAN Card** (Form 49A, Income Tax Department / Protean / UTIITSL)
2. **Passport** (Ordinary Passport, Passport Seva / MEA)
3. **Income Certificate** (Aaple Sarkar, Revenue Department Maharashtra)

## Accuracy Rules
- **Official Notes**: Only verified statements from authoritative sources.
- **Fees**: Only statutory government portal fees.
- **Format & Preparation**: Specific requirements based on official portal instructions.
- **Civic Guidance**: Plain-language explanations designed for students, parents, and first-time applicants.
