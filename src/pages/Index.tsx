import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import DemoSection from "@/components/DemoSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Christophe Digital Twin | Asynchronous Presence System</title>
        <meta
          name="description"
          content="I can't be everywhere, but my digital twin can. An automated system that generates personalized video responses in my voice within 10-15 minutes."
        />
        <meta property="og:title" content="Christophe Digital Twin" />
        <meta
          property="og:description"
          content="Asynchronous Presence System - Personalized video responses generated automatically."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProcessSection />
        <DemoSection />
        <UseCasesSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
