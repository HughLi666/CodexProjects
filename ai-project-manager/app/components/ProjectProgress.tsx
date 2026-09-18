import { ProgressBar } from "./ProgressBar";

export function ProjectProgress() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
      <div className="mb-6 flex items-start justify-between"><div><h2 className="text-lg font-semibold text-slate-950">Project progress</h2><p className="mt-1 text-sm text-slate-500">Overall delivery health</p></div><span className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">This quarter</span></div>
      <div className="flex items-center gap-7"><div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full" style={{ background: "conic-gradient(#8b5cf6 0deg 259deg, #e2e8f0 259deg 360deg)" }}><div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white"><span className="text-3xl font-semibold tracking-tight text-slate-950">72%</span><span className="text-xs text-slate-400">complete</span></div></div><div className="flex-1 space-y-4"><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-violet-500" />Completed</span><span className="font-semibold text-slate-800">8</span></div><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-blue-400" />In progress</span><span className="font-semibold text-slate-800">7</span></div><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-slate-200" />Not started</span><span className="font-semibold text-slate-800">3</span></div></div></div>
      <div className="mt-7 border-t border-slate-100 pt-5"><div className="flex items-center justify-between text-sm"><span className="text-slate-500">On-time delivery rate</span><span className="font-semibold text-emerald-600">94.2%</span></div><div className="mt-3"><ProgressBar value={94} color="bg-emerald-500" /></div></div>
    </section>
  );
}
