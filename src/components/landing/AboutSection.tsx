"use client";

import { CheckCircle2, ShieldCheck, Users, Zap } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-gradient relative overflow-hidden border-b border-border/40 px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/40 text-primary">
              Built for Engineering Teams
            </Badge>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One room for video, code, and whiteboard — zero friction.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Camio eliminates the chaotic mess of stitching together zoom links, online editors, shared docs, and whiteboard tabs. We built a dedicated, quiet environment designed specifically for technical interviews.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-border/50 bg-background/50">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Instant Candidate Join</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-border/50 bg-background/50">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Encrypted & Private</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-border/50 bg-background/50">
                <Zap className="h-4 w-4 text-primary" />
                <span>Sub-10ms Code Sync</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-border/50 bg-background/50">
                <Users className="h-4 w-4 text-primary" />
                <span>Multi-Interviewer Notes</span>
              </div>
            </div>
          </div>

          <div className="gradient-surface relative flex flex-col items-center justify-center rounded-3xl border border-primary/20 p-8 shadow-xl">
            <Logo showWordmark={false} markClassName="h-36 w-44" />
            <div className="mt-6 text-center space-y-2">
              <h3 className="text-lg font-bold">Meet Camio, your mascot guide</h3>
              <p className="text-xs text-muted-foreground max-w-sm">
                Adapts seamlessly to your theme accent and guides candidates through lobby waiting and interview stages.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Card className="p-6 bg-background/60 backdrop-blur-md border-border/60">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">10k+</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">Interviews Conducted</div>
          </Card>
          <Card className="p-6 bg-background/60 backdrop-blur-md border-border/60">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">99.9%</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">Uptime Reliability</div>
          </Card>
          <Card className="p-6 bg-background/60 backdrop-blur-md border-border/60">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">45ms</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">Global Latency</div>
          </Card>
          <Card className="p-6 bg-background/60 backdrop-blur-md border-border/60">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">4.9/5</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">Interviewer Rating</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
