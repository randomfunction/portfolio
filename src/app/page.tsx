import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { PORTFOLIO } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-emerald-500/30">
      <div className="mx-auto max-w-5xl px-6 pb-24">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <div className="mb-24">
          <Stats />
        </div>

        {/* SDE & ML Projects Section */}
        <section className="mb-24">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white">SDE + ML Engineering</h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          
          <div className="grid gap-6">
            {PORTFOLIO.sdeProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Research Projects Section */}
        <section className="mb-24">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Research Oriented</h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          
          <div className="grid gap-6">
            {PORTFOLIO.researchProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
            <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <Skills />
        </section>

        {/* Education & Footer */}
        <footer className="border-t border-zinc-800 pt-10 text-center md:text-left md:flex md:justify-between">
            <div>
                <h3 className="text-lg font-bold text-white mb-2">Education</h3>
                <p className="text-zinc-400">{PORTFOLIO.education.institution}</p>
                <p className="text-zinc-500 text-sm">{PORTFOLIO.education.degree}</p>
                <p className="text-zinc-500 text-sm font-mono mt-1">CGPA: {PORTFOLIO.education.cgpa}</p>
            </div>
            <div className="mt-8 md:mt-0 md:text-right">
                <p className="text-zinc-600 text-sm">
                    © {new Date().getFullYear()} {PORTFOLIO.personal.name}
                </p>
                <p className="text-zinc-700 text-xs mt-1">
                    Happy you came so far!
                </p>
            </div>
        </footer>
      </div>
    </main>
  );
}
