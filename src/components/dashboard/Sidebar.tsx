"use client";

import { Calendar, CreditCard, Film, Layers, LayoutDashboard, Settings, Users, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/Logo";
import { DASHBOARD_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS = [LayoutDashboard, Video, Calendar, Film, Layers, Users, CreditCard, Settings];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-white/[0.08] bg-surface/70 backdrop-blur-xl md:flex md:flex-col">
      <div className="flex h-20 items-center border-b border-white/[0.06] px-5">
        <Link href="/dashboard">
          <Logo />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
        {DASHBOARD_NAV.map((item, index) => {
          const Icon = ICONS[index];
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-muted-foreground transition-all hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-foreground",
                active && "border-primary/20 bg-primary/10 text-primary shadow-sm shadow-primary/10"
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
