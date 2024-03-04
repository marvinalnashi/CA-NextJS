import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import ForgotPasswordForm from "../../components/Authentication/ForgotPasswordForm";
import Footer from "../../components/InnerPageLayout/Footer";

export default function ForgotPasswordPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Forgot Password"
        homeText="Home"
        homeUrl="/"
      />

      <ForgotPasswordForm />

      <Footer />
    </>
  );
}
