import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";

export const alt = siteData.brand.name;
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
          background: "linear-gradient(135deg, #3b82f6, #a855f7)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Cairo",
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {siteData.brand.name}
        </h1>
        <p
          style={{
            fontSize: 40,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          تصميم مواقع وتطبيقات احترافية
        </p>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 20,
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}