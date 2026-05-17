import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@/components/PageSection";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rohan Chittora" },
      { name: "description", content: "Selected engineering projects: LeetSyncGit, Travel N Track, and more." },
    ],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "LeetSyncGit",
    tagline: "Automated LeetCode → GitHub sync",
    description:
      "A developer tool that automatically syncs LeetCode submissions to a GitHub repository with structured commits, language-aware folder organization, and metadata tracking — turning daily problem solving into a public, persistent portfolio.",
    tech: ["Node.js", "TypeScript", "GitHub API", "Chrome Ext"],
    github: "https://github.com/",
    live: "#",
    accent: "from-[var(--brand)] to-[var(--brand-2)]",
  },
  {
    title: "Travel N Track",
    tagline: "Location-based travel companion",
    description:
      "A geolocation-powered web app with secure authentication, leaderboards, and trip tracking. Built on a Node.js + MongoDB backend with the Geolocation API, designed for community-driven travel logging.",
    tech: ["React", "Node.js", "MongoDB", "Geolocation API"],
    github: "https://github.com/",
    live: "#",
    accent: "from-[var(--brand-2)] to-[var(--brand-3)]",
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <PageSection>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-display font-semibold tracking-tight">
          Things I've <span className="text-gradient">shipped</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A curated selection of work — focused on real problems, clean engineering,
          and meaningful user value.
        </p>
      </PageSection>

      <div className="mt-12 grid gap-8">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group glass-strong rounded-3xl overflow-hidden hover-glow"
          >
            <div className="grid lg:grid-cols-5">
              <div className={`lg:col-span-2 relative min-h-[220px] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-white/95 font-display text-3xl sm:text-4xl font-semibold tracking-tight px-6 text-center drop-shadow">
                    {p.title}
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/15 blur-2xl group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="lg:col-span-3 p-7 sm:p-9">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.tagline}
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-display font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-border bg-background/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={"https://github.com/Rohan-Chittora1/LeetSyncGit"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium hover:border-foreground/20"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient-pan px-4 py-2 text-sm font-medium text-white"
                  >
                    <FiExternalLink /> Live demo
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <PageSection delay={0.2} className="mt-16">
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="font-display text-xl font-semibold">More on the way.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            New projects shipped continuously. Follow along on GitHub.
          </p>
        </div>
      </PageSection>
    </div>
  );
}
