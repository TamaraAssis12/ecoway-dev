import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, X, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

import spotBeach from "@/assets/spot-beach.jpg";
import spotTrail from "@/assets/spot-trail.jpg";
import spotWaterfall from "@/assets/spot-waterfall.jpg";
import spotMountain from "@/assets/spot-mountain.jpg";
import spotLagoon from "@/assets/spot-lagoon.jpg";
import spotJungle from "@/assets/spot-jungle.jpg";
import spotRiver from "@/assets/spot-river.jpg";

const spots = [
  { name: "Praia da Vila", category: "Praia", rating: 4.5, difficulty: 1, image: spotBeach, desc: "Praia tranquila com águas cristalinas, ideal para banho e relaxamento em meio à natureza." },
  { name: "Trilha da Pedra Branca", category: "Trilha", rating: 4.0, difficulty: 4, image: spotTrail, desc: "A trilha da Pedra Branca tem cerca de 9 km e dificuldade moderada a difícil. O percurso atravessa mata fechada e termina com uma bela vista da região." },
  { name: "Cachoeira do Roncador", category: "Cachoeira", rating: 4.8, difficulty: 3, image: spotWaterfall, desc: "Cachoeira impressionante em meio à mata atlântica, com queda d'água de 30 metros." },
  { name: "Trilha dos Goonies", category: "Trilha", rating: 4.2, difficulty: 3, image: spotMountain, desc: "Vista panorâmica incrível do topo da montanha, com visão de 360 graus da região." },
  { name: "Cachoeira do Tingui", category: "Cachoeira", rating: 3.8, difficulty: 2, image: spotRiver, desc: "Cachoeira de fácil acesso com piscina natural perfeita para banho." },
  { name: "Trilha da TranSaquarema", category: "Trilha", rating: 4.6, difficulty: 4, image: spotJungle, desc: "Trilha desafiadora que atravessa diferentes ecossistemas da Mata Atlântica." },
  { name: "Trilha da Lagoa Vermelha", category: "Lagoa", rating: 4.1, difficulty: 2, image: spotLagoon, desc: "Lagoa serena cercada de manguezais, perfeita para observação de aves." },
  { name: "Sambaqui da Beirada", category: "Histórico", rating: 3.9, difficulty: 1, image: spotBeach, desc: "Sítio arqueológico com sambaquis históricos à beira-mar." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const Mapas = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof spots[0] | null>(null);

  const filtered = spots.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/50">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2"
          >
            Encontre um ponto de{" "}
            <span className="text-primary">Ecoturismo</span>{" "}
            perto de você!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="max-w-md mx-auto mt-8 relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Pesquise por trilha, cachoeira, lagoa..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 rounded-full bg-card"
            />
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((spot, i) => (
              <motion.button
                key={spot.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                onClick={() => setSelected(spot)}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-foreground">{spot.name}</h3>
                    <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-full">
                      {spot.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3.5 h-3.5 ${
                          j < Math.floor(spot.rating) ? "text-accent fill-accent" : "text-border"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{spot.rating}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              Nenhum ponto encontrado para "{search}"
            </p>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary font-medium">{selected.category}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {selected.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{selected.desc}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Dificuldade</p>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-4 h-4 ${
                            j < selected.difficulty ? "text-accent fill-accent" : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Avaliações</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-4 h-4 ${
                            j < Math.floor(selected.rating) ? "text-accent fill-accent" : "text-border"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">{selected.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Mapas;
