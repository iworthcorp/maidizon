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
          background: "linear-gradient(135deg, #0b1c30 0%, #071220 60%, #15171c 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            color: "#c6a15b",
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
            color: "#f7f4ee",
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
            background: "#c6a15b",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
