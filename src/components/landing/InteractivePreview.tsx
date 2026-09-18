"use client";

import {
    CheckCircle2,
    Code,
    ExternalLink,
    FileText,
    LayoutDashboard,
    Mic,
    Shield,
    User,
    Video,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InteractivePreview() {
  const [activeTab, setActiveTab] = useState<"candidate" | "interviewer" | "dashboard">("candidate");

  return (
    <section id="preview" className="px-6 py-20 bg-muted/20 border-b border-border/40">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Interactive Product Preview
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience the Camio Workspace
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base">
            Switch between candidate, interviewer, and dashboard perspectives. Click any launch button to test live without logging in.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-background/80 border border-border/80 shadow-md backdrop-blur-xl gap-2">
            <button
              onClick={() => setActiveTab("candidate")}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all",
                activeTab === "candidate"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <User className="h-4 w-4" />
              <span>Candidate Room</span>
            </button>
            <button
              onClick={() => setActiveTab("interviewer")}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all",
                activeTab === "interviewer"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <FileText className="h-4 w-4" />
              <span>Interviewer Workspace</span>
            </button>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all",
                activeTab === "dashboard"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Recruiter Dashboard</span>
            </button>
          </div>
        </div>

        {/* Mockup Frame Container */}
        <Card className="overflow-hidden border-border/80 shadow-2xl bg-background/90 backdrop-blur-2xl rounded-2xl">
          {/* Top Bar of Window Mockup */}
          <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                camio.app/{activeTab === "candidate" ? "candidate/demo-room" : activeTab === "interviewer" ? "interview/demo-room" : "dashboard"}
              </span>
            </div>
            <Link
              href={activeTab === "candidate" ? "/candidate/demo-room" : activeTab === "interviewer" ? "/interview/demo-room" : "/dashboard"}
              className={cn(buttonVariants({ size: "sm" }), "gap-1.5 text-xs font-semibold h-7 px-3")}
            >
              <span>Launch Live View</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          {/* Tab Content Display */}
          <div className="p-6">
            {activeTab === "candidate" && (
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4 font-mono text-xs text-foreground space-y-2 shadow-inner">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-semibold text-primary">
                        <Code className="h-3.5 w-3.5" /> solution.ts (TypeScript)
                      </span>
                      <span className="text-green-400 flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Synchronized
                      </span>
                    </div>
                    <pre className="text-muted-foreground leading-relaxed overflow-x-auto">
{`function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff)!, i];
    map.set(nums[i], i);
  }
  return [];
}`}
                    </pre>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground bg-background p-3 rounded-xl border border-border/50">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> All 5 unit tests passed
                    </span>
                    <span className="font-mono text-[11px]">Execution time: 14ms</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between border border-border/50 shadow-md">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                        Candidate Video
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Mic className="h-3.5 w-3.5 text-green-400" />
                        <Video className="h-3.5 w-3.5 text-green-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-bold text-xs">
                        JD
                      </div>
                      <div className="text-xs font-semibold">Jane Doe (Candidate)</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-2 text-xs">
                    <div className="font-semibold text-foreground">Live Collaboration</div>
                    <p className="text-muted-foreground text-[11px]">
                      Candidates can write code, run test cases, sketch algorithms on whiteboard, and talk with interviewers.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "interviewer" && (
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                  <div className="rounded-xl border border-border/60 bg-muted/20 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div className="font-semibold text-sm">Private Interviewer Scorecard</div>
                      <Badge variant="outline" className="text-xs">Confidential</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg border border-border/40 bg-background">
                        <div className="text-muted-foreground text-[11px]">Problem Solving</div>
                        <div className="font-bold text-primary text-sm mt-0.5">4.8 / 5.0</div>
                      </div>
                      <div className="p-3 rounded-lg border border-border/40 bg-background">
                        <div className="text-muted-foreground text-[11px]">Code Quality</div>
                        <div className="font-bold text-primary text-sm mt-0.5">5.0 / 5.0</div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-muted-foreground">Notes & Observations</label>
                      <div className="p-3 rounded-lg bg-background border border-border/50 text-xs text-foreground italic">
                        &quot;Great grasp of hash map optimizations. Identified edge cases quickly.&quot;
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-3 text-xs">
                    <div className="font-semibold text-foreground flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" /> Interviewer Control Panel
                    </div>
                    <ul className="space-y-2 text-muted-foreground text-[11px]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Admit / Hold Candidates from Lobby
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Switch Question Templates & Starters
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Export Recording & Session Logs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "dashboard" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl border border-border/60 bg-muted/20">
                    <div className="text-muted-foreground text-[11px]">Active Rooms</div>
                    <div className="text-xl font-bold text-foreground mt-1">12</div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/60 bg-muted/20">
                    <div className="text-muted-foreground text-[11px]">Completed Today</div>
                    <div className="text-xl font-bold text-primary mt-1">28</div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/60 bg-muted/20">
                    <div className="text-muted-foreground text-[11px]">Avg Evaluation Score</div>
                    <div className="text-xl font-bold text-green-400 mt-1">4.6</div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/60 bg-muted/20">
                    <div className="text-muted-foreground text-[11px]">Team Members</div>
                    <div className="text-xl font-bold text-foreground mt-1">8</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border/60 bg-muted/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-semibold border-b border-border/40 pb-2">
                    <span>Recent Scheduled Interview Rooms</span>
                    <Link href="/dashboard" className="text-primary text-[11px] hover:underline">
                      View All Dashboard Rooms →
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-background border border-border/40">
                      <div>
                        <div className="font-semibold">Senior Frontend Specialist</div>
                        <div className="text-[11px] text-muted-foreground">Candidate: Alex Morgan • Room #SF-902</div>
                      </div>
                      <Badge className="bg-green-500/15 text-green-400 border-green-500/30">In Progress</Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
