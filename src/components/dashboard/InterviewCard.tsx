import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function InterviewCard({
  title,
  when,
  status,
  href,
  candidate,
  role,
}: {
  title: string;
  when: string;
  status: "Live" | "Scheduled" | "Ended";
  href: string;
  candidate?: string;
  role?: string;
}) {
  return (
    <Link href={href}>
      <Card className="hover-lift">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{candidate ?? role ?? "Interview room"}</p>
            <p className="mt-2 text-xs text-muted-foreground">{when}</p>
          </div>
          <Badge variant={status === "Live" ? "default" : "secondary"}>{status}</Badge>
        </div>
      </Card>
    </Link>
  );
}
