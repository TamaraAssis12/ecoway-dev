import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import discoverImage from "@/assets/discover-hub.jpg";

const DiscoverHub = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={discoverImage}
        alt="Mata Atlântica"
        loading="lazy"
        width={1280}
        height={720}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-lg"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-secondary font-medium text-sm uppercase tracking-widest mb-4"
        >
          Explore agora
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Descubra nosso hub de{" "}
          <span className="italic font-normal font-serif">pontos turísticos</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-primary-foreground/70 text-lg mb-8 leading-relaxed"
        >
          Navegue pelo mapa interativo e encontre trilhas, praias, cachoeiras e muito mais em Saquarema e região.
        </motion.p>
        <motion.div variants={fadeUp} custom={3}>
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
  </section>
);

export default DiscoverHub;
