import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pixels in Space — general enquiries, press, advertising, and tips.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-10 lg:px-0">
        <div className="mb-10">
          <h1 className="mb-2 font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">
            Contact Us
          </h1>
          <p className="text-slate-300">
            Got a tip, a press enquiry, or just want to say hi? Drop us a note
            below and we&rsquo;ll get back to you as soon as we can.
          </p>
        </div>

        <ContactForm />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <InfoBox title="Press & Review Copies">
            Sending review codes, press releases, or asking about embargoes?
            Select &ldquo;Press&rdquo; from the category dropdown so we can
            prioritize your note.
          </InfoBox>
          <InfoBox title="Advertising & Partnerships">
            We don&rsquo;t currently run ads, but we&rsquo;re open to discussing
            sponsorships for the right fit. Pick &ldquo;Advertising&rdquo; to
            route your message.
          </InfoBox>
          <InfoBox title="News Tips">
            Saw a rumor, leak, or story worth covering? Use the &ldquo;Tip&rdquo;
            category. We take tips seriously and won&rsquo;t reveal your identity
            without permission.
          </InfoBox>
          <InfoBox title="Everything Else">
            Feedback, corrections, feature requests — &ldquo;General&rdquo; is
            the right category. Typical response time is 2–3 business days.
          </InfoBox>
        </div>
      </main>
      <Footer />
    </>
  );
}

function InfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="dark-card rounded-xl p-5">
      <h3 className="mb-2 font-[family-name:var(--font-gaming)] text-sm font-bold uppercase tracking-wider text-[#22d3ee]">
        {title}
      </h3>
      <p className="text-sm text-slate-400">{children}</p>
    </div>
  );
}
