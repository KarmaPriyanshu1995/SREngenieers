export type Phone = {
  display: string;
  tel: string;
};

// Placeholder until the real production domain is known — update after first deploy.
export const SITE_URL = "https://sr-engineering-works.vercel.app";

export const BUSINESS = {
  name: "SR Engineering Works",
  prop: "Bhawar Singh",
  tagline:
    "Manufacturer of Hydraulic & Material Handling Equipment — Jaipur, since 10+ years",
  address: "60, Sana Dungar, Jaipur, Rajasthan - 302012",
  phones: [
    { display: "+91 84268 65871", tel: "+918426865871" },
    { display: "+91 94686 13064", tel: "+919468613064" },
    { display: "+91 82395 46188", tel: "+918239546188" },
  ] satisfies Phone[],
  whatsappNumber: "918426865871",
  hours: "Mon–Sat, 9 AM–7 PM",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  id: number;
  slug: string;
  name: string;
  capacity: string;
  description: string;
  features: [string, string, string, string];
  structure: string;
  power: string;
  warranty: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "hydraulic-scissor-lift",
    name: "Hydraulic Scissor Lift",
    capacity: "500 KG – 5000 KG",
    description:
      "Raises and lowers loads between floors, docks and mezzanines on a stable hydraulic platform. Built on heavy duty MS structure with safety railing and an emergency stop on every unit.",
    features: [
      "Capacities from 500 kg to 5000 kg",
      "Heavy duty MS structure",
      "Safety railing & emergency stop",
      "1 year warranty",
    ],
    structure: "Heavy Duty MS, powder coated",
    power: "Hydraulic power pack, 3-phase",
    warranty: "1 Year",
    image: "/products/hydraulic-scissor-lift.jpg",
  },
  {
    id: 2,
    slug: "hydraulic-goods-lift",
    name: "Hydraulic Goods Lift & Lift Table",
    capacity: "Up to 3000 KG",
    description:
      "Moves goods between levels or lifts them to working height for loading and unloading. Fixed or mobile lift table configurations built to your dock height.",
    features: [
      "Load capacity up to 3000 kg",
      "Fixed or mobile configurations",
      "Non-slip platform deck",
      "Installation & AMC support",
    ],
    structure: "Heavy Duty MS Structure",
    power: "Hydraulic, single/3-phase",
    warranty: "1 Year",
    image: "/products/hydraulic-goods-lift.jpg",
  },
  {
    id: 3,
    slug: "electro-platform-trolley",
    name: "Electro Platform Trolley",
    capacity: "Up to 1000 KG",
    description:
      "Battery and electric operated platform trolley for moving material across the shop floor without manual pushing. Built for repeated daily use.",
    features: [
      "Battery or electric operated",
      "Load capacity up to 1000 kg",
      "Heavy duty wheels",
      "Low-maintenance design",
    ],
    structure: "MS Chassis, heavy duty wheels",
    power: "Battery operated, electric drive",
    warranty: "1 Year",
    image: "/products/electro-platform-trolley.jpg",
  },
  {
    id: 4,
    slug: "industrial-loading-trolley",
    name: "Industrial Loading Trolley",
    capacity: "As per requirement",
    description:
      "A rugged trolley for heavy loading and unloading work, built on heavy duty wheels to move weight safely across uneven factory floors.",
    features: [
      "Heavy duty wheels",
      "Built for daily industrial use",
      "Custom deck sizes available",
      "Low-maintenance design",
    ],
    structure: "Heavy Duty MS Structure",
    power: "Manual / as per requirement",
    warranty: "1 Year",
    image: "/products/industrial-loading-trolley.jpg",
  },
  {
    id: 5,
    slug: "pneumatic-lifting-system",
    name: "Pneumatic Lifting System",
    capacity: "As per requirement",
    description:
      "Custom pneumatic lifting solution engineered around your load, cycle time and floor layout. Designed and fabricated in-house.",
    features: [
      "Custom-engineered to your load",
      "Pneumatic operation",
      "Designed for repeated cycles",
      "Installation & AMC support",
    ],
    structure: "As per requirement",
    power: "Pneumatic",
    warranty: "1 Year",
    image: "/products/pneumatic-lifting-system.jpg",
  },
  {
    id: 6,
    slug: "custom-fabrication-work",
    name: "Custom Fabrication Work",
    capacity: "As per drawing",
    description:
      "Send us your drawing and we fabricate it to spec, from one-off parts to full material handling equipment. Built in-house, tested before dispatch.",
    features: [
      "Built as per your drawing",
      "In-house fabrication",
      "Tested before dispatch",
      "Pan-India delivery",
    ],
    structure: "As per drawing",
    power: "As per requirement",
    warranty: "1 Year",
    image: "/products/custom-fabrication-work.jpg",
  },
];

export type Feature = {
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Heavy Duty MS Structure",
    description:
      "Every machine is built on heavy duty mild steel, made to handle daily industrial load.",
  },
  {
    title: "Safety Railing & Emergency Stop",
    description:
      "Safety railing and an emergency stop switch come standard, not as an add-on.",
  },
  {
    title: "1 Year Warranty",
    description:
      "Every machine ships with a 1 year warranty against manufacturing defects.",
  },
  {
    title: "Installation + AMC",
    description:
      "We install on-site and offer annual maintenance contracts to keep machines running.",
  },
  {
    title: "Pan-India Delivery",
    description: "We deliver and support customers across India, not just Jaipur.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement & Site Visit",
    description:
      "We visit your site and understand load, space and usage before designing anything.",
  },
  {
    step: "02",
    title: "Design & Fabrication",
    description:
      "Every machine is designed to your requirement and fabricated in-house on heavy duty MS structure.",
  },
  {
    step: "03",
    title: "Installation & Testing",
    description:
      "We install on-site and load-test the machine before handover.",
  },
  {
    step: "04",
    title: "AMC & Support",
    description:
      "Ongoing maintenance contracts and phone support keep your machine running.",
  },
];

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: BUSINESS.name,
    image: `${SITE_URL}/og.jpg`,
    url: SITE_URL,
    telephone: BUSINESS.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: "60, Sana Dungar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302012",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.9124,
      longitude: 75.7873,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    makesOffer: PRODUCTS.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p.name,
        description: p.description,
      },
    })),
  };
}
