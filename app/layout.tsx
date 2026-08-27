import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://explore.yoga"),
  title: {
    default: "You were working with the body you could see.",
    template: "%s · explore.yoga",
  },
  description:
    "Four hundred teachers arrived here knowing exactly how to place a body. The training is about what's underneath it. Next intake: late 2026.",
  applicationName: "explore.yoga",
  authors: [{ name: "Miska Käppi" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://explore.yoga",
    siteName: "explore.yoga",
    title: "You were working with the body you could see.",
    description:
      "Four hundred teachers arrived here knowing exactly how to place a body. The training is about what's underneath it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "You were working with the body you could see.",
    description:
      "Four hundred teachers arrived here knowing exactly how to place a body. The training is about what's underneath it.",
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
