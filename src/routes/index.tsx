import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub } from "react-icons/fi";
import { TypingText } from "@/components/TypingText";
import { PageSection } from "@/components/PageSection";
import { SiLeetcode } from "react-icons/si";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohan Chittora — AI Engineer & Software Developer" },
      { name: "description", content: "AI Engineer, Problem Solver, and Software Developer. Explore projects, achievements, and engineering work." },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "500+", label: "DSA Problems Solved" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Years Coding" },
  { value: "∞", label: "Curiosity" },
];

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <PageSection className="relative">
        <div className="glass-strong rounded-3xl p-8 sm:p-14 shadow-elegant overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for internships & SDE roles
          </motion.div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Rohan Chittora</span>.
            <br />
            {" "}
            <TypingText
              className="text-gradient"
              words={["CSE student", "Problem Solver", "Full-Stack Developer","AI Engineer"]}
            />
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Computer Science student focused on AI engineering, full-stack development,
            and rigorous problem solving. I turn ideas into shipped, performant products —
            with a calm engineering mindset and a love for clean systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient-pan px-5 py-3 text-sm font-medium text-white ring-glow hover:scale-[1.02] transition-transform"
            >
              View Projects <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://leetcode.com/u/Rohan_Chittora01/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:border-foreground/20"
            >
              <SiLeetcode size={18} />
              LeetCode
            </a>
            <a
              href="https://github.com/Rohan-Chittora1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:border-foreground/20"
            >
              <FiGithub /> GitHub
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="glass rounded-2xl p-5 hover-glow"
              >
                <div className="text-2xl sm:text-3xl font-display font-semibold text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection delay={0.1} className="mt-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What I do</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
              Engineering across the stack.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "AI Engineering", d: "Building practical AI tools, automations, and intelligent workflows." },
            { t: "Full-Stack Web", d: "React, Node, MongoDB — from clean UI to robust APIs." },
            { t: "Problem Solving", d: "500+ DSA problems across data structures, graphs, and DP." },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6 hover-glow">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand mb-4 ring-glow" />
              <h3 className="font-display text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection delay={0.2} className="mt-20">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold">
              Let's build something exceptional.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Open to internships, SDE roles, and collaborative projects.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient-pan px-6 py-3 text-sm font-medium text-white ring-glow"
          >
            Get in touch <FiArrowRight />
          </Link>
        </div>
      </PageSection>
    </div>
  );
}
