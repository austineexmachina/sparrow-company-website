import { ScrollReveal } from "@/components/scroll-reveal";

export default function About() {
  return (
    <main className="wrap section page-enter about-page">
      <ScrollReveal className="about-intro-reveal">
        <header className="about-intro">
          <p className="eyebrow">About Sparrow Love Edit</p>
          <h1><span className="about-heading-mask"><span>Building the Future of Digital Creativity and Entertainment</span></span></h1>
          <p><strong>Sparrow Love Edit</strong> is an emerging creative technology company developing an ambitious ecosystem designed to transform how people create, produce, connect and experience digital entertainment.</p>
          <p>Our vision is to bring intelligent video editing, cinematic storytelling, animation, livestreaming and creator-focused digital experiences into a connected creative ecosystem.</p>
          <p>We believe the future of entertainment will be shaped by technology that empowers human imagination, expands creative opportunities and makes professional creative experiences more accessible to people around the world.</p>
        </header>
      </ScrollReveal>

      <div className="about-pillar-grid">
        <ScrollReveal className="about-reveal">
          <section className="about-block">
            <h2><span className="about-heading-mask"><span>Our Vision</span></span></h2>
            <p>To establish Sparrow Love Edit as a globally recognized creative technology and digital entertainment company, empowering the next generation of creators, filmmakers, animators and digital entrepreneurs.</p>
          </section>
        </ScrollReveal>
        <ScrollReveal className="about-reveal" delayMs={70}>
          <section className="about-block">
            <h2><span className="about-heading-mask"><span>Our Mission</span></span></h2>
            <p>To develop intelligent, accessible and innovative creative technologies that help individuals and businesses turn ideas into compelling digital experiences.</p>
          </section>
        </ScrollReveal>
      </div>

      <ScrollReveal className="about-reveal about-technology">
        <section className="about-block">
          <h2><span className="about-heading-mask"><span>Our Technology and Ecosystem</span></span></h2>
          <p>Sparrow Love Edit&apos;s development vision encompasses AI-assisted video editing, digital filmmaking, animation, creator communities, livestreaming and entertainment industry connectivity.</p>
          <p>Through continuous innovation, our ambition is to build a scalable global platform serving creators, entertainment professionals and businesses.</p>
        </section>
      </ScrollReveal>

      <ScrollReveal className="about-reveal about-leadership">
        <section className="about-block leadership-panel">
          <h2><span className="about-heading-mask"><span>Leadership</span></span></h2>
          <p><strong>AUSTINGREATLEO</strong></p>
          <p><em>Founder &mdash; Sparrow Love Edit</em></p>
          <p>AUSTINGREATLEO is the founder of Sparrow Love Edit, leading the company&apos;s vision to develop a globally relevant creative technology and digital entertainment ecosystem.</p>
        </section>
      </ScrollReveal>

      <ScrollReveal className="about-reveal about-global">
        <section className="about-block">
          <h2><span className="about-heading-mask"><span>Our Global Ambition</span></span></h2>
          <p>Sparrow Love Edit is being developed with an international outlook, focused on long-term innovation, strategic partnerships, technical excellence and sustainable growth.</p>
          <p>We welcome opportunities to connect with technical cofounders, industry partners and investors who share our vision for the future of digital creativity.</p>
          <p><strong>Sparrow Love Edit &mdash; Where Creativity Takes Flight.</strong></p>
        </section>
      </ScrollReveal>
    </main>
  );
}
