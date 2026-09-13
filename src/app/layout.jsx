import './globals.css';
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { PortalProvider } from '@/context/PortalContext';
import PortalShell from '@/components/PortalShell';
import { schoolLogo } from '@/asset';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: 'Iqra Public School — for a Better Tomorrow',
  description:
    'At Iqra Public School Motihari, we nurture young minds with quality education, moral integrity, and modern learning tools to inspire confident future leaders.',
  icons: {
    icon: [
      { url: schoolLogo },
      { url: '/favicon.ico' },
    ],
    shortcut: [schoolLogo],
    apple: [
      { url: schoolLogo },
    ],
  },
  openGraph: {
    title: 'Iqra Public School — for a Better Tomorrow',
    description:
      'At Iqra Public School Motihari, we nurture young minds with quality education, moral integrity, and modern learning tools.',
    images: [
      {
        url: schoolLogo,
        width: 800,
        height: 600,
        alt: 'Iqra Public School Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href={schoolLogo} type="image/jpeg" />
        <link rel="shortcut icon" href={schoolLogo} />
        <link rel="apple-touch-icon" href={schoolLogo} />
        <meta name="theme-color" content="#0b3d2e" />
      </head>
      <body className="bg-[#fcfdfd] text-slate-800 font-sans antialiased selection:bg-[#0b3d2e] selection:text-white overflow-x-hidden max-w-full w-full">
        <PortalProvider>
          <PortalShell>{children}</PortalShell>
        </PortalProvider>
      </body>
    </html>
  );
}
