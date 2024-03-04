import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import TermsConditionsContent from "../../components/TermsConditions/TermsConditionsContent";
import Footer from "../../components/InnerPageLayout/Footer";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Terms & Conditions"
        homeText="Home"
        homeUrl="/"
      />

      <TermsConditionsContent />

      <Footer />
    </>
  );
}
