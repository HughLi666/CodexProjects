import type { NavigationItem, Project, Stat } from "./types";

export const projects: Project[] = [
  { name: "AI Research Hub", description: "Knowledge workspace for the research team", color: "bg-violet-500", progress: 76, due: "Due Oct 24", status: "On track" },
  { name: "Customer Insights", description: "Turn feedback into product direction", color: "bg-cyan-500", progress: 54, due: "Due Nov 02", status: "On track" },
  { name: "Website Redesign", description: "A clearer, faster marketing experience", color: "bg-amber-500", progress: 32, due: "Due Nov 18", status: "At risk" },
];

export const navigation: NavigationItem[] = [
  { label: "Overview", icon: "grid", active: true },
  { label: "Projects", icon: "folder" },
  { label: "Calendar", icon: "calendar" },
];

export const stats: Stat[] = [
  { label: "Total projects", value: "12", detail: "+2 this month", icon: "folder", tone: "bg-violet-50 text-violet-600" },
  { label: "In progress", value: "07", detail: "58% of all projects", icon: "clock", tone: "bg-blue-50 text-blue-600" },
  { label: "Completed", value: "04", detail: "+1 this week", icon: "check", tone: "bg-emerald-50 text-emerald-600" },
  { label: "At risk", value: "01", detail: "Needs your attention", icon: "alert", tone: "bg-amber-50 text-amber-600" },
];
