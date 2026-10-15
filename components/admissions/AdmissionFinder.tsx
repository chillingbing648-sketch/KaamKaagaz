"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { AdmissionLevel, admissionPortals, admissionRoadmaps } from "@/data/admissions";

interface FinderResult {
  title: string;
  portalName: string;
  domain: string;
  portalUrl: string;
  academicYear: string;
  authority: string;
  routeExplanation: string;
  keyNotice: string;
  recommendedRoadmapId?: string;
  prerequisiteDocs: string[];
}

export function AdmissionFinder() {
  const { language } = useLanguage();

  const [selectedLevel, setSelectedLevel] = useState<AdmissionLevel | "">("");
  const [selectedProgramme, setSelectedProgramme] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [selectedRegion, setSelectedRegion] = useState<string>("maharashtra");

  // Options by level
  const programmeOptions: Record<AdmissionLevel, { id: string; label: string }[]> = {
    "11th / FYJC": [
      { id: "fyjc-science", label: "Std. 11 Science (PCM / PCB)" },
      { id: "fyjc-commerce", label: "Std. 11 Commerce" },
      { id: "fyjc-arts", label: "Std. 11 Arts / Humanities" },
      { id: "fyjc-bifocal", label: "Std. 11 Bifocal / HSVC Vocational" },
    ],
    "CET / CAP": [
      { id: "engg", label: "B.E. / B.Tech (Engineering & Technology)" },
      { id: "pharmacy", label: "B.Pharm / Pharm.D (Pharmacy)" },
      { id: "mba", label: "MBA / MMS (Management Studies)" },
      { id: "mca", label: "MCA (Computer Applications)" },
      { id: "law", label: "LL.B. (3-Year or 5-Year Law)" },
      { id: "bba-bms", label: "BBA / BMS / BCA / BBM (AICTE Professional UG)" },
      { id: "arch", label: "B.Arch (Architecture)" },
    ],
    Undergraduate: [
      { id: "bcom", label: "B.Com / B.Com (Accounting & Finance / Banking)" },
      { id: "ba", label: "B.A. (Arts / Social Sciences / Literature)" },
      { id: "bsc-general", label: "B.Sc. (Physics / Chemistry / Maths / Life Sciences)" },
      { id: "bsc-it-cs", label: "B.Sc. IT / B.Sc. Computer Science / Data Science" },
      { id: "bvoc", label: "B.Voc / Specialized Degree" },
    ],
    Postgraduate: [
      { id: "mcom", label: "M.Com (Accountancy / Business Management)" },
      { id: "ma", label: "M.A. (Economics / English / Psychology / etc.)" },
      { id: "msc", label: "M.Sc. (Maths / Chemistry / Biotechnology / IT)" },
    ],
    "CDOE / Distance": [
      { id: "cdoe-ug", label: "Distance B.A. or B.Com. (Self-Paced / Working)" },
      { id: "cdoe-pg", label: "Distance M.A. or M.Com. (Self-Paced)" },
      { id: "cdoe-mca", label: "Distance MCA / M.Sc. IT (Online Mode)" },
    ],
    "PhD / Research": [
      { id: "phd-arts-sci", label: "Ph.D. in Science / Arts / Commerce / Management" },
      { id: "phd-tech", label: "Ph.D. in Engineering / Technology / Pharmacy" },
    ],
    Scholarships: [
      { id: "ebc-concession", label: "EBC (50% Tuition Fee Concession for Open <= 8L)" },
      { id: "reserved-scholarship", label: "SC / ST / OBC / VJNT Post-Matric Scholarship" },
      { id: "hostel-allowance", label: "Dr. Panjabrao Deshmukh Hostel Allowance" },
    ],
  };

  // Compute matched official result
  const computeResult = (): FinderResult | null => {
    if (!selectedLevel) return null;

    if (selectedLevel === "11th / FYJC") {
      return {
        title: "Maharashtra Centralised 11th Admission (FYJC)",
        portalName: "Maharashtra Centralised Admission Portal",
        domain: "mahafyjcadmissions.in",
        portalUrl: "https://mahafyjcadmissions.in",
        academicYear: "AY 2026–27",
        authority: "Directorate of Secondary & Higher Secondary Education, Maharashtra",
        routeExplanation:
          "All admissions into Std. 11 across MMR (Mumbai), Pune, Nagpur, Nashik, and Amravati occur strictly through this single centralised portal. You do not buy physical prospectuses from colleges.",
        keyNotice:
          "Fill Part 1 first for verification. Fill Part 2 (College preference options) once board results are finalized.",
        recommendedRoadmapId: "roadmap-fyjc",
        prerequisiteDocs: [
          "10th Marksheet (or digi-marksheet)",
          "School Leaving Certificate (LC)",
          "Domicile / Birth Certificate showing Maharashtra",
          ...(selectedCategory !== "general" ? ["Caste Certificate", "Caste Validity / Token"] : []),
        ],
      };
    }

    if (selectedLevel === "CET / CAP") {
      const isEnggOrPharm = selectedProgramme === "engg" || selectedProgramme === "pharmacy";
      const isMbaMca = selectedProgramme === "mba" || selectedProgramme === "mca";
      return {
        title: "Maharashtra State CET Cell — CAP Portal",
        portalName: "State Common Entrance Test Cell (CET Cell)",
        domain: "cetcell.mahacet.org",
        portalUrl: "https://cetcell.mahacet.org",
        academicYear: "AY 2026–27",
        authority: "State Common Entrance Test Cell, Maharashtra",
        routeExplanation: `Admissions for ${selectedProgramme ? selectedProgramme.toUpperCase() : "professional courses"} are governed by centralized multi-round counseling (CAP). Each course has a dedicated link on cetcell.mahacet.org during the CAP window.`,
        keyNotice:
          "Do NOT create an account until the course-specific CAP notification is active on CET Cell. E-Scrutiny verification is mandatory before option forms unlock.",
        recommendedRoadmapId: "roadmap-cet-cap",
        prerequisiteDocs: [
          "CET Scorecard & Hall Ticket",
          "10th & 12th Marksheet (or Graduation marksheet if PG)",
          "Maharashtra State Domicile Certificate",
          "APAAR / ABC ID (12 digits)",
          ...(selectedCategory !== "general"
            ? ["Caste Certificate", "Caste Validity Certificate (Mandatory)", "Non-Creamy Layer (NCL) Certificate"]
            : []),
        ],
      };
    }

    if (selectedLevel === "Undergraduate") {
      return {
        title: "University of Mumbai Pre-Admission Online Enrolment",
        portalName: "University of Mumbai Samarth Portal + College Website",
        domain: "muadmission.samarth.edu.in",
        portalUrl: "https://muadmission.samarth.edu.in",
        academicYear: "AY 2026–27",
        authority: "University of Mumbai & Affiliated Colleges",
        routeExplanation:
          "Traditional undergraduate degrees follow a mandatory two-step process: (1) Register on the University Samarth portal to generate your 16-digit Enrolment ID; (2) Apply on each specific college's website (e.g. Mithibai, HR, KC, Somaiya, Ruia) quoting that Enrolment ID.",
        keyNotice:
          "Never apply only to the university portal or only to the college. Both submissions are required for your name to be on merit lists.",
        recommendedRoadmapId: "roadmap-mu-ug",
        prerequisiteDocs: [
          "12th Marksheet & Passing Certificate",
          "10th Marksheet (for Date of Birth proof)",
          "College Leaving Certificate (LC)",
          "APAAR / ABC ID",
          ...(selectedCategory !== "general" ? ["Caste Certificate", "Income Certificate"] : []),
        ],
      };
    }

    if (selectedLevel === "Postgraduate") {
      return {
        title: "University of Mumbai PG Admission Portal",
        portalName: "University of Mumbai Samarth / Department Hub",
        domain: "muadmission.samarth.edu.in",
        portalUrl: "https://muadmission.samarth.edu.in",
        academicYear: "AY 2026–27",
        authority: "University of Mumbai Post-Graduate Section",
        routeExplanation:
          "PG admissions to University departments and affiliated autonomous colleges are conducted through University Samarth or direct autonomous college applications per university circulars.",
        keyNotice:
          "Always verify whether the department conducts an entrance exam or admits on semester aggregate marks.",
        recommendedRoadmapId: "roadmap-mu-ug",
        prerequisiteDocs: [
          "All Semester Graduation Marksheets (Sem 1 to 6)",
          "Degree Certificate / Provisional Passing Certificate",
          "Transfer / Migration Certificate (if from another university)",
          "APAAR / ABC ID",
        ],
      };
    }

    if (selectedLevel === "CDOE / Distance") {
      return {
        title: "University of Mumbai CDOE Distance Admission",
        portalName: "Center for Distance and Online Education (CDOE)",
        domain: "mucdoeadm.samarth.edu.in",
        portalUrl: "https://mucdoeadm.samarth.edu.in",
        academicYear: "AY 2026–27",
        authority: "Centre for Distance & Online Education, Kalina Campus",
        routeExplanation:
          "Direct online admission for self-paced and working students. Once documents are uploaded and e-verified by CDOE, fees are paid online and course study materials become accessible.",
        keyNotice:
          "New admissions follow the Samarth CDOE portal. Legacy semester-repeat students follow the previous IDOL portal link per departmental notice.",
        recommendedRoadmapId: "roadmap-cdoe",
        prerequisiteDocs: [
          "10th & 12th Marksheets",
          "Graduation Marksheet (if PG)",
          "Eligibility / Migration Certificate (if outside Maharashtra)",
          "Aadhaar Card",
        ],
      };
    }

    if (selectedLevel === "PhD / Research") {
      return {
        title: "University of Mumbai Ph.D. Research Portal",
        portalName: "University of Mumbai Research Portal",
        domain: "uomphd.mu.ac.in",
        portalUrl: "https://uomphd.mu.ac.in",
        academicYear: "AY 2026–27",
        authority: "Board of Examinations and Research Recognition Committee",
        routeExplanation:
          "Admissions are notice-based. Candidates register for Ph.D. Entrance Test (PET) or claim exemption via UGC-NET / CSIR-NET / GATE, followed by research center interviews.",
        keyNotice:
          "Always check the approved research guide vacancy list before paying registration fees.",
        recommendedRoadmapId: "roadmap-phd",
        prerequisiteDocs: [
          "Master's Degree Certificate (min 55% or 50% reserved)",
          "PET Scorecard or UGC-NET / CSIR-NET JRF Certificate",
          "Research Proposal Synopsis (Draft outline)",
          "NOC from employer (if employed)",
        ],
      };
    }

    if (selectedLevel === "Scholarships") {
      return {
        title: "MahaDBT — Government of Maharashtra Scholarship Portal",
        portalName: "Aaple Sarkar DBT Portal (MahaDBT)",
        domain: "mahadbt.maharashtra.gov.in",
        portalUrl: "https://mahadbt.maharashtra.gov.in",
        academicYear: "AY 2026–27",
        authority: "Social Justice, Tribal, Higher & Technical Education Depts",
        routeExplanation:
          "The official portal for all post-matric scholarships, EBC freeships, and fee reimbursements. Applications open after college admission is finalized.",
        keyNotice:
          "Bank account MUST be seeded with Aadhaar (NPCI mapping) to receive DBT scholarship credit without rejection.",
        prerequisiteDocs: [
          "Tahsildar Income Certificate (current financial year)",
          "Maharashtra Domicile Certificate",
          "College Fee Receipt & CAP Allotment Letter",
          "Caste & Caste Validity Certificate (for SC/ST/OBC/VJNT)",
          "Aadhaar-seeded bank account passbook",
        ],
      };
    }

    return null;
  };

  const result = computeResult();

  return (
    <section aria-label="Interactive Admission Finder" className="apple-card p-6 sm:p-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
            🧭
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            ADMISSION WAYFINDER
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
          Which admission portal should you use?
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed max-w-2xl">
          Avoid using fake or outdated websites. Answer 3 quick questions to discover your verified official portal, applicable route, and required documents.
        </p>
      </div>

      {/* Step 1: Admission Level */}
      <div className="pt-2 border-t border-black/[0.04]">
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-3">
          Step 1: What are you getting admission into?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {(
            [
              "11th / FYJC",
              "CET / CAP",
              "Undergraduate",
              "Postgraduate",
              "CDOE / Distance",
              "PhD / Research",
            ] as AdmissionLevel[]
          ).map((level) => {
            const isSelected = selectedLevel === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => {
                  setSelectedLevel(level);
                  setSelectedProgramme("");
                }}
                className={`min-h-[46px] rounded-2xl border px-4 py-2.5 text-xs sm:text-sm font-semibold text-left transition-all duration-150 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "border-accent bg-accent text-white shadow-xs font-bold"
                    : "border-black/[0.08] bg-white text-ink hover:border-black/20 hover:bg-black/[0.02]"
                }`}
              >
                <span>{level}</span>
                {isSelected && <span aria-hidden="true" className="text-xs">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Course / Programme (Contextual) */}
      {selectedLevel && programmeOptions[selectedLevel] && (
        <div className="pt-4 border-t border-black/[0.04]">
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-3">
            Step 2: Choose your specific course or stream
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {programmeOptions[selectedLevel].map((prog) => {
              const isSelected = selectedProgramme === prog.id;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => setSelectedProgramme(prog.id)}
                  className={`min-h-[44px] rounded-xl border px-4 py-2 text-xs font-semibold text-left transition-all duration-150 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "border-accent/40 bg-accent-soft text-accent font-bold shadow-xs ring-1 ring-accent/30"
                      : "border-black/[0.08] bg-white text-ink hover:bg-black/[0.02] hover:border-black/15"
                  }`}
                >
                  <span className="truncate pr-2">{prog.label}</span>
                  {isSelected && <span className="size-2 rounded-full bg-accent"></span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Category / Situation */}
      {selectedLevel && (
        <div className="pt-4 border-t border-black/[0.04]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Candidacy / State
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full min-h-[42px] rounded-xl border border-black/[0.1] bg-white px-3.5 py-2 text-xs font-semibold text-ink focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
              >
                <option value="maharashtra">Maharashtra State Candidate (Type A / B)</option>
                <option value="oms">All India / Outside Maharashtra (OMS)</option>
                <option value="jk">J&K Migrant / Defense / PwD Quota</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Reservation Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full min-h-[42px] rounded-xl border border-black/[0.1] bg-white px-3.5 py-2 text-xs font-semibold text-ink focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
              >
                <option value="general">Open / General Category</option>
                <option value="ews">EWS (Economically Weaker Section - 10%)</option>
                <option value="obc">OBC (Other Backward Class)</option>
                <option value="sc">SC (Scheduled Caste)</option>
                <option value="st">ST (Scheduled Tribe)</option>
                <option value="vjnt">VJ / NT / SBC Categories</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Result Card: Direct Solution */}
      {result && (
        <div className="pt-4 border-t border-black/[0.06]">
          <div className="rounded-2xl border border-accent/25 bg-gradient-to-b from-accent-soft/30 to-accent-soft/10 p-5 sm:p-7 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-accent/15 pb-3.5 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent block">
                  YOUR VERIFIED OFFICIAL ADMISSION ROUTE
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight mt-0.5">
                  {result.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-accent bg-accent-soft/80 px-2.5 py-1 rounded-full border border-accent/20">
                  {result.academicYear}
                </span>
                <span className="text-[11px] font-semibold text-done bg-done/10 px-2.5 py-1 rounded-full border border-done/20">
                  CURRENT
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink/90 leading-relaxed mb-4">
              {result.routeExplanation}
            </p>

            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3.5 mb-4 text-xs">
              <strong className="text-amber-800 dark:text-amber-300 font-bold block mb-1">⚠️ Important Watchout:</strong>
              <p className="text-ink/80 leading-relaxed">{result.keyNotice}</p>
            </div>

            {/* Official Portal Action Box */}
            <div className="apple-card p-4 sm:p-5 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                  Direct Verified Portal
                </span>
                <span className="text-sm font-bold text-ink block mt-0.5">
                  {result.portalName}
                </span>
                <span className="font-mono text-xs text-accent font-semibold">
                  {result.domain}
                </span>
              </div>

              <a
                href={result.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-primary !rounded-xl min-h-[44px] px-5 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Open official portal</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Key Documents Needed */}
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2.5">
                📋 Key Documents Needed Ready Before Applying:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {result.prerequisiteDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 rounded-xl bg-white border border-black/[0.06] px-3.5 py-2.5 text-ink shadow-2xs">
                    <span className="flex size-4 items-center justify-center rounded-full bg-done/15 text-done text-[10px] font-bold shrink-0">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation links */}
            <div className="pt-3.5 border-t border-accent/20 flex flex-wrap items-center justify-between gap-2 text-xs">
              {result.recommendedRoadmapId && (
                <a
                  href={`#${result.recommendedRoadmapId}`}
                  className="font-semibold text-accent hover:underline flex items-center gap-1 group"
                >
                  <span>View full interactive roadmap</span>
                  <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>
              )}
              <a
                href="#documents"
                className="font-semibold text-muted hover:text-ink transition-colors"
              >
                Inspect document validity rules →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
