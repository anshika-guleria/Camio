"use client";

import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type EditableProfile = {
  name: string;
  email: string;
  role: string;
  focus: string;
  timezone: string;
};

export function ProfileEditor({ initialProfile }: { initialProfile: EditableProfile }) {
  const [profile, setProfile] = useLocalStorage(`camio-profile-${initialProfile.email}`, initialProfile);
  const [draft, setDraft] = useState(profile);
  const [editing, setEditing] = useState(false);

  const update = (key: keyof EditableProfile, value: string) => setDraft((current) => ({ ...current, [key]: value }));

  if (!editing) {
    return <Button variant="outline" size="sm" onClick={() => setEditing(true)}><Pencil className="size-3.5" />Edit profile</Button>;
  }

  return (
    <div className="w-full rounded-2xl border border-primary/25 bg-primary/[0.05] p-4">
      <div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-semibold">Edit profile</p><p className="text-xs text-muted-foreground">Changes are saved locally for this demo.</p></div><Button variant="ghost" size="icon" onClick={() => { setDraft(profile); setEditing(false); }} aria-label="Cancel editing"><X className="size-4" /></Button></div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5"><Label htmlFor="profile-name">Name</Label><Input id="profile-name" value={draft.name} onChange={(event) => update("name", event.target.value)} /></div>
        <div className="space-y-1.5"><Label htmlFor="profile-email">Email</Label><Input id="profile-email" type="email" value={draft.email} onChange={(event) => update("email", event.target.value)} /></div>
        <div className="space-y-1.5"><Label htmlFor="profile-role">Role</Label><Input id="profile-role" value={draft.role} onChange={(event) => update("role", event.target.value)} /></div>
        <div className="space-y-1.5"><Label htmlFor="profile-focus">Focus</Label><Input id="profile-focus" value={draft.focus} onChange={(event) => update("focus", event.target.value)} /></div>
        <div className="space-y-1.5 sm:col-span-2"><Label htmlFor="profile-timezone">Timezone</Label><Input id="profile-timezone" value={draft.timezone} onChange={(event) => update("timezone", event.target.value)} /></div>
      </div>
      <Button className="mt-4" size="sm" onClick={() => { setProfile(draft); setEditing(false); }}><Check className="size-3.5" />Save changes</Button>
    </div>
  );
}
