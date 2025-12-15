import { Mail, Brain, Mic, Video, Cloud, Send } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Email arrives at ask.ch@regnau.lt",
    description: "Triggers Make.com workflow",
  },
  {
    icon: Brain,
    title: "ChatGPT reads the message",
    description: "Generates response in my voice + tone",
  },
  {
    icon: Mic,
    title: "ElevenLabs clones my voice",
    description: "Converts text to speech (~30 sec)",
  },
  {
    icon: Video,
    title: "HeyGen animates my avatar",
    description: "Syncs video with audio (2-5 min render)",
  },
  {
    icon: Cloud,
    title: "Video uploaded to cloud",
    description: "Public link generated",
  },
  {
    icon: Send,
    title: "Automated email sent back",
    description: "With video link + transcript",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-section px-6 bg-secondary/30">
      <div className="max-w-wide mx-auto">
        {/* Section header */}
        <div className="max-w-content mx-auto text-center mb-16">
          <h2 className="text-headline font-serif text-emphasis mb-4">
            How the system works
          </h2>
          <p className="text-body text-subtle">
            (and why it takes 10 minutes)
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-divider md:left-1/2 md:-translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 mb-12 last:mb-0 md:gap-12"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-card md:absolute md:left-1/2 md:-translate-x-1/2">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content - alternating sides on desktop */}
                <div
                  className={`flex-1 pt-2 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-20 md:text-right md:ml-0"
                      : "md:pl-20 md:ml-auto"
                  }`}
                >
                  <h3 className="text-body font-sans font-medium text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-caption text-subtle">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting text */}
        <div className="max-w-content mx-auto text-center mt-20">
          <p className="text-body-lg text-foreground/80 mb-8">
            No scripts. No canned replies.
            <br />
            Just my thinking, delegated.
          </p>

          {/* Emphasized box */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-card">
            <p className="text-body font-sans text-emphasis mb-4">
              This is not automation.
              <br />
              This is <span className="text-primary font-medium">delegated presence</span>.
            </p>
            <p className="text-caption text-subtle">
              The 10-minute delay isn't a limitation.
              <br />
              It's a feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
