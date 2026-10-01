import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { PROGRAM_NAME, intakeLine } from "@/lib/intake";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const ui = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const title = `${PROGRAM_NAME} with Miska Käppi`;
const description = `Miska Käppi's ${PROGRAM_NAME}: what's underneath the body you can see. Over four hundred teachers have studied with him. ${intakeLine()}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://explore.yoga"),
  title: {
    default: title,
    template: "%s · explore.yoga",
  },
  description,
  applicationName: "explore.yoga",
  authors: [{ name: "Miska Käppi" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://explore.yoga",
    siteName: "explore.yoga",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e100c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${ui.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-field font-serif text-ink">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
