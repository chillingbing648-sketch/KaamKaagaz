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
