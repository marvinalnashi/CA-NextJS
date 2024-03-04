import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "../../components/InnerPageLayout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Privacy Policy"
        homeText="Home"
        homeUrl="/"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
