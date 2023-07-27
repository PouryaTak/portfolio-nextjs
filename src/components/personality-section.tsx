import React from "react";
import Accordion from "./accordion";
import { BookOpen, User } from "react-feather";
import ListItem from "./list-item";

const icons:any = {
    Book: <BookOpen/>,
   
}

export default function Personality({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.personality.title}
        icon={<User className="text-white" />}
      >
        <ListItem title={dictionaries.personality.content.tests.title}>
          <div className="flex justify-between items-start lg:items-center gap-6 flex-col lg:flex-row mb-6 mt-3 w-11/12 mx-auto ltr">
            {dictionaries.personality.content.tests.list.map((i: any) => (
              <div className="flex gap-2 ltr" key={i.value}>
                <p className="text-white font-extralight ltr">{i.type}</p>
                <p className="text-amber-100 font-extralight ltr">
                  {i.value}
                </p>
              </div>
            ))}
          </div>
        </ListItem>
        {/* <ListItem title={dictionaries.personality.content.interests.title}>
          <div className="flex justify-between items-start lg:items-center gap-6 flex-col lg:flex-row mb-6 mt-3 w-11/12 mx-auto ltr">
            <div className="flex gap-2 ltr">
              {dictionaries.personality.content.interests.list.map((i: any) => (
                <div className="flex flex-col items-center gap-2" key={i.value}>
                  {icons[i.type]}
                  <p className="text-amber-100 font-extralight text-center">
                    {i.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ListItem> */}
      </Accordion>
    </section>
  );
}
