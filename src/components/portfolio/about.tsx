import { Brain, LineChart, Layers, GraduationCap } from "lucide-react";
import { education, focusAreas, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

const icons = { brain: Brain, chart: LineChart, layers: Layers } as const;

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" label="About" title="Learning by building real software." />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            <p>{profile.summary}</p>
            <p>
              I've built machine learning classifiers, interactive GUI applications, and integrated
              AI backends with modern web and mobile frameworks. During my internship at Ruhanix
              Creations I worked across the stack — React Native and Expo on the client, Node.js,
              Express and PHP on the server, secured with JWT authentication.
            </p>
            <p className="text-foreground">
              I'm currently seeking <span className="text-primary">AI Engineer</span> or{" "}
              <span className="text-primary">ML Intern</span> opportunities.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-accent text-primary">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <p className="eyebrow">Education</p>
                  <p className="text-sm text-muted-foreground">{education.period}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{education.school}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {education.degree}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{education.location}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {focusAreas.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="surface-card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="mb-5 grid size-10 place-items-center rounded-lg border border-border bg-surface-raised text-primary transition-colors group-hover:bg-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
