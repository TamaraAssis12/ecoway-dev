import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, TreePine, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import discoverImage from "@/assets/discover-hub.jpg";

const features = [
  { icon: <MapPin className="w-5 h-5" />, label: "Praias preservadas" },
  { icon: <TreePine className="w-5 h-5" />, label: "Trilhas ecológicas" },
  { icon: <Mountain className="w-5 h-5" />, label: "Mirantes naturais" },
];

const DiscoverHub = () => (
  <section className="py-24">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-primary font-medium text-sm uppercase tracking-widest mb-3"
          >
            Explore agora
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-5"
          >
            Descubra nosso hub de{" "}
            <span className="italic font-normal font-serif text-primary">pontos turísticos</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-base mb-8 leading-relaxed"
          >
            Navegue pelo mapa interativo e encontre trilhas, praias, cachoeiras e muito mais em Saquarema e região.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col gap-3 mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {f.icon}
                </div>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={4}>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/mapas">
                <MapPin className="w-5 h-5 mr-2" />
                Explorar destinos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden aspect-[4/3]"
        >
          <img
            src={discoverImage}
            alt="Mata Atlântica"
            loading="lazy"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Content side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-primary font-medium text-sm uppercase tracking-widest mb-3"
          >
            Explore agora
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-5"
          >
            Descubra nosso hub de{" "}
            <span className="italic font-normal font-serif text-primary">pontos turísticos</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-muted-foreground text-base mb-8 leading-relaxed"
          >
            Navegue pelo mapa interativo e encontre trilhas, praias, cachoeiras e muito mais em Saquarema e região.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col gap-3 mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {f.icon}
                </div>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={4}>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/mapas">
                <MapPin className="w-5 h-5 mr-2" />
                Explorar destinos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DiscoverHub;
