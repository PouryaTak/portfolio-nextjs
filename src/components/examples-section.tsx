import React from "react";
import Accordion from "./accordion";
import ListItem from "./list-item";
import { Box, Codepen, Github } from "lucide-react";

const icons: any = {
  Codepen: <Codepen className="dark:text-amber-400 text-sky-500 h-10" />,
  Github: <Github className="dark:text-amber-400 text-sky-500" />,
};

export default function Examples({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.works.title}
        icon={<Box className="dark:text-white text-gray-800" />}
      >
        {dictionaries.works.content.map((work: any, idx: string) => (
          <ListItem title={work.title} icon={icons[work.title]} key={idx}>
            <a href={work.link} target="_blank" className="underline dark:text-amber-100 text-sky-500">
              {work.text}
            </a>
            <p className="text-sm dark:text-white text-gray-800 opacity-90 mt-2 mb-5">
              {work.description}
            </p>
          </ListItem>
        ))}
      </Accordion>
    </section>
  );
}
