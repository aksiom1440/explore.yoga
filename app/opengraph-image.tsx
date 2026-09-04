import { ImageResponse } from "next/og";
import { PROGRAM_NAME, formingLine, priceLine } from "@/lib/intake";

export const alt = "You were working with the body you could see.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e100c",
          padding: "72px 80px",
          color: "#e7e3d6",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.32em",
            color: "#c5d0ae",
            textTransform: "lowercase",
            fontFamily: "Georgia, serif",
          }}
        >
          explore.yoga
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              fontFamily: "Georgia, serif",
              maxWidth: 980,
            }}
          >
            You were working with the body you could see.
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#8d8a7c",
              fontFamily: "Georgia, serif",
              maxWidth: 720,
            }}
          >
            {`${PROGRAM_NAME}. ${priceLine()}. ${formingLine()}`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
