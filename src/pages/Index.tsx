import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import StatsCounter from "@/components/StatsCounter";
import FeaturedNews from "@/components/FeaturedNews";
import DiscoverHub from "@/components/DiscoverHub";
import heroImage from "@/assets/hero-nature.jpg";
import { fadeUp } from "@/lib/animations";

const Index = () => (
  <Layout>
    {/* Hero + Floating Stats */}
    <section className="relative">
      <div className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
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
      </div>

      {/* Floating Stats overlapping hero bottom */}
      <div className="relative z-20 -mt-16 md:-mt-20">
        <StatsCounter />
      </div>
    </section>

    {/* News */}
    <FeaturedNews />

    {/* Discover Hub CTA */}
    <DiscoverHub />
  </Layout>
);

export default Index;
