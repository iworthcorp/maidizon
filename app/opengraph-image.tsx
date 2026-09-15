import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5c4d7a 0%, #473c60 60%, #4a3f5c 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            color: "#8b6fc9",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          ENTREPRENEURSHIP · BUSINESS COACHING · GROWTH STRATEGY
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#f9f6fd",
            letterSpacing: 4,
          }}
        >
          MAI DIZON
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            width: 160,
            height: 4,
            background: "#8b6fc9",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
