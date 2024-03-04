import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import ContactForm from "../../components/Contact/ContactForm";
import GoogleMap from "../../components/Contact/GoogleMap";
import Footer from "../../components/InnerPageLayout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Contact us"
        homeText="Home"
        homeUrl="/"
      />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
}
