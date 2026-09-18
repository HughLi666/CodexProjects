import { Icon } from "./Icon";

export function RiskOverview() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
      <div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-semibold text-slate-950">Risk overview</h2><p className="mt-1 text-sm text-slate-500">Items that may need your attention</p></div><a href="#" className="text-sm font-semibold text-violet-600 hover:text-violet-700">See all risks</a></div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="flex items-start gap-3 rounded-xl bg-amber-50/70 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600"><Icon name="alert" size={16} /></span><div><p className="text-sm font-semibold text-slate-800">Website Redesign is behind</p><p className="mt-1 text-xs leading-5 text-slate-500">Design review is 4 days overdue.</p></div><span className="ml-auto mt-1 h-2 w-2 rounded-full bg-amber-500" /></div>
        <div className="flex items-start gap-3 rounded-xl bg-blue-50/70 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600"><Icon name="clock" size={16} /></span><div><p className="text-sm font-semibold text-slate-800">3 tasks due this week</p><p className="mt-1 text-xs leading-5 text-slate-500">Across 2 active projects.</p></div><span className="ml-auto mt-1 h-2 w-2 rounded-full bg-blue-500" /></div>
        <div className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><Icon name="check" size={16} /></span><div><p className="text-sm font-semibold text-slate-800">Sprint milestone reached</p><p className="mt-1 text-xs leading-5 text-slate-500">AI Research Hub is ahead of schedule.</p></div><span className="ml-auto mt-1 h-2 w-2 rounded-full bg-emerald-500" /></div>
      </div>
    </section>
  );
}
