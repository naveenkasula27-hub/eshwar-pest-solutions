import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { business, services, hyderabadAreas, telanganaDistricts } from "../data/site";

const FacebookGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46H16.6V4.3c-.27-.04-1.2-.11-2.28-.11-2.26 0-3.8 1.37-3.8 3.9v2.17H8v3h2.52V21h3Z" />
  </svg>
);
const InstagramGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
const XGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.3 3h3L14.6 10.9 22.3 21h-6.3l-4.9-6.4L5.4 21H2.4l7.3-8.4L2.4 3h6.5l4.4 5.9L18.3 3Z" />
  </svg>
);
const YoutubeGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z" stroke="none"/>
    <path d="M10 15.2V8.8L15.5 12 10 15.2Z" fill="var(--footer-yt-bg,#10231c)" stroke="none"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand to-brand-light flex items-center justify-center">
                <span className="text-white font-display font-bold">E</span>
              </div>
              <span className="font-display font-bold text-white">Eshwar Pest Solutions</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Pest control for homes and businesses across Hyderabad and all of Telangana, led by{" "}
              {business.owner}. Eco-friendly treatments, warranty-backed, {business.experienceYears}+
              years in the field.
            </p>
            <div className="flex gap-3">
              {[
                [FacebookGlyph, business.social.facebook],
                [InstagramGlyph, business.social.instagram],
                [XGlyph, business.social.twitter],
                [YoutubeGlyph, business.social.youtube],
              ].map(([Glyph, href], i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                >
                  <Glyph width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-brand-light transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="hover:text-brand-light transition-colors font-medium">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-light transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-light transition-colors">Pricing</Link></li>
              <li><Link to="/sectors" className="hover:text-brand-light transition-colors">Sectors We Serve</Link></li>
              <li><Link to="/branches" className="hover:text-brand-light transition-colors">Branches &amp; Areas</Link></li>
              <li><Link to="/booking" className="hover:text-brand-light transition-colors">Book a Visit</Link></li>
              <li><Link to="/contact" className="hover:text-brand-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Kukatpally, Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-b border-white/10">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
            Pest control across Hyderabad
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50">
            {hyderabadAreas.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>

        <div className="py-8 border-b border-white/10">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
            Serving every district in Telangana
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50">
            {telanganaDistricts.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Founded &amp; led by {business.owner}, {business.ownerTitle}</p>
        </div>
      </div>
    </footer>
  );
}
