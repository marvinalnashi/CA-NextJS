import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import Footer from "../../components/InnerPageLayout/Footer";
import FaqContent from "../../components/FAQ/FaqContent";

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="FAQ's"
        homeText="Home"
        homeUrl="/"
      />

      <FaqContent />

      <Footer />
    </>
  );
}
