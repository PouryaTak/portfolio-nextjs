import { setCookie } from "@/helpers/handle-cookies";
import { useEffect, useState } from "react";
interface LangData {
  lang: string;
  title: string;
}
const langData: LangData[] = [
  { lang: "fa-IR", title: "فا" },
  { lang: "en-US", title: "En" },
];
const findLangIndex: (arg0: string | undefined) => number = (
  lang
) => langData.findIndex((i: LangData) => lang == i.lang) ?? 1;

export default function useSelectedLang(language: string) {
  const [lang, setLang] = useState(langData[findLangIndex(language)]);

  const handleLang = () => {
    const selectedLang: number = findLangIndex(lang.lang);
    const switchIndex = +!Boolean(selectedLang);
    setLang(langData[switchIndex]);
    window?.location.reload();
  };

  useEffect(() => {
    setCookie("language", lang.lang);
  }, [lang]);

  return {
    selectedLang: langData[findLangIndex(lang.lang)]?.title,
    handleLang,
  };
}
