import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pixels in Space handles your information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 2026";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-10 lg:px-0">
        <h1 className="mb-2 font-[family-name:var(--font-gaming)] text-3xl font-black uppercase tracking-wider text-white">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="prose-game space-y-6">
          <p>
            Pixels in Space (&ldquo;we&rdquo;, &ldquo;the site&rdquo;) is a gaming news and reviews
            publication. This policy explains what information we collect, how we use
            it, and what choices you have.
          </p>

          <h2>Information we collect</h2>
          <p>
            We try to collect the bare minimum. The site has no user accounts and
            no logins. The only data that leaves your browser for our servers is:
          </p>
          <ul>
            <li>
              <strong>Comments</strong> — when you post a comment on an article or
              review, we store the name you chose to display and the comment text.
              No email or contact details are required or collected.
            </li>
            <li>
              <strong>Anonymous analytics</strong> — we use Vercel Analytics to
              measure how many visits each page receives. Vercel Analytics is
              cookie-less and does not identify individual visitors; it aggregates
              pageviews only. See{" "}
              <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel&rsquo;s privacy policy
              </a>.
            </li>
          </ul>

          <h2>What we do NOT collect</h2>
          <ul>
            <li>No advertising trackers or third-party ad cookies.</li>
            <li>No email addresses, phone numbers, or payment details.</li>
            <li>No newsletter subscriptions (we don&rsquo;t run one).</li>
            <li>No cross-site tracking or behavioral profiling.</li>
          </ul>

          <h2>Third-party content</h2>
          <p>
            Articles and reviews may embed content from third parties such as
            YouTube trailers, Steam store images, and game publisher screenshots.
            When you view an embedded YouTube video, YouTube may set its own
            cookies and collect data according to Google&rsquo;s privacy policy.
            Clicking a link to an external site (e.g. Steam, Metacritic, Google
            search) takes you to a site governed by its own privacy policy.
          </p>

          <h2>Cookies</h2>
          <p>
            Pixels in Space does not set any first-party cookies. Embedded third
            parties (YouTube, for instance) may set their own cookies only when
            you interact with their content.
          </p>

          <h2>Data retention</h2>
          <p>
            Comments remain on the site indefinitely unless they violate our
            Terms of Service or you ask us to remove a specific comment.
          </p>

          <h2>Your choices</h2>
          <p>
            Since we collect so little, there&rsquo;s not much to opt out of. If
            you&rsquo;d like a comment you posted removed, contact us with the
            article URL and the name you used. We&rsquo;ll take it down as soon as
            we can verify the request.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change this policy, we&rsquo;ll update the &ldquo;last updated&rdquo;
            date above. For material changes, we&rsquo;ll also note them on the
            homepage for a short period.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
