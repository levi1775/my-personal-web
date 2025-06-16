import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vedant Pimple - AI/ML Developer',
  description: 'Portfolio of Vedant Pimple, showcasing projects in AI, Machine Learning, and Web Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0a192f] text-gray-100`}>{children}</body>
    </html>
  );
}