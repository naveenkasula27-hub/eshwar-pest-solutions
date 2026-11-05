import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Icon from "../components/IconMap";
import { services, business, waLink } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0">
              <Icon name={service.icon} size={30} className="text-white" />
            </div>
            <div>
              <span className="text-white/70 text-sm">Services / {service.name}</span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white">{service.name}</h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-lg text-ink/70 leading-relaxed mb-8">{service.description}</p>

            <h2 className="font-display font-bold text-xl text-ink mb-4">What's Included</h2>
            <ul className="space-y-3 mb-10">
              {service.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-ink/70">
                  <CheckCircle2 size={18} className="text-brand mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                state={{ service: service.name }}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-4 rounded-full shadow-lg transition-all hover:scale-105"
              >
                Book This Service <ArrowRight size={18} />
              </Link>
              <a
                href={waLink(`Hi, I'd like to know more about ${service.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand text-brand font-semibold px-7 py-4 rounded-full transition-all hover:bg-brand hover:text-white"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <aside className="bg-white rounded-2xl border border-ink/5 shadow-sm p-6 h-fit sticky top-24">
            <p className="text-xs uppercase tracking-wider text-ink/40 mb-1">Starting at</p>
            <p className="text-3xl font-display font-bold text-brand mb-1">
              ₹{service.priceFrom.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-ink/50 mb-6">{service.priceUnit}</p>
            <a
              href={`tel:${business.phone}`}
              className="flex items-center justify-center gap-2 w-full bg-brand text-white font-semibold py-3 rounded-full mb-3"
            >
              <Phone size={16} /> {business.phoneDisplay}
            </a>
            <p className="text-xs text-ink/40 text-center">
              Final price confirmed after a free on-site inspection.
            </p>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="font-display font-bold text-xl text-ink mb-6">Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group block bg-paper rounded-xl p-5 border border-ink/5 hover:shadow-md transition-shadow"
              >
                <Icon name={s.icon} size={20} className="text-brand mb-3" />
                <p className="font-semibold text-ink text-sm mb-1">{s.name}</p>
                <span className="text-xs text-brand inline-flex items-center gap-1">
                  View <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
