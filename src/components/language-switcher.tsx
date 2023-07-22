"use client";
import useSelectedLang from "@/hooks/useSelectedLang";
import React from "react";

export default function LanguageSwitcher({ language }: { language: string }) {
const {selectedLang, handleLang} = useSelectedLang(language)

  return (
    <>
      <button
        onClick={handleLang}
        className="text-slate-200 absolute top-5 ltr:left-5 rtl:right-5 p-1.5 text-sm flex gap-2 items-center pl-2"
      >
        <span className="mt-1 block px-2">
          {selectedLang}
        </span>
      </button>
    </>
  );
}
