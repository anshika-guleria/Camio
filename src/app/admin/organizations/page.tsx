import { AdminTable } from "@/components/admin/AdminTable";
import { Badge } from "@/components/ui/badge";
import { demoOrganizations } from "@/lib/demo-data";

export default function AdminOrgsPage() {
  return (
    <div className="space-y-5"><div><p className="text-sm text-muted-foreground">Workspace health, seats, and plan distribution.</p></div><AdminTable headers={["Organization", "Members", "Rooms", "Plan", "Status"]} rows={demoOrganizations.map((organization) => [<span key={organization.name} className="font-medium">{organization.name}</span>, organization.members, organization.rooms, organization.plan, <Badge key={`${organization.name}-status`} variant={organization.status === "Healthy" ? "success" : "default"}>{organization.status}</Badge>])} /></div>
  );
}
