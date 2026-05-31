import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - TimeTank",
  description:
    "Terms of Service for TimeTank, an iOS productivity app by Ephesian28 LLC.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <article className="legal-shell">
        <Link className="back-link" href="/">
          Back to TimeTank
        </Link>
        <p className="eyebrow">Effective date: May 31, 2026</p>
        <h1>Terms of Service</h1>
        <p>
          These Terms of Service govern your use of TimeTank, an iOS
          productivity app operated by Ephesian28 LLC. By using TimeTank, you
          agree to these Terms.
        </p>

        <h2>Use Of TimeTank</h2>
        <p>
          TimeTank helps you set app budgets, manage selected apps through
          Apple&apos;s Screen Time APIs, and build healthier phone habits. You agree
          to use TimeTank lawfully and only for personal productivity purposes.
        </p>

        <h2>Not Medical Or Professional Advice</h2>
        <p>
          TimeTank is a productivity tool. It is not medical, mental health,
          counseling, or professional advice. If your screen use is causing
          significant distress or impairment, consider speaking with a qualified
          professional.
        </p>

        <h2>Apple Services And Permissions</h2>
        <p>
          TimeTank relies on Apple frameworks such as FamilyControls,
          ManagedSettings, and DeviceActivity. Some features may require iOS
          permissions, Screen Time authorization, compatible devices, widgets, or
          system settings controlled by Apple. Ephesian28 LLC is not responsible
          for outages, restrictions, or changes to Apple services.
        </p>

        <h2>Your Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Using TimeTank in a lawful and responsible manner</li>
          <li>Choosing budgets and settings that are appropriate for you</li>
          <li>Maintaining access to your device and Apple ID</li>
          <li>Complying with applicable App Store terms and Apple policies</li>
        </ul>

        <h2>Purchases And Subscriptions</h2>
        <p>
          If TimeTank offers paid features, purchases will be processed through
          Apple&apos;s App Store. Apple handles payment, renewal, cancellation, and
          refund requests according to Apple&apos;s terms. TimeTank will not charge
          you outside the App Store for iOS app purchases.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          TimeTank, Finn, the TimeTank name, app design, copy, graphics, and
          related content are owned by Ephesian28 LLC or its licensors. You may
          not copy, modify, distribute, reverse engineer, or create derivative
          works from TimeTank except as allowed by law.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Interfere with or disrupt TimeTank&apos;s functionality</li>
          <li>Attempt to bypass technical limits in an unauthorized way</li>
          <li>Use TimeTank to violate another person&apos;s rights</li>
          <li>Misrepresent your relationship with Ephesian28 LLC</li>
        </ul>

        <h2>Disclaimers</h2>
        <p>
          TimeTank is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee
          that TimeTank will be uninterrupted, error-free, or meet every
          productivity goal. Screen Time enforcement may depend on iOS behavior,
          device settings, and permissions.
        </p>

        <h2>Limitation Of Liability</h2>
        <p>
          To the fullest extent permitted by law, Ephesian28 LLC will not be
          liable for indirect, incidental, special, consequential, or punitive
          damages, or for loss of data, profits, goodwill, or productivity,
          arising from your use of TimeTank.
        </p>

        <h2>Termination</h2>
        <p>
          You may stop using TimeTank at any time. We may suspend or terminate
          access to TimeTank if we believe you have violated these Terms or if
          required by law.
        </p>

        <h2>Changes To These Terms</h2>
        <p>
          We may update these Terms as TimeTank changes. If changes are
          material, we will update the effective date and provide notice where
          required by law. Continued use of TimeTank after changes means you
          accept the updated Terms.
        </p>

        <h2>Contact</h2>
        <p>
          Ephesian28 LLC
          <br />
          Support:{" "}
          <a href="mailto:timetankap@yahoo.com">timetankap@yahoo.com</a>
        </p>
      </article>
    </main>
  );
}
