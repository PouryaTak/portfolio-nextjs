"use client";
import React from "react";
import LanguageSwitcher from "./language-switcher";
import { Printer } from "react-feather";

export default function Header({
  dictionaries,
  language,
}: {
  dictionaries: any;
  language: string;
}) {
  return (
    <div className="header mb-14">
      <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-4">
        {dictionaries.name}
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <span className="text-gray-400 text-sm mb-3">{dictionaries.title}</span>
        <span className="text-gray-400 text-sm mb-3">
          {dictionaries.update}
        </span>
      </div>
      <div className="w-full flex lg:items-center items-start flex-col lg:flex-row flex-nowrap gap-3 lg:gap-10">
        <hr className="border-white w-full mt-1" />
        <div className="flex items-center gap-10 print:hidden">
          <LanguageSwitcher language={language} />
          <button onClick={() => window.print()}>
            <Printer aria-hidden="true" className="text-white mt-1" size={18} />
            <span className="sr-only">print</span>
          </button>
        </div>
      </div>
    </div>
  );
}
