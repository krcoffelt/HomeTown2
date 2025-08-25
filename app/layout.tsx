import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HomeTown Marketing Agency | Kansas City Small Business Growth',
    template: '%s | HomeTown Marketing'
  },
  description: 'Your Business. Your Story. Your HomeTown Partner. Helping Kansas City small businesses grow without wasting time or money through smart, effective marketing strategies.',
  keywords: [
    'marketing agency',
    'Kansas City',
    'small business marketing',
    'digital marketing',
    'social media management',
    'email marketing',
    'branding',
    'website development',
    'local marketing',
    'Kansas City marketing'
  ],
  authors: [{ name: 'HomeTown Marketing' }],
  creator: 'HomeTown Marketing',
  publisher: 'HomeTown Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hometownmarketing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HomeTown Marketing Agency | Kansas City Small Business Growth',
    description: 'Your Business. Your Story. Your HomeTown Partner. Helping Kansas City small businesses grow without wasting time or money.',
    url: 'https://hometownmarketing.com',
    siteName: 'HomeTown Marketing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HomeTown Marketing Agency - Kansas City Small Business Marketing Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeTown Marketing Agency | Kansas City Small Business Growth',
    description: 'Your Business. Your Story. Your HomeTown Partner. Helping Kansas City small businesses grow without wasting time or money.',
    images: ['/og-image.jpg'],
    creator: '@hometownmarketing',
    site: '@hometownmarketing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'marketing',
  classification: 'Business',
  other: {
    'theme-color': '#006847',
    'msapplication-TileColor': '#006847',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'HomeTown Marketing',
    'application-name': 'HomeTown Marketing',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#006847" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HomeTown Marketing" />
        <meta name="application-name" content="HomeTown Marketing" />
        <meta name="msapplication-TileColor" content="#006847" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "HomeTown Marketing",
              "description": "Kansas City small business marketing agency helping businesses grow through effective digital marketing strategies.",
              "url": "https://hometownmarketing.com",
              "telephone": "+1-555-123-4567",
              "email": "hello@hometownmarketing.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kansas City",
                "addressRegion": "MO",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.0997",
                "longitude": "-94.5786"
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.0997",
                  "longitude": "-94.5786"
                },
                "geoRadius": "50000"
              },
              "sameAs": [
                "https://facebook.com/hometownmarketing",
                "https://instagram.com/hometownmarketing",
                "https://linkedin.com/company/hometownmarketing",
                "https://twitter.com/hometownmarketing"
              ]
            })
          }}
        />
      </head>
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
