import type { Metadata } from "next";
import { DM_Mono, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TimeTank - Put the phone down. Clean the water. Save the fish.",
  description:
    "TimeTank is a screen time app with a living fish tank at its center. Set daily app budgets, keep Finn's water clean, and build better phone habits.",
  metadataBase: new URL("https://timetankapp.com"),
  openGraph: {
    title: "TimeTank",
    description: "Put the phone down. Clean the water. Save the fish.",
    images: ["/brand/app-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
