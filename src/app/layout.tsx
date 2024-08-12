'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import './reset.scss';
import Provider from '@/components/provider/Provider';
import GNB from '@/components/gnb/GNB';
import { getServerSession } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <GNB />
          {children}
        </Provider>
      </body>
    </html>
  );
}
