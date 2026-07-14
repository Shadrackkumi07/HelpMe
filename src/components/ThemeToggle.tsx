"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@/components/icons";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.style.colorScheme = theme;
}

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("helpme-theme") as Theme | null;
    const next = stored ?? "light";
    setTheme(next);
    applyTheme(next);
    setReady(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("helpme-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-rose-light/80 bg-white/70 text-plum transition-colors hover:bg-blush-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raspberry dark:bg-blush-deep/80 ${className ?? ""}`}
    >
      {!ready ? (
        <span className="h-4 w-4 rounded-full bg-plum/20" aria-hidden />
      ) : theme === "dark" ? (
        <IconSun size={18} />
      ) : (
        <IconMoon size={18} />
      )}
    </button>
  );
}
