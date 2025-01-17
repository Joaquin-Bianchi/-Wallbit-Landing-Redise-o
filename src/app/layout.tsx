import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../styles/features.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wallbit | NO OFICIAL",
  description: "Invierte en acciones de EE.UU. desde LATAM con Wallbit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className="font-poppins">{children}</body>
    </html>
  );
}
