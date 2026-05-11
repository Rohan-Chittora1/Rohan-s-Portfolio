import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      animate={{ x: pos.x - 200, y: pos.y - 200 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.3 }}
      className="pointer-events-none fixed top-0 left-0 z-[55] h-[400px] w-[400px] rounded-full"
      style={{
        background:
          "radial-gradient(closest-side, color-mix(in oklab, var(--brand-2) 20%, transparent), transparent 70%)",
      }}
    />
  );
}
