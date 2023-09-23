"use client";
import useSelectedLang from "@/hooks/useSelectedLang";
import React from "react";

export default function LanguageSwitcher({ language }: { language: string }) {
const {selectedLang, handleLang} = useSelectedLang(language)

  return (
    <>
      <button
        onClick={handleLang}
        className="dark:text-gray-200 text-gray-800 flex gap-2 items-center"
      >
        <span className="mt-1 block text-xl font-medium dark:font-normal px-2">
          {selectedLang}
        </span>
      </button>
    </>
  );
}
