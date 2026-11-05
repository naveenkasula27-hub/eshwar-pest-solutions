import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { business } from "../data/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/sectors", label: "Sectors" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center shadow-lg shadow-brand/30">
              <span className="text-white font-display font-bold text-lg">E</span>
            </div>
            <div className="leading-tight text-left">
              <p className="font-display font-bold text-ink text-base md:text-lg">
                Eshwar Pest Solutions
              </p>
              <p className="text-[11px] text-ink/50 -mt-0.5 hidden sm:block">
                Hyderabad &amp; Telangana
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-2 ${
                    isActive ? "text-brand" : "text-ink/70 hover:text-brand"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-ink/80 hover:text-brand transition-colors"
            >
              <Phone size={16} />
              {business.phoneDisplay}
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-accent/30 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-ink/10 px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-ink/5 ${
                    isActive ? "text-brand" : "text-ink/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-3 mt-4">
            <a
              href={`tel:${business.phone}`}
              className="flex-1 text-center border-2 border-brand text-brand font-semibold py-3 rounded-full"
            >
              Call Now
            </a>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-accent text-white font-semibold py-3 rounded-full"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
