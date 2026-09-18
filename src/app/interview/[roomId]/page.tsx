import { InterviewWorkspace } from "@/components/interview/InterviewWorkspace";

export default async function InterviewRoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  return <InterviewWorkspace roomId={roomId} />;
}
