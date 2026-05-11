import { Link } from "@tanstack/react-router";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-brand" />
          <span className="font-display font-semibold">Rohan Chittora</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/projects" className="hover:text-foreground">Projects</Link>
          <Link to="/achievements" className="hover:text-foreground">Achievements</Link>
          <Link to="/certifications" className="hover:text-foreground">Certifications</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/Rohan-Chittora1", Icon: FiGithub, label: "GitHub" },
            { href: "https://www.linkedin.com/in/rohan-chittora-890021295/", Icon: FiLinkedin, label: "LinkedIn" },
            { href: "https://leetcode.com/u/Rohan_Chittora01/", Icon: SiLeetcode, label: "LeetCode" },
            { href: "https://www.geeksforgeeks.org/profile/rohan_chittora", Icon: SiGeeksforgeeks, label: "GFG" },
            {href: "mailto:rohanchittora.dev@gmail.com",Icon: FiMail,label: "Email",},
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-8">
        © {new Date().getFullYear()} Rohan Chittora. Crafted with care.
      </div>
    </footer>
  );
}
