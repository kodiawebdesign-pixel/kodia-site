export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-3 text-base opacity-75 max-w-2xl">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
