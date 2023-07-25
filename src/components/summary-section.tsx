import React from "react";
import Accordion from "./accordion";
import { FileText, Mail, MapPin, Smartphone } from "react-feather";

export default function Summary({ dictionaries }: { dictionaries: any }) {
  return (
    <section>
      <Accordion
        title={dictionaries.summary.title}
        icon={<FileText className="text-white" />}
      >
        <p className="text-white font-extralight opacity-90 text-justify mb-5">
          {dictionaries.summary.content.about}
        </p>
        <div className="flex flex-col justify-between lg:items-center gap-3 items-start w-full lg:w-4/5 lg:flex-row ltr">
          <div className="flex text-white gap-2 items-center ltr">
            <Mail className="text-amber-300" />
            <a href="mailto:pooriversal@gmail.com">
              {dictionaries.summary.content.email}
            </a>
          </div>
          <div className="flex text-white gap-2 items-center ltr">
            <Smartphone className="text-amber-300" />
            <a href="tel:+989362969810">
              {dictionaries.summary.content.mobile}
            </a>
          </div>
          <div className="flex text-white gap-2 items-center ltr">
            <MapPin className="text-amber-300" />
            <a href="https://goo.gl/maps/BodBqXXqN3yaKkoH8">
              {dictionaries.summary.content.location}
            </a>
          </div>
        </div>
      </Accordion>
    </section>
  );
}
