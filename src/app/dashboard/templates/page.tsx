import { Header } from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoTemplates } from "@/lib/demo-data";
import { Code2, Layers3, Plus, Search } from "lucide-react";

export default function TemplatesPage() {
  return (
    <>
      <Header title="Templates" />
      <div className="space-y-6 p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted-foreground">Standardize your interviews with reusable prompts and test cases.</p><div className="flex gap-2"><Button variant="glass" size="icon" aria-label="Search templates"><Search className="size-4" /></Button><Button><Plus className="size-4" />New template</Button></div></div>
        <div className="grid gap-4 lg:grid-cols-3">
        {demoTemplates.map((template) => (
          <Card key={template.name}>
            <div className="flex items-center justify-between"><div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{template.type === "Coding" ? <Code2 className="size-5" /> : <Layers3 className="size-5" />}</div><Badge variant="outline">{template.type}</Badge></div><p className="mt-4 font-medium">{template.name}</p><p className="text-sm text-muted-foreground">{template.detail}</p><div className="mt-4 flex items-center justify-between text-xs"><span className="text-muted-foreground">Used in {template.uses} rooms</span><span className="text-primary">Open template →</span></div>
          </Card>
        ))}
        </div>
      </div>
    </>
  );
}
