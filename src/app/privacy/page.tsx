import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy Draft | Sparrow Love Edit",
  description: "Draft privacy information for the Sparrow Love Edit company website, pending founder and legal review.",
};

export default function PrivacyPage() {
  return (
    <main className="wrap section page-enter about-page">
      <header className="about-intro">
        <p className="eyebrow">Sparrow Love Edit</p>
        <span className="label">Draft for founder and legal review</span>
        <h1>Privacy Policy</h1>
        <p><strong>This is a draft, not an approved privacy notice.</strong> It summarizes data handling visible in the current company website implementation. It should be reviewed and approved before being presented as final policy.</p>
      </header>

      <section className="about-block">
        <h2>Information submitted to the website</h2>
        <p><strong>Waitlist:</strong> The waitlist form requests a full name and email address. The server validates the fields, normalizes the email address for duplicate detection, and records the name, email, and registration time in the website&apos;s SQL waitlist database. The form does not request a password or create a login account.</p>
        <p><strong>Company enquiries:</strong> The Contact form requests a full name, email address, enquiry category, and message; company or organization is optional. The Contact endpoint validates the submission and applies rate limiting. When email delivery is configured, the enquiry is sent through Resend. The Contact endpoint does not save enquiry messages to the waitlist database. If delivery is unavailable, the endpoint rejects the submission and the site does not show a success confirmation.</p>
      </section>

      <section className="about-block">
        <h2>Storage and service providers</h2>
        <p>Waitlist registrations are stored in a server-side SQLite database outside the website&apos;s public files. The Contact form may transmit enquiry details to Resend for email delivery when that provider is configured.</p>
        <p>The website endpoints use a SHA-256 hash of the request network address for shared, short-lived rate limiting. The raw network address is not stored in the rate-limit table. Rate-limit records expire after 24 hours and are separate from waitlist registrations.</p>
      </section>

      <section className="about-block">
        <h2>Details requiring approval</h2>
        <p>This draft does not establish a retention period, deletion process, privacy-request contact, hosting-log practices, cookie or analytics inventory, international-transfer details, or applicable legal jurisdiction. Those details must be confirmed by Sparrow Love Edit before an approved policy is published.</p>
      </section>
    </main>
  );
}
