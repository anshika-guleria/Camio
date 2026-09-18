import { Header } from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoTeam } from "@/lib/demo-data";
import { MailPlus, MoreHorizontal, Users } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      <Header title="Team Members" />
      <div className="space-y-6 p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Users className="size-5" /></div><p className="text-sm text-muted-foreground">3 of 10 seats are currently in use.</p></div><Button><MailPlus className="size-4" />Invite teammate</Button></div>
        <div className="grid gap-4 lg:grid-cols-2">
        {demoTeam.map((member) => (
          <Card key={member.email}>
            <div className="flex items-start justify-between gap-3"><Link href={`/dashboard/team/${member.id}`} className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">{member.name.slice(0, 1)}</div><div><p className="font-medium hover:text-primary">{member.name}</p><p className="text-sm text-muted-foreground">{member.email}</p></div></Link><Button variant="ghost" size="icon" aria-label={`More actions for ${member.name}`}><MoreHorizontal className="size-4" /></Button></div><div className="mt-3 flex items-center justify-between"><Badge variant={member.status === "Active" ? "success" : "outline"}>{member.status}</Badge><span className="text-xs text-primary">{member.role}</span></div><div className="mt-3 grid grid-cols-2 gap-3 border-t border-border/60 pt-3 text-xs"><div><span className="text-muted-foreground">Focus</span><p className="mt-1 font-medium">{member.focus}</p></div><div><span className="text-muted-foreground">Interviews</span><p className="mt-1 font-medium">{member.interviews}</p></div></div>
          </Card>
        ))}
        </div>
      </div>
    </>
  );
}
