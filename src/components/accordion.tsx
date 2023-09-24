"use client";
import { ChevronDown } from "lucide-react";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function Accordion({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  icon: any;
}) {
  const [isToggled, setIsToggled] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const content = useRef<any>();
  const handleHeight = () => {
    const height = content.current.offsetHeight;
    setContentHeight(height);
  };
  useLayoutEffect(() => {
    handleHeight();
    window.addEventListener("resize", handleHeight);
    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  return (
    <div className="mb-20">
      <button
        className="title flex items-center gap-5 hover:opacity-80"
        onClick={() => setIsToggled((current) => !current)}
      >
        {icon}
        <span className="text-2xl dark:text-cyan-400 text-cyan-500 font-semibold user-select-none">{title}</span>
        <ChevronDown
          className={`print:hidden mt-2 transition-transform duration-300 text-gray-400 ${
            isToggled && "rotate-180"
          }`}
          size={20}
          aria-hidden={true}
        />
        <span className="sr-only">
          {isToggled ? "close list" : "open list"}
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden user-select-none ${
          isToggled ? "h-[var(--height)] mt-6" : "!h-0 mt-0"
        }`}
        style={{ "--height": `${contentHeight}px` } as React.CSSProperties}
      >
        <div ref={content}>{children}</div>
      </div>
    </div>
  );
}
