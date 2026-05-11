import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@/components/PageSection";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Rohan Chittora" },
      { name: "description", content: "Verified certifications and credentials." },
    ],
  }),
  component: Certifications,
});

const CERTS = [
  { title: "Fundamentals of Deep Learning", issuer: "Nvdia", date: "2026", href: "https://drive.google.com/file/d/1zGKlCJqceY8J9Qn4jw2s9zqbQ3Bv2wL5/view?usp=sharing" },
  { title: "Agentforce Specialist", issuer: "SALESFORCE", date: "2025", href: "https://drive.google.com/file/d/1_loujPVLbW-uZNitleCCrAgiaOdHtUal/view?usp=sharing" },
  { title: "100 Days Badge", issuer: "Leetcode", date: "2025", href: "https://drive.google.com/file/d/1WCjOU30yav_psTNE5YYAiZHoS7AW_tWv/view?usp=sharing" },
  { title: "Learning C++", issuer: "Linkedin Learning", date: "2024", href: "https://drive.google.com/file/d/1NPiOT-dTtLM2Z-ON881fdBOAxPI28UNw/view?usp=sharing" }
  ,
  { title: "Problem Solving", issuer: "Codolio", date: "2024", href: "https://codolio.com/profile/Rohan01" },

  { title: "Web Development", issuer: "Internshala Trainings", date: "2024", href: "https://drive.google.com/file/d/1YGA0jrpZvYQD2N4POwjcVua8cDvLXnVN/view?usp=sharing" },
];

function Certifications() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <PageSection>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Certifications</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-display font-semibold tracking-tight">
          Verified <span className="text-gradient">credentials</span>.
        </h1>
      </PageSection>

      <PageSection delay={0.1} className="mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover-glow group flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-brand text-white ring-glow">
                  <FiAward size={20} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{c.date}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-tight">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-foreground">
                Verify <FiExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
