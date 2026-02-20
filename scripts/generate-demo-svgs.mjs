import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public", "images", "demos");

// ضع هنا كل slugs الموجودة عندك (أنا كتبتهم لك جاهزين)
const slugs = [
  "nexa-construction",
  "prime-dental-clinic",
  "skyline-logistics",
  "urbanwear-store",
  "gadgethub",
  "beautybox",
  "niletrip-tours",
  "sinai-camp",
  "cairo-heritage",
  "learnify-academy",
  "quranic-path",
  "codestart-kids",
  "fittrack-app",
  "foodie-delivery",
  "clinic-booking",
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function svgTemplate({ title, variant, badge }) {
  // 3 Variants مختلفة في الشكل
  if (variant === 1) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f1f5f9"/>
      <stop offset="1" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="700" fill="url(#g1)"/>
  <rect x="70" y="60" width="1060" height="580" rx="30" fill="#ffffff" opacity="0.92"/>
  <rect x="110" y="105" width="980" height="52" rx="16" fill="#0f172a" opacity="0.08"/>
  <rect x="130" y="122" width="180" height="18" rx="9" fill="#0f172a" opacity="0.16"/>
  <rect x="330" y="122" width="110" height="18" rx="9" fill="#0f172a" opacity="0.10"/>
  <rect x="460" y="122" width="110" height="18" rx="9" fill="#0f172a" opacity="0.10"/>

  <rect x="110" y="190" width="680" height="360" rx="24" fill="#0f172a" opacity="0.05"/>
  <rect x="820" y="190" width="270" height="170" rx="24" fill="#0f172a" opacity="0.06"/>
  <rect x="820" y="380" width="270" height="170" rx="24" fill="#0f172a" opacity="0.06"/>

  <text x="130" y="610" font-family="Arial, sans-serif" font-size="28" fill="#0f172a" opacity="0.75">${title}</text>
  <text x="130" y="645" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" opacity="0.45">${badge}</text>
</svg>`;
  }

  if (variant === 2) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#eef2ff"/>
      <stop offset="1" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="700" fill="url(#g2)"/>
  <rect x="80" y="70" width="1040" height="560" rx="32" fill="#ffffff" opacity="0.92"/>

  <circle cx="1020" cy="150" r="85" fill="#0f172a" opacity="0.06"/>
  <circle cx="940" cy="200" r="55" fill="#0f172a" opacity="0.05"/>

  <rect x="130" y="130" width="520" height="26" rx="13" fill="#0f172a" opacity="0.16"/>
  <rect x="130" y="175" width="760" height="18" rx="9" fill="#0f172a" opacity="0.10"/>
  <rect x="130" y="210" width="640" height="18" rx="9" fill="#0f172a" opacity="0.08"/>

  <rect x="130" y="270" width="940" height="320" rx="26" fill="#0f172a" opacity="0.05"/>

  <text x="130" y="610" font-family="Arial, sans-serif" font-size="28" fill="#0f172a" opacity="0.75">${title}</text>
  <text x="130" y="645" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" opacity="0.45">${badge}</text>
</svg>`;
  }

  // variant 3
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f8fafc"/>
      <stop offset="1" stop-color="#f1f5f9"/>
    </linearGradient>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M36 0H0V36" fill="none" stroke="#cbd5e1" stroke-width="1" opacity="0.5"/>
    </pattern>
  </defs>

  <rect width="1200" height="700" fill="url(#g3)"/>
  <rect width="1200" height="700" fill="url(#grid)" opacity="0.35"/>

  <rect x="90" y="80" width="1020" height="540" rx="30" fill="#ffffff" opacity="0.92"/>

  <rect x="140" y="130" width="420" height="26" rx="13" fill="#0f172a" opacity="0.16"/>
  <rect x="140" y="175" width="640" height="18" rx="9" fill="#0f172a" opacity="0.10"/>

  <rect x="140" y="235" width="320" height="170" rx="22" fill="#0f172a" opacity="0.06"/>
  <rect x="480" y="235" width="320" height="170" rx="22" fill="#0f172a" opacity="0.06"/>
  <rect x="820" y="235" width="250" height="170" rx="22" fill="#0f172a" opacity="0.06"/>

  <rect x="140" y="430" width="930" height="150" rx="24" fill="#0f172a" opacity="0.05"/>

  <text x="140" y="610" font-family="Arial, sans-serif" font-size="28" fill="#0f172a" opacity="0.75">${title}</text>
  <text x="140" y="645" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" opacity="0.45">${badge}</text>
</svg>`;
}

function writeDemoSvgs(slug) {
  const title = titleFromSlug(slug);

  const variants = [
    { n: 1, badge: "Homepage • Demo UI" },
    { n: 2, badge: "Services • Demo UI" },
    { n: 3, badge: "Contact • Demo UI" },
  ];

  for (const v of variants) {
    const svg = svgTemplate({ title, variant: v.n, badge: v.badge });
    const outPath = path.join(OUT_DIR, `${slug}-${v.n}.svg`);
    fs.writeFileSync(outPath, svg, "utf8");
  }
}

ensureDir(OUT_DIR);

for (const slug of slugs) {
  writeDemoSvgs(slug);
}

console.log(`✅ Generated ${slugs.length * 3} demo SVGs in: public/images/demos`);
