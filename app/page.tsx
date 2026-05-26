// import Header from "@/components/Header/Header";
// import HeroSection from "@/components/hero/Hero";
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";
import HeroSection from "@/components/ai-marketing-components/hero/Hero";
import AboutSection from "@/components/about/about";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import IndustriesMarqueeSection from "@/components/IndustriesMarqueeSection/IndustriesMarqueeSection";
import IndustriesSection from "@/components/Industries/Industries";
import DesignationSection from "@/components/DesignationSection/Designation";
import ContactSection from "@/components/ContactSection/ContactSection";
import TestimonialSection from "@/components/Testimonial/Testimonial";
import BlogSection from "@/components/BlogSection/BlogSection";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import AiServiceSection from "@/components/AiServiceSection/AiServicesSection";
import Partner from "@/components/Partners/partner";
import WhoAttends from "@/components/WhoAttends/WhoAttends";

export const metadata = {
    title: "Vertex Next",
  description: "Vertex Next",
};

export default function HomePage() {
  return (
    <>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <HeaderTwo />

          <main>
            <HeroSection />

            <AboutSection />
            <ServiceSection />
            <FeatureSection />
            <IndustriesMarqueeSection />
            <IndustriesSection />
            <AiServiceSection/>
            <DesignationSection/>
            <Partner/>
            {/* <ProcessSection/> */}
            <ProjectSection />
            <WhoAttends/>
            <ContactSection />
            <TestimonialSection />
            {/* <BlogSection /> */}
          </main>

          <Footer />
          <Scrollbar />
        </div>
      </div>
    </>
  );
}
