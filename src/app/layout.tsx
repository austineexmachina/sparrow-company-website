import type { Metadata } from "next";
import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sparrow-company-website.austinechibueze905.workers.dev"),
  title: "Sparrow Love Edit | Building the Future of Global Entertainment",
  description: "A UK-focused, globally ambitious entertainment technology company building AI-powered creative software and a connected global entertainment ecosystem.",
  openGraph: {
    title: "Sparrow Love Edit | Building the Future of Global Entertainment",
    description: "UK-focused. Globally ambitious. Building the next generation of creative and entertainment technology.",
    images: ["/images/Sparrow%20Love%20Edit%20Campus%20Celebration%282%29.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sparrow Love Edit",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sparrow-company-website.austinechibueze905.workers.dev",
  description: "A UK-focused, globally ambitious entertainment technology company. UK incorporation is planned for 2027.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <header className="header"><div className="wrap head"><Link className="brand" href="/">Sparrow Love Edit</Link><SiteNavigation /></div></header>
        {children}
        <footer><div className="wrap"><strong>Sparrow Love Edit</strong><p>UK incorporation planned for 2027 · Building for creators and audiences worldwide</p><p><Link href="/about">About</Link> · <Link href="/contact">Contact</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></p></div></footer>
      </body>
    </html>
  );
}