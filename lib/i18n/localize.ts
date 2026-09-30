import { Language } from "./types";
import {
  Process,
  DocumentRequirement,
  Situation,
  LocalizedString,
  LocalizedList,
  ProcessStep,
  FeeItem,
  CommonMistake,
  FAQ,
} from "@/data/processes";

export function getStr(field: LocalizedString | undefined, lang: Language, fallback = ""): string {
  if (!field) return fallback;
  return field[lang] || field.en || fallback;
}

export function getList(field: LocalizedList | undefined, lang: Language, fallback: string[] = []): string[] {
  if (!field) return fallback;
  return field[lang] || field.en || fallback;
}

export function getLocalizedProcess(p: Process, lang: Language) {
  return {
    ...p,
    title: p.localizedTitle ? getStr(p.localizedTitle, lang, p.title) : p.title,
    category: p.localizedCategory ? getStr(p.localizedCategory, lang, p.category) : p.category,
    description: p.localizedDescription ? getStr(p.localizedDescription, lang, p.description) : p.description,
    scopeNote: p.localizedScopeNote ? getStr(p.localizedScopeNote, lang, p.scopeNote) : p.scopeNote,
    whoCanApplyText: p.whoCanApply ? getStr(p.whoCanApply, lang) : undefined,
    eligibilityList: p.eligibility ? getList(p.eligibility, lang) : [],
    steps: p.steps.map((s) => ({
      title: s.localized ? getStr(s.localized.title, lang, s.title) : s.title,
      description: s.localized ? getStr(s.localized.description, lang, s.description) : s.description,
    })),
    situations: p.situations?.map((s) => ({
      ...s,
      nameStr: getStr(s.name, lang),
      descriptionStr: getStr(s.description, lang),
      notesStr: s.notes ? getStr(s.notes, lang) : undefined,
    })),
    fees: p.fees?.map((f) => ({
      ...f,
      itemStr: getStr(f.item, lang),
    })),
    timelines: p.timelines
      ? {
          overall: getStr(p.timelines.overall, lang),
          details: getStr(p.timelines.details, lang),
        }
      : undefined,
    commonMistakes: p.commonMistakes?.map((m) => ({
      mistakeStr: getStr(m.mistake, lang),
      howToAvoidStr: getStr(m.howToAvoid, lang),
    })),
    faqs: p.faqs?.map((f) => ({
      questionStr: getStr(f.question, lang),
      answerStr: getStr(f.answer, lang),
    })),
  };
}

export function getLocalizedDocument(d: DocumentRequirement, lang: Language) {
  const loc = d.localized;
  return {
    ...d,
    name: loc ? getStr(loc.name, lang, d.name) : d.name,
    shortDescription: loc ? getStr(loc.shortDescription, lang, d.shortDescription) : d.shortDescription,
    explanation: loc ? getStr(loc.explanation, lang, d.explanation) : d.explanation,
    purpose: loc?.purpose ? getStr(loc.purpose, lang, d.purpose) : d.purpose,
    examples: loc ? getList(loc.examples, lang, d.examples) : d.examples,
    formatAndPrep: d.formatAndPreparation
      ? {
          submission: getStr(d.formatAndPreparation.submission, lang),
          selfAttestation: getStr(d.formatAndPreparation.selfAttestation, lang),
          digitalCopy: getStr(d.formatAndPreparation.digitalCopy, lang),
          fileFormat: getStr(d.formatAndPreparation.fileFormat, lang),
          validityOrRecentness: d.formatAndPreparation.validityOrRecentness
            ? getStr(d.formatAndPreparation.validityOrRecentness, lang)
            : undefined,
          whatIfMissing: d.formatAndPreparation.whatIfMissing
            ? getStr(d.formatAndPreparation.whatIfMissing, lang)
            : undefined,
          importantNotes: d.formatAndPreparation.importantNotes
            ? getStr(d.formatAndPreparation.importantNotes, lang)
            : undefined,
        }
      : undefined,
  };
}
