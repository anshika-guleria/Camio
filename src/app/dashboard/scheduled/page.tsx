import { Header } from "@/components/dashboard/Header";
import { InterviewCard } from "@/components/dashboard/InterviewCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoInterviews } from "@/lib/demo-data";
import { CalendarPlus, Clock3 } from "lucide-react";

export default function ScheduledPage() {
  return (
    <>
      <Header title="Scheduled Interviews" />
      <div className="space-y-6 p-6 lg:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4"><p className="text-sm text-muted-foreground">Keep upcoming candidate conversations moving.</p><Button><CalendarPlus className="size-4" />Schedule interview</Button></div>
        <Card className="border-primary/20 bg-primary/[0.04]"><div className="flex items-center gap-4"><div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><Clock3 className="size-5" /></div><div><p className="font-medium">Next up: Frontend loop</p><p className="text-sm text-muted-foreground">Maya Chen · Today at 2:00 PM · 45 minutes</p></div><span className="ml-auto hidden text-xs text-primary sm:block">In 01:42:18</span></div></Card>
        <div className="grid gap-4 lg:grid-cols-2">
        {demoInterviews.filter((interview) => interview.status === "Scheduled").map((interview) => (
          <InterviewCard
            key={interview.id}
            title={interview.title}
            candidate={interview.candidate}
            role={interview.role}
            when={interview.when}
            status={interview.status}
            href={`/interview/${interview.id}`}
          />
        ))}
        </div>
      </div>
    </>
  );
}
