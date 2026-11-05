import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import AnimatedCounter from "../components/AnimatedCounter";
import { business, whyChooseUs } from "../data/site";
import Icon from "../components/IconMap";
import ownerPhoto from "../assets/photos/owner-eshwar.jpg";
import inspectionKitchen from "../assets/photos/inspection-kitchen.jpg";
import inspectionExterior from "../assets/photos/inspection-exterior.jpg";

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-white/15 px-3 py-1 rounded-full mb-5"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-5"
          >
            Pest Management, Built Around Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/85 text-lg leading-relaxed"
          >
            {business.name} started as one technician with a scooter and a promise to do the job
            right. {business.experienceYears} years later, it's a {business.teamSize} person team
            serving {business.customersServed} customers across Hyderabad and Telangana.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-ink mb-5">
              Founder's Note
            </h2>
            <div className="flex gap-5 items-start mb-5">
              <img
                src={ownerPhoto}
                alt={`${business.owner}, Founder of ${business.name}`}
                loading="lazy"
                className="w-24 h-24 rounded-2xl object-cover shadow-md shrink-0"
              />
              <div>
                <p className="font-display font-bold text-ink text-lg">{business.owner}</p>
                <p className="text-sm text-ink/50">{business.ownerTitle}, {business.name}</p>
              </div>
            </div>
            <p className="text-ink/60 leading-relaxed mb-4">
              "I started this company because I kept seeing the same thing — pest control done
              fast and cheap, with chemicals that smelled awful and problems that came right back
              in a month. I wanted to build something different: a team that actually explains
              what they're doing, uses products safe enough for a baby's room, and stands behind
              the work with a real warranty."
            </p>
            <p className="font-display font-bold text-ink">— {business.owner}, {business.ownerTitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-ink/5 shadow-sm p-8"
          >
            <h3 className="font-display font-bold text-ink mb-5">Our Mission</h3>
            <ul className="space-y-4">
              {[
                "Deliver pest control that works the first time, not the third.",
                "Use the lowest-toxicity product that still gets the job done.",
                "Be upfront about pricing before any treatment starts.",
                "Train every technician in-house — no outsourced labour.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-ink/70">
                  <CheckCircle2 size={18} className="text-brand mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              [business.experienceYears, "+", "Years of Service"],
              [business.customersServed, "", "Customers Served"],
              [business.corporateClients, "", "Corporate Clients"],
              [business.teamSize, "", "Team Members"],
            ].map(([val, suffix, label], i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-display font-bold text-brand">
                  <AnimatedCounter value={val} suffix={suffix} />
                </p>
                <p className="text-sm text-ink/50 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="On the Job"
            title="Our Technicians at Work"
            desc="Real inspections, indoors and out — this is what a visit from our team looks like."
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3]"
            >
              <img
                src={inspectionKitchen}
                alt="Technician inspecting kitchen cabinets for termite and pest activity"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3]"
            >
              <img
                src={inspectionExterior}
                alt="Technician placing a rodent bait station along a home's exterior wall"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Our Standards" title="What We Promise on Every Job" />
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
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={22} className="text-brand" />
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
    </div>
  );
}
