import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeedMs?: number;   // per character while typing
  deletingSpeedMs?: number; // per character while deleting
  holdMs?: number;          // pause when a word is finished
  className?: string;
};

export default function Typewriter({
  words,
  typingSpeedMs = 65,
  deletingSpeedMs = 35,
  holdMs = 1200,
  className = "",
}: Props) {
  const [i, setI] = useState(0);        // which word
  const [txt, setTxt] = useState("");   // visible text
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[i % words.length];

    if (!deleting && txt === full) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }

    if (deleting && txt === "") {
      setDeleting(false);
      setI((v) => (v + 1) % words.length);
      return;
    }

    const speed = deleting ? deletingSpeedMs : typingSpeedMs;
    const t = setTimeout(() => {
      setTxt((prev) =>
        deleting ? prev.slice(0, -1) : full.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [txt, deleting, i, words, typingSpeedMs, deletingSpeedMs, holdMs]);

  return (
    <span className={`relative ${className}`}>
      <span>{txt}</span>
      <span className="type-caret ml-0.5">|</span>
    </span>
  );
}
