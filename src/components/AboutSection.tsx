import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-section px-6">
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <h2 className="text-headline font-serif text-emphasis text-center mb-12">
          Why I built this
        </h2>

        {/* Paragraphs */}
        <div className="space-y-8 text-body text-foreground/85 mb-16">
          <p className="text-balance">
            I needed a system that lets me scale my presence without sacrificing
            quality or authenticity.
          </p>
          <p className="text-balance">
            This isn't about replacing human interaction. It's about extending my
            availability to the people who need me when I'm not there.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-divider mx-auto mb-16" />

        {/* Philosophy */}
        <div className="space-y-8 text-body text-foreground/85 mb-16">
          <p className="text-balance">
            I am a strong advocate of executive education and a permanently
            curious learner.
          </p>
          <p className="text-balance">
            I continuously apply what I learn by building real systems, not just
            concepts.
          </p>
          <p className="text-emphasis font-medium italic text-center">
            Learning is not a phase. It is the journey.
          </p>
        </div>

        {/* Tech stack */}
        <div className="bg-secondary/50 rounded-lg p-6 mb-16">
          <p className="text-caption text-subtle mb-3 font-medium uppercase tracking-wide">
            Built with
          </p>
          <p className="font-mono text-caption text-muted-foreground">
            Make.com · OpenAI · ElevenLabs · HeyGen · Office365
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center border-t border-divider pt-16">
          <h3 className="text-title font-serif text-emphasis mb-6">
            Want to try it?
          </h3>
          
          <Button variant="accent" size="lg" asChild className="mb-8">
            <a href="mailto:ask.ch@regnau.lt">
              ask.ch@regnau.lt
            </a>
          </Button>

          <div className="space-y-2">
            <p className="text-caption text-subtle">Follow the project</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-primary hover:text-primary/80 transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center mt-16 pt-8 border-t border-divider">
          <p className="text-body font-serif text-emphasis mb-2">
            Christophe Regnault
          </p>
          <p className="text-caption text-subtle">
            Builder · Marketer · Teacher · Experimenter
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
