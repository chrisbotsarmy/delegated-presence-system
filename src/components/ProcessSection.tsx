import { Mail, Brain, Mic, Video, Cloud, Send } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Email arrives at ask.ch@regnau.lt",
  },
  {
    icon: Brain,
    title: "AI generates a response in my tone and thinking",
  },
  {
    icon: Mic,
    title: "ElevenLabs renders my voice",
  },
  {
    icon: Video,
    title: "HeyGen animates my avatar",
  },
  {
    icon: Cloud,
    title: "Video uploaded to cloud",
  },
  {
    icon: Send,
    title: "Automated email sent back with video link + transcript",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-section px-6 bg-secondary/30">
      <div className="max-w-wide mx-auto">
        {/* Section header */}
        <div className="max-w-content mx-auto text-center mb-16">
          <h2 className="text-headline font-serif text-emphasis mb-3">
            How the system works
          </h2>
          <p className="text-body text-subtle">
            (and why it takes about 10 minutes)
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Vertical line - REMOVED */}
            {/* <div className="absolute left-6 top-0 bottom-0 w-px bg-border" /> */}

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-card flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <p className="text-body text-emphasis">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;