import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

const categories = [
  [
    "Investment & Strategic Partnerships",
    "Explore investment discussions, strategic collaborations and opportunities to support Sparrow Love Edit's long-term vision.",
  ],
  [
    "Technology & Cofounder Opportunities",
    "Connect with Sparrow Love Edit to explore technical leadership, engineering collaboration and cofounder opportunities.",
  ],
  [
    "Business & Entertainment Partnerships",
    "Enquiries from aviation companies, film studios, talent agencies, entertainment organizations and other potential business partners.",
  ],
  [
    "Media & Corporate Communications",
    "For press enquiries, interviews, company information and corporate communications.",
  ],
  [
    "Creator & Community Relations",
    "Connect with us about Sparrow's creative ecosystem, future creator opportunities and community initiatives.",
  ],
];

export default function Contact() {
  return (
    <main className="wrap section page-enter contact-page">
      <p className="eyebrow">Contact Sparrow Love Edit</p>
      <h1>Let&apos;s Build the Future of Creativity Together.</h1>
      <p><strong>Connecting Ideas. Empowering Innovation. Creating Global Opportunities.</strong></p>
      <p>Sparrow Love Edit welcomes enquiries from investors, strategic partners, technology leaders, entertainment companies, creators and media organizations worldwide.</p>
      <p>We believe meaningful partnerships and ambitious ideas are essential to building the next generation of creative technology and digital entertainment.</p>
      <h2>Connect With Our Company</h2>
      <div className="cards contact-category-grid">
        {categories.map(([title, description], index) => (
          <ScrollReveal className="card-reveal" delayMs={index * 55} key={title}>
            <article className="card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <h2>Send Us an Enquiry</h2>
      <ScrollReveal className="contact-form-reveal">
        <ContactForm />
      </ScrollReveal>
      <h2>Our Global Vision</h2>
      <p>Sparrow Love Edit is building toward an international future in creative technology, digital media and entertainment.</p>
      <p>We welcome meaningful connections with individuals and organizations who share our ambition.</p>
      <p><strong>Sparrow Love Edit — Where Creativity Takes Flight.</strong></p>
    </main>
  );
}
