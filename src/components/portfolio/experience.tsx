import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked."
          description="Hands-on industry experience building and shipping full-stack web and mobile applications."
        />

        <ol className="relative space-y-8 border-l border-border pl-8 sm:pl-10">
          {experience.map((job) => (
            <li key={job.company + job.role} className="relative">
              <span
                className="absolute -left-[2.55rem] top-1.5 grid size-5 place-items-center rounded-full border border-primary/50 bg-background sm:-left-[3.05rem]"
                aria-hidden="true"
              >
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <Reveal>
                <article className="surface-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5 text-primary">
                          <Briefcase className="size-3.5" /> {job.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" /> {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="rounded-full border border-border bg-surface-raised px-3 py-1 font-mono text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
