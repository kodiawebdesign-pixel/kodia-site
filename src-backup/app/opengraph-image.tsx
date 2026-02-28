import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";

export const alt = `${siteData.brand.name} - تصميم وتطوير مواقع وتطبيقات احترافية`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* خلفية متحركة (عناصر زخرفية) */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        
        {/* الشعار */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 30,
            background: "rgba(255,255,255,0.2)",
            marginBottom: 20,
            border: "3px solid rgba(255,255,255,0.3)",
          }}
        >
          <span style={{ fontSize: 60, fontWeight: "bold", color: "white" }}>K</span>
        </div>

        {/* اسم الشركة */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            marginBottom: 10,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {siteData.brand.name}
        </h1>

        {/* الوصف */}
        <p
          style={{
            fontSize: 36,
            color: "rgba(255,255,255,0.95)",
            textAlign: "center",
            maxWidth: "80%",
            marginBottom: 30,
            lineHeight: 1.4,
          }}
        >
          تصميم مواقع • متاجر إلكترونية • تطبيقات موبايل
        </p>

        {/* شعارات الجودة */}
        <div
          style={{
            display: "flex",
            gap: 30,
            marginTop: 20,
          }}
        >
          {[
            { label: "UI/UX", color: "#f59e0b" },
            { label: "SEO", color: "#10b981" },
            { label: "Next.js", color: "#ffffff" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                borderRadius: 50,
                background: item.color,
                fontSize: 24,
                fontWeight: "bold",
                color: i === 2 ? "#8b5cf6" : "white",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* نقاط زخرفية */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 40,
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

        {/* رابط الموقع */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          kodia-web.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}