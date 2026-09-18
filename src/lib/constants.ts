export const ACCENTS = [
  { id: "blue", label: "Blue", hex: "#3b82f6" },
  { id: "purple", label: "Purple", hex: "#8b5cf6" },
  { id: "pink", label: "Pink", hex: "#ec4899" },
  { id: "red", label: "Red", hex: "#ef4444" },
  { id: "orange", label: "Orange", hex: "#f97316" },
  { id: "yellow", label: "Yellow", hex: "#eab308" },
  { id: "green", label: "Green", hex: "#22c55e" },
  { id: "teal", label: "Teal", hex: "#14b8a6" },
  { id: "cyan", label: "Cyan", hex: "#06b6d4" },
  { id: "indigo", label: "Indigo", hex: "#6366f1" },
] as const;

export type AccentId = (typeof ACCENTS)[number]["id"];

export const DEFAULT_ACCENT: AccentId = "blue";
export const ACCENT_STORAGE_KEY = "camio-accent";

export const LANDING_NAV = [
  { href: "#features", label: "Features" },
  { href: "#preview", label: "Interactive Demo" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs & FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const QUICK_PREVIEW_LINKS = [
  { href: "/dashboard", label: "Recruiter Dashboard", desc: "Overview, rooms & candidates", icon: "LayoutDashboard" },
  { href: "/candidate/demo-room", label: "Candidate Interview Room", desc: "Live code, video & whiteboard", icon: "UserCheck" },
  { href: "/interview/demo-room", label: "Interviewer Workspace", desc: "Notes, control panel & evaluation", icon: "Video" },
  { href: "/admin", label: "Admin Console", desc: "User & organization management", icon: "Shield" },
] as const;

export const DASHBOARD_NAV = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/interviews", label: "My Interview Rooms" },
  { href: "/dashboard/scheduled", label: "Scheduled Interviews" },
  { href: "/dashboard/recordings", label: "Recordings" },
  { href: "/dashboard/templates", label: "Templates" },
  { href: "/dashboard/team", label: "Team Members" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/settings", label: "Settings" },
] as const;

export const ADMIN_NAV = [
  { href: "/admin", label: "Analytics" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/organizations", label: "Organizations" },
  { href: "/admin/plans", label: "Plans" },
] as const;
