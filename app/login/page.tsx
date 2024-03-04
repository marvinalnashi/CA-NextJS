import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import LoginForm from "../../components/Authentication/LoginForm";
import Footer from "../../components/InnerPageLayout/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Login"
        homeText="Home"
        homeUrl="/"
      />

      <LoginForm />

      <Footer />
    </>
  );
}
