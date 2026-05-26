import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import ServiceSection from "./ServiceSection";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Services | Vertex Next",
  description:
    "Discover Aivora’s AI-powered services, including automation, analytics, product development, branding, and enterprise solutions.",
};

export default function ServicePage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Events" pagesub="Our Events" />
          <ServiceSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}
