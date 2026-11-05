import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, desc, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">{title}</h2>
      {desc && <p className="text-base md:text-lg text-ink/60 leading-relaxed">{desc}</p>}
    </motion.div>
  );
}
