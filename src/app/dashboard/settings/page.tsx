"use client";

import { Bell, Check, Code2, Monitor, ShieldCheck, UserRound } from "lucide-react";

import { Header } from "@/components/dashboard/Header";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Preferences = {
  name: string;
  email: string;
  defaultLanguage: string;
  defaultDuration: string;
  emailUpdates: boolean;
  recordingReminder: boolean;
};

const DEFAULT_PREFERENCES: Preferences = {
  name: "Alex Morgan",
  email: "alex@camio.dev",
  defaultLanguage: "TypeScript",
  defaultDuration: "45 minutes",
  emailUpdates: true,
  recordingReminder: true,
};

function PreferenceToggle({
  label,
  description,
  enabled,
  onChange,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={onChange}
      className="flex w-full items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/30 px-4 py-3 text-left transition hover:border-primary/30 hover:bg-primary/[0.04]"
    >
      <span>
        <span className="block text-sm font-medium">{label}</span>
        <span className="mt-1 block text-xs text-muted-foreground">{description}</span>
      </span>
      <span className={enabled ? "flex h-6 w-11 items-center rounded-full bg-primary p-1" : "flex h-6 w-11 items-center rounded-full bg-muted p-1"}>
        <span className={enabled ? "ml-auto size-4 rounded-full bg-primary-foreground shadow" : "size-4 rounded-full bg-muted-foreground/60 shadow"} />
      </span>
    </button>
  );
}

export default function SettingsPage() {
  const [preferences, setPreferences] = useLocalStorage("camio-preferences", DEFAULT_PREFERENCES);
  const update = <K extends keyof Preferences>(key: K, value: Preferences[K]) => {
    setPreferences({ ...preferences, [key]: value });
  };

  return (
    <>
      <Header title="Settings" />
      <div className="grid gap-6 p-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)] lg:p-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><UserRound className="size-4 text-primary" /> Profile</CardTitle>
              <CardDescription>How your identity appears to candidates and teammates.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="settings-name">Full name</Label>
                <Input id="settings-name" value={preferences.name} onChange={(event) => update("name", event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-email">Work email</Label>
                <Input id="settings-email" type="email" value={preferences.email} onChange={(event) => update("email", event.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Code2 className="size-4 text-primary" /> Interview defaults</CardTitle>
              <CardDescription>Start new rooms with the setup your team uses most.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="settings-language">Code language</Label>
                <select id="settings-language" value={preferences.defaultLanguage} onChange={(event) => update("defaultLanguage", event.target.value)} className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/40">
                  <option>TypeScript</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>Go</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-duration">Room duration</Label>
                <select id="settings-duration" value={preferences.defaultDuration} onChange={(event) => update("defaultDuration", event.target.value)} className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/40">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                  <option>90 minutes</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Bell className="size-4 text-primary" /> Notifications</CardTitle>
              <CardDescription>Choose which workspace activity reaches your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <PreferenceToggle label="Product updates" description="New features, improvements, and workspace tips." enabled={preferences.emailUpdates} onChange={() => update("emailUpdates", !preferences.emailUpdates)} />
              <PreferenceToggle label="Recording reminders" description="Get a reminder when a recording is ready to review." enabled={preferences.recordingReminder} onChange={() => update("recordingReminder", !preferences.recordingReminder)} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Monitor className="size-4 text-primary" /> Appearance</CardTitle>
              <CardDescription>Personalize Camio without changing your workspace data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/30 p-3">
                <div>
                  <p className="text-sm font-medium">Accent color</p>
                  <p className="mt-1 text-xs text-muted-foreground">Applied across navigation, charts, and logo tones.</p>
                </div>
                <ThemeSwitcher />
              </div>
              <Badge variant="outline" className="gap-1 border-primary/30 text-primary"><Check className="size-3" /> Preferences saved locally</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Workspace security</CardTitle>
              <CardDescription>Demo controls for the account surface.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
                <div><p className="text-sm font-medium">Two-factor authentication</p><p className="text-xs text-muted-foreground">Not configured</p></div>
                <Button size="sm" variant="outline">Configure</Button>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
                <div><p className="text-sm font-medium">Active sessions</p><p className="text-xs text-muted-foreground">1 browser session</p></div>
                <Button size="sm" variant="ghost">Review</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
