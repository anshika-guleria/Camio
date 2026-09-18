import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, Mail, MapPin, MoreHorizontal, Video } from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/dashboard/Header";
import { InterviewCard } from "@/components/dashboard/InterviewCard";
import { ProfileEditor } from "@/components/dashboard/ProfileEditor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { demoInterviews, demoTeam } from "@/lib/demo-data";

export default async function TeamMemberProfilePage({
  params,
}: {
  params: Promise<{ memberId: string }>;
}) {
  const { memberId } = await params;
  const member = demoTeam.find((person) => person.id === memberId) ?? demoTeam[0];
  const recentInterviews = member.role === "Interviewer" ? demoInterviews.slice(1) : demoInterviews;

  return (
    <>
      <Header title="Profile" />
      <div className="space-y-6 p-6 lg:p-8">
        <Link href="/dashboard/team" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" />Back to team</Link>
        <Card className="overflow-hidden border-primary/20 p-0">
          <div className="h-28 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--primary)_35%,transparent),transparent_22rem)] bg-primary/[0.06]" />
          <div className="-mt-10 flex flex-wrap items-end justify-between gap-4 px-6 pb-6">
            <div className="flex items-end gap-4"><div className="flex size-20 items-center justify-center rounded-3xl border-4 border-background bg-primary/15 text-2xl font-semibold text-primary">{member.name.slice(0, 1)}</div><div><div className="flex items-center gap-2"><h2 className="text-2xl font-semibold">{member.name}</h2><Badge variant={member.status === "Active" ? "success" : "outline"}>{member.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{member.role} · {member.email}</p></div></div>
            <div className="flex gap-2"><Button variant="outline" size="sm"><Mail className="size-3.5" />Message</Button><ProfileEditor initialProfile={{ name: member.name, email: member.email, role: member.role, focus: member.focus, timezone: member.timezone }} /><Button variant="ghost" size="icon" aria-label="More profile actions"><MoreHorizontal className="size-4" /></Button></div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-6">
            <Card><CardTitle>About {member.name.split(" ")[0]}</CardTitle><p className="mt-4 text-sm leading-6 text-muted-foreground">{member.role === "Recruiter" ? "Owns hiring operations, candidate coordination, and keeping every interview loop moving on time." : `Leads ${member.focus.toLowerCase()} interviews and provides structured, actionable candidate feedback.`}</p><div className="mt-5 space-y-3 border-t border-border/60 pt-4 text-sm"><div className="flex items-center gap-3"><MapPin className="size-4 text-primary" /><span className="text-muted-foreground">{member.timezone}</span></div><div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-primary" /><span className="text-muted-foreground">Focus: {member.focus}</span></div><div className="flex items-center gap-3"><Clock3 className="size-4 text-primary" /><span className="text-muted-foreground">Available for interview reviews</span></div></div></Card>
            <Card><CardTitle>Profile metrics</CardTitle><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-primary/[0.06] p-3"><p className="text-xs text-muted-foreground">Interviews</p><p className="mt-1 text-2xl font-semibold">{member.interviews}</p></div><div className="rounded-xl bg-primary/[0.06] p-3"><p className="text-xs text-muted-foreground">Avg. score</p><p className="mt-1 text-2xl font-semibold">{member.score}</p></div></div></Card>
          </div>
          <div className="space-y-6"><Card><div className="flex items-center justify-between"><CardTitle>Recent interview activity</CardTitle><Button variant="ghost" size="sm"><CalendarDays className="size-3.5" />Schedule</Button></div><div className="mt-4 space-y-3">{recentInterviews.map((interview) => <InterviewCard key={interview.id} title={interview.title} candidate={interview.candidate} when={interview.when} status={interview.status} href={`/interview/${interview.id}`} />)}</div></Card><Card><CardTitle>Role permissions</CardTitle><div className="mt-4 grid gap-2 sm:grid-cols-2"><div className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm"><Video className="size-4 text-primary" />Run interviews</div><div className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm"><CheckCircle2 className="size-4 text-primary" />Review feedback</div></div></Card></div>
        </div>
      </div>
    </>
  );
}
