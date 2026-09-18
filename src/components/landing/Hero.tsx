"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutDashboard, Play, Sparkles, UserCheck, Video, Zap } from "lucide-react";
import Link from "next/link";

import { SpeechBubble } from "@/components/mascot/SpeechBubble";
import { Logo } from "@/components/shared/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="section-gradient relative overflow-hidden border-b border-border/40 py-12 sm:py-16">
      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-sm">
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
          <span>Next-Gen Live Technical Interview Room</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
        </div>

        {/* Mascot & Speech */}
        <div className="relative flex flex-col items-center">
          <Logo showWordmark={false} className="drop-shadow-2xl" markClassName="h-24 w-32" />
          <SpeechBubble className="mt-2 text-xs font-medium bg-background/90 backdrop-blur-md border border-primary/20 shadow-lg">
            Hi! Explore all features & instant demo rooms below.
          </SpeechBubble>
        </div>

        {/* Hero Title & Subtext */}
        <div className="max-w-4xl space-y-3">
          <h1 className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
            Conduct seamless <span className="gradient-text font-extrabold">technical interviews</span> in real-time
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Video calling, real-time code editor, collaborative whiteboard, and interviewer notes — unified in a quiet, ultra-responsive workspace.
          </p>
        </div>

        {/* Instant Preview Buttons Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
          <Link
            href="/candidate/demo-room"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full sm:w-auto gap-2 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all scale-100 hover:scale-[1.02]"
            )}
          >
            <Play className="h-4 w-4 fill-current" />
            <span>Launch Candidate Room</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "glass", size: "lg" }),
              "w-full sm:w-auto gap-2 text-base font-medium border-primary/30 text-foreground hover:bg-primary/10"
            )}
          >
            <LayoutDashboard className="h-4 w-4 text-primary" />
            <span>Explore Dashboard</span>
          </Link>
        </div>

        {/* Live Feature Highlights Pill Row */}
        <div className="grid w-full max-w-3xl grid-cols-2 gap-2 pt-3 text-xs font-medium text-muted-foreground sm:grid-cols-4">
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md">
            <Video className="h-4 w-4 text-primary" />
            <span>HD Video & Voice</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md">
            <Code2 className="h-4 w-4 text-primary" />
            <span>Real-time Code Sync</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md">
            <UserCheck className="h-4 w-4 text-primary" />
            <span>Waiting Room Lobby</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md">
            <Zap className="h-4 w-4 text-primary" />
            <span>Zero Setup Required</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
