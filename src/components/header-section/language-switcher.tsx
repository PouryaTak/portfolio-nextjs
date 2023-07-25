"use client";
import useSelectedLang from "@/hooks/useSelectedLang";
import React from "react";

export default function LanguageSwitcher({ language }: { language: string }) {
const {selectedLang, handleLang} = useSelectedLang(language)

  return (
    <>
      <button
        onClick={handleLang}
        className="text-gray-200 p-1.5 flex gap-2 items-center pl-2"
      >
        <span className="mt-1 block text-xl px-2">
          {selectedLang}
        </span>
      </button>
    </>
  );
}
