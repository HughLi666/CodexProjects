import { projects } from "./data";
import { Icon } from "./Icon";
import { ProgressBar } from "./ProgressBar";
import { StatusPill } from "./StatusPill";

export function RecentProjects() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
      <div className="mb-6 flex items-center justify-between"><div><h2 className="text-lg font-semibold text-slate-950">Recent projects</h2><p className="mt-1 text-sm text-slate-500">Your team&apos;s latest work at a glance</p></div><a href="#" className="flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700">View all <Icon name="arrow" size={15} /></a></div>
      <div className="divide-y divide-slate-100">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col gap-4 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3"><span className={`h-3 w-3 shrink-0 rounded-full ${project.color}`} /><div className="min-w-0"><h3 className="truncate text-sm font-semibold text-slate-900">{project.name}</h3><p className="mt-1 truncate text-xs text-slate-400">{project.description}</p></div></div>
            <div className="flex items-center gap-8 sm:min-w-[340px] sm:justify-end"><div className="w-full sm:w-40"><div className="mb-2 flex justify-between text-xs"><span className="font-medium text-slate-500">Progress</span><span className="font-semibold text-slate-700">{project.progress}%</span></div><ProgressBar value={project.progress} color={project.color} /></div><div className="hidden w-24 text-right text-xs text-slate-400 sm:block">{project.due}</div><StatusPill tone={project.status === "At risk" ? "amber" : "green"}>{project.status === "At risk" ? <Icon name="alert" size={12} /> : <Icon name="check" size={12} />}{project.status}</StatusPill></div>
          </article>
        ))}
      </div>
    </section>
  );
}
