import { Icon } from "./Icon";

export function WelcomeSection() {
  return (
    <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="mb-2 text-sm font-medium text-violet-600">Wednesday, October 16, 2024</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Good morning, Lena <span aria-hidden="true">👋</span></h1>
        <p className="mt-2 text-[15px] text-slate-500">Here&apos;s what&apos;s happening across your workspace today.</p>
      </div>
      <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"><Icon name="plus" size={17} /> New project</button>
    </section>
  );
}
