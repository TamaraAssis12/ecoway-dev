import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Newspaper, ArrowRight, Search, Star, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-nature.jpg";
import spotBeach from "@/assets/spot-beach.jpg";
import spotTrail from "@/assets/spot-trail.jpg";
import spotWaterfall from "@/assets/spot-waterfall.jpg";

import { fadeUp } from "@/lib/animations";

const stats = [
  { icon: Search, value: "8", label: "Pontos de Ecoturismo" },
  { icon: Newspaper, value: "11", label: "Notícias Ambientais" },
];

const featured = [
  { name: "Praia da Vila", category: "Praia", rating: 4.5, image: spotBeach },
  { name: "Trilha da Pedra Branca", category: "Trilha", rating: 4.0, image: spotTrail },
  { name: "Cachoeira do Roncador", category: "Cachoeira", rating: 4.8, image: spotWaterfall },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Natureza brasileira"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>
      <div className="container relative z-10">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-secondary font-medium text-sm uppercase tracking-widest mb-4"
          >
            Ecoturismo sustentável
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Conectando você ao futuro sustentável
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-primary-foreground/80 text-lg mb-8 leading-relaxed"
          >
            Descubra, aprenda e aja pelo meio ambiente em uma única plataforma.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex gap-4 flex-wrap">
            <Button asChild size="lg">
              <Link to="/mapas">
                <Compass className="w-5 h-5 mr-2" />
                Explorar mapas
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/sobre">Saiba mais</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-card rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-4xl font-heading font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Spots */}
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Destinos em destaque
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore trilhas, cachoeiras e praias próximas a você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((spot, i) => (
            <motion.div
              key={spot.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
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
                <span className="text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                  {spot.category}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-3">
                  {spot.name}
                </h3>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < Math.floor(spot.rating)
                          ? "text-accent fill-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{spot.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <MapPin className="w-10 h-10 text-primary-foreground/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Descubra pontos turísticos
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Explore trilhas, cachoeiras, lagoas e outros destinos de ecoturismo próximos a você.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link to="/mapas">
              Explorar mapas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
