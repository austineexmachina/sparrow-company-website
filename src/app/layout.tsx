import type { Metadata } from "next";
import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sparrow Love Edit is almost here",
  description: "A coming-soon company website for Sparrow Love Edit.",
  openGraph: {
    title: "Sparrow Love Edit is almost here",
    description: "A new chapter in creative storytelling.",
    images: ["/images/Sparrow%20Love%20Edit%20Campus%20Celebration%282%29.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sparrow Love Edit",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <header className="header">
          <div className="wrap head">
            <Link className="brand" href="/">Sparrow Love Edit</Link>
            <SiteNavigation />
          </div>
        </header>
        {children}
        <footer>
          <div className="wrap">
            <strong>Sparrow Love Edit</strong>
            <p><Link href="/about">About</Link> · <Link href="/contact">Contact</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
