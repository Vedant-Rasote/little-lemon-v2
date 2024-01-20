import type { Metadata } from "next";
import { Gowun_Batang, Gowun_Dodum } from 'next/font/google';
import "./globals.css";
import { Providers } from './Providers';

const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: '400' });
const gowunDodum = Gowun_Dodum({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Little Lemon',
  description: 'Little Lemon - Mediterranean restaurant based in Chicago, Illinois',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gowunDodum.className} dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
