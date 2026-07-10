import type { MetadataRoute } from "next";

const siteUrl = "https://immunotrack.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/clinicians", priority: 0.9, changeFrequency: "monthly" },
    { path: "/patients", priority: 0.9, changeFrequency: "monthly" },
    { path: "/download", priority: 0.8, changeFrequency: "monthly" },
    { path: "/clinicians/onboarding", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/support", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
