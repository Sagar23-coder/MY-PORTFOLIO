import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectVisual({ type, className }: { type: Project["visual"]; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border-b border-border bg-background/60",
        className,
      )}
      aria-hidden="true"
    >
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="bg-hero absolute inset-0" />
      <div className="relative">{visuals[type]}</div>
    </div>
  );
}

const chip =
  "rounded-md border border-border-strong bg-surface-raised px-2.5 py-1.5 font-mono text-[0.68rem] text-foreground";

const visuals: Record<Project["visual"], React.ReactNode> = {
  rag: (
    <div className="flex items-center gap-2">
      {["query", "retrieve", "vector db", "llm"].map((s, i, arr) => (
        <div key={s} className="flex items-center gap-2">
          <span className={cn(chip, i === arr.length - 1 && "border-primary/60 text-primary")}>
            {s}
          </span>
          {i < arr.length - 1 && <span className="flow-line h-px w-5" />}
        </div>
      ))}
    </div>
  ),
  mobile: (
    <div className="flex items-end gap-4">
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "w-20 rounded-[1.1rem] border border-border-strong bg-surface-raised p-2",
            i === 1 ? "h-36" : "h-32 opacity-70",
          )}
        >
          <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-border-strong" />
          <div className="mb-2 h-10 rounded-md bg-accent" />
          <div className="mb-1.5 h-1.5 w-3/4 rounded bg-border-strong" />
          <div className="mb-3 h-1.5 w-1/2 rounded bg-border-strong" />
          <div className="h-1.5 overflow-hidden rounded bg-border">
            <div className="h-full w-2/3 bg-primary" />
          </div>
        </div>
      ))}
    </div>
  ),
  quiz: (
    <div className="w-52 rounded-lg border border-border-strong bg-surface-raised p-3">
      <div className="mb-3 flex gap-1">
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
      </div>
      <div className="mb-3 h-1.5 w-4/5 rounded bg-foreground/40" />
      {[false, true, false].map((on, i) => (
        <div
          key={i}
          className={cn(
            "mb-1.5 flex items-center gap-2 rounded border px-2 py-1.5",
            on ? "border-primary/60 bg-accent" : "border-border",
          )}
        >
          <span
            className={cn("size-2 rounded-full border", on ? "border-primary bg-primary" : "border-border-strong")}
          />
          <span className="h-1 w-20 rounded bg-border-strong" />
        </div>
      ))}
    </div>
  ),
  regression: (
    <svg viewBox="0 0 200 110" className="h-28 w-52 text-primary">
      <line x1="10" y1="100" x2="195" y2="100" className="stroke-border-strong" strokeWidth="1" />
      <line x1="10" y1="100" x2="10" y2="5" className="stroke-border-strong" strokeWidth="1" />
      {[
        [25, 88],
        [40, 80],
        [55, 82],
        [70, 66],
        [85, 70],
        [100, 56],
        [115, 52],
        [130, 44],
        [145, 40],
        [160, 30],
        [178, 22],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" className="fill-muted-foreground/70" />
      ))}
      <line x1="18" y1="92" x2="190" y2="16" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 200 110" className="h-28 w-52 text-primary">
      <g className="stroke-border-strong" strokeWidth="1.2">
        <line x1="100" y1="18" x2="55" y2="55" />
        <line x1="100" y1="18" x2="145" y2="55" />
        <line x1="55" y1="55" x2="30" y2="92" />
        <line x1="55" y1="55" x2="80" y2="92" />
        <line x1="145" y1="55" x2="120" y2="92" />
        <line x1="145" y1="55" x2="170" y2="92" />
      </g>
      <rect x="82" y="8" width="36" height="20" rx="5" fill="currentColor" />
      {[
        [37, 45],
        [127, 45],
      ].map(([x, y]) => (
        <rect key={x} x={x} y={y} width="36" height="20" rx="5" className="fill-surface-raised stroke-primary" />
      ))}
      {[12, 62, 102, 152].map((x) => (
        <rect key={x} x={x} y="84" width="36" height="16" rx="4" className="fill-surface-raised stroke-border-strong" />
      ))}
    </svg>
  ),
};
