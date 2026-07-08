export default function PageHeader({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="border-b border-steel-600/50 bg-steel-800">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-hydraulic">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
          {heading}
        </h1>
        {sub && (
          <p className="mx-auto mt-4 max-w-xl font-body text-steel-300">{sub}</p>
        )}
      </div>
    </div>
  );
}
