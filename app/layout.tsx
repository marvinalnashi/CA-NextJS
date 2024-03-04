import 'remixicon/fonts/remixicon.css'
import '../public/css/navbar.css'
import '../public/fonts/flaticon_mycollection.css'
import 'swiper/css/bundle';
import "./globals.css";

import AosAnimation from '../components/Layout/AosAnimation';
import BackToTop from '../components/Layout/BackToTop';
import TosterProvider from '../providers/TosterProvider';

import { Mukta } from "next/font/google";

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "CodeArise",
  description:
    "Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mukta.className}>
        <TosterProvider />
        {children}
        <AosAnimation />
        <BackToTop />
      </body>
    </html>
  );
}
