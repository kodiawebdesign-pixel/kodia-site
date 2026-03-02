import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";

export const alt = siteData.brand.name;
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
          background: "#1f2937",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Cairo",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6, #a855f7)",
            padding: "40px 80px",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "white",
              marginBottom: 10,
            }}
          >
            {siteData.brand.name}
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            @kodia_web_design
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}