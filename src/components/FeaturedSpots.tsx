import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { fadeUp } from "@/lib/animations";

import spotBeach from "@/assets/spot-beach.jpg";
import spotTrail from "@/assets/spot-trail.jpg";
import spotWaterfall from "@/assets/spot-waterfall.jpg";

const spots = [
  {
    name: "Praia da Vila",
    category: "Praia",
    desc: "Águas cristalinas e areia branca em um cenário preservado.",
    image: spotBeach,
  },
  {
    name: "Trilha da Pedra Branca",
    category: "Trilha",
    desc: "9 km de mata fechada com vista panorâmica no topo.",
    image: spotTrail,
  },
  {
    name: "Cachoeira do Roncador",
    category: "Cachoeira",
    desc: "Queda d'água de 30m em meio à Mata Atlântica.",
    image: spotWaterfall,
  },
];

const FeaturedSpots = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Explorar</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Destinos em destaque
          </h2>
        </div>
        <Link
          to="/mapas"
          className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          Ver todos os destinos
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {spots.map((spot, i) => (
          <motion.div
            key={spot.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <Link
              to="/mapas"
              className="group block relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[2/3]"
            >
              <img
                src={spot.image}
                alt={spot.name}
                loading="lazy"
                width={640}
                height={960}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  <MapPin className="w-3 h-3" />
                  {spot.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-heading font-bold text-xl mb-1">
                  {spot.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {spot.desc}
                </p>
                <div className="flex items-center gap-2 mt-3 text-white/60 text-xs group-hover:text-white/90 transition-colors">
                  <span>Explorar</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Link
        to="/mapas"
        className="md:hidden flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-8"
      >
        Ver todos os destinos
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default FeaturedSpots;
