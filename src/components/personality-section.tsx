import React from "react";
import Accordion from "./accordion";
import ListItem from "./list-item";
import { Bike, BookOpen, Club, Coffee, Crown, Music, User } from "lucide-react";

const icons:any = {
    Book: <BookOpen/>,
    Cards: <Club />,
    Bicycle:<Bike />,
    Coffee:<Coffee />,
    Chess: <Crown />,
    Piano:<Music />
   
}

export default function Personality({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.personality.title}
        icon={<User className="dark:text-white text-gray-800" />}
      >
        <ListItem title={dictionaries.personality.content.tests.title}>
          <div className="flex justify-between items-start lg:items-center gap-6 flex-col lg:flex-row mb-6 mt-3 w-11/12 mx-auto ltr">
            {dictionaries.personality.content.tests.list.map((i: any) => (
              <div className="flex gap-2 font-normal ltr" key={i.value}>
                <p className="dark:text-white text-gray-800 ">{i.type}</p>
                <p className="dark:text-sky-200 text-sky-500">
                  {i.value}
                </p>
              </div>
            ))}
          </div>
        </ListItem>
        {/* <ListItem title={dictionaries.personality.content.interests.title}>
          <div className="flex justify-between items-center gap-6 flex-col lg:flex-row mb-6 mt-3 w-max lg:w-11/12 lg:mx-auto ltr">

              {dictionaries.personality.content.interests.list.map((i: any) => (
                <div className="flex flex-col items-center justify-between gap-2 dark:text-sky-500 " key={i.value}>
                  {icons[i.type]}
                  <p className="dark:text-sky-100 text-sky-500 font-normal text-center">
                    {i.value}
                  </p>
                </div>
              ))}
          
          </div>
        </ListItem> */}
      </Accordion>
    </section>
  );
}
