import { Header } from "./components/Header";
import { ProjectProgress } from "./components/ProjectProgress";
import { RecentProjects } from "./components/RecentProjects";
import { RiskOverview } from "./components/RiskOverview";
import { StatsCards } from "./components/StatsCards";
import { WelcomeSection } from "./components/WelcomeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <Header />
      <main className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
        <WelcomeSection />
        <StatsCards />
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <RecentProjects />
          <ProjectProgress />
        </div>
        <RiskOverview />
      </main>
    </div>
  );
}
