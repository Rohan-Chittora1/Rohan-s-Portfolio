import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@/components/PageSection";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Rohan Chittora" },
      { name: "description", content: "500+ DSA problems solved across LeetCode and GFG. Coding profiles and problem-solving stats." },
    ],
  }),
  component: Achievements,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const FOCUS = [
  { name: "Arrays & Strings", level: 95 },
  { name: "Trees & Graphs", level: 88 },
  { name: "Dynamic Programming", level: 82 },
  { name: "Recursion & Backtracking", level: 90 },
  { name: "Greedy", level: 80 },
  { name: "Sliding Window / Two Pointers", level: 92 },
];

const PROFILES = [
  { name: "LeetCode", handle: "@rohanchittora", Icon: SiLeetcode, href: "https://leetcode.com/u/Rohan_Chittora01/", color: "from-[#FFA116] to-[#ff6b6b]" },
  { name: "GeeksforGeeks", handle: "@rohanchittora", Icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/user/rohan_chittora/", color: "from-[#2F8D46] to-[#00b894]" },
  { name: "GitHub", handle: "@rohanchittora", Icon: FiGithub, href: "https://github.com/Rohan-Chittora1", color: "from-[var(--brand)] to-[var(--brand-2)]" },
];

function Achievements() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <PageSection>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Achievements</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-display font-semibold tracking-tight">
          Built through <span className="text-gradient">consistency</span>.
        </h1>
      </PageSection>

      <PageSection delay={0.1} className="mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { v: 500, s: "+", l: "DSA Problems Solved" },
            { v: 6, s: "+", l: "Focus Areas Mastered" },
            { v: 100, s: "+", l: "Days of Streak" },
            { v: 10, s: "+", l: "Contests Attempted" },
          ].map((c) => (
            <div key={c.l} className="glass rounded-2xl p-6 hover-glow">
              <div className="text-3xl font-display font-semibold text-gradient">
                <Counter to={c.v} suffix={c.s} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{c.l}</div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection delay={0.15} className="mt-16">
        <h2 className="text-3xl font-display font-semibold tracking-tight">DSA focus areas</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {FOCUS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl p-5 hover-glow"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{f.name}</span>
                <span className="text-muted-foreground font-mono">{f.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${f.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                  className="h-full bg-gradient-brand animate-gradient-pan"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection delay={0.2} className="mt-16">
        <h2 className="text-3xl font-display font-semibold tracking-tight">Coding profiles</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROFILES.map(({ name, handle, Icon, href, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group glass rounded-2xl p-6 hover-glow flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br ${color} text-white`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="font-display font-semibold">{name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{handle}</div>
                </div>
              </div>
              <FiExternalLink className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
