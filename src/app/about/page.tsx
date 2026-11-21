import { ScrollReveal } from "@/components/scroll-reveal";

export default function About() {
  return (
    <main className="wrap section page-enter about-page">
      <ScrollReveal className="about-intro-reveal">
        <header className="about-intro">
          <p className="eyebrow">About Sparrow Love Edit</p>
          <h1><span className="about-heading-mask"><span>Building the Future of Global Entertainment</span></span></h1>
          <p><strong>Sparrow Love Edit</strong> is a UK-focused, globally ambitious entertainment technology company building an ecosystem designed to connect creative software, AI-assisted production, animation, film, social entertainment and streaming.</p>
          <p>Our initial product, Sparrow Creator Studio, is being developed to help creators produce digital content through intelligent creative tools. Our longer-term vision is to connect creators, studios, entertainment businesses and audiences across international markets.</p>
          <p>We believe the future of entertainment will be shaped by technology that empowers human imagination, makes professional creative workflows more accessible and connects great stories with audiences worldwide.</p>
        </header>
      </ScrollReveal>
      <div className="about-pillar-grid">
        <ScrollReveal className="about-reveal"><section className="about-block"><h2><span className="about-heading-mask"><span>Our Vision</span></span></h2><p>To build a globally recognised entertainment technology ecosystem connecting the people, tools and experiences behind the next generation of digital entertainment.</p></section></ScrollReveal>
        <ScrollReveal className="about-reveal" delayMs={70}><section className="about-block"><h2><span className="about-heading-mask"><span>Our Mission</span></span></h2><p>To develop intelligent, accessible and connected creative technologies that help individuals and businesses turn ideas into compelling digital experiences.</p></section></ScrollReveal>
      </div>
      <ScrollReveal className="about-reveal about-technology"><section className="about-block"><h2><span className="about-heading-mask"><span>Our Technology and Ecosystem</span></span></h2><p>Sparrow's staged product vision encompasses AI-powered creative software, professional editing workflows, film production, animation, creator communities, live experiences and future entertainment distribution.</p><p>Sparrow Creator Studio is our initial product. Other studios and audience-facing experiences remain part of our longer-term roadmap and will be developed in stages.</p></section></ScrollReveal>
      <ScrollReveal className="about-reveal about-leadership"><section className="about-block leadership-panel"><h2><span className="about-heading-mask"><span>Leadership</span></span></h2><p><strong>Chibueze Austine (AUSTINGREATLEO)</strong></p><p><em>Founder &mdash; Sparrow Love Edit</em></p><p>Chibueze Austine is leading Sparrow's product direction and company vision, building towards a globally relevant entertainment technology ecosystem.</p></section></ScrollReveal>
      <ScrollReveal className="about-reveal about-global"><section className="about-block"><h2><span className="about-heading-mask"><span>Our UK and Global Ambition</span></span></h2><p>Sparrow intends to establish the United Kingdom as its incorporation and strategic business base in 2027. The company is currently pre-incorporation; this is a planned milestone, not an existing UK registration or office.</p><p>From this intended UK base, Sparrow aims to serve creators, studios, entertainment businesses and audiences across the UK and international markets.</p><p>We welcome opportunities to connect with technical leaders, industry partners and investors who share our vision for the future of global entertainment.</p><p><strong>Sparrow Love Edit — Building the Future of Global Entertainment.</strong></p></section></ScrollReveal>
    </main>
  );
}