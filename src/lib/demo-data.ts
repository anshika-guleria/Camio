export type InterviewStatus = "Live" | "Scheduled" | "Ended";

export const demoInterviews = [
  {
    id: "frontend-maya",
    title: "Frontend loop",
    candidate: "Maya Chen",
    role: "Senior Frontend Engineer",
    when: "Today, 2:00 PM",
    status: "Scheduled" as const,
    duration: "45 min",
    template: "React performance",
  },
  {
    id: "backend-arjun",
    title: "Backend loop",
    candidate: "Arjun Rao",
    role: "Backend Engineer",
    when: "Live now",
    status: "Live" as const,
    duration: "52 min",
    template: "API design",
  },
  {
    id: "platform-sofia",
    title: "Platform architecture",
    candidate: "Sofia Kim",
    role: "Staff Engineer",
    when: "Yesterday, 11:30 AM",
    status: "Ended" as const,
    duration: "58 min",
    template: "Event-driven systems",
  },
] satisfies ReadonlyArray<{
  id: string;
  title: string;
  candidate: string;
  role: string;
  when: string;
  status: InterviewStatus;
  duration: string;
  template: string;
}>;

export const demoTemplates = [
  { name: "Two-sum warmup", type: "Coding", detail: "JavaScript · 20 min", uses: 18 },
  { name: "React performance", type: "Coding", detail: "React · 35 min", uses: 12 },
  { name: "System design: inbox", type: "Whiteboard", detail: "Architecture · 45 min", uses: 9 },
] as const;

export const demoTeam = [
  { id: "alex-morgan", name: "Alex Morgan", email: "alex@camio.dev", role: "Recruiter", status: "Active", focus: "Hiring operations", interviews: 42, score: "91%", timezone: "America/New_York" },
  { id: "priya-shah", name: "Priya Shah", email: "priya@camio.dev", role: "Interviewer", status: "Active", focus: "Frontend systems", interviews: 28, score: "88%", timezone: "Asia/Kolkata" },
  { id: "noah-williams", name: "Noah Williams", email: "noah@camio.dev", role: "Interviewer", status: "Invited", focus: "Backend architecture", interviews: 0, score: "-", timezone: "America/Los_Angeles" },
] as const;

export const demoRecordings = demoInterviews.filter((interview) => interview.status === "Ended");

export const demoUsers = [
  { name: "Alex Morgan", email: "alex@camio.dev", organization: "Camio", role: "Owner", status: "Active" },
  { name: "Priya Shah", email: "priya@camio.dev", organization: "Camio", role: "Interviewer", status: "Active" },
  { name: "Sofia Kim", email: "sofia@northstar.io", organization: "Northstar", role: "Candidate", status: "Active" },
] as const;

export const demoOrganizations = [
  { name: "Camio", members: 12, rooms: 34, plan: "Team", status: "Healthy" },
  { name: "Northstar Labs", members: 28, rooms: 86, plan: "Organization", status: "Healthy" },
  { name: "Orbit Systems", members: 6, rooms: 11, plan: "Free", status: "Trial" },
] as const;

export const demoPlans = [
  { name: "Free", price: "$0", subscribers: 18, detail: "For trying Camio" },
  { name: "Team", price: "$24", subscribers: 7, detail: "For growing hiring teams" },
  { name: "Organization", price: "Custom", subscribers: 3, detail: "For high-volume hiring" },
] as const;
