import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import ExpandingFlexCards from "./ExpandingFlexCards";

import newsVolleyball from "@/assets/news-volleyball.jpg";
import newsChurch from "@/assets/news-church.jpg";
import newsSunset from "@/assets/news-sunset.jpg";
import newsTropical from "@/assets/news-tropical.jpg";
import newsForest from "@/assets/news-forest.jpg";

const flexCards = [
  { image: newsChurch, title: "Igreja de Nossa Senhora de Nazareth", category: "Cultura" },
  { image: newsSunset, title: "Pôr do sol na Praia de Itaúna", category: "Natureza" },
  { image: newsTropical, title: "Trilha ecológica pela restinga", category: "Ecoturismo" },
  { image: newsForest, title: "Reserva da Mata Atlântica", category: "Preservação" },
];

const FeaturedNews = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">
            Novidades
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Notícias em Destaque
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          Ver as últimas notícias
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* Hero news card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="relative rounded-2xl overflow-hidden aspect-[16/7] mb-4 group cursor-pointer"
      >
        <img
          src={newsVolleyball}
          alt="Campeonato de vôlei em Saquarema"
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Esporte e Natureza
          </span>
          <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2">
            Campeonato de vôlei em Saquarema
          </h3>
          <p className="text-white/70 text-sm md:text-base max-w-xl">
            O maior evento de vôlei de praia retorna às areias fluminenses com foco total em sustentabilidade.
          </p>
        </div>
      </motion.div>

      {/* Expanding flex cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        <ExpandingFlexCards cards={flexCards} />
      </motion.div>
    </div>
  </section>
);

export default FeaturedNews;
