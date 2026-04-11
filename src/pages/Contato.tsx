import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const Contato = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Entre em contato
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tem alguma dúvida ou sugestão? Adoraríamos ouvir você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, label: "E-mail", value: "contato@ecoway.space" },
            { icon: Phone, label: "Telefone", value: "(21) 99999-0000" },
            { icon: MapPin, label: "Localização", value: "Saquarema, RJ" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-2xl p-6 border border-border text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          onSubmit={(e) => e.preventDefault()}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Nome</label>
              <Input placeholder="Seu nome" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">E-mail</label>
              <Input placeholder="seu@email.com" type="email" className="h-12 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Assunto</label>
            <Input placeholder="Sobre o que deseja falar?" className="h-12 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Mensagem</label>
            <Textarea placeholder="Escreva sua mensagem..." className="min-h-[140px] rounded-xl" />
          </div>
          <Button type="submit" size="lg" className="rounded-xl">
            Enviar mensagem
          </Button>
        </motion.form>
      </div>
    </section>
  </Layout>
);

export default Contato;
