import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomeTown Marketing Agency | Kansas City Small Business Growth',
  description: 'Your Business. Your Story. Your HomeTown Partner. Helping Kansas City small businesses grow without wasting time or money.',
  keywords: 'marketing agency, Kansas City, small business, digital marketing, social media, branding, websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
