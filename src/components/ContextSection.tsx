const ContextSection = () => {
  return (
    <section id="context" className="py-section px-6">
      <div className="max-w-content mx-auto text-center">
        {/* Main statement */}
        <p className="text-title font-serif text-emphasis mb-12">
          This is how you reach me when I'm unavailable.
        </p>

        {/* Three scenarios */}
        <div className="space-y-4 mb-12">
          <p className="text-body text-subtle">
            A student emails me late at night.
          </p>
          <p className="text-body text-subtle">
            A recruiter sends a thoughtful question.
          </p>
          <p className="text-body text-subtle">
            A professional contact doesn't want a rushed reply.
          </p>
        </div>

        {/* Closing statement */}
        <p className="text-body text-emphasis leading-relaxed">
          They don't get an auto-reply.
          <br />
          They get me. A bit later.
        </p>
      </div>
    </section>
  );
};

export default ContextSection;
