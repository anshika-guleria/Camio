import { Header } from "@/components/dashboard/Header";
import { InterviewCard } from "@/components/dashboard/InterviewCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoInterviews } from "@/lib/demo-data";
import { Plus } from "lucide-react";

export default function InterviewsPage() {
  return (
    <>
      <Header title="My Interview Rooms" />
      <div className="space-y-6 p-6 lg:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-muted-foreground">Reusable rooms for every stage of your hiring loop.</p></div><Button><Plus className="size-4" />Create interview room</Button></div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4"><Card className="gap-1 p-3 sm:p-4"><p className="text-[11px] text-muted-foreground sm:text-xs">Rooms</p><p className="text-xl font-semibold sm:text-2xl">12</p><p className="text-[10px] text-success sm:text-xs">+3 this month</p></Card><Card className="gap-1 p-3 sm:p-4"><p className="text-[11px] text-muted-foreground sm:text-xs">Live</p><p className="text-xl font-semibold sm:text-2xl">1</p><p className="text-[10px] text-muted-foreground sm:text-xs">Now</p></Card><Card className="gap-1 p-3 sm:p-4"><p className="text-[11px] text-muted-foreground sm:text-xs">Avg. score</p><p className="text-xl font-semibold sm:text-2xl">86%</p><p className="text-[10px] text-muted-foreground sm:text-xs">Completed</p></Card></div>
        <div className="grid gap-4 lg:grid-cols-2">
        {demoInterviews.map((interview) => (
          <div key={interview.id}><InterviewCard title={interview.title} candidate={interview.candidate} role={interview.role} when={`${interview.when} · ${interview.duration}`} status={interview.status} href={`/interview/${interview.id}`} /></div>
        ))}
        </div>
      </div>
    </>
  );
}
