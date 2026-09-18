import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between gap-3 border-b border-white/[0.08] bg-background/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div>
        <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:block">Workspace</p>
        <h1 className="text-base font-semibold tracking-tight sm:mt-1 sm:text-xl">{title}</h1>
      </div>
      <ThemeSwitcher />
    </header>
  );
}
