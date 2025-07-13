import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import './globals.css';

// Font definitions with display swap
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'monospace',
  ],
});

// Viewport metadata
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(15 23 42)' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://madewithPuneet.com'),
  title: {
    default: 'Puneet Yadav | SDET and Automation Engineer',
    template: '%s | Puneet Yadav',
  },
  description:
    'Dynamic Quality Assurance Analyst with a proven track record of ensuring flawless software delivery by mastering SDLC/STLC processes, leveraging cutting-edge tools like Selenium, Katalon Studio, and Playwright, and executing diverse testing methodologies to elevate product quality in Agile and Waterfall frameworks.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      {
        url: '/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'Quality Assurance',
    'Automation Engineer',
    'Automation Test Engineer',
    'Playwright Master',
    'Katalon Studio Expert',
    'Cypress automation',
    'SDET',
    'UI/UX Engineering',
    'JavaScript Ecosystem',
    'Performance Testing',
    'TypeScript Coding',
    'Technical Leadership',
  ],
  authors: [
    {
      name: 'Puneet Yadav',
      url: 'https://linkedin.com/in/puneet-yadav-247303265',
    },
  ],
  creator: 'Puneet Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://madewithPuneet.com',
    title: 'Puneet Yadav | SDET and Automation Engineer',
    description:
      'Dynamic Quality Assurance Analyst with a proven track record of ensuring flawless software delivery by mastering SDLC/STLC processes, leveraging cutting-edge tools like Selenium, Katalon Studio, and Playwright, and executing diverse testing methodologies to elevate product quality in Agile and Waterfall frameworks.',
    siteName: 'Puneet Yadav',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Puneet Yadav - SDET & Lead Automation Test Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puneet Yadav | SDET & Lead Automation Test Engineer',
    description:
      'Dynamic Quality Assurance Analyst with a proven track record of ensuring flawless software delivery by mastering SDLC/STLC processes, leveraging cutting-edge tools like Selenium, Katalon Studio, and Playwright, and executing diverse testing methodologies to elevate product quality in Agile and Waterfall frameworks.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Detect user OS theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                }
                document.documentElement.classList.add(getThemePreference());
              })();
            `,
          }}
        />

        {children}
        <Analytics />

        {/* Preload critical resources */}
        <link rel="preload" href="/profile.jpeg" as="image" />
      </body>
    </html>
  );
}
