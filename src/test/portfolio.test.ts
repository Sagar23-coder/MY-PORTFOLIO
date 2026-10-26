import { describe, expect, it } from "vitest";
import { filterProjects, projects } from "@/data/portfolio";
import { buildMailto, contactSchema } from "@/lib/contact";

describe("project filters", () => {
  it("All shows every project", () => {
    expect(filterProjects(projects, "All")).toHaveLength(projects.length);
  });

  it("Mobile only shows the Ruhanix crowdfunding app", () => {
    expect(filterProjects(projects, "Mobile").map((p) => p.slug)).toEqual(["ruhanix-crowdfunding"]);
  });

  it("every GitHub link points at Sagar's account", () => {
    projects
      .filter((p) => p.repo)
      .forEach((p) => expect(p.repo).toMatch(/^https:\/\/github\.com\/Sagar23-coder\//));
  });
});

describe("contact form validation", () => {
  const valid = {
    name: "Asha",
    email: "asha@example.com",
    subject: "Internship",
    message: "Hello Sagar, let's talk.",
  };

  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a message under 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Hi" }).success).toBe(false);
  });

  it("builds a mailto link to Sagar's email", () => {
    expect(buildMailto("sj471846@gmail.com", valid)).toMatch(/^mailto:sj471846@gmail\.com\?subject=Internship/);
  });
});
