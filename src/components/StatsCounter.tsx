import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, TreePine, Leaf } from "lucide-react";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  { value: 6, label: "Destinos mapeados", icon: <MapPin className="w-5 h-5" /> },
  { value: 9, label: "Trilhas ecológicas", icon: <TreePine className="w-5 h-5" /> },
  { value: 103, label: "Espécies catalogadas", icon: <Leaf className="w-5 h-5" /> },
];

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
};

const StatsCounter = () => (
  <div className="container">
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 px-6 py-8 md:px-12 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="flex items-center gap-5 justify-center md:justify-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {stat.icon}
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-none mb-1">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <span className="text-primary">+</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsCounter;
