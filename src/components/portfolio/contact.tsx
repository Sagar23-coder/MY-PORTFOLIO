import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/data/portfolio";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { Reveal } from "./reveal";

type Errors = Partial<Record<keyof ContactInput, string>>;
const empty: ContactInput = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState("");

  const update = (key: keyof ContactInput) => (v: string) => {
    setValues((s) => ({ ...s, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot filled the hidden field
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof ContactInput;
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    try {
      window.location.href = buildMailto(profile.email, parsed.data);
      toast.success("Your email app is opening with the message ready to send.", {
        description: `If nothing opens, email me directly at ${profile.email}.`,
      });
      setValues(empty);
    } catch {
      toast.error(`Couldn't open your email app. Please write to ${profile.email}.`);
    }
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
    { label: "LinkedIn", value: "sagar-joshi-775b15343", href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: GithubIcon, external: true },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 rotate-180" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="text-muted-foreground">06 /</span> Contact
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Have a project or internship opportunity in mind?
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              I'm interested in connecting with teams working on applied AI/ML, LLM-powered
              products and full-stack development.
            </p>

            <ul className="mt-10 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-primary/40 hover:bg-surface-raised"
                  >
                    <span className="grid size-10 place-items-center rounded-lg bg-accent text-primary">
                      <l.icon className="size-[1.1rem]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                        {l.label}
                      </span>
                      <span className="block truncate text-sm text-foreground">{l.value}</span>
                    </span>
                    <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="surface-card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <Input
                    id="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name")(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass(!!errors.name)}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email")(e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass(!!errors.email)}
                  />
                </Field>
              </div>
              <Field id="subject" label="Subject" error={errors.subject}>
                <Input
                  id="subject"
                  value={values.subject}
                  onChange={(e) => update("subject")(e.target.value)}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={fieldClass(!!errors.subject)}
                />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <Textarea
                  id="message"
                  rows={6}
                  value={values.message}
                  onChange={(e) => update("message")(e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(fieldClass(!!errors.message), "h-auto resize-y py-3")}
                />
              </Field>

              {/* Honeypot: hidden from people, often filled by bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  Sending opens your email app with this message pre-filled.
                </p>
                <Button type="submit" size="lg">
                  <Send /> Send Message
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function fieldClass(invalid: boolean) {
  return cn(
    "h-11 border-border-strong bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring",
    invalid && "border-destructive",
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-foreground/90">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
