import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@/components/PageSection";
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit,
  SiDocker, SiTensorflow, SiOpenai, SiLinux,
} from "react-icons/si";
import { FiCode, FiCpu, FiDatabase, FiLayers, FiServer, FiTool, FiZap } from "react-icons/fi";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rohan Chittora" },
      { name: "description", content: "About Rohan Chittora — CS student, AI engineer, and software developer. Journey, skills, and what I'm currently learning." },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2026", title: "Building AI-powered Products", body: "Crafting LeetSyncGit and Travel N Track — focused on real user value." },
  { year: "2025", title: "Deep Dive into DSA & System Design", body: "Crossed 500+ problems across LeetCode and GFG. Strong fundamentals." },
  { year: "2024", title: "Full-Stack Engineering", body: "Shipping production-grade React + Node apps with clean architecture." },
  { year: "2023", title: "Started CS Journey", body: "Discovered programming, fell in love with building things from scratch." },
];

const SKILL_GROUPS = [
  { Icon: FiCode, title: "Languages", items: [
    { Icon: SiCplusplus, name: "C++" }, { Icon: SiPython, name: "Python" },
    { Icon: SiJavascript, name: "JavaScript" }, { Icon: SiTypescript, name: "TypeScript" }] },
  { Icon: FiLayers, title: "Frontend", items: [
    { Icon: SiReact, name: "React" }, { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "Tailwind" }] },
  { Icon: FiServer, title: "Backend", items: [
    { Icon: SiNodedotjs, name: "Node.js" }, { Icon: SiExpress, name: "Express" }] },
  { Icon: FiDatabase, title: "Databases", items: [
    { Icon: SiMongodb, name: "MongoDB" }, { Icon: SiPostgresql, name: "PostgreSQL" }] },
  { Icon: FiCpu, title: "AI / ML", items: [
    { Icon: SiTensorflow, name: "TensorFlow" }, { Icon: SiOpenai, name: "OpenAI APIs" }] },
  { Icon: FiTool, title: "Dev Tools", items: [
    { Icon: SiGit, name: "Git" }, { Icon: SiDocker, name: "Docker" }, { Icon: SiLinux, name: "Linux" }] },
  { Icon: FiZap, title: "CS Fundamentals", items: [
    { Icon: FiCode, name: "DSA" }, { Icon: FiCode, name: "OOP" }, { Icon: FiCode, name: "OS" }, { Icon: FiCode, name: "DBMS" }] },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <PageSection>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-display font-semibold tracking-tight">
          Engineer by craft. <span className="text-gradient">Builder by heart.</span>
        </h1>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass rounded-2xl p-7 leading-relaxed text-[15px] text-muted-foreground">
            <p>
              I'm Rohan Chittora — a Computer Science student passionate about building
              intelligent, useful software. My focus sits at the intersection of
              <span className="text-foreground font-medium"> AI engineering</span>,
              <span className="text-foreground font-medium"> full-stack development</span>, and
              <span className="text-foreground font-medium"> rigorous problem solving</span>.
            </p>
            <p className="mt-4">
              I care deeply about craft: clean architecture, thoughtful UX, and
              code that scales gracefully. Whether it's automating developer
              workflows or shipping production web apps, I aim to build things
              people actually want to use.
            </p>
          </div>
          <div className="glass rounded-2xl p-7">
            <h3 className="font-display text-lg font-semibold">Currently learning</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Advanced System Design</li>
              <li>• LLM application engineering</li>
              <li>• Distributed systems fundamentals</li>
              <li>• Production-grade DevOps</li>
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection delay={0.1} className="mt-20">
        <h2 className="text-3xl font-display font-semibold tracking-tight">Why hire me</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            { t: "Strong fundamentals", d: "DSA, OS, DBMS, OOP — depth, not just exposure." },
            { t: "Ship-oriented mindset", d: "I value working software over perfect plans. Iterate fast, learn faster." },
            { t: "Calm under complexity", d: "Comfortable in ambiguity. I break problems down and build clean abstractions." },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6 hover-glow">
              <h3 className="font-display text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection delay={0.15} className="mt-20">
        <h2 className="text-3xl font-display font-semibold tracking-tight">Journey</h2>
        <div className="mt-8 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-3)]" />
          <div className="space-y-6">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="pl-10 relative"
              >
                <div className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-gradient-brand ring-4 ring-background" />
                <div className="glass rounded-2xl p-5 hover-glow">
                  <div className="text-xs font-mono text-muted-foreground">{t.year}</div>
                  <div className="mt-1 font-display font-semibold">{t.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection delay={0.2} className="mt-20">
        <h2 className="text-3xl font-display font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover-glow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand text-white">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map(({ Icon: I, name }) => (
                  <span key={name} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-border bg-background/40">
                    <I size={13} /> {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
