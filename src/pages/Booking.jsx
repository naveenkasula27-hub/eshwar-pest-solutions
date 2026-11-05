import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { services, hyderabadAreas, telanganaDistricts, business } from "../data/site";

const steps = ["Service", "Location", "Schedule", "Your Details"];

export default function Booking() {
  const location = useLocation();
  const preselected = location.state?.service || "";

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: preselected,
    propertyType: "",
    district: "Hyderabad",
    area: "",
    date: "",
    timeSlot: "",
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const canNext = () => {
    if (step === 0) return form.service && form.propertyType;
    if (step === 1) return form.district && form.area;
    if (step === 2) return form.date && form.timeSlot;
    return true;
  };

  const buildMessage = () => {
    return [
      `New Booking Request — ${business.name}`,
      `Service: ${form.service}`,
      `Property type: ${form.propertyType}`,
      `District: ${form.district}`,
      `Area: ${form.area}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.timeSlot}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(buildMessage())}`, "_blank");
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
            Book a Visit
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">
            Schedule Your Free Inspection
          </h1>
          <p className="text-ink/55">Takes under two minutes. No payment required to book.</p>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-3xl border border-ink/5 shadow-xl p-6 md:p-10">
            {/* Progress */}
            <div className="flex items-center justify-between mb-10">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        i < step
                          ? "bg-brand text-white"
                          : i === step
                          ? "bg-accent text-white"
                          : "bg-ink/10 text-ink/40"
                      }`}
                    >
                      {i < step ? <Check size={16} /> : i + 1}
                    </div>
                    <span className="text-[11px] text-ink/50 hidden md:block">{s}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 ${i < step ? "bg-brand" : "bg-ink/10"}`} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">
                        Which service do you need?
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                        <option value="Not sure / General Inspection">Not sure / General Inspection</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Property type</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["Home", "Apartment", "Office", "Commercial"].map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() => update("propertyType", p)}
                            className={`py-3 rounded-xl text-sm font-medium border transition-colors ${
                              form.propertyType === p
                                ? "bg-brand text-white border-brand"
                                : "border-ink/15 text-ink/70 hover:border-brand"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">District</label>
                      <select
                        value={form.district}
                        onChange={(e) => update("district", e.target.value)}
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        {telanganaDistricts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">
                        Area / Locality
                      </label>
                      {form.district === "Hyderabad" ? (
                        <select
                          value={form.area}
                          onChange={(e) => update("area", e.target.value)}
                          className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                        >
                          <option value="">Select your area</option>
                          {hyderabadAreas.map((a) => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={form.area}
                          onChange={(e) => update("area", e.target.value)}
                          placeholder="Enter your town / mandal"
                          className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Preferred date</label>
                      <input
                        type="date"
                        value={form.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => update("date", e.target.value)}
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Preferred time slot</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)", "Emergency / ASAP"].map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => update("timeSlot", t)}
                            className={`py-3 rounded-xl text-sm font-medium border transition-colors ${
                              form.timeSlot === t
                                ? "bg-brand text-white border-brand"
                                : "border-ink/15 text-ink/70 hover:border-brand"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
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
                          placeholder="10-digit mobile number"
                          className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Full address</label>
                      <input
                        required
                        type="text"
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                        placeholder="House/flat no., street, landmark"
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">
                        Anything else we should know? (optional)
                      </label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        rows={3}
                        className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-full transition-all"
                    >
                      Confirm Booking Request
                    </button>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            {step < 3 && (
              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ink/50 disabled:opacity-0 hover:text-ink"
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  onClick={() => canNext() && setStep((s) => Math.min(3, s + 1))}
                  disabled={!canNext()}
                  className="inline-flex items-center gap-1 bg-brand text-white font-semibold px-6 py-3 rounded-full disabled:opacity-40 transition-all"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-ink/5 shadow-xl p-10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-brand" />
            </div>
            <h2 className="text-2xl font-display font-bold text-ink mb-3">Request Ready to Send</h2>
            <p className="text-ink/55 mb-8 max-w-md mx-auto">
              Tap below to send your booking details on WhatsApp, or call us directly — our team
              will confirm your slot within the hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={sendWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle size={18} fill="white" strokeWidth={0} /> Send via WhatsApp
              </button>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-brand text-brand font-semibold px-7 py-4 rounded-full hover:bg-brand hover:text-white transition-all"
              >
                <Phone size={18} /> Call Instead
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
