import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - TimeTank",
  description:
    "Privacy Policy for TimeTank, an iOS productivity app by Ephesian28 LLC.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="legal-shell">
        <Link className="back-link" href="/">
          Back to TimeTank
        </Link>
        <p className="eyebrow">Effective date: May 31, 2026</p>
        <h1>Privacy Policy</h1>
        <p>
          TimeTank is operated by Ephesian28 LLC. This Privacy Policy explains
          how TimeTank handles information when you use the TimeTank iOS app and
          website.
        </p>

        <h2>Summary</h2>
        <p>
          TimeTank is designed to work on your device. We do not collect, sell,
          rent, or share your personal app usage data. TimeTank uses Apple&apos;s
          Screen Time APIs so you can select apps, set budgets, and see Finn&apos;s
          tank respond to your usage.
        </p>

        <h2>Information TimeTank Does Not Collect</h2>
        <p>TimeTank does not collect or transmit:</p>
        <ul>
          <li>Your selected apps or app category tokens</li>
          <li>Your app usage history</li>
          <li>Your daily screen time budget</li>
          <li>Your bypass history or pollution state</li>
          <li>Your Currents balance or in-app progress</li>
          <li>Precise location, contacts, photos, messages, or browsing history</li>
        </ul>

        <h2>Information Stored On Your Device</h2>
        <p>
          TimeTank may store app settings and progress locally on your device,
          such as selected app tokens, daily budgets, tank state, Currents, and
          widget state. This information is used only to provide the app&apos;s core
          functionality and is not sent to Ephesian28 LLC.
        </p>

        <h2>Apple Screen Time APIs</h2>
        <p>
          TimeTank uses Apple&apos;s FamilyControls, ManagedSettings, and
          DeviceActivity frameworks. These frameworks allow the app to help you
          manage selected apps without giving Ephesian28 LLC access to your
          underlying app usage data. Authorization is handled by iOS, and you can
          change permissions in your device settings.
        </p>

        <h2>Analytics And Advertising</h2>
        <p>
          The current version of TimeTank does not use third-party advertising
          trackers and does not sell personal information. If analytics are
          added in a future version, this policy will be updated before that
          data is collected.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          TimeTank is a productivity app and is not directed to children under
          13. We do not knowingly collect personal information from children. If
          you believe a child has provided personal information to us, contact us
          and we will take appropriate action.
        </p>

        <h2>Data Security</h2>
        <p>
          Because TimeTank is designed to keep Screen Time data on your device,
          Ephesian28 LLC does not maintain servers containing your app usage
          history. You are responsible for maintaining the security of your
          device, Apple ID, and device backups.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can stop using TimeTank at any time. You may revoke Screen Time
          permissions through iOS settings, delete local app data by deleting
          the app, and contact us with privacy questions at{" "}
          <a href="mailto:timetankap@yahoo.com">timetankap@yahoo.com</a>.
        </p>

        <h2>Changes To This Policy</h2>
        <p>
          We may update this Privacy Policy as TimeTank changes. If we make
          material changes, we will update the effective date and provide notice
          where required by law.
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
