// scripts/generate-sitemap.js
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const BASE_URL = "https://www.claveverde.com";
const roomIds = ["67f7647c197ac559e4089b96", "67f76452197ac559e4089b8e", "67f76406197ac559e4089b82"];

const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/rooms", changefreq: "weekly", priority: 0.9 },
  { path: "/politicas-privacidad", changefreq: "monthly", priority: 0.8 },
  { path: "/terminos-condiciones", changefreq: "monthly", priority: 0.8 },
  { path: "/faq", changefreq: "monthly", priority: 0.6 },
];

const dynamicRoutes = roomIds.map((id) => ({
  path: `/rooms/${id}`,
  changefreq: "weekly",
  priority: 0.7,
}));

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = resolve(__dirname, "../public/sitemap.xml");

writeFileSync(publicPath, sitemapContent.trim());
console.log("✅ sitemap.xml generado en /public");
