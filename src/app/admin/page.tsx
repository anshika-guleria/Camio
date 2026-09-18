import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardTitle } from "@/components/ui/card";
import { demoInterviews, demoOrganizations, demoUsers } from "@/lib/demo-data";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">A live snapshot of the Camio platform.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><StatCard label="Organizations" value={String(demoOrganizations.length)} hint="Active workspaces" /><StatCard label="Users" value={String(demoUsers.length)} hint="Across all workspaces" /><StatCard label="Rooms this month" value="131" hint="18% above last month" /><StatCard label="Avg. interview" value="46 min" hint="Across completed rooms" /></div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]"><Card><CardTitle>Platform activity</CardTitle><ActivityChart /></Card><Card><CardTitle>Room status</CardTitle><div className="mt-4 space-y-4 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Live rooms</span><span className="font-semibold text-success">{demoInterviews.filter((item) => item.status === "Live").length}</span></div><div className="flex justify-between"><span className="text-muted-foreground">Scheduled</span><span className="font-semibold text-primary">{demoInterviews.filter((item) => item.status === "Scheduled").length}</span></div><div className="flex justify-between"><span className="text-muted-foreground">Completed</span><span className="font-semibold">{demoInterviews.filter((item) => item.status === "Ended").length}</span></div></div></Card></div>
    </div>
  );
}
