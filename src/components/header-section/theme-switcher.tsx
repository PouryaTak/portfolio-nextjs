"use client";

import useSelectedTheme from "@/hooks/useSelectedTheme";
import { MoonStar, SunMedium } from "lucide-react";
import React from "react";

export default function ThemeSwitcher({ theme }: { theme: string }) {
  const { selectedTheme, handleTheme } = useSelectedTheme(theme);

  return (
    <>
      <button onClick={handleTheme} className="dark:text-gray-200 text-gray-800 flex gap-2 items-center">
        <span className="mt-1 block text-xl px-2" aria-hidden>
          {selectedTheme === "dark" ? <MoonStar /> : <SunMedium />}
        </span>
        <span className="sr-only">{selectedTheme === "dark" ? "dark mode" : "light mode"}</span>
      </button>
    </>
  );
}
