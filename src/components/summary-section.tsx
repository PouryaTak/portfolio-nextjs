import React from "react";
import Accordion from "./accordion";
import { FileText, Mail, MapPin, Smartphone } from "lucide-react";

export default function Summary({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.summary.title}
        icon={<FileText className="dark:text-white text-gray-800" />}
      >
        <p className="dark:text-white text-gray-800 font-normal opacity-90 text-justify mb-5">
          {dictionaries.summary.content.about}
        </p>
        <div className="flex flex-col justify-between lg:items-center gap-3 items-start w-full lg:w-4/5 lg:flex-row ltr">
          <div className="flex dark:text-white text-gray-800 gap-2 items-center ltr">
            <Mail className="dark:text-amber-400 text-sky-500" />
            <a href="mailto:pooriversal@gmail.com" className="dark:text-amber-100 text-sky-500 underline">
              {dictionaries.summary.content.email}
            </a>
          </div>
          <div className="flex dark:text-white text-gray-800 gap-2 items-center ltr">
            <Smartphone className="dark:text-amber-400 text-sky-500" />
            <a href="tel:+989362969810" className="dark:text-amber-100 text-sky-500 underline">
              {dictionaries.summary.content.mobile}
            </a>
          </div>
          <div className="flex dark:text-white text-gray-800 gap-2 items-center ltr">
            <MapPin className="dark:text-amber-400 text-sky-500" />
            <a href="https://goo.gl/maps/BodBqXXqN3yaKkoH8" className="dark:text-amber-100 text-sky-500 underline">
              {dictionaries.summary.content.location}
            </a>
          </div>
        </div>
      </Accordion>
    </section>
  );
}
