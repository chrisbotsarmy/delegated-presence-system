import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-wide mx-auto">
        {/* Tech stack */}
        <div className="text-center mb-8">
          <p className="text-caption text-subtle">
            <span className="font-bold">Tech & AI stack:</span>
            <br />
            <br />
            OpenAI · Claude · Make.com · ElevenLabs · HeyGen ·
            <br />
            Lovable · Google AI Studio · Dayd · Vercel
          </p>
        </div>

        {/* Signature */}
        <div className="text-center mb-8">
          <p className="text-body text-emphasis font-serif mb-2">
            Christophe Regnault
          </p>
          <p className="text-caption text-subtle">
            Senior Marketing & Communication Strategist · Teacher · Lifelong Learner
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:ask.ch@regnau.lt"
            aria-label="Email"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary/20">
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/tochristopheregnault/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary/20">
              <Linkedin className="w-5 h-5 text-primary" />
            </div>
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