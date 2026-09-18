"use client";

import {
    Menu,
    X,
    Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { buttonVariants } from "@/components/ui/button";
import { LANDING_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate back to home section
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/70 backdrop-blur-2xl transition-all">
      <Container className="flex h-[4.5rem] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Camio home">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.035] p-1 lg:flex">
          {LANDING_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/[0.06] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Quick Preview */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher className="hidden sm:block" />

          <span className="hidden h-6 w-px bg-border/70 sm:block" aria-hidden="true" />

          <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5 text-xs font-semibold border-primary/40 text-primary hover:bg-primary/15")}><Zap className="h-3.5 w-3.5 fill-primary/20" /><span>Preview dashboard</span></Link>

          <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hidden sm:inline-flex")}>
            Sign in
          </Link>
          <Link href="/signup" className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}>
            Sign up
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 lg:hidden text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="border-t border-border/60 bg-background/95 p-4 backdrop-blur-2xl lg:hidden space-y-4">
          <nav className="flex flex-col space-y-1">
            {LANDING_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-border/50 pt-2"><Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-3 py-3 text-sm font-semibold text-primary"><Zap className="size-4" />Preview dashboard</Link></div>
        </div>
      )}
    </header>
  );
}
