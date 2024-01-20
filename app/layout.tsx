import type { Metadata } from "next";
import { Gowun_Batang, Gowun_Dodum } from 'next/font/google'
import "./globals.css";

const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: '400' });
const gowunDodum = Gowun_Dodum({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Little Lemon',
  description: 'Little Lemon - Mediterreanean restaurant based in Chicago Illinois',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gowunDodum.className}>{children}</body>
    </html>
  );
}
