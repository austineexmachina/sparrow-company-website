import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service Draft | Sparrow Love Edit",
  description: "Draft terms information for the Sparrow Love Edit company website, pending founder and legal review.",
};

export default function TermsPage() {
  return (
    <main className="wrap section page-enter about-page">
      <header className="about-intro">
        <p className="eyebrow">Sparrow Love Edit</p>
        <span className="label">Draft for founder and legal review</span>
        <h1>Terms of Service</h1>
        <p><strong>This is a draft for review, not approved or finalized terms.</strong> It describes the current website at a high level and identifies provisions that require founder and legal approval before publication.</p>
      </header>

      <section className="about-block">
        <h2>Company website</h2>
        <p>This site provides company information about Sparrow Love Edit and its vision. References to future products and experiences describe plans or areas of interest; they do not mean that a production service is currently available through this website.</p>
      </section>

      <section className="about-block">
        <h2>Waitlist and enquiries</h2>
        <p>Submitting the waitlist form records a name and email address as an expression of interest. It does not create a user account or provide access to a production application. The Contact form is for company enquiries; when delivery is configured, messages are sent through the website&apos;s email provider. A submission is not confirmed by the site unless its response says it was accepted.</p>
      </section>

      <section className="about-block">
        <h2>Items to finalize</h2>
        <p>This draft does not set binding rules about intellectual property, acceptable use, warranties, liability, suspension, disputes, governing law, company legal identity, or effective date. Sparrow Love Edit must decide and approve those terms with qualified legal advice before this page is treated as an agreement.</p>
      </section>
    </main>
  );
}
