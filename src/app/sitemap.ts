import { MetadataRoute } from "next";
import { PRODUCT_CATEGORIES } from "@/data/productsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.abcbrass.com";

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/oem-solutions",
    "/manufacturing",
    "/quality",
    "/applications",
    "/resources",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const categoryRoutes = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
