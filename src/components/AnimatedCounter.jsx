import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  // Extract a numeric target from strings like "15,000+" or "80+"
  const numeric = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
  const hasComma = /,/.test(String(value));
  const hasPlus = /\+/.test(String(value));

  useEffect(() => {
    if (!inView) return;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(numeric);
    };
    requestAnimationFrame(step);
  }, [inView, numeric, duration]);

  const formatted = hasComma ? display.toLocaleString("en-IN") : display;

  return (
    <span ref={ref}>
      {formatted}
      {hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
}
