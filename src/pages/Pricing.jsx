import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { pricingPlans, business } from "../data/site";

export default function Pricing() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-white/15 px-3 py-1 rounded-full mb-5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Starting prices shown below. Final cost depends on property size and extent of
            infestation — confirmed free of charge after inspection.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-br from-brand-dark to-brand text-white shadow-2xl scale-[1.03]"
                    : "bg-white border border-ink/5 shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display font-bold text-lg mb-1 ${plan.highlight ? "text-white" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlight ? "text-white/70" : "text-ink/50"}`}>
                  {plan.desc}
                </p>
                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <span className="text-3xl font-display font-bold">₹{plan.price.toLocaleString("en-IN")}</span>
                      <span className={`text-sm ml-1 ${plan.highlight ? "text-white/70" : "text-ink/50"}`}>
                        / {plan.unit}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-display font-bold">Custom Quote</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-accent" : "text-brand"}`} />
                      <span className={plan.highlight ? "text-white/85" : "text-ink/65"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  state={{ service: plan.name }}
                  className={`text-center font-semibold py-3 rounded-full transition-all hover:scale-105 ${
                    plan.highlight ? "bg-white text-brand-dark" : "bg-brand text-white"
                  }`}
                >
                  {plan.price ? "Book This Plan" : "Request Quote"}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-ink/50 text-sm mb-3">Not sure which plan fits your property?</p>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 border-2 border-brand text-brand font-semibold px-6 py-3 rounded-full hover:bg-brand hover:text-white transition-all"
            >
              <Phone size={16} /> Talk to us — {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
