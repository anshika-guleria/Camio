"use client";

import { Code2, FileText, Lock, Pencil, Terminal, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const FEATURES = [
  {
    icon: Video,
    title: "HD Video & Audio Stream",
    body: "Integrated camera, mic, and high-fps screen sharing without external tools.",
    badge: "WebRTC",
  },
  {
    icon: Code2,
    title: "Real-time Code Sync",
    body: "Collaborative multi-language editor with auto-completion, linting, and dark themes.",
    badge: "Monaco Engine",
  },
  {
    icon: Pencil,
    title: "Interactive Whiteboard",
    body: "Sketch system architecture diagrams, flowcharts, and math equations together.",
    badge: "Infinite Canvas",
  },
  {
    icon: Terminal,
    title: "Code Execution Sandbox",
    body: "Run candidate code safely inside isolated containers with test output.",
    badge: "Instant Runner",
  },
  {
    icon: FileText,
    title: "Private Scorecard Notes",
    body: "Record confidential evaluations, rating criteria, and feedback timestamped live.",
    badge: "Confidential",
  },
  {
    icon: Lock,
    title: "Candidate Lobby Control",
    body: "Admit candidates from a quiet waiting room when your interviewers are ready.",
    badge: "Secure Access",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 border-b border-border/40 relative">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Powerful Platform Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything for high-signal interviews
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base">
            Designed to assess problem-solving skills, coding efficiency, and collaboration seamlessly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="group relative p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-xl rounded-2xl bg-background/80 backdrop-blur-md border-border/80"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-[10px] font-mono border-primary/20 text-muted-foreground">
                  {feature.badge}
                </Badge>
              </div>

              <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                {feature.title}
              </CardTitle>
              <CardDescription className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {feature.body}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
