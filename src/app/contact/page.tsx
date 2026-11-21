import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

const categories = [
  ["Investment & Strategic Partnerships", "For investment discussions, strategic collaborations and opportunities to support Sparrow Love Edit's long-term vision."],
  ["Technology & Cofounder Opportunities", "For technical leadership, engineering collaboration and cofounder opportunities."],
  ["Business & Entertainment Partnerships", "For film studios, talent agencies, media businesses, technology companies and international partners."],
  ["Media & Corporate Communications", "For press enquiries, interviews, company information and corporate communications."],
  ["Creator & Community Relations", "For enquiries about Sparrow's creative ecosystem, future creator opportunities and community initiatives."],
];

export default function Contact() {
  return (
    <main className="wrap section page-enter contact-page">
      <p className="eyebrow">Contact Sparrow Love Edit</p>
      <h1>Let&apos;s Build the Future of Global Entertainment.</h1>
      <p><strong>UK-focused. Globally ambitious. Open to meaningful partnerships worldwide.</strong></p>
      <p>Sparrow welcomes enquiries from investors, strategic partners, technology leaders, entertainment companies, creators and media organisations across the UK and international markets.</p>
      <p>Our intended UK incorporation and strategic business base is planned for 2027. Sparrow is currently pre-incorporation.</p>
      <h2>Connect With Our Company</h2>
      <div className="cards contact-category-grid">{categories.map(([title, description], index) => <ScrollReveal className="card-reveal" delayMs={index * 55} key={title}><article className="card"><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div>
      <h2>Send Us an Enquiry</h2>
      <ScrollReveal className="contact-form-reveal"><ContactForm /></ScrollReveal>
      <h2>Our Global Vision</h2>
      <p>Sparrow is building towards an international future in creative technology, digital media and entertainment, with the United Kingdom as its intended incorporation and strategic business base from 2027.</p>
      <p>We welcome meaningful connections with individuals and organisations who share our ambition to shape the future of global entertainment.</p>
      <p><strong>Sparrow Love Edit — Building the Future of Global Entertainment.</strong></p>
    </main>
  );
}