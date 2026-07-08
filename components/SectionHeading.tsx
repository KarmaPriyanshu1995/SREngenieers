export default function SectionHeading({
  eyebrow,
  heading,
  className = "",
}: {
  eyebrow: string;
  heading: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-body text-sm font-semibold uppercase tracking-widest text-hydraulic">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
        {heading}
      </h2>
    </div>
  );
}
