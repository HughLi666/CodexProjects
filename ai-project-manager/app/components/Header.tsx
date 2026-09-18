import { navigation } from "./data";
import { Icon } from "./Icon";

export function Header() {
  return (
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
            <span className="hidden text-left sm:block"><span className="block text-sm font-semibold">Lena Stone</span><span className="block text-xs text-slate-400">Product lead</span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
