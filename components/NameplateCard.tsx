import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

function Rivets() {
  return (
    <>
      <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-steel-600 transition-colors group-hover:bg-hydraulic" />
      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-steel-600 transition-colors group-hover:bg-hydraulic" />
      <span className="absolute bottom-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-steel-600 transition-colors group-hover:bg-hydraulic" />
      <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-steel-600 transition-colors group-hover:bg-hydraulic" />
    </>
  );
}

export default function NameplateCard({
  product,
  href,
}: {
  product: Product;
  href?: string;
}) {
  const content = (
    <div className="group relative rounded-sm border border-steel-600 bg-steel-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-hydraulic">
      <Rivets />

      <div className="flex items-center justify-between border-b border-steel-600 pb-2 font-body text-xs uppercase tracking-widest text-steel-300">
        <span>Model</span>
        <span className="text-right text-white">{product.name}</span>
      </div>

      <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden bg-steel-950">
        <Image
          src={product.image}
          alt={`${product.name} — SR Engineering Works, Jaipur`}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-3 flex items-center justify-between font-body text-xs uppercase tracking-wider text-steel-300">
        <span>Capacity</span>
        <span className="font-semibold text-hydraulic">{product.capacity}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
