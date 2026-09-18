"use client";

import Editor from "@monaco-editor/react";
import {
    Bot,
    Check,
    Circle,
    FileText,
    Flag,
    FolderOpen,
    MessageSquare,
    Mic,
    MonitorUp,
    Play,
    Send,
    Shapes,
    Sparkles,
    Square,
    Timer,
    Users,
    Video,
} from "lucide-react";
import { useState } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const code = `function twoSum(nums, target) {
  const seen = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (seen.has(complement)) {
      return [seen.get(complement), index];
    }
    seen.set(nums[index], index);
  }

  return [];
}`;

export function InterviewWorkspace({ roomId }: { roomId: string }) {
  const [workspaceTab, setWorkspaceTab] = useState<"code" | "board">("code");
  const [sideTab, setSideTab] = useState<"chat" | "notes" | "files" | "ai">("chat");
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(["Walk me through the complexity.", "I am checking the edge cases now."]);
  const [hasRun, setHasRun] = useState(false);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages((current) => [...current, message.trim()]);
    setMessage("");
  };

  return (
    <div className="page-canvas flex min-h-screen flex-col bg-background">
      <header className="flex min-h-16 items-center justify-between border-b border-white/[0.08] bg-surface/80 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/12 text-primary"><Video className="size-4" /></div>
          <div><p className="text-sm font-semibold">Frontend loop</p><p className="text-xs text-muted-foreground">Room {roomId} · Maya Chen</p></div>
        </div>
        <div className="hidden items-center gap-4 text-xs text-muted-foreground sm:flex"><span className="flex items-center gap-1.5"><Timer className="size-3.5 text-primary" /> 24:12 remaining</span><span className="flex items-center gap-1.5"><Users className="size-3.5 text-primary" /> 2 participants</span></div>
        <Button variant={isRecording ? "destructive" : "outline"} size="sm" onClick={() => setIsRecording(!isRecording)}>{isRecording ? <Square className="size-3 fill-current" /> : <Circle className="size-3 fill-current" />} {isRecording ? "Stop recording" : "Record"}</Button>
      </header>

      <main className="grid min-h-0 flex-1 gap-3 p-3 xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="grid min-h-[680px] min-w-0 gap-3 lg:grid-rows-[minmax(0,1fr)_auto]">
          <div className="glass min-h-0 overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-border/70 px-3 py-2">
              <div className="flex gap-1 rounded-lg bg-background/60 p-1">
                <button type="button" onClick={() => setWorkspaceTab("code")} className={cn("rounded-md px-3 py-1.5 text-xs font-medium", workspaceTab === "code" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground")}><FileText className="mr-1.5 inline size-3.5" />Code</button>
                <button type="button" onClick={() => setWorkspaceTab("board")} className={cn("rounded-md px-3 py-1.5 text-xs font-medium", workspaceTab === "board" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground")}><Shapes className="mr-1.5 inline size-3.5" />Whiteboard</button>
              </div>
              {workspaceTab === "code" && <div className="flex items-center gap-2"><span className="rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground">JavaScript</span><Button size="sm" onClick={() => setHasRun(true)}><Play className="size-3" />Run code</Button></div>}
            </div>
            {workspaceTab === "code" ? <div className="grid h-[calc(100%-53px)] min-h-[520px] lg:grid-cols-[minmax(0,1fr)_240px]"><Editor height="100%" defaultLanguage="javascript" defaultValue={code} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, padding: { top: 18 }, roundedSelection: false }} /><div className="border-l border-border/70 bg-background/30 p-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Test cases</p><div className="mt-4 space-y-3 text-xs"><div className="rounded-xl border border-success/30 bg-success/5 p-3"><p className="font-mono">[2, 7, 11, 15], 9</p><p className="mt-2 flex items-center gap-1 text-success"><Check className="size-3" /> Passed · [0, 1]</p></div><div className="rounded-xl border border-border p-3"><p className="font-mono">[3, 2, 4], 6</p><p className="mt-2 text-muted-foreground">Ready to run</p></div></div>{hasRun && <p className="mt-4 rounded-lg bg-primary/10 p-2 text-primary">2 / 2 test cases passed</p>}</div></div> : <div className="h-[calc(100%-53px)] min-h-[520px]"><Tldraw persistenceKey={`camio-${roomId}`} /></div>}
          </div>
          <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3"><div className="flex gap-2"><Button size="icon" variant="glass" aria-label="Toggle camera"><Video className="size-4" /></Button><Button size="icon" variant="glass" aria-label="Toggle microphone"><Mic className="size-4" /></Button><Button size="icon" variant="glass" aria-label="Share screen"><MonitorUp className="size-4" /></Button></div><div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-success" /> LiveKit connection stable</div><Button variant="destructive">Leave interview</Button></div>
        </section>

        <aside className="glass flex min-h-[520px] flex-col overflow-hidden rounded-2xl">
          <div className="grid grid-cols-4 border-b border-border/70">{([['chat', MessageSquare, 'Chat'], ['notes', FileText, 'Notes'], ['files', FolderOpen, 'Files'], ['ai', Bot, 'AI']] as const).map(([key, Icon, label]) => <button type="button" key={key} onClick={() => setSideTab(key)} className={cn("flex flex-col items-center gap-1 border-b-2 px-2 py-3 text-[10px] font-medium", sideTab === key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground")}><Icon className="size-4" />{label}</button>)}</div>
          {sideTab === "chat" && <div className="flex min-h-0 flex-1 flex-col"><div className="flex-1 space-y-3 overflow-auto p-4">{messages.map((item, index) => <div key={`${item}-${index}`} className={cn("max-w-[88%] rounded-xl p-3 text-sm", index % 2 === 0 ? "bg-primary/10 text-foreground" : "ml-auto bg-white/[0.05] text-muted-foreground")}>{item}<p className="mt-1 text-[10px] text-muted-foreground">{index % 2 === 0 ? "Maya" : "You"} · now</p></div>)}</div><div className="border-t border-border/70 p-3"><div className="flex gap-2"><input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => event.key === "Enter" && sendMessage()} placeholder="Message the room..." className="min-w-0 flex-1 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary" /><Button size="icon" onClick={sendMessage} aria-label="Send message"><Send className="size-4" /></Button></div></div></div>}
          {sideTab === "notes" && <div className="space-y-4 p-4"><textarea className="min-h-48 w-full resize-none rounded-xl border border-input bg-background/50 p-3 text-sm outline-none focus:border-primary" defaultValue="Candidate communicates clearly. Explore memoization trade-offs next." /><Button size="sm"><Check className="size-3" />Save notes</Button></div>}
          {sideTab === "files" && <div className="space-y-3 p-4"><div className="flex items-center gap-3 rounded-xl border border-border p-3"><FileText className="size-4 text-primary" /><div className="min-w-0"><p className="truncate text-sm font-medium">interview-brief.pdf</p><p className="text-xs text-muted-foreground">248 KB · shared</p></div></div><Button variant="outline" size="sm"><FolderOpen className="size-3" />Share file</Button></div>}
          {sideTab === "ai" && <div className="space-y-4 p-4"><div className="rounded-xl border border-primary/25 bg-primary/10 p-4"><div className="flex items-center gap-2 text-sm font-medium text-primary"><Sparkles className="size-4" />Live hint</div><p className="mt-3 text-sm leading-6 text-muted-foreground">The candidate is using a hash map. Ask them to explain the space complexity and duplicate handling.</p></div><Button variant="outline" size="sm"><Bot className="size-3" />Generate summary</Button><Button variant="ghost" size="sm"><Flag className="size-3" />Flag moment</Button></div>}
        </aside>
      </main>
    </div>
  );
}
