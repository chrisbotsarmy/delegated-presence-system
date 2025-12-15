import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import ContextSection from "@/components/ContextSection";
import ProcessSection from "@/components/ProcessSection";
import PhilosophyBlock from "@/components/PhilosophyBlock";
import DemoSection from "@/components/DemoSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Christophe Digital Twin | Delegated Presence System</title>
        <meta
          name="description"
          content="I can't be everywhere. But when you reach out, I still answer. Thoughtfully. In my voice. A system for delegated presence."
        />
        <meta property="og:title" content="Christophe Digital Twin" />
        <meta
          property="og:description"
          content="Delegated Presence System - Thoughtful, personalized video responses generated automatically."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ContextSection />
        <ProcessSection />
        <PhilosophyBlock />
        <DemoSection />
        <UseCasesSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
