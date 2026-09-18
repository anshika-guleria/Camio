"use client";

import { Check, Palette } from "lucide-react";
import { useState } from "react";

import { useTheme } from "@/components/providers/ThemeProvider";
import { ACCENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { accent, setAccent } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const currentAccent = ACCENTS.find((item) => item.id === accent) ?? ACCENTS[0];

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Accent color: ${currentAccent.label}`}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-9 items-center gap-2 rounded-xl border border-border/80 bg-white/[0.035] px-2.5 text-xs font-medium text-muted-foreground transition hover:border-primary/35 hover:bg-primary/[0.08] hover:text-foreground"
      >
        <span className="size-3 rounded-full ring-2 ring-background" style={{ backgroundColor: currentAccent.hex }} />
        <Palette className="size-3.5" />
        <span className="hidden xl:inline">Accent</span>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close accent color menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-2xl">
            <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Accent color</p>
            <div className="grid grid-cols-2 gap-1">
              {ACCENTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={accent === item.id}
                  onClick={() => {
                    setAccent(item.id);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between rounded-lg px-2 py-1.5 text-xs text-muted-foreground transition hover:bg-white/[0.06] hover:text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <span className="size-3 rounded-full" style={{ backgroundColor: item.hex }} />
                    {item.label}
                  </span>
                  {accent === item.id && <Check className="size-3.5 text-primary" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
