import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The rules for using Pixels in Space.",
};

export default function TermsPage() {
  const lastUpdated = "April 2026";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-10 lg:px-0">
        <h1 className="mb-2 font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="prose-game space-y-6">
          <p>
            Welcome to Pixels in Space. By accessing the site you agree to these
            terms. If you don&rsquo;t, please don&rsquo;t use the site.
          </p>

          <h2>What we provide</h2>
          <p>
            Pixels in Space publishes gaming news, reviews, and related content.
            We do our best to keep information accurate, but games change, stores
            update prices, and humans make mistakes — we provide content
            &ldquo;as is&rdquo; without warranty of completeness or accuracy.
          </p>

          <h2>Content ownership</h2>
          <p>
            Articles, reviews, and original analysis on Pixels in Space are our
            content. You&rsquo;re welcome to share, quote short excerpts, and link
            back, but please don&rsquo;t republish full articles without
            permission.
          </p>
          <p>
            Game cover art, screenshots, trailers, and studio/publisher logos
            belong to their respective owners and are used under fair use for
            editorial coverage and criticism.
          </p>

          <h2>Comments</h2>
          <p>
            You can post comments without creating an account. When you post a
            comment, you agree that:
          </p>
          <ul>
            <li>You won&rsquo;t post spam, advertising, or malicious links.</li>
            <li>You won&rsquo;t post personal attacks, hate speech, or harassment.</li>
            <li>You won&rsquo;t impersonate another person.</li>
            <li>You won&rsquo;t post content you don&rsquo;t have rights to.</li>
            <li>
              We may remove any comment at our discretion, with or without notice,
              that we believe violates these rules.
            </li>
          </ul>

          <h2>External links</h2>
          <p>
            We link to external sites — store pages, trailers, critic aggregators,
            game wikis. We don&rsquo;t control those sites and aren&rsquo;t responsible
            for their content or practices. Follow external links at your own
            discretion.
          </p>

          <h2>Affiliate disclosure</h2>
          <p>
            Pixels in Space does not currently participate in affiliate programs
            and does not receive commissions from purchases. If that changes, we
            will disclose it clearly on affected pages.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            Use of the site is at your own risk. To the fullest extent allowed by
            law, Pixels in Space is not liable for any indirect, incidental, or
            consequential damages arising from your use of the site, its content,
            or any linked external resource.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Material changes will be
            noted on this page by updating the &ldquo;last updated&rdquo; date
            above. Continued use of the site after changes constitutes acceptance
            of the new terms.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
