import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { branches, hyderabadAreas, telanganaDistricts, business } from "../data/site";

export default function Branches() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-white/15 px-3 py-1 rounded-full mb-5">
            Branches &amp; Coverage
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            We Cover All of Hyderabad — and All of Telangana
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Three branch offices in Hyderabad, technicians dispatched to every locality in the
            city, and service available across all 33 districts of Telangana on request.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Branch Offices" title="Our Hyderabad Branches" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {branches.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-ink/5 shadow-sm p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <MapPin size={22} className="text-brand" />
                </div>
                <h3 className="font-display font-bold text-ink mb-2">{b.name}</h3>
                <p className="text-sm text-ink/55 leading-relaxed mb-4">{b.address}</p>
                <a
                  href={b.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  View on map →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Hyderabad Coverage" title="Localities We Service" />
          <div className="flex flex-wrap gap-2.5 mt-10 justify-center">
            {hyderabadAreas.map((a) => (
              <span
                key={a}
                className="text-sm text-ink/70 bg-paper border border-ink/10 px-4 py-2 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Statewide Service"
            title="All 33 Districts of Telangana"
            desc="Based in Hyderabad, serving the entire state for both residential and large commercial contracts."
          />
          <div className="flex flex-wrap gap-2.5 mt-10 justify-center">
            {telanganaDistricts.map((d) => (
              <span
                key={d}
                className="text-sm text-white bg-brand px-4 py-2 rounded-full"
              >
                {d}
              </span>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <Phone size={18} /> Call to Confirm Service in Your District
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
