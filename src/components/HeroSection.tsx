import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-content text-center animate-fade-in">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-display font-serif text-emphasis leading-tight mb-8 text-balance">
          I can't be everywhere.
          <br />
          <span className="text-foreground/80">But my digital twin can.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-subtle max-w-lg mx-auto mb-16 animate-fade-in-delay-1">
          When you write to me, my system answers as me.
          <br />
          Within 10-15 minutes. Not instantly. Better.
        </p>

        {/* Email mockup */}
        <div className="animate-fade-in-delay-2 mb-12">
          <div className="bg-card border border-border rounded-lg shadow-card max-w-md mx-auto overflow-hidden">
            <div className="bg-secondary/50 px-5 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              </div>
            </div>
            <div className="p-6 text-left font-sans">
              <div className="space-y-2 mb-4 text-caption text-muted-foreground">
                <p><span className="text-foreground/60">From:</span> You</p>
                <p><span className="text-foreground/60">To:</span> ask.ch@regnau.lt</p>
                <p><span className="text-foreground/60">Subject:</span> Quick question</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-body text-foreground/90 italic">
                  "Can you explain vibe coding to my students?"
                </p>
              </div>
            </div>
          </div>
          <p className="text-caption text-subtle mt-4">
            This is how you reach me when I'm unavailable.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-delay-3">
          <Button
            variant="subtle"
            size="lg"
            onClick={scrollToProcess}
            className="group"
          >
            See how it works
            <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
