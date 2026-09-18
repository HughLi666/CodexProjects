import { stats } from "./data";
import { Icon } from "./Icon";

export function StatsCards() {
  return (
    <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Project statistics">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
          <div className="flex items-start justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.tone}`}><Icon name={stat.icon} size={19} /></span><button className="text-slate-300 hover:text-slate-500" aria-label={`More options for ${stat.label}`}><Icon name="more" /></button></div>
          <p className="mt-5 text-sm text-slate-500">{stat.label}</p>
          <div className="mt-1 flex items-end gap-3"><p className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p><span className="mb-1 text-xs font-medium text-slate-400">{stat.detail}</span></div>
        </div>
      ))}
    </section>
  );
}
