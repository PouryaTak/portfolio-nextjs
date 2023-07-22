import LanguageSwitcher from "@/components/language-switcher"
import { cookies } from "next/dist/client/components/headers";

export default function Home() {
  const lang = cookies().get("language")?.value || "en-US";

  return (
    <main className="w-full px-20 py-20">
     <LanguageSwitcher language={lang}/>
    </main>
  )
}
