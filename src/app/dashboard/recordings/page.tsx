import { Header } from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoRecordings } from "@/lib/demo-data";
import { Download, Play, Search } from "lucide-react";

export default function RecordingsPage() {
  return (
    <>
      <Header title="Recordings" />
      <div className="space-y-6 p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted-foreground">Review, share, and export completed interviews.</p><div className="flex gap-2"><Button variant="glass" size="icon" aria-label="Search recordings"><Search className="size-4" /></Button><Button variant="outline" size="sm"><Download className="size-3" />Export</Button></div></div>
        <div className="grid gap-4 sm:grid-cols-3"><Card><p className="text-xs text-muted-foreground">Total recordings</p><p className="mt-2 text-2xl font-semibold">7</p></Card><Card><p className="text-xs text-muted-foreground">Storage used</p><p className="mt-2 text-2xl font-semibold">18.4 GB</p></Card><Card><p className="text-xs text-muted-foreground">Shared this month</p><p className="mt-2 text-2xl font-semibold">12</p></Card></div>
        <div className="grid gap-4 lg:grid-cols-2">
        {demoRecordings.map((recording) => (
          <Card key={recording.id}>
            <div className="flex items-start justify-between gap-4"><div><Badge variant="success">Ready to review</Badge><p className="mt-3 font-medium">{recording.title}</p><p className="text-sm text-muted-foreground">{recording.candidate} · {recording.duration}</p><p className="mt-2 text-xs text-muted-foreground">{recording.template} · Yesterday</p></div><Button size="icon" aria-label={`Play ${recording.title}`}><Play className="size-4 fill-current" /></Button></div>
          </Card>
        ))}
        </div>
      </div>
    </>
  );
}
