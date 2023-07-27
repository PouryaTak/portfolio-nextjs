import React from "react";
import Accordion from "./accordion";
import { Box, Codepen, GitHub } from "react-feather";
import ListItem from "./list-item";

const icons: any = {
  Codepen: <Codepen className="text-amber-400 h-10" />,
  Github: <GitHub className="text-amber-400" />,
};

export default function Examples({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.works.title}
        icon={<Box className="text-white" />}
      >
        {dictionaries.works.content.map((work: any, idx: string) => (
          <ListItem title={work.title} icon={icons[work.title]} key={idx}>
            <a href={work.link} target="_blank" className="underline text-amber-100">
              {work.text}
            </a>
            <p className="text-sm text-white opacity-90 mt-2 mb-5">
              {work.description}
            </p>
          </ListItem>
        ))}
      </Accordion>
    </section>
  );
}
