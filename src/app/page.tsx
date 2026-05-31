/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Droplets,
  Fish,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const appStoreHref = "/";

const steps = [
  {
    icon: Fish,
    title: "Pick the apps that eat your time.",
    copy: "Choose the apps that pull you in. TimeTank leaves the useful stuff alone.",
  },
  {
    icon: Clock3,
    title: "Set Finn's budget.",
    copy: "Give those apps a daily limit that feels fair. Spend it whenever you want.",
  },
  {
    icon: Droplets,
    title: "Watch what happens.",
    copy: "Stay within budget and the water stays clean. Push through and the tank gets murkier.",
  },
];

const features = [
  "Daily budgets for the apps you choose",
  "A calm speed bump when your budget is spent",
  "Finn's tank responds to your real behavior",
  "Currents earned for clean days",
  "Home screen widgets that show Finn's state",
  "Screen Time privacy: your usage stays on device",
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <nav className="site-nav" aria-label="Main navigation">
          <Link className="brand-lockup" href="/" aria-label="TimeTank home">
            <Image
              src="/brand/app-icon.png"
              alt=""
              width={44}
              height={44}
              priority
            />
            <span>TIMETANK</span>
          </Link>
          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#privacy">Privacy</a>
            <Link href="/terms">Terms</Link>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Screen time that finally feels real</p>
            <h1>Put the phone down. Clean the water. Save the fish.</h1>
            <p className="hero-lede">
              You picked up your phone for one reason. An hour later, you do
              not know where the time went.
            </p>
            <p className="hero-body">
              TimeTank is a screen time app with a living fish tank at its
              center. Finn is your fish. When you stay within your daily budget,
              his water stays clean and he swims free.
            </p>
            <div className="cta-row">
              <a className="app-store-badge" href={appStoreHref}>
                {/* Apple's official badge is an SVG, so a plain image avoids framework resizing warnings. */}
                <img
                  src="/brand/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                />
              </a>
              <a className="secondary-cta" href="#how-it-works">
                See how it works
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="trust-strip" aria-label="TimeTank promises">
              <span>No harsh lockouts</span>
              <span>No guilt trips</span>
              <span>No hidden fees</span>
            </div>
          </div>

          <div className="phone-stage" aria-label="TimeTank app preview">
            <div className="phone-frame">
              <Image
                className="app-screenshot"
                src="/brand/time-tank-app-screenshot.png"
                alt="TimeTank iPhone app showing Finn in a clean tank and a 45 minute budget"
                width={1206}
                height={2622}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Less screen time. Cleaner water. Happier fish.</p>
            <h2>TimeTank gives your habit a consequence you can see.</h2>
          </div>
          <p>
            Other screen time apps lock you out and call it discipline.
            TimeTank gives you a budget and lets you feel the cost. The
            difference is yours is a choice, not a punishment.
          </p>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>Pick a budget. Meet Finn. Keep the water clean.</h2>
          </div>
          <div className="step-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.title}>
                <div className="icon-bubble">
                  <step.icon size={24} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-band">
        <div className="section-inner feature-layout">
          <div className="feature-copy">
            <p className="eyebrow">The speed bump</p>
            <h2>Your budget is spent. Finn&apos;s watching.</h2>
            <p>
              When time runs out, TimeTank does not throw a hard wall in your
              face. It gives you a calm pause before you keep scrolling. Open
              anyway, and the water gets murkier by 20%.
            </p>
            <div className="shield-box">
              <Image
                src="/brand/finn-worried.png"
                alt="Worried Finn"
                width={96}
                height={144}
              />
              <div>
                <strong>Five open-anyways and Finn&apos;s world is gone.</strong>
                <span>Stay within your budget and the water stays clear.</span>
              </div>
            </div>
          </div>
          <div className="feature-panel">
            <Image
              src="/brand/finn-bowl.png"
              alt="Finn swimming in his TimeTank fishbowl"
              width={1024}
              height={1536}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Built for the apps that steal the afternoon</p>
            <h2>The whole loop, without the lecture.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-item" key={feature}>
                <BadgeCheck size={20} aria-hidden="true" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section privacy-band" id="privacy">
        <div className="section-inner privacy-layout">
          <div className="privacy-icon">
            <LockKeyhole size={34} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">Privacy</p>
            <h2>Your app usage data stays entirely on your device.</h2>
            <p>
              TimeTank uses Apple&apos;s Screen Time APIs. We never see, store, sell,
              or share your app usage data. Finn lives on your phone, and so
              does the information that keeps his tank honest.
            </p>
            <div className="privacy-links">
              <Link href="/privacy">
                Privacy Policy
                <ShieldCheck size={17} aria-hidden="true" />
              </Link>
              <Link href="/terms">
                Terms of Service
                <ShieldCheck size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-card">
          <Image
            src="/brand/app-icon.png"
            alt="TimeTank app icon"
            width={92}
            height={92}
          />
          <p className="eyebrow">Download TimeTank</p>
          <h2>Put the phone down. See what the water looks like tomorrow.</h2>
          <a className="app-store-badge" href={appStoreHref}>
            <img
              src="/brand/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
            />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="brand-lockup">
          <Image src="/brand/app-icon.png" alt="" width={36} height={36} />
          <span>TIMETANK</span>
        </div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:timetankapp@yahoo.com">Support</a>
        </div>
        <p>
          <Sparkles size={15} aria-hidden="true" />
          Made by Ephesian28 LLC
        </p>
      </footer>
    </main>
  );
}
