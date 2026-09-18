import { AdminTable } from "@/components/admin/AdminTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demoUsers } from "@/lib/demo-data";

export default function AdminUsersPage() {
  return (
    <div className="space-y-5"><div className="flex items-end justify-between gap-4"><div><p className="text-sm text-muted-foreground">Manage access across every organization.</p></div><Button size="sm">Invite user</Button></div><AdminTable headers={["User", "Organization", "Role", "Status", ""]} rows={demoUsers.map((user) => [<div key={user.email}><p className="font-medium">{user.name}</p><p className="text-xs text-muted-foreground">{user.email}</p></div>, user.organization, user.role, <Badge key={`${user.email}-status`} variant="success">{user.status}</Badge>, <Button key={`${user.email}-action`} size="sm" variant="ghost">View</Button>])} /></div>
  );
}
