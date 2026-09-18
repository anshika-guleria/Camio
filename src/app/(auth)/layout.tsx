import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-canvas grid min-h-screen lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)]">
      <div className="relative hidden items-center justify-center overflow-hidden border-r border-white/[0.08] bg-surface/55 lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--primary)_18%,transparent),transparent_22rem)]" />
        <div className="relative px-12 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 shadow-[0_0_60px_color-mix(in_srgb,var(--primary)_25%,transparent)]">
            <Logo showWordmark={false} markClassName="h-11 w-14" />
          </div>
          <p className="text-3xl font-semibold tracking-tight">A calmer interview room.</p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-muted-foreground">Everything your team needs to run thoughtful technical interviews, in one focused workspace.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-12">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <Link href="/">
            <Logo />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
