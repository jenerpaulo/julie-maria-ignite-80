import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakingSection from "@/components/SpeakingSection";
import ConsultingSection from "@/components/ConsultingSection";
import BooksSection from "@/components/BooksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpeakingSection />
      <ConsultingSection />
      <BooksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
