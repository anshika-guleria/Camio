import { AdminTable } from "@/components/admin/AdminTable";
import { Button } from "@/components/ui/button";
import { demoPlans } from "@/lib/demo-data";

export default function AdminPlansPage() {
  return (
    <div className="space-y-5"><div className="flex items-end justify-between gap-4"><p className="text-sm text-muted-foreground">Pricing plans and active subscriptions.</p><Button size="sm">Create plan</Button></div><AdminTable headers={["Plan", "Price / seat", "Subscribers", "Description", ""]} rows={demoPlans.map((plan) => [<span key={plan.name} className="font-medium">{plan.name}</span>, plan.price, plan.subscribers, plan.detail, <Button key={`${plan.name}-edit`} size="sm" variant="ghost">Edit</Button>])} /></div>
  );
}
