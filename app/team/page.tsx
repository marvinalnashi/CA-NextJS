import Navbar from "../../components/InnerPageLayout/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import TeamMember from "../../components/Team/TeamMember";
import Footer from "../../components/InnerPageLayout/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Team"
        homeText="Home"
        homeUrl="/"
      />

      <TeamMember />

      <Footer />
    </>
  );
}
