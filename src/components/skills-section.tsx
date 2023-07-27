import React from "react";
import Accordion from "./accordion";
import { Tool } from "react-feather";
import ListItem from "./list-item";
import PillItem from "./pill-item";

export default function Skills({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.skills.title}
        icon={<Tool className="text-white" />}
      >
        {dictionaries.skills.content.map((skill: any, idx: string) => (
          <ListItem title={skill.title} key={idx}>
            <div className="w-full flex gap-3 flex-wrap">
              {skill.list.map((item: any) => (
                <PillItem data={item} key={item.title} />
              ))}
            </div>
          </ListItem>
        ))}
      </Accordion>
    </section>
  );
}
