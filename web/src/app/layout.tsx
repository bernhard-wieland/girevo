import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_NAME = "Kettlebell Einstieg";

export const metadata: Metadata = {
  metadataBase: new URL("https://kettlebell-einstieg.de"),
  title: {
    default: `${SITE_NAME} — der erste Monat mit der Kettlebell`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Ein ruhiger Einstieg in die ersten Wochen mit der Kettlebell: Startgewicht per Selbsttest bestimmen und eine erste Struktur finden.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
