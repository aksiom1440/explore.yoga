import { ImageResponse } from "next/og";

export const alt =
  "So you want to learn tantra yoga? A reading map from three starting points to the traditional texts.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#e7e3d6";
const signal = "#c5d0ae";
const quiet = "#8d8a7c";
const line = "#4f5249";

function Pill({ children, strong }: { children: string; strong?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        border: `1.5px solid ${strong ? signal : line}`,
        borderRadius: 999,
        padding: "10px 22px",
        fontSize: 25,
        whiteSpace: "nowrap",
        color: strong ? signal : ink,
      }}
    >
      {children}
    </div>
  );
}

function Stub({ height = 34 }: { height?: number }) {
  return <div style={{ width: 1.5, height, background: line }} />;
}

export default function BooksImage() {
  const doors = ["New to yoga", "Into spirituality", "The scientific approach"];
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
          padding: "56px 70px 64px",
          color: ink,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.32em",
            color: signal,
            textTransform: "lowercase",
          }}
        >
          explore.yoga
        </div>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          So you want to learn tantra yoga?
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", width: 1060 }}>
            {doors.map((door) => (
              <div
                key={door}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 1060 / 3,
                }}
              >
                <Pill>{door}</Pill>
                <Stub />
              </div>
            ))}
          </div>
          <div style={{ width: (1060 * 2) / 3, height: 1.5, background: line }} />
          <Stub />
          <Pill strong>You&apos;re ready for tantra</Pill>
          <Stub />
          <div style={{ display: "flex", fontSize: 26, color: quiet }}>
            Woodroffe · mantra · Sanskrit · the shaiva tantras · the hatha texts
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
