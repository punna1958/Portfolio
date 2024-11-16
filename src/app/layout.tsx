import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font definitions with display swap
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
});

// Viewport metadata
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(15 23 42)' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Enhanced metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://snehdeepsingh.com'), // Replace with your domain
  title: {
    default: "Snehdeep Singh | Senior Full Stack Engineer",
    template: "%s | Snehdeep Singh"
  },
  description: "Senior Full Stack Engineer with expertise in modern JavaScript ecosystem and relational database architectures for complex enterprise solutions.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  keywords: [
    "Full Stack Engineer",
    "Web Developer",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ 
    name: "Snehdeep Singh",
    url: "https://linkedin.com/in/snehdeep-singh" 
  }],
  creator: "Snehdeep Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snehdeepsingh.com", // Replace with your domain
    title: "Snehdeep Singh | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer with expertise in end-to-end web application development",
    siteName: "Snehdeep Singh",
    images: [{
      url: '/og-image.png', // Add an OG image
      width: 1200,
      height: 630,
      alt: "Snehdeep Singh - Senior Full Stack Engineer"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snehdeep Singh | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer with expertise in end-to-end web application development",
    images: ['/og-image.png'], // Same as OG image
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
    google: "your-google-site-verification", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
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

        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/profile.jpeg" 
          as="image"
        />
      </body>
    </html>
  );
}