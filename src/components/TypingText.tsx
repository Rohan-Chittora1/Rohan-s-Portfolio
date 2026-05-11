import { useEffect, useState } from "react";

export function TypingText({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === word) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && next === "") {
        setDeleting(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-current ml-1 animate-pulse" />
    </span>
  );
}
