"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const KEY = "kaamkaagaz:checklist:v1";
const LEGACY_KEY = "ddh:checklist:v1";

type State = Record<string, string[]>;

const EMPTY: State = {};
const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedValue: State = EMPTY;

function parse(raw: string | null): State {
  if (!raw) return EMPTY;
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) return EMPTY;
    const out: State = {};
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      if (Array.isArray(v)) out[k] = v.filter((x): x is string => typeof x === "string");
    }
    return out;
  } catch {
    return EMPTY;
  }
}

function read(): State {
  try {
    let raw = window.localStorage.getItem(KEY);
    if (!raw) {
      // Check legacy key for migration
      const legacyRaw = window.localStorage.getItem(LEGACY_KEY);
      if (legacyRaw) {
        raw = legacyRaw;
        window.localStorage.setItem(KEY, legacyRaw);
      }
    }
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedValue = parse(raw);
    }
  } catch {
    // localStorage unavailable (private mode etc.): fall back to in-memory state
  }
  return cachedValue;
}

function write(next: State) {
  cachedValue = next;
  try {
    const raw = JSON.stringify(next);
    window.localStorage.setItem(KEY, raw);
    cachedRaw = raw;
  } catch {
    cachedRaw = undefined;
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY || e.key === LEGACY_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useChecklist(slug: string, validIds: string[]) {
  const state = useSyncExternalStore(subscribe, read, () => EMPTY);
  const key = validIds.join("|");

  const done = useMemo(() => {
    const valid = new Set(key.split("|"));
    return new Set((state[slug] ?? []).filter((id) => valid.has(id)));
  }, [state, slug, key]);

  const toggle = useCallback(
    (id: string) => {
      const current = new Set(read()[slug] ?? []);
      if (current.has(id)) current.delete(id);
      else current.add(id);
      write({ ...read(), [slug]: [...current] });
    },
    [slug]
  );

  const reset = useCallback(() => {
    write({ ...read(), [slug]: [] });
  }, [slug]);

  const total = validIds.length;
  const count = done.size;
  const percent = total === 0 ? 0 : Math.round((count / total) * 100);
  return { done, toggle, reset, count, total, percent };
}

// ---------------------------------------------------------------------------
// STUDENT ADMISSIONS MULTI-STATE CHECKLIST
// ---------------------------------------------------------------------------
export type AdmissionChecklistStatus =
  | "READY"
  | "MISSING"
  | "NEEDS_UPDATE"
  | "PENDING"
  | "NOT_SURE"
  | "NOT_APPLICABLE";

const ADMISSION_KEY = "kaamkaagaz:admissions_checklist:v1";
type AdmissionState = Record<string, AdmissionChecklistStatus>;
const ADM_EMPTY: AdmissionState = {};

const admListeners = new Set<() => void>();
let admCachedRaw: string | null | undefined;
let admCachedValue: AdmissionState = ADM_EMPTY;

function parseAdmission(raw: string | null): AdmissionState {
  if (!raw) return ADM_EMPTY;
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) return ADM_EMPTY;
    const out: AdmissionState = {};
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      if (
        typeof v === "string" &&
        ["READY", "MISSING", "NEEDS_UPDATE", "PENDING", "NOT_SURE", "NOT_APPLICABLE"].includes(v)
      ) {
        out[k] = v as AdmissionChecklistStatus;
      }
    }
    return out;
  } catch {
    return ADM_EMPTY;
  }
}

function readAdmission(): AdmissionState {
  try {
    const raw = window.localStorage.getItem(ADMISSION_KEY);
    if (raw !== admCachedRaw) {
      admCachedRaw = raw;
      admCachedValue = parseAdmission(raw);
    }
  } catch {
    // fallback in memory
  }
  return admCachedValue;
}

function writeAdmission(next: AdmissionState) {
  admCachedValue = next;
  try {
    const raw = JSON.stringify(next);
    window.localStorage.setItem(ADMISSION_KEY, raw);
    admCachedRaw = raw;
  } catch {
    admCachedRaw = undefined;
  }
  admListeners.forEach((l) => l());
}

function subscribeAdmission(cb: () => void) {
  admListeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === ADMISSION_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    admListeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useAdmissionChecklist(validIds: string[]) {
  const state = useSyncExternalStore(subscribeAdmission, readAdmission, () => ADM_EMPTY);

  const statuses = useMemo(() => {
    const res: Record<string, AdmissionChecklistStatus> = {};
    validIds.forEach((id) => {
      res[id] = state[id] || "NOT_SURE";
    });
    return res;
  }, [state, validIds]);

  const setStatus = useCallback((id: string, status: AdmissionChecklistStatus) => {
    const current = { ...readAdmission() };
    current[id] = status;
    writeAdmission(current);
  }, []);

  const resetAll = useCallback(() => {
    writeAdmission({});
  }, []);

  const counts = useMemo(() => {
    let ready = 0;
    let missing = 0;
    let needsUpdate = 0;
    let pending = 0;
    let notSure = 0;
    let notApplicable = 0;

    validIds.forEach((id) => {
      const s = statuses[id];
      if (s === "READY") ready++;
      else if (s === "MISSING") missing++;
      else if (s === "NEEDS_UPDATE") needsUpdate++;
      else if (s === "PENDING") pending++;
      else if (s === "NOT_APPLICABLE") notApplicable++;
      else notSure++;
    });

    const activeTotal = validIds.length - notApplicable;
    const percent = activeTotal <= 0 ? 0 : Math.round((ready / activeTotal) * 100);

    return {
      ready,
      missing,
      needsUpdate,
      pending,
      notSure,
      notApplicable,
      total: validIds.length,
      activeTotal,
      percent,
    };
  }, [statuses, validIds]);

  return { statuses, setStatus, resetAll, counts };
}

// ---------------------------------------------------------------------------
// DATA PERSISTENCE, BACKUP & DISASTER RECOVERY
// ---------------------------------------------------------------------------
export interface KaamKaagazBackup {
  version: 1;
  app: "kaamkaagaz";
  exportedAt: string;
  checklists: State;
  admissions: AdmissionState;
}

export function createBackupData(): KaamKaagazBackup {
  return {
    version: 1,
    app: "kaamkaagaz",
    exportedAt: new Date().toISOString(),
    checklists: read(),
    admissions: readAdmission(),
  };
}

export function downloadBackupFile(): boolean {
  try {
    const backup = createBackupData();
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().split("T")[0];
    const link = document.createElement("a");
    link.href = url;
    link.download = `kaamkaagaz-backup-${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (err) {
    console.error("[KaamKaagaz] Failed to download backup:", err);
    return false;
  }
}

export function restoreBackupData(raw: string): { success: boolean; message: string } {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return { success: false, message: "Invalid backup file: not a JSON object." };
    }

    const checklists = parse(JSON.stringify(parsed.checklists ?? {}));
    const admissions = parseAdmission(JSON.stringify(parsed.admissions ?? {}));

    write(checklists);
    writeAdmission(admissions);

    return {
      success: true,
      message: `Restored ${Object.keys(checklists).length} service checklists and ${Object.keys(admissions).length} admission document states.`,
    };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Failed to parse backup JSON file.",
    };
  }
}

export function clearAllLocalData(): void {
  write({});
  writeAdmission({});
}
