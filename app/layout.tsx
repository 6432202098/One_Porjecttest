import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css"

const inter = Noto_Sans_Thai ({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: "Ple Triwarut Links",
  description: " For all my design ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
