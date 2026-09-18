type IconName =
  | "grid"
  | "folder"
  | "calendar"
  | "settings"
  | "search"
  | "bell"
  | "arrow"
  | "plus"
  | "check"
  | "clock"
  | "alert"
  | "more";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    folder: <><path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h4l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z" /><path d="M3.5 9h17" /></>,
    calendar: <><rect x="3" y="4.5" width="18" height="17" rx="2" /><path d="M16 2.5v4M8 2.5v4M3 9.5h18" /></>,
    settings: <><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.3a2 2 0 1 1-4 0v-.2A2 2 0 0 0 5.8 18l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 1.6 12a2 2 0 1 1 0-4h.2a2 2 0 0 0 1.4-3.4l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A2 2 0 0 0 9.4.4h.2a2 2 0 1 1 4 0v.2A2 2 0 0 0 17 2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 21.2 8h.2a2 2 0 1 1 0 4h-.2a2 2 0 0 0-1.8 3Z" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 22h4" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    alert: <><path d="m12 3 9 17H3L12 3Z" /><path d="M12 9v4M12 16h.01" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const projects = [
  { name: "AI Research Hub", description: "Knowledge workspace for the research team", color: "bg-violet-500", progress: 76, due: "Due Oct 24", status: "On track" },
  { name: "Customer Insights", description: "Turn feedback into product direction", color: "bg-cyan-500", progress: 54, due: "Due Nov 02", status: "On track" },
  { name: "Website Redesign", description: "A clearer, faster marketing experience", color: "bg-amber-500", progress: 32, due: "Due Nov 18", status: "At risk" },
];

const navigation = [
  { label: "Overview", icon: "grid" as const, active: true },
  { label: "Projects", icon: "folder" as const },
  { label: "Calendar", icon: "calendar" as const },
];

function ProgressBar({ value, color = "bg-violet-500" }: { value: number; color?: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function StatusPill({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "amber" | "blue" }) {
  const tones = {
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700",
  };
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2.5" aria-label="AI Project Manager home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">P</span>
              <span className="text-[15px] font-semibold tracking-tight">AI Project Manager</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              {navigation.map((item) => (
                <a key={item.label} href="#" className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm transition ${item.active ? "bg-slate-100 font-semibold text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden text-slate-400 transition hover:text-slate-700 sm:block" aria-label="Search"><Icon name="search" /></button>
            <button className="relative text-slate-400 transition hover:text-slate-700" aria-label="Notifications"><Icon name="bell" /><span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-white bg-violet-500" /></button>
            <div className="h-8 w-px bg-slate-200" />
            <button className="flex items-center gap-2" aria-label="Open profile menu">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">LS</span>
              <span className="hidden text-left sm:block"><span className="block text-sm font-semibold">HughLi Stone</span><span className="block text-xs text-slate-400">Product lead</span></span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-violet-600">Wednesday, October 16, 2024</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Good morning, HughLi <span aria-hidden="true">👋</span></h1>
            <p className="mt-2 text-[15px] text-slate-500">Here&apos;s what&apos;s happening across your workspace today.</p>
          </div>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"><Icon name="plus" size={17} /> New project</button>
        </section>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Project statistics">
          {[
            { label: "Total projects", value: "12", detail: "+2 this month", icon: "folder" as const, tone: "bg-violet-50 text-violet-600" },
            { label: "In progress", value: "07", detail: "58% of all projects", icon: "clock" as const, tone: "bg-blue-50 text-blue-600" },
            { label: "Completed", value: "04", detail: "+1 this week", icon: "check" as const, tone: "bg-emerald-50 text-emerald-600" },
            { label: "At risk", value: "01", detail: "Needs your attention", icon: "alert" as const, tone: "bg-amber-50 text-amber-600" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
              <div className="flex items-start justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.tone}`}><Icon name={stat.icon} size={19} /></span><button className="text-slate-300 hover:text-slate-500" aria-label={`More options for ${stat.label}`}><Icon name="more" /></button></div>
              <p className="mt-5 text-sm text-slate-500">{stat.label}</p>
              <div className="mt-1 flex items-end gap-3"><p className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p><span className="mb-1 text-xs font-medium text-slate-400">{stat.detail}</span></div>
            </div>
          ))}
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
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

          <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
            <div className="mb-6 flex items-start justify-between"><div><h2 className="text-lg font-semibold text-slate-950">Project progress</h2><p className="mt-1 text-sm text-slate-500">Overall delivery health</p></div><span className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">This quarter</span></div>
            <div className="flex items-center gap-7"><div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full" style={{ background: "conic-gradient(#8b5cf6 0deg 259deg, #e2e8f0 259deg 360deg)" }}><div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white"><span className="text-3xl font-semibold tracking-tight text-slate-950">72%</span><span className="text-xs text-slate-400">complete</span></div></div><div className="flex-1 space-y-4"><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-violet-500" />Completed</span><span className="font-semibold text-slate-800">8</span></div><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-blue-400" />In progress</span><span className="font-semibold text-slate-800">7</span></div><div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-slate-200" />Not started</span><span className="font-semibold text-slate-800">3</span></div></div></div>
            <div className="mt-7 border-t border-slate-100 pt-5"><div className="flex items-center justify-between text-sm"><span className="text-slate-500">On-time delivery rate</span><span className="font-semibold text-emerald-600">94.2%</span></div><div className="mt-3"><ProgressBar value={94} color="bg-emerald-500" /></div></div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
          <div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-semibold text-slate-950">Risk overview</h2><p className="mt-1 text-sm text-slate-500">Items that may need your attention</p></div><a href="#" className="text-sm font-semibold text-violet-600 hover:text-violet-700">See all risks</a></div>
          <div className="grid gap-3 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl bg-amber-50/70 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600"><Icon name="alert" size={16} /></span><div><p className="text-sm font-semibold text-slate-800">Website Redesign is behind</p><p className="mt-1 text-xs leading-5 text-slate-500">Design review is 4 days overdue.</p></div><span className="ml-auto mt-1 h-2 w-2 rounded-full bg-amber-500" /></div>
            <div className="flex items-start gap-3 rounded-xl bg-blue-50/70 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600"><Icon name="clock" size={16} /></span><div><p className="text-sm font-semibold text-slate-800">3 tasks due this week</p><p className="mt-1 text-xs leading-5 text-slate-500">Across 2 active projects.</p></div><span className="ml-auto mt-1 h-2 w-2 rounded-full bg-blue-500" /></div>
            <div className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><Icon name="check" size={16} /></span><div><p className="text-sm font-semibold text-slate-800">Sprint milestone reached</p><p className="mt-1 text-xs leading-5 text-slate-500">AI Research Hub is ahead of schedule.</p></div><span className="ml-auto mt-1 h-2 w-2 rounded-full bg-emerald-500" /></div>
          </div>
        </section>
      </main>
    </div>
  );
}

