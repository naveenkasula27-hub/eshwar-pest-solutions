import { Phone, MessageCircle } from "lucide-react";
import { business, waLink, defaultWaMessage } from "../data/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waLink(defaultWaMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl animate-pulse-ring hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </a>
      <a
        href={`tel:${business.phone}`}
        aria-label="Call now"
        className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
