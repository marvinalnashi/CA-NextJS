import Navbar from "../../components/GameApp/Navbar";
import HeroBanner from "../../components/GameApp/HeroBanner";
import Features from "../../components/GameApp/Features";
import AboutApp from "../../components/GameApp/AboutApp";
import KeyFeatures from "../../components/GameApp/KeyFeatures";
import PromoVideo from "../../components/GameApp/PromoVideo";
import Partner from "../../components/GameApp/Partner";
import AppScreens from "../../components/GameApp/AppScreens";
import Integrations from "../../components/GameApp/Integrations";
import AppDownload from "../../components/GameApp/AppDownload";
import PricingTable from "../../components/GameApp/PricingTable";
import Testimonials from "../../components/GameApp/Testimonials";
import OurLatestBlog from "../../components/GameApp/OurLatestBlog";
import Newsletter from "../../components/GameApp/Newsletter";
import Footer from "../../components/GameApp/Footer";

export default function GameAppPage() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <div className="bg-[#15181B]">

        <Features />

        <AboutApp />

        <KeyFeatures />

        <PromoVideo />

        <Partner />

        <AppScreens />

        <Integrations />

        <AppDownload />

        <PricingTable />

        <Testimonials />

        <OurLatestBlog />

        <Newsletter />

      </div>

      <Footer />
    </>
  );
}
