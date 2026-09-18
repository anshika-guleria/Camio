import { Shield } from "lucide-react";
import Link from "next/link";

import { ADMIN_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="page-canvas min-h-screen">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-8 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div><div className="flex items-center gap-2 text-primary"><Shield className="size-4" /><span className="text-xs font-semibold uppercase tracking-[0.18em]">Admin console</span></div><h1 className="mt-2 text-2xl font-semibold">Camio operations</h1></div>
          <nav className="flex flex-wrap gap-1 rounded-xl border border-border/70 bg-white/[0.03] p-1">
            {ADMIN_NAV.map((item) => <Link key={item.href} href={item.href} className={cn("rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary")}>{item.label}</Link>)}
          </nav>
        </div>
      {children}
      </div>
    </div>;
}
