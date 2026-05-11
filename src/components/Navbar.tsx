import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/hooks/use-theme";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-elegant">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <img
              src="/avatar.jpg"
              alt="Rohan avatar"
              className="h-12 w-12 rounded-full object-contain border border-white/10 shadow-xl"
            />

            <div className="absolute inset-0 rounded-full ring-2 ring-violet-500/20" />

            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-background" />
          </motion.div>
          <span className="font-display font-semibold tracking-tight text-base sm:text-lg">
            Rohan<span className="text-gradient">.dev</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`relative ${active ? "text-foreground" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-brand text-white animate-gradient-pan ring-glow hover:scale-[1.02] transition-transform"
          >
            <FiDownload size={14} /> Resume
          </a>
          <button
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto max-w-6xl mt-2 glass rounded-2xl p-3 flex flex-col gap-1"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm hover:bg-secondary"
                activeProps={{ className: "px-3 py-2 rounded-lg text-sm bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-gradient-brand text-white"
            >
              <FiDownload size={14} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
