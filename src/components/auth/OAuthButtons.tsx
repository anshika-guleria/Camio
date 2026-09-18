import { Button } from "@/components/ui/button";

export function OAuthButtons() {
  return (
    <div className="grid gap-2">
      <Button type="button" variant="outline" className="w-full" disabled>
        Continue with Google
      </Button>
      <p className="text-center text-xs text-muted-foreground">OAuth will connect when auth is live.</p>
    </div>
  );
}
