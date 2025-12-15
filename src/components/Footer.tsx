import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 px-6">
      <div className="max-w-wide mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-caption text-background/60">
            © 2025 Christophe Regnault
          </p>

          {/* Center text */}
          <p className="text-caption text-background/60">
            Built as a live experiment
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:ask.ch@regnau.lt"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
