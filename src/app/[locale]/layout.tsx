import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins, Instrument_Serif } from "next/font/google";
import './globals.css';
import { Locale, routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-instrument-serif',
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-poppins',
});

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ locale: string }> }) {

  const { locale } = await paramsPromise;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      template: `%s - ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    openGraph: {
      images: [
        {
          url: t('image'),
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: paramsPromise
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await paramsPromise;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${instrument_serif.variable} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}