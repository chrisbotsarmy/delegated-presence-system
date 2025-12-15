import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-wide mx-auto">
        {/* Built with */}
        <div className="text-center mb-8">
          <p className="text-caption text-subtle font-mono">
            Built with: Make.com · OpenAI · ElevenLabs · HeyGen · Office 365
          </p>
        </div>

        {/* Signature */}
        <div className="text-center mb-8">
          <p className="text-body text-emphasis font-serif mb-1">
            Christophe Regnault
          </p>
          <p className="text-caption text-subtle">
            Builder · Marketer · Teacher · Experimenter
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:ask.ch@regnau.lt"
            className="text-subtle hover:text-emphasis transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle hover:text-emphasis transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-caption text-subtle/60">
            © 2025 Christophe Regnault
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
