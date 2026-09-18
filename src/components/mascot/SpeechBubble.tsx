import { cn } from "@/lib/utils";

export function SpeechBubble({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass relative rounded-2xl px-4 py-3 text-sm text-foreground shadow-sm",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1.5 left-6 size-3 rotate-45 border-r border-b border-border bg-[color:var(--card)]" />
    </div>
  );
}
