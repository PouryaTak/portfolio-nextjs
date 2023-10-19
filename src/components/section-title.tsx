export default function SectionTitle({
  children,
  title,
  icon,
  showBackground,
  id,
}: {
  children: React.ReactNode;
  title: string;
  icon: any;
  showBackground?: boolean;
  id?: string;
}) {
  return (
    <div className="mb-20" id={id}>
      <a
        href={`#${id}`}
        className="title flex items-center gap-5 hover:opacity-80"
      >
        {icon}
        <span className="text-2xl dark:text-cyan-400 text-cyan-600 font-semibold user-select-none">
          {title}
        </span>
      </a>
      <div
        className={`transition-all duration-300 overflow-hidden user-select-none mt-6 h-max ${
          showBackground &&
          "lg:p-5 rounded-2xl lg:bg-slate-50 lg:dark:bg-neutral-700/20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
