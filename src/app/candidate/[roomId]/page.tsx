import { SpeechBubble } from "@/components/mascot/SpeechBubble";
import { Logo } from "@/components/shared/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function CandidatePage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  return (
    <div className="page-canvas flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="glass flex max-w-lg flex-col items-center rounded-3xl px-8 py-10 sm:px-14">
        <Logo showWordmark={false} markClassName="h-28 w-36" />
        <SpeechBubble className="mt-3">You are in the waiting room. The interviewer will let you in.</SpeechBubble>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold">Waiting room</h1>
          <p className="mt-2 text-sm text-muted-foreground">Room {roomId}</p>
        </div>
        <Link href={`/interview/${roomId}`} className={cn(buttonVariants(), "mt-7 w-full sm:w-auto")}>
          Join interview
        </Link>
      </div>
    </div>
  );
}
