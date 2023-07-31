import React from "react";

export default function ListItem({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon?: any;
  title: string;
}) {
  return (
    <div className="border-white relative w-auto px-5 ltr:pr-0 trl:pl-0 pt-5 pb-7 mt-[10px] ltr:border-l ltr:ml-2 ltr:lg:ml-16 rtl:border-r rtl:mr-2 rtl:lg:mr-16 after:content-[''] after:absolute after:-bottom-2 after:h-2 after:w-px after:bg-white ltr:after:-left-px rtl:after:-right-px">
      <div className="flex gap-2 items-center absolute -top-4 ltr:left-5 rtl:right-5 after:content-[''] after:w-3 after:h-3 after:rounded-full after:bg-white after:absolute after:top-2 ltr:after:-left-[26px] rtl:after:-right-[26px]">
        {icon}
        <h6 className="text-amber-400 text-base">{title}</h6>
      </div>
      <div className="subItem_content mt-5 lg:mt-0">{children}</div>
    </div>
  );
}
