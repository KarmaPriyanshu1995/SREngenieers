import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export const dynamic = "force-static";

const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: BUILD_DATE,
  }));
}
