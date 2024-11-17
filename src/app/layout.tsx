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
  metadataBase: new URL('https://snehdeepsingh.com'),
  title: {
    default: 'Snehdeep Singh | Digital Architect & Code Craftsman',
    template: '%s | Snehdeep Singh',
  },
  description:
    'Software architect transforming complex challenges into elegant digital solutions. Specializing in scalable web applications, intuitive user experiences, and enterprise-level architectures.',
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
    'Software Architect',
    'Full Stack Engineer',
    'React Developer',
    'Node.js Expert',
    'TypeScript',
    'System Design',
    'Web Architecture',
    'Cloud Solutions',
    'Enterprise Solutions',
    'JavaScript Ecosystem',
    'Performance Optimization',
    'Technical Leadership',
    'Code Craftsmanship',
    'UI/UX Engineering',
    'Database Architecture',
  ],
  authors: [
    {
      name: 'Snehdeep Singh',
      url: 'https://linkedin.com/in/snehdeep-singh',
    },
  ],
  creator: 'Snehdeep Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snehdeepsingh.com',
    title: 'Snehdeep Singh | Digital Architect & Code Craftsman',
    description:
      'Crafting elegant digital solutions through innovative architecture and clean code. Transforming complex challenges into seamless user experiences.',
    siteName: 'Snehdeep Singh',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Snehdeep Singh - Digital Architect & Code Craftsman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snehdeep Singh | Digital Architect & Code Craftsman',
    description:
      "Crafting elegant digital solutions through innovative architecture and clean code. Building tomorrow's web, one line at a time.",
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
  verification: {
    google: 'your-google-verification-code', // Add if you have one
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
