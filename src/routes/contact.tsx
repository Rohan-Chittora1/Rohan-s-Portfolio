import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@/components/PageSection";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rohan Chittora" },
      { name: "description", content: "Get in touch with Rohan Chittora — open to internships, SDE roles, and collaborations." },
    ],
  }),
  component: Contact,
});

const SOCIALS = [
  { name: "GitHub", handle: "@rohanchittora01", Icon: FiGithub, href: "https://github.com/Rohan-Chittora1" },
  { name: "LinkedIn", handle: "rohan-chittora01", Icon: FiLinkedin, href: "https://www.linkedin.com/in/rohan-chittora-890021295/" },
  { name: "LeetCode", handle: "@rohanchittora01", Icon: SiLeetcode, href: "https://leetcode.com/u/Rohan_Chittora01/" },
  { name: "GeeksforGeeks", handle: "@rohanchittora01", Icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/user/rohan_chittora/" },
  { name: "Email", handle: "rohanchittora.dev@gmail.com", Icon: FiMail, href: "mailto:rohanchittora.devgmail.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <PageSection>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-display font-semibold tracking-tight">
          Let's <span className="text-gradient">connect</span>.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Open to internships, SDE roles, collaborations, and interesting conversations.
          I usually reply within 24 hours.
        </p>
      </PageSection>

      <div className="mt-10 grid lg:grid-cols-5 gap-6">
        <PageSection delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="glass-strong rounded-3xl p-7 sm:p-9 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Subject" id="subject" placeholder="What's this about?" />
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me a bit about the role, project, or idea..."
                className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-2)] focus:ring-2 focus:ring-[color:var(--brand-2)]/30 transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient-pan px-6 py-3 text-sm font-medium text-white ring-glow hover:scale-[1.02] transition-transform"
            >
              {sent ? (<><FiCheck /> Sent — I'll be in touch</>) : (<><FiSend /> Send message</>)}
            </button>
          </form>
        </PageSection>

        <PageSection delay={0.15} className="lg:col-span-2 space-y-4">
          {SOCIALS.map(({ name, handle, Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover-glow"
            >
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-brand text-white">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold">{name}</div>
                <div className="text-xs text-muted-foreground font-mono truncate">{handle}</div>
              </div>
            </a>
          ))}
        </PageSection>
      </div>
    </div>
  );
}

function Field({
  label, id, type = "text", placeholder,
}: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-2)] focus:ring-2 focus:ring-[color:var(--brand-2)]/30 transition"
      />
    </div>
  );
}
