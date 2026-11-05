import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import Icon from "../components/IconMap";
import { services, waLink } from "../data/site";

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-white/15 px-3 py-1 rounded-full mb-5">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Pest Control Services for Every Need
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            From a single-room cockroach problem to a full termite warranty programme —
            pick a service below for details and pricing.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <TiltCard key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block h-full bg-white rounded-2xl p-7 border border-ink/5 shadow-sm hover:shadow-2xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                    <Icon name={s.icon} size={22} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-ink text-lg mb-2">{s.name}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed mb-4">{s.short}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand">
                      ₹{s.priceFrom.toLocaleString("en-IN")} onwards
                    </span>
                    <ArrowRight size={16} className="text-brand group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
