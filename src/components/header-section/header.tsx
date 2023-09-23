"use client";
import React from "react";
import LanguageSwitcher from "./language-switcher";
import { Printer } from "lucide-react";
import ThemeSwitcher from "./theme-switcher";

export default function Header({ dictionaries, language, theme }: { dictionaries: any; language: string; theme: string }) {
  return (
    <div className="header mb-14">
      <h1 className="text-3xl lg:text-5xl font-semibold dark:text-white text-gray-800 mb-4">{dictionaries.name}</h1>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <span className="dark:text-gray-400 text-sky-500 text-sm mb-3">{dictionaries.title}</span>
        <span className="dark:text-gray-400 text-sky-500 text-sm mb-3">{dictionaries.update}</span>
      </div>
      <div className="w-full flex lg:items-center items-start flex-col lg:flex-row flex-nowrap gap-3 lg:gap-10">
        <hr className="dark:border-white border-gray-400 w-full mt-1" />
        <div className="flex items-center gap-10 print:hidden">
          <LanguageSwitcher language={language} />
          <ThemeSwitcher theme={theme} />
          <button onClick={() => window.print()}>
            <Printer aria-hidden="true" className="dark:text-gray-200 text-gray-800 mt-1" size={18} />
            <span className="sr-only">print</span>
          </button>
        </div>
      </div>
    </div>
  );
}
