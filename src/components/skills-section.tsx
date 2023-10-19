import React from "react";
import SectionTitle from "./section-title"
import ListItem from "./list-item";
import PillItem from "./pill-item";
import { PocketKnife } from "lucide-react";

export default function Skills({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <SectionTitle
      id={'skills'}
        title={dictionaries.skills.title}
        icon={<PocketKnife className="dark:text-white text-gray-800" />}
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
      </SectionTitle>
    </section>
  );
}
