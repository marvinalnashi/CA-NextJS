import { useEffect } from 'react';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { OverlayProvider } from '@components/contexts/overlayProvider';
import { ThemeProvider } from '@components/contexts/themeProvider';
import { processEnv } from '@lib/processEnv';
import * as gtag from '../lib/gtag';

// Styles
import '@styles/screen.css';
import '@styles/screen-fixings.css';
import '@styles/prism.css';
import '@styles/toc.css';
import 'remixicon/fonts/remixicon.css';
import '../public/css/navbar.css';
import '../public/fonts/flaticon_mycollection.css';
import 'swiper/css/bundle';
import '@styles/globals.scss';
import '@styles/dark-mode.css'
import '@styles/portfolio.css'
import '@styles/tags.css'
// import '@styles/home.css'

// Layout components
import AosAnimation from '../components/Layout/AosAnimation';
import BackToTop from '../components/Layout/BackToTop';
import TosterProvider from '../providers/TosterProvider';

// Google Fonts
import { Mukta } from 'next/font/google';

const mukta = Mukta({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className={mukta.className}>
      <TosterProvider />
      {children}
      <AosAnimation />
      <BackToTop />
    </div>
  );
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider {...processEnv.darkMode}>
      <OverlayProvider>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default App;
