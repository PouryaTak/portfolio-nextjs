import React from "react";
import Accordion from "./accordion";
import { Briefcase } from "react-feather";
import ListItem from "./list-item";

export default function Experiences({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.experience.title}
        icon={<Briefcase className="text-white" />}
      >
        {dictionaries.experience.content.map((work: any, idx: string) => (
          <ListItem title={work.title} key={idx}>
            <ul className="text-white font-extralight opacity-90  ltr:pl-3 rtl:pr-3">
              {work.list.map((experience: any) => (
                <li key={experience} className="list-disc mb-3 lg:mb-1">{experience}</li>
              ))}
            </ul>
          </ListItem>
        ))}
      </Accordion>
    </section>
  );
}
