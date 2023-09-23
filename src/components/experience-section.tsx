import React from "react";
import Accordion from "./accordion";
import ListItem from "./list-item";
import { Briefcase } from "lucide-react";

export default function Experiences({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.experience.title}
        icon={<Briefcase className="dark:text-white text-gray-800" />}
      >
        {dictionaries.experience.content.map((work: any, idx: string) => (
          <ListItem title={work.title} key={idx}>
            <ul className="dark:text-white text-gray-800 font-normal opacity-90  ltr:pl-3 rtl:pr-3">
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
