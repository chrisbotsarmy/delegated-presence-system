import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const scrollToContactForm = () => {
    // Scroll to the top of the page where the contact form is located
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="demo" className="py-section px-6 bg-secondary/30">
      <div className="max-w-wide mx-auto">
        {/* Section header */}
        <div className="max-w-content mx-auto text-center mb-12">
          <h2 className="text-headline font-serif text-emphasis">
            This is what you get back
          </h2>
        </div>

        {/* Video placeholder */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative aspect-video bg-foreground/5 border border-border rounded-lg overflow-hidden shadow-soft">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play button */}
              <button className="w-20 h-20 bg-[#A0522D] hover:bg-[#8B4513] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
              <p className="text-caption text-subtle">Demo video coming soon</p>
            </div>

            {/* Decorative frame elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-border/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-border/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-border/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-border/50 rounded-br-lg" />
          </div>
        </div>

        {/* Caption */}
        <div className="max-w-content mx-auto text-center mb-10">
          <p className="text-body text-subtle leading-relaxed">
            Same tone. Same intent. Same person.
            <br />
            Generated automatically.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#A0522D] hover:bg-[#8B4513] text-white px-8 py-3 rounded-full text-lg font-medium"
            onClick={scrollToContactForm}
          >
            Send me a question
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;