import { setCookie } from "@/helpers/handle-cookies";
import { useEffect, useState } from "react";

const themes: string[] = ["light", "dark"];
const findLangIndex: (arg0: string | undefined) => number = (lang) => themes.findIndex((i: string) => lang === i) ?? 1;

export default function useSelectedTheme(currentTheme: string) {
  const [theme, setTheme] = useState(themes[findLangIndex(currentTheme)]);

  const handleTheme = () => {
    const selectedTheme: number = findLangIndex(theme);
    const switchIndex = +!Boolean(selectedTheme);
    setTheme(themes[switchIndex]);
    // window?.location.reload();
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setCookie("theme", theme);
  }, [theme]);

  return {
    selectedTheme: themes[findLangIndex(theme)],
    handleTheme,
  };
}
