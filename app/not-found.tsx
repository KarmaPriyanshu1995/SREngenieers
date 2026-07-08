import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-extrabold text-hydraulic">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
        This load couldn&apos;t be lifted.
      </h1>
      <p className="mt-3 font-body text-steel-300">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-hydraulic px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white"
      >
        Back to Home
      </Link>
    </section>
  );
}
