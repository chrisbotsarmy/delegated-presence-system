const AboutSection = () => {
  return (
    <section id="about" className="py-section px-6 bg-secondary/30">
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <h2 className="text-headline font-serif text-emphasis text-center mb-12">
          Why I built this
        </h2>

        {/* Editorial text */}
        <div className="space-y-6 text-body text-subtle leading-relaxed">
          <p>
            I needed a system that lets me scale my presence without sacrificing
            quality or authenticity.
          </p>

          <p>
            This isn't about replacing human interaction. It's about extending
            my availability to the people who need me when I'm not there.
          </p>

          <p>
            I am a strong advocate of executive education and a permanently
            curious learner. I continuously apply what I learn by building real
            systems, not just concepts.
          </p>

          <p className="text-emphasis font-medium pt-4">
            Learning is not a phase.
            <br />
            It is the journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
