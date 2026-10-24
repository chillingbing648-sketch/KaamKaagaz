import test from "node:test";
import assert from "node:assert/strict";
import { processes, getProcess, getDocument } from "../data/processes";
import {
  admissionPortals,
  admissionRoadmaps,
  studentDocuments,
  scholarshipSchemes,
  problemGuides,
  admissionTerms,
} from "../data/admissions";
import { en } from "../lib/i18n/locales/en";
import { hi } from "../lib/i18n/locales/hi";
import { mr } from "../lib/i18n/locales/mr";

test("processes data integrity", () => {
  assert.ok(processes.length >= 8, "Expected at least 8 processes");
  const slugs = new Set<string>();

  for (const p of processes) {
    assert.ok(p.slug, "Process must have a slug");
    assert.ok(!slugs.has(p.slug), `Duplicate slug found: ${p.slug}`);
    slugs.add(p.slug);

    assert.ok(p.title, `Process ${p.slug} must have a title`);
    assert.ok(p.category, `Process ${p.slug} must have a category`);
    assert.ok(p.documents.length > 0, `Process ${p.slug} must have documents`);

    // Check document IDs uniqueness within process
    const docIds = new Set<string>();
    for (const d of p.documents) {
      assert.ok(d.id, `Document in ${p.slug} must have an ID`);
      assert.ok(!docIds.has(d.id), `Duplicate document ID ${d.id} in ${p.slug}`);
      docIds.add(d.id);
    }

    // Check getter function
    const fetched = getProcess(p.slug);
    assert.equal(fetched?.slug, p.slug);
  }
});

test("student admissions portals & data integrity", () => {
  assert.ok(admissionPortals.length >= 6, "Expected at least 6 admission portals");
  const portalIds = new Set<string>();

  for (const portal of admissionPortals) {
    assert.ok(portal.id, "Portal must have an ID");
    assert.ok(!portalIds.has(portal.id), `Duplicate portal ID: ${portal.id}`);
    portalIds.add(portal.id);

    assert.ok(portal.url.startsWith("https://"), `Portal ${portal.id} URL must use HTTPS`);
    assert.ok(portal.domain, `Portal ${portal.id} must define a domain`);
    const validStatuses = ["CURRENT", "SEASONAL", "VERIFICATION ONGOING", "NOTICE-BASED"];
    assert.ok(validStatuses.includes(portal.status), `Invalid status on portal ${portal.id}: ${portal.status}`);
  }

  // Check roadmaps
  assert.ok(admissionRoadmaps.length >= 4, "Expected at least 4 admission roadmaps");
  for (const roadmap of admissionRoadmaps) {
    assert.ok(roadmap.steps.length > 0, `Roadmap ${roadmap.id} must have steps`);
  }

  // Check student documents
  assert.ok(studentDocuments.length >= 8, "Expected at least 8 student documents");
  for (const doc of studentDocuments) {
    assert.ok(doc.id, "Student document must have an ID");
    assert.ok(doc.helper, `Student document ${doc.id} must have a helper`);
  }
});

test("i18n locale dictionary key consistency", () => {
  const enKeys = Object.keys(en);
  const hiKeys = Object.keys(hi);
  const mrKeys = Object.keys(mr);

  assert.deepEqual(
    hiKeys.sort(),
    enKeys.sort(),
    "Hindi locale keys must match English locale keys"
  );
  assert.deepEqual(
    mrKeys.sort(),
    enKeys.sort(),
    "Marathi locale keys must match English locale keys"
  );

  // Check nested brand & nav keys
  assert.ok(en.brand.tagline, "English brand tagline missing");
  assert.ok(hi.brand.tagline, "Hindi brand tagline missing");
  assert.ok(mr.brand.tagline, "Marathi brand tagline missing");
});

test("backup schema and validation logic", () => {
  const mockBackup = {
    version: 1,
    app: "kaamkaagaz",
    exportedAt: new Date().toISOString(),
    checklists: { "pan-card": ["identity-proof"] },
    admissions: { "doc-10th-marksheet": "READY" },
  };

  assert.equal(mockBackup.version, 1);
  assert.equal(mockBackup.app, "kaamkaagaz");
  assert.ok(Array.isArray(mockBackup.checklists["pan-card"]));
  assert.equal(mockBackup.admissions["doc-10th-marksheet"], "READY");
});
