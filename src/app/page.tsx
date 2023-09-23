import Header from "@/components/header-section/header";
import { cookies } from "next/dist/client/components/headers";
import { getDictionary } from "./dictionaries";
import Summary from "@/components/summary-section";
import Experiences from "@/components/experience-section";
import Examples from "@/components/examples-section";
import Skills from "@/components/skills-section";
import Personality from "@/components/personality-section";

export default async function Home() {
  const lang = cookies().get("language")?.value || "en-US";
  const theme = cookies().get("theme")?.value || "light";
  const dictionaries = await getDictionary(lang)

  return (
    <main className="w-full max-w-7xl mx-auto px-5 md:px-20 py-20">
     <Header language={lang} theme={theme} dictionaries={dictionaries}/>
     <Summary dictionaries={dictionaries}/>
     <Experiences dictionaries={dictionaries}/>
     <Examples dictionaries={dictionaries}/>
     <Skills dictionaries={dictionaries}/>
     <Personality dictionaries={dictionaries}/>
    </main>
  )
} 
