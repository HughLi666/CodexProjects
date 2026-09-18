import type { ReactNode } from "react";

type StatusTone = "green" | "amber" | "blue";

export function StatusPill({ children, tone = "green" }: { children: ReactNode; tone?: StatusTone }) {
  const tones: Record<StatusTone, string> = {
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700",
  };

  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
