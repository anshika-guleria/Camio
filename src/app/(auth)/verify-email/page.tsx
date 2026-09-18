import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="space-y-6 text-center">
      <Logo showWordmark={false} className="mx-auto" markClassName="h-24 w-32" />
      <h1 className="text-2xl font-semibold">Check your email</h1>
      <p className="text-sm text-muted-foreground">
        Verification will go out through Resend once the API is wired.
      </p>
      <Link href="/login" className="text-sm text-primary hover:underline">
        Return to sign in
      </Link>
    </div>
  );
}
