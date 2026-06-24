import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const WhatsAppCTA = () => {
  return (
    <a
      href={waLink(`Hi ${SITE.name}, I'd like to know more about your capsule houses.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl animate-pulse" />
      <span className="relative flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </span>
    </a>
  );
};

export default WhatsAppCTA;
