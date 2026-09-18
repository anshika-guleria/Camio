import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-1 text-sm text-foreground shadow-sm outline-none transition-[border-color,box-shadow]",
        "placeholder:text-muted-foreground",
        "hover:border-border-hover",
        "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
