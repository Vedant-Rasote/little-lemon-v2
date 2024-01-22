import type { Metadata } from "next";
import { Gowun_Batang } from 'next/font/google';
import "./globals.css";
import { Providers } from './Providers';

const GowunBatang = Gowun_Batang({ subsets: ['latin'], weight: '400' });

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
      <body className={`${GowunBatang.className} dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
