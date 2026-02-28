import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";

export const alt = `${siteData.brand.name} - تصميم وتطوير مواقع وتطبيقات احترافية`;
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a", // خلفية داكنة أنيقة
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* عناصر زخرفية في الخلفية */}
        <div
          style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ec4899, #f59e0b)",
            opacity: 0.3,
          }}
        />

        {/* البطاقة الرئيسية */}
        <div
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)",
            padding: "50px 100px",
            borderRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            border: "3px solid rgba(255,255,255,0.2)",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* أيقونة تويت */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              fontSize: 40,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            🐦
          </div>

          {/* الشعار */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
              borderRadius: 25,
              background: "rgba(255,255,255,0.2)",
              marginBottom: 20,
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            <span style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>K</span>
          </div>

          {/* اسم الشركة */}
          <h1
            style={{
              fontSize: 70,
              fontWeight: "bold",
              color: "white",
              marginBottom: 10,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {siteData.brand.name}
          </h1>

          {/* الحساب */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 5,
            }}
          >
            <span style={{ fontSize: 30, color: "rgba(255,255,255,0.9)" }}>
              @kodia_web_design
            </span>
          </div>

          {/* خط فاصل */}
          <div
            style={{
              width: 100,
              height: 3,
              background: "rgba(255,255,255,0.3)",
              margin: "25px 0 15px",
              borderRadius: 3,
            }}
          />

          {/* اختصاصات */}
          <div
            style={{
              display: "flex",
              gap: 15,
              fontSize: 20,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <span>#WebDesign</span>
            <span>#Ecommerce</span>
            <span>#MobileApps</span>
          </div>

          {/* أيقونة تويتر في الأسفل */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              fontSize: 30,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            ✦ ✦ ✦
          </div>
        </div>

        {/* علامة مائية خفيفة */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            fontSize: 16,
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Kodia Web Design
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}