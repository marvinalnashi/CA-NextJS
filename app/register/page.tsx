import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import RegisterForm from "../../components/Authentication/RegisterForm";
import Footer from "../../components/InnerPageLayout/Footer";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Register"
        homeText="Home"
        homeUrl="/"
      />

      <RegisterForm />

      <Footer />
    </>
  );
}
