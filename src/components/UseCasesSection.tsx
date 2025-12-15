import { Mail, Linkedin, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Mail,
    title: "Automated Email Responses",
    description:
      "Every question receives a personalized video response. No templates. No canned replies. Just thoughtful answers delivered within minutes.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Content Pipeline",
    description:
      "Draft posts in my writing style. Generate video clips. Maintain presence without being always-on.",
  },
  {
    icon: GraduationCap,
    title: "Student Q&A at Scale",
    description:
      "Students ask anytime. Personalized video answers. Same-day delivery without quality loss.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-section px-6">
      <div className="max-w-wide mx-auto">
        {/* Section header */}
        <div className="max-w-content mx-auto text-center mb-16">
          <h2 className="text-headline font-serif text-emphasis">
            Where this works
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 shadow-card"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <useCase.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-title font-serif text-emphasis mb-4">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-body text-subtle leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-body text-subtle font-medium">
            One system. Multiple surfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
