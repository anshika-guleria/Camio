import { Header } from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoPlans } from "@/lib/demo-data";

export default function BillingPage() {
  return (
    <>
      <Header title="Billing" />
      <div className="space-y-6 p-6 lg:p-8">
        <Card className="border-primary/25 bg-primary/[0.04]">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><Badge>Current plan</Badge><p className="mt-3 text-2xl font-semibold">Team</p><p className="mt-1 text-sm text-muted-foreground">7 seats · renews on October 12, 2026</p></div><Button>Manage subscription</Button></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3"><div><p className="text-xs text-muted-foreground">Interview rooms</p><p className="mt-1 text-lg font-semibold">34 / 100</p></div><div><p className="text-xs text-muted-foreground">Recording storage</p><p className="mt-1 text-lg font-semibold">18.4 GB / 50 GB</p></div><div><p className="text-xs text-muted-foreground">Team seats</p><p className="mt-1 text-lg font-semibold">7 / 10</p></div></div>
        </Card>
        <div><p className="mb-3 text-sm font-semibold">Available plans</p><div className="grid gap-4 md:grid-cols-3">{demoPlans.map((plan) => <Card key={plan.name}><p className="font-semibold">{plan.name}</p><p className="mt-2 text-2xl font-semibold">{plan.price}<span className="text-xs font-normal text-muted-foreground">{plan.price !== "Custom" && " / seat / month"}</span></p><p className="mt-2 text-sm text-muted-foreground">{plan.detail}</p><Button className="mt-4 w-full" variant={plan.name === "Team" ? "default" : "outline"}>{plan.name === "Team" ? "Current plan" : "Choose plan"}</Button></Card>)}</div></div>
      </div>
    </>
  );
}
