import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { Header } from "@/components/dashboard/Header";
import { InterviewCard } from "@/components/dashboard/InterviewCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { demoInterviews, demoTeam } from "@/lib/demo-data";
import { ArrowRight, CalendarDays, CheckCircle2, FilePlus2, Plus, UserPlus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <Header title="Overview" />
      <div className="space-y-5 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"><div><p className="text-sm font-medium">Good morning, Alex.</p><p className="mt-1 text-xs text-muted-foreground">Here is what needs your attention today.</p></div><div className="flex w-full gap-2 sm:w-auto"><Button variant="glass" size="sm" className="min-w-0 flex-1 sm:flex-none"><UserPlus className="size-3.5" />Invite candidate</Button><Button size="sm" className="min-w-0 flex-1 sm:flex-none"><Plus className="size-3.5" />New room</Button></div></div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <StatCard label="Rooms" value="4" hint="Active this week" />
          <StatCard label="Interviews" value="12" hint="Scheduled" />
          <StatCard label="Recordings" value="7" hint="Ready to review" />
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]"><Card className="min-w-0"><div className="flex items-start justify-between gap-3"><div><CardTitle>Interview activity</CardTitle><p className="mt-1 text-xs text-muted-foreground">Rooms completed over the last 7 days</p></div><Badge variant="success">+18.4%</Badge></div><ActivityChart /></Card><Card><CardTitle>Hiring pipeline</CardTitle><div className="mt-5 space-y-4"><div><div className="mb-1 flex justify-between text-xs"><span className="text-muted-foreground">New candidates</span><span>24</span></div><div className="h-2 rounded-full bg-muted"><div className="h-2 w-[78%] rounded-full bg-primary" /></div></div><div><div className="mb-1 flex justify-between text-xs"><span className="text-muted-foreground">In interview</span><span>12</span></div><div className="h-2 rounded-full bg-muted"><div className="h-2 w-[52%] rounded-full bg-primary/70" /></div></div><div><div className="mb-1 flex justify-between text-xs"><span className="text-muted-foreground">Ready for review</span><span>7</span></div><div className="h-2 rounded-full bg-muted"><div className="h-2 w-[34%] rounded-full bg-primary/45" /></div></div></div></Card></div>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"><Card className="gap-0"><div className="flex items-center justify-between gap-3"><CardTitle>Today&apos;s interviews</CardTitle><Link href="/dashboard/scheduled" className="shrink-0 text-xs text-primary">View schedule <ArrowRight className="ml-1 inline size-3" /></Link></div><div className="mt-5 space-y-3">{demoInterviews.slice(0, 2).map((interview) => <InterviewCard key={interview.id} title={interview.title} candidate={interview.candidate} when={interview.when} status={interview.status} href={`/interview/${interview.id}`} />)}</div></Card><Card><CardTitle>Quick actions</CardTitle><div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1"><Link href="/dashboard/scheduled" className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm hover:border-primary/40"><CalendarDays className="size-4 text-primary" /><span>Schedule interview</span></Link><Link href="/dashboard/templates" className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm hover:border-primary/40"><FilePlus2 className="size-4 text-primary" /><span>Use a template</span></Link><Link href="/dashboard/recordings" className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm hover:border-primary/40"><CheckCircle2 className="size-4 text-primary" /><span>Review recordings</span></Link></div></Card></div>
        <Card><div className="flex items-center justify-between gap-3"><div><CardTitle>Team pulse</CardTitle><p className="mt-1 text-xs text-muted-foreground">Your interview team this week</p></div><Link href="/dashboard/team" className="shrink-0 text-xs text-primary">View team</Link></div><div className="mt-4 grid gap-2 sm:grid-cols-3">{demoTeam.map((member) => <Link href={`/dashboard/team/${member.id}`} key={member.id} className="flex min-w-0 items-center gap-3 rounded-xl border border-border/70 p-3 hover:border-primary/35"><div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">{member.name.slice(0, 1)}</div><div className="min-w-0"><p className="truncate text-sm font-medium">{member.name}</p><p className="text-xs text-muted-foreground">{member.interviews} interviews</p></div></Link>)}</div></Card>
      </div>
    </>
  );
}
