"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section id="cta" className="section-gradient px-6 py-20">
      <div className="gradient-surface relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-primary/30 p-10 text-center shadow-xl sm:p-14">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Ready for your next tech interview?
        </div>

        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Experience the modern way to evaluate code
        </h2>

        <p className="max-w-xl text-base text-muted-foreground">
          Create a room in seconds, share a link, and start assessing talent with real-time video, code editor, and whiteboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
          <Link
            href="/candidate/demo-room"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 text-base font-semibold shadow-lg shadow-primary/25")}
          >
            <Play className="h-4 w-4 fill-current" />
            <span>Launch Quick Demo Room</span>
          </Link>
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 text-base font-medium rounded-xl")}
          >
            <span>Create Free Account</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
