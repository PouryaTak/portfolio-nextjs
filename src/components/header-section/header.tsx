'use client'
import React from "react";
import LanguageSwitcher from "./language-switcher";

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
      <div className="w-full flex justify-between items-center">
        <span className="text-gray-400 text-sm mb-3">{dictionaries.title}</span>
        <span className="text-gray-400 text-sm mb-3">{dictionaries.update}</span>
      </div>
      <div className="w-full flex lg:items-center items-start flex-col lg:flex-row flex-nowrap gap-6 lg:gap-10">
        <div className="flex items-center gap-10 print:hidden">
          <button onClick={()=>window.print()}>
            {/* <Print aria-hidden="true" /> */}
            <span className="text-gray-200" >print</span>
          </button>
          <LanguageSwitcher language={language} />
        </div>
        <hr className="border-white w-full mt-1" />
      </div>
    </div>
  );
}
