import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"section"> & {
  children: ReactNode;
  delay?: number;
};

export function PageSection({ children, delay = 0, className = "", ...rest }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
