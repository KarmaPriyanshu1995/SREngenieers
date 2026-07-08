import Image from "next/image";
import Section from "@/components/Section";
import { whatsappLink, type Product } from "@/lib/data";

export default function ProductDetail({
  product,
  reverse = false,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <Section id={product.slug}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative rounded-sm border border-steel-600 bg-steel-800 p-3">
            <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
            <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-steel-600" />
            <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-steel-600" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-steel-950">
              <Image
                src={product.image}
                alt={`${product.name} — SR Engineering Works, Jaipur`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            {product.name}
          </h3>
          <p className="mt-4 font-body text-steel-300">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-steel-600 py-4 font-body text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Capacity
              </dt>
              <dd className="mt-1 font-semibold text-white">{product.capacity}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Structure
              </dt>
              <dd className="mt-1 font-semibold text-white">{product.structure}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Power
              </dt>
              <dd className="mt-1 font-semibold text-white">{product.power}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Warranty
              </dt>
              <dd className="mt-1 font-semibold text-white">{product.warranty}</dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 font-body text-sm text-steel-300"
              >
                <span className="mt-0.5 text-hydraulic">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(`Hi, I want details of ${product.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-hydraulic px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
