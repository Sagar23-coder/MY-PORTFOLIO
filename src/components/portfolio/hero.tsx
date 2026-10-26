import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-hero pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="pulse-dot size-2 rounded-full bg-success" aria-hidden="true" />
            {profile.availability}
          </div>

          <p className="eyebrow mb-5">AI & ML • RAG & LLMs • Full-Stack Development</p>

          <h1 className="text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
            Hi, I'm <span className="text-gradient">Sagar Joshi.</span>
          </h1>

          <p className="mt-6 max-w-xl font-display text-xl leading-snug text-foreground/90 sm:text-2xl">
            I build AI-powered and full-stack products — from RAG pipelines and ML models to web
            and mobile apps.
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            B.Tech CSE (AI & ML) student working with LLMs, vector databases and machine learning,
            with hands-on experience shipping React Native apps, REST APIs and JWT authentication.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#projects">
                Explore My Work <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.resume} download={profile.resumeFilename}>
                <Download /> Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              aria-label="GitHub profile"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
            >
              Let's Connect <ArrowRight className="size-3.5" />
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" /> Haldwani, India
            </span>
          </div>
        </div>

        <CodePanel />
      </div>
    </section>
  );
}

function CodePanel() {
  const stages = ["Docs", "Embed", "Vector DB", "LLM", "Answer"];
  return (
    <div className="min-w-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 fill-mode-both">
      <div className="surface-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">sagar.profile.py</span>
          <span className="w-10" />
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[0.8rem] leading-7 text-muted-foreground">
          <code>
            <span className="text-primary-glow">class</span>{" "}
            <span className="text-foreground">Developer</span>:{"\n"}
            {"    "}name = <span className="text-success">"Sagar Joshi"</span>
            {"\n"}
            {"    "}degree = <span className="text-success">"B.Tech CSE (AI & ML)"</span>
            {"\n"}
            {"    "}graduating = <span className="text-chart-4">2028</span>
            {"\n"}
            {"    "}focus = [<span className="text-success">"RAG"</span>,{" "}
            <span className="text-success">"LLMs"</span>,{" "}
            <span className="text-success">"Vector DBs"</span>]{"\n"}
            {"    "}builds = [<span className="text-success">"React Native"</span>,{" "}
            <span className="text-success">"Node.js"</span>,{" "}
            <span className="text-success">"PHP"</span>]{"\n"}
            {"    "}open_to = <span className="text-success">"AI / ML internships"</span>
          </code>
        </pre>
        <div className="border-t border-border bg-background/40 px-5 py-4">
          <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            rag_pipeline()
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5">
            {stages.map((s, i) => (
              <div key={s} className="flex min-w-0 flex-1 items-center gap-1 sm:gap-1.5">
                <span className="flex-1 whitespace-nowrap rounded-md border border-border bg-surface-raised px-1 py-1.5 text-center font-mono text-[0.65rem] text-foreground sm:text-[0.7rem]">
                  {s}
                </span>
                {i < stages.length - 1 && (
                  <span className="flow-line hidden h-px w-4 shrink-0 sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
