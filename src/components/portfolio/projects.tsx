import { useState } from "react";
import { ArrowUpRight, Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  filterProjects,
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./brand-icons";
import { ProjectVisual } from "./project-visual";
import { Reveal, SectionHeading } from "./reveal";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const list = filterProjects(projects, filter);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          label="Projects"
          title="Things I've built."
          description="From retrieval-augmented generation and machine learning models to cross-platform mobile and desktop applications."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <Button
              key={f}
              variant="chip"
              size="sm"
              data-active={filter === f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="surface-card p-10 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                wide={i === 0 && !!p.featured && list.length > 2}
                onOpen={() => setSelected(p)}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-border-strong bg-popover p-0 sm:rounded-2xl">
          {selected && <ProjectDetails project={selected} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProjectCard({
  project,
  wide,
  onOpen,
}: {
  project: Project;
  wide: boolean;
  onOpen: () => void;
}) {
  return (
    <Reveal className={cn(wide && "md:col-span-2")}>
      <article className="surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
        <ProjectVisual type={project.visual} className={wide ? "h-52" : "h-44"} />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 font-mono text-[0.68rem] text-primary">
                <Star className="size-3" /> Featured
              </span>
            )}
            {project.categories.map((c) => (
              <span key={c} className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                {c}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, wide ? 6 : 4).map((s) => (
              <li
                key={s}
                className="rounded border border-border bg-background/50 px-2 py-0.5 font-mono text-[0.7rem] text-foreground/80"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            <Button size="sm" variant="outline" onClick={onOpen}>
              View Details
            </Button>
            <SourceLink project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SourceLink({ project }: { project: Project }) {
  if (project.repo) {
    return (
      <Button size="sm" variant="ghost" asChild>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <GithubIcon /> Source Code
        </a>
      </Button>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2 text-xs text-muted-foreground">
      <Lock className="size-3.5" /> {project.sourceNote}
    </span>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div>
      <ProjectVisual type={project.visual} className="h-48 rounded-t-2xl" />
      <div className="space-y-6 p-6 sm:p-8">
        <div>
          <p className="eyebrow mb-2">{project.categories.join(" • ")}</p>
          <DialogTitle className="font-display text-2xl font-semibold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="mt-2 text-base text-muted-foreground">
            {project.tagline}
          </DialogDescription>
        </div>

        <DetailBlock label="The problem">{project.problem}</DetailBlock>
        <DetailBlock label="What I built">{project.built}</DetailBlock>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Implementation
          </h4>
          <ul className="space-y-2.5">
            {project.details.map((d) => (
              <li key={d} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Tech stack
          </h4>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
          {project.repo ? (
            <Button asChild>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> View Source on GitHub <ArrowUpRight />
              </a>
            </Button>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="size-4" /> {project.sourceNote}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}
