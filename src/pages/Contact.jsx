import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { business, branches, waLink } from "../data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Contact Form — ${business.name}\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white bg-white/15 px-3 py-1 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Let's Talk About Your Pest Problem
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Call, WhatsApp, or send a message — our team replies within the hour during
            business hours.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              [Phone, "Call Us", business.phoneDisplay, `tel:${business.phone}`],
              [MessageCircle, "WhatsApp", "Chat instantly", waLink("Hello! I'd like to ask about your pest control services.")],
              [Mail, "Email", business.email, `mailto:${business.email}`],
            ].map(([Icon, label, val, href], i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-ink/5 shadow-sm p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs text-ink/45">{label}</p>
                  <p className="font-semibold text-ink">{val}</p>
                </div>
              </motion.a>
            ))}

            <div className="bg-white rounded-2xl border border-ink/5 shadow-sm p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-ink/45">Working Hours</p>
                <p className="font-semibold text-ink">Mon – Sun, 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm font-semibold text-ink mb-3">Our Branches</p>
              <div className="space-y-3">
                {branches.map((b) => (
                  <div key={b.name} className="flex gap-3 text-sm">
                    <MapPin size={16} className="text-brand mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-ink/80">{b.name}</p>
                      <p className="text-ink/50">{b.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-ink/5 shadow-sm p-7 md:p-9">
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Full name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Phone number</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Email (optional)</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about the pest issue and your area..."
                      className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-full transition-all"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-ink/40 text-center">
                    Sending opens WhatsApp with your message pre-filled so our team can reply directly.
                  </p>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-brand" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-ink mb-2">Message Ready to Send</h3>
                  <p className="text-ink/55">
                    We've opened WhatsApp with your details filled in. Hit send there to reach our team.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-ink/5 shadow-sm">
              <iframe
                title="Service area map"
                src="https://maps.google.com/maps?q=Kukatpally%2C%20Hyderabad&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="w-full h-72"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
