import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf, Award, ArrowRight, Star, CheckCircle2, Phone,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import AnimatedCounter from "../components/AnimatedCounter";
import Faq from "../components/Faq";
import Icon from "../components/IconMap";
import {
  business, services, sectors, whyChooseUs, process, faqs, testimonials,
  waLink, defaultWaMessage,
} from "../data/site";
import inspectionKitchen from "../assets/photos/inspection-kitchen.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:28px_28px]" />

        {/* floating 3D-style icons */}
        <div className="absolute top-20 left-[8%] w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-float-slow hidden md:flex">
          <Icon name="Bug" className="text-white" size={28} />
        </div>
        <div className="absolute bottom-24 left-[18%] w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-float-slower hidden md:flex">
          <Icon name="ShieldCheck" className="text-white" size={24} />
        </div>
        <div className="absolute top-32 right-[10%] w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-float-slow hidden md:flex">
          <Icon name="Leaf" className="text-white" size={32} />
        </div>
        <div className="absolute bottom-16 right-[20%] w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-float-slower hidden md:flex">
          <Icon name="Rat" className="text-white" size={20} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-24 md:pb-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Star size={14} fill="currentColor" /> {business.rating} Rated · {business.experienceYears}+ Years in Hyderabad
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Pest-Free Homes &amp; Businesses,<br className="hidden md:block" /> Guaranteed
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              Termites, cockroaches, rodents, bed bugs and more — eliminated safely by{" "}
              {business.owner}'s trained team. Serving every corner of Hyderabad and all of
              Telangana, with warranty-backed treatments.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-4 rounded-full shadow-xl shadow-black/20 transition-all hover:scale-105"
              >
                Book a Free Inspection <ArrowRight size={18} />
              </Link>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-dark font-semibold px-7 py-4 rounded-full shadow-xl transition-all hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-10 text-white/90 text-sm">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Free Property Inspection</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Eco-Friendly Products</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Same-Day Service</span>
            </motion.div>
          </motion.div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 80L1440 0V80H0Z" fill="#F7F8F5" />
        </svg>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <section className="bg-paper -mt-1">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-white rounded-3xl shadow-xl shadow-ink/5 p-8 md:p-10 -translate-y-14 md:-translate-y-20">
            {[
              [business.experienceYears, "+", "Years of Service"],
              [business.customersServed, "", "Happy Customers"],
              [business.corporateClients, "", "Corporate Clients"],
              [business.teamSize, "", "Trained Technicians"],
            ].map(([val, suffix, label], i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-brand">
                  <AnimatedCounter value={val} suffix={suffix} />
                </p>
                <p className="text-xs md:text-sm text-ink/50 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT PREVIEW ---------------- */}
      <section className="py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">
              Hyderabad's Trusted Name in Pest Management
            </h2>
            <p className="text-ink/60 leading-relaxed mb-4">
              {business.name} was founded by {business.owner} with one goal — deliver pest
              control that actually works, using products that are safe for families, pets and
              employees. Over {business.experienceYears} years, that focus has grown the team
              into a {business.teamSize} technician operation serving homes, offices, factories
              and institutions across Hyderabad and Telangana.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Skilled, in-house trained technicians — not subcontracted labour",
                "Affordable, transparent pricing with no hidden charges",
                "Modern, low-odour treatment methods",
                "Personalised plans for every property type",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-ink/70">
                  <CheckCircle2 size={18} className="text-brand mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <img
                src={inspectionKitchen}
                alt="Eshwar Pest Solutions technician inspecting kitchen cabinets for pest activity"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-accent/90 backdrop-blur flex items-center justify-center animate-float-slower shadow-lg">
                <Leaf className="text-white" size={28} />
              </div>
              <div className="absolute bottom-10 left-8 w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center animate-float-slow shadow-lg">
                <Award className="text-brand" size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Pest Control Solutions"
            desc="Every common pest problem, covered — from a single room to a full commercial property."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {services.map((s) => (
              <TiltCard key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block h-full bg-white rounded-2xl p-6 border border-ink/5 shadow-sm hover:shadow-2xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                    <Icon name={s.icon} size={22} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-ink mb-2">{s.name}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed mb-4">{s.short}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Details <ArrowRight size={14} />
                  </span>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTORS MARQUEE ---------------- */}
      <section className="py-16 bg-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center">
            Trusted Across Every Sector
          </h2>
        </div>
        <div className="flex scrollbar-none">
          <div className="flex gap-4 animate-marquee shrink-0">
            {[...sectors, ...sectors].map((sec, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 whitespace-nowrap"
              >
                <Icon name={sec.icon} size={18} className="text-brand-light" />
                <span className="text-sm text-white/80">{sec.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why Hyderabad Trusts ${business.name}`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-ink/5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink mb-1">{item.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Booking a Service Takes Minutes"
          />
          <div className="grid md:grid-cols-5 gap-6 mt-14">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-brand to-brand-light text-white font-display font-bold text-lg flex items-center justify-center mb-4 shadow-lg shadow-brand/30">
                  {p.step}
                </div>
                <h3 className="font-display font-bold text-ink mb-2 text-sm md:text-base">{p.title}</h3>
                <p className="text-xs md:text-sm text-ink/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-ink/5 shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={idx < t.rating ? "text-accent" : "text-ink/15"}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="text-sm font-semibold text-ink/80">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="FAQ" title="Common Questions, Answered" />
          <div className="mt-14">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* ---------------- CTA BANNER ---------------- */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-light p-10 md:p-16 text-center">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:28px_28px]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Got a Pest Problem? Let's Fix It Today.
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Free inspection, same-day visits across Hyderabad, and warranty-backed treatment —
                one call away.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 bg-white text-brand-dark font-semibold px-7 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
                >
                  <Phone size={18} /> {business.phoneDisplay}
                </a>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
                >
                  Book Online <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
