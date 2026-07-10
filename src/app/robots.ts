import type { MetadataRoute } from "next";

const siteUrl = "https://immunotrack.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/clinician/", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
