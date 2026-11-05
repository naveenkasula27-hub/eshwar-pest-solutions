import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import Icon from "../components/IconMap";
import { sectors, business } from "../data/site";

export default function Sectors() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-white/15 px-3 py-1 rounded-full mb-5">
            Sectors We Serve
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Residential &amp; Commercial Pest Control
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Every property type has its own pest risks. We tailor the treatment plan to the
            sector, not the other way around.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, i) => (
              <TiltCard key={sec.name}>
                <div className="h-full bg-white rounded-2xl p-7 border border-ink/5 shadow-sm hover:shadow-2xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-5">
                    <Icon name={sec.icon} size={26} className="text-brand" />
                  </div>
                  <h3 className="font-display font-bold text-ink text-lg">{sec.name}</h3>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display font-bold text-ink mb-3">
              Don't see your property type?
            </h2>
            <p className="text-ink/55 mb-6 max-w-lg mx-auto">
              We build custom pest management plans for any property. Tell us what you need.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              Get a Custom Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
