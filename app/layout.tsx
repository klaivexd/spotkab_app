import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'SpotKab',
  description: 'Digital Travel Guide for Kabankalan City',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  )
}