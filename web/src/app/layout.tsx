import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const SITE_NAME = "girevo";

export const metadata: Metadata = {
  metadataBase: new URL("https://girevo.de"),
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
    <html lang="de" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
