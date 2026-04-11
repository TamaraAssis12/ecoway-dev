import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Newspaper, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import aboutHero from "@/assets/about-hero.jpg";

import { fadeUp } from "@/lib/animations";

const impacts = [
  "Promover a educação ambiental de forma acessível e engajadora",
  "Facilitar o acesso a estabelecimentos e locais que valorizam a sustentabilidade",
  "Incentivar práticas sustentáveis através de gamificação e recompensas",
  "Construir uma comunidade engajada em ações ambientais positivas",
];

const offerings = [
  {
    icon: Newspaper,
    title: "Notícias Ambientais",
    desc: "Mantenha-se informado sobre as últimas novidades, tendências e descobertas no mundo da sustentabilidade e meio ambiente.",
  },
  {
    icon: MapPin,
    title: "Mapas de Ecoturismo",
    desc: "Descubra trilhas, cachoeiras, lagoas e outros pontos de ecoturismo próximos a você, conectando-se com a natureza.",
  },
];

const Sobre = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutHero} alt="Sobre o Ecoway" className="w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Sobre o Ecoway
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          className="text-primary-foreground/80 max-w-lg mx-auto text-lg"
        >
          Conectando pessoas ao futuro sustentável através de conhecimento, descoberta e ação
        </motion.p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="space-y-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Nossa Missão</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>O Ecoway nasceu da necessidade de criar uma plataforma que inspire e capacite pessoas a adotarem práticas mais sustentáveis em seu dia a dia. Acreditamos que cada pequena ação conta e que, juntos, podemos construir um futuro mais verde e consciente.</p>
              <p>Nosso objetivo é democratizar o acesso à informação sobre sustentabilidade, facilitar a descoberta de estabelecimentos e locais eco-friendly, e transformar o aprendizado sobre meio ambiente em uma experiência engajadora e recompensadora.</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Nossa Visão</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Ser a principal plataforma de referência para pessoas que buscam viver de forma mais sustentável, oferecendo ferramentas práticas, conteúdo educativo e uma comunidade engajada em práticas ambientais responsáveis.</p>
              <p>Queremos criar um ecossistema onde conhecimento, descoberta e ação se unem para gerar impacto positivo real no meio ambiente.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Offerings */}
    <section className="py-20 bg-secondary/50">
      <div className="container max-w-3xl">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="text-3xl font-heading font-bold text-foreground text-center mb-12"
        >
          O que oferecemos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-2xl p-8 border border-border text-center"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Nosso Impacto</h2>
          <p className="text-muted-foreground mb-8">
            Acreditamos que a mudança começa com a educação e a conscientização. Através da nossa plataforma, buscamos:
          </p>
          <ul className="space-y-4">
            {impacts.map((item, i) => (
              <motion.li
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Junte-se a nós nessa jornada
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Comece sua jornada rumo a um estilo de vida mais sustentável hoje mesmo. Explore, aprenda e faça a diferença!
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/login">
              Começar agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Sobre;
