import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FeaturesContent from "../../components/Features/FeaturesContent";
import Footer from "../../components/InnerPageLayout/Footer";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Features"
        homeText="Home"
        homeUrl="/"
      />

      <FeaturesContent />

      <Footer />
    </>
  );
}
