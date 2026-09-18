"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  ACCENTS,
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT,
  type AccentId,
} from "@/lib/constants";

function isAccent(value: string | null): value is AccentId {
  return ACCENTS.some((item) => item.id === value);
}

type ThemeContextValue = {
  accent: AccentId;
  setAccent: (accent: AccentId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyAccent(accent: AccentId) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", accent);
  }
}

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getServerSnapshot = () => DEFAULT_ACCENT;

const getSnapshot = (): AccentId => {
  if (typeof window === "undefined") return DEFAULT_ACCENT;
  const stored = window.localStorage.getItem(ACCENT_STORAGE_KEY);
  return isAccent(stored) ? stored : DEFAULT_ACCENT;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const accent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyAccent(accent);
  }, [accent]);

  const setAccent = useCallback((next: AccentId) => {
    window.localStorage.setItem(ACCENT_STORAGE_KEY, next);
    applyAccent(next);
    window.dispatchEvent(new StorageEvent("storage", { key: ACCENT_STORAGE_KEY }));
  }, []);

  const value = useMemo(() => ({ accent, setAccent }), [accent, setAccent]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
