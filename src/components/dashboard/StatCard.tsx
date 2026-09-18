import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  value: string;
  hint: string;
  className?: string;
}) {
  return (
    <Card className={cn("min-w-0 gap-1.5 p-3 sm:gap-2 sm:p-4", className)}>
      <p className="truncate text-[11px] text-muted-foreground sm:text-sm">{label}</p>
      <p className="text-xl font-semibold tracking-tight sm:text-3xl">{value}</p>
      <p className="truncate text-[10px] text-muted-foreground sm:text-xs">{hint}</p>
    </Card>
  );
}
