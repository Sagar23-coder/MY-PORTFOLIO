import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Certifications & achievements."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={i * 60} className="h-full">
                <div className="surface-card flex h-full gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-raised text-primary">
                    <BadgeCheck className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
                      {c.issuer}
                    </p>
                    <h3 className="mt-1 text-[0.95rem] font-medium leading-snug text-foreground">
                      {c.name}
                    </h3>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
