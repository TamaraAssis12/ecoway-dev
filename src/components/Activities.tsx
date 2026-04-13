import { motion } from "framer-motion";
import { Compass, TreePine, Camera, Waves, Bird, Mountain } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import activityImage from "@/assets/activity-hiking.jpg";

const activities = [
  { icon: TreePine, title: "Trilhas Guiadas", desc: "Percorra caminhos pela Mata Atlântica com guias especializados." },
  { icon: Waves, title: "Praias Preservadas", desc: "Descubra praias com ecossistemas intocados e águas cristalinas." },
  { icon: Bird, title: "Observação de Fauna", desc: "Aviste espécies nativas em seus habitats naturais." },
  { icon: Mountain, title: "Mirantes Naturais", desc: "Vistas panorâmicas de tirar o fôlego em trilhas de altitude." },
  { icon: Camera, title: "Fotografia Ambiental", desc: "Registre a biodiversidade com workshops fotográficos." },
  { icon: Compass, title: "Aventura Sustentável", desc: "Experiências de turismo com impacto ambiental mínimo." },
];

const Activities = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">O que oferecemos</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
          Atividades <span className="italic font-normal font-serif text-primary">Ecológicas</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={activityImage}
              alt="Trilha ecológica"
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-2xl shadow-xl p-5 max-w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Aventuras</p>
                <p className="text-lg font-bold font-heading text-foreground">25+</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Experiências únicas na natureza</p>
          </div>
        </motion.div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {activities.map((act, i) => (
            <motion.div
              key={act.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group p-5 rounded-2xl bg-card hover:bg-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                <act.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-heading font-semibold text-foreground group-hover:text-primary-foreground mb-1.5 transition-colors">
                {act.title}
              </h4>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors">
                {act.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Activities;
