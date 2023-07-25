import Header from "@/components/header-section/header";
import { cookies } from "next/dist/client/components/headers";
import { getDictionary } from "./dictionaries";
import Summary from "@/components/summary-section";

export default async function Home() {
  const lang = cookies().get("language")?.value || "en-US";
  const dictionaries = await getDictionary(lang)

  return (
    <main className="w-full px-5 md:px-20 py-20">
     <Header language={lang} dictionaries={dictionaries}/>
     <Summary dictionaries={dictionaries}/>
    </main>
  )
}
