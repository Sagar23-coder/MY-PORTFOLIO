import { Brain, Code2, Database, Layers } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

const icons = { brain: Brain, code: Code2, layers: Layers, database: Database } as const;

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          label="Skills"
          title="Tools I work with."
          description="Grouped by how I use them — from AI and machine learning to web, mobile and deployment."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <Reveal key={g.title} delay={i * 70}>
                <div className="surface-card h-full p-6 transition-colors hover:border-border-strong">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-accent text-primary">
                      <Icon className="size-[1.1rem]" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
