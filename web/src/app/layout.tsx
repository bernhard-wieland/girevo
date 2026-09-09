import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { jsonLd, organizationLd, websiteLd } from "@/lib/structuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
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
    url: "https://girevo.de",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script {...jsonLd([organizationLd(), websiteLd()])} />
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <div id="inhalt" className="grow">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
