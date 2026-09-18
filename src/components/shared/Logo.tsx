import Image from "next/image";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
  markClassName,
}: {
  className?: string;
  showWordmark?: boolean;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-primary", className)}>
      <Image
        src="/camio-logo.svg"
        alt=""
        width={1408}
        height={768}
        aria-hidden="true"
        className={cn("camio-logo-mark h-8 w-10 shrink-0", markClassName)}
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">Camio</span>
      )}
    </span>
  );
}
