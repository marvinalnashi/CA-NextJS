import Navbar from "../../components/MoneyTransferApp/Navbar";
import HeroBanner from "../../components/MoneyTransferApp/HeroBanner";
import Partner from "../../components/Common/Partner";
import Features from "../../components/MoneyTransferApp/Features";
import AboutApp from "../../components/MoneyTransferApp/AboutApp";
import KeyFeatures from "../../components/MoneyTransferApp/KeyFeatures";
import HowItWork from "../../components/MoneyTransferApp/HowItWork";
import AppDownload from "../../components/MoneyTransferApp/AppDownload";
import AppScreens from "../../components/MoneyTransferApp/AppScreens";
import Integrations from "../../components/MoneyTransferApp/Integrations";
import PricingTable from "../../components/MoneyTransferApp/PricingTable";
import Testimonials from "../../components/MoneyTransferApp/Testimonials";
import Newsletter from "../../components/MoneyTransferApp/Newsletter";
import OurLatestBlog from "../../components/MoneyTransferApp/OurLatestBlog";
import Footer from "../../components/MoneyTransferApp/Footer";

export default function MoneyTransferAppPage() {
  return (
    <>
      <div className="bg-[#F8F6F5]">
        <Navbar />

        <HeroBanner />

        <Partner />

        <Features />

        <AboutApp />

        <KeyFeatures />

        <HowItWork />

        <AppDownload />

        <AppScreens />

        <Integrations />

        <PricingTable />

        <Testimonials />

        <Newsletter />

        <OurLatestBlog />

        <Footer />
      </div>
    </>
  );
}
