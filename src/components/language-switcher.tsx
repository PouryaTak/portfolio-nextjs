"use client";
import { getCookie, setCookie } from "@/helpers/handle-cookies";
import React, { useEffect, useState } from "react";

interface LangData {
  lang: string;
  title: string;
}
const langData: LangData[] = [
  { lang: "fa-IR", title: "فا" },
  { lang: "en-US", title: "En" },
];
export default function LanguageSwitcher() {
  const [lang, setLang] = useState(langData[0]);

  const findLangIndex: (arg0: string | undefined) => number | undefined = (
    lang
  ) => langData.findIndex((i: LangData) => lang == i.lang);

  const handleLang = () => {
    const selectedLang: number = findLangIndex(lang.lang) || 0;
    const switchIndex = +!Boolean(selectedLang);
    setLang(langData[switchIndex]);
    window?.location.reload();
  };

  useEffect(() => {
    const localLang = getCookie("language") || langData[0].lang;
    setLang(langData[findLangIndex(localLang) || 0]);
  }, []);

  useEffect(() => {
    setCookie("language", lang.lang);
  }, [lang]);

  return (
    <>
      <button
        onClick={handleLang}
        className="text-slate-200 absolute top-5 ltr:left-5 rtl:right-5 p-1.5 text-sm flex gap-2 items-center pl-2"
      >
        <span className="mt-1 block px-2">
          {langData[+!Boolean(findLangIndex(lang.lang))]?.title}
        </span>
      </button>
    </>
  );
}
