import { Button } from "@/components/ui/button";

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

        {/* Email mockup */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-card border border-border rounded-lg shadow-card overflow-hidden text-left">
            {/* Email header */}
            <div className="px-6 py-4 border-b border-border bg-secondary/30">
              <div className="space-y-1 text-caption">
                <p>
                  <span className="text-subtle">From:</span>{" "}
                  <span className="text-emphasis">You</span>
                </p>
                <p>
                  <span className="text-subtle">To:</span>{" "}
                  <span className="text-emphasis font-medium">ask.ch@regnau.lt</span>
                </p>
                <p>
                  <span className="text-subtle">Subject:</span>{" "}
                  <span className="text-emphasis">Quick question</span>
                </p>
              </div>
            </div>
            
            {/* Email body */}
            <div className="px-6 py-5">
              <p className="text-body text-emphasis italic leading-relaxed">
                "Can you explain me how I can do a Digital Twin of myself?"
              </p>
              <p className="text-caption text-subtle mt-2">Example of a real question I receive</p>
            </div>
          </div>
        </div>

        {/* Second CTA */}
        <div className="mb-16">
          <Button 
            size="lg" 
            className="bg-[#A0522D] hover:bg-[#8B4513] text-white px-8 py-3 rounded-full text-lg font-medium mb-4"
            asChild
          >
            <a href="mailto:ask.ch@regnau.lt" className="no-underline">
              Send me a question
            </a>
          </Button>
          <p className="text-body text-subtle">ask.ch@regnau.lt</p>
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