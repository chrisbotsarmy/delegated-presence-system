import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const scrollToContext = () => {
    document.getElementById("context")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-content mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-display font-serif text-emphasis leading-tight mb-8">
          <span className="text-[#2D2D2D]">I can't be everywhere</span>,<br />
          <span className="text-[#A0522D]">but my digital twin can.</span>
        </h1>
        
        {/* New sentence - same font styling as main headline */}
        <h2 className="text-4xl sm:text-5xl md:text-display font-serif text-emphasis leading-tight mb-8">
          And so when you reach out, I still answer.
        </h2>
        
        {/* Subheadline - made bigger to be consistent */}
        <p className="text-2xl sm:text-3xl md:text-headline font-serif text-subtle max-w-lg mx-auto mb-16 leading-relaxed">
          Not instantly. <br />
          Thoughtfully. <br />
          In my voice.
        </p>

        {/* Interactive Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Original CTA */}
        <button 
          onClick={scrollToContext}
          className="text-caption text-subtle hover:text-emphasis transition-colors duration-300 flex items-center gap-2 mx-auto group"
        >
          See how it works
          <span className="group-hover:translate-y-0.5 transition-transform duration-300 text-[#A0522D]">↓</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;