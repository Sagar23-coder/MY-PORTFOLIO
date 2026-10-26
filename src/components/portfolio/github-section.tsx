import { ArrowUpRight, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { githubRepos, profile } from "@/data/portfolio";
import { GithubIcon } from "./brand-icons";
import { Reveal } from "./reveal";

export function GithubSection() {
  return (
    <section aria-labelledby="github-heading" className="pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="surface-card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-surface-raised text-foreground">
                  <GithubIcon className="size-6" />
                </span>
                <div>
                  <h2 id="github-heading" className="text-xl font-semibold text-foreground">
                    Find me on GitHub
                  </h2>
                  <p className="font-mono text-sm text-muted-foreground">@{profile.githubHandle}</p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  View Profile <ArrowUpRight />
                </a>
              </Button>
            </div>
            <ul className="grid sm:grid-cols-2">
              {githubRepos.map((r) => (
                <li key={r.name} className="border-b border-border sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 last:border-b-0">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-2 p-6 transition-colors hover:bg-surface-raised"
                  >
                    <span className="flex items-center gap-2 font-mono text-sm text-primary">
                      <BookMarked className="size-4 shrink-0" />
                      <span className="truncate">{r.name}</span>
                      <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{r.description}</span>
                    <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="size-2.5 rounded-full bg-chart-4" aria-hidden="true" />
                      {r.language}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
