import { cookies } from 'next/dist/client/components/headers';
import './globals.css'
import type { Metadata } from 'next'
import { getDictionary } from './dictionaries';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'pourya takmar',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = cookies().get("language")?.value || "fa-IR";
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang} dir={dictionary.html.dir}>
      <body>{children}</body>
    </html>
  )
}
