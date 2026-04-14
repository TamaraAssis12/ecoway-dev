import { Link } from "react-router-dom";
import { Leaf, MapPin, Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer style={{ backgroundColor: "#1D231F" }}>
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/ecoway-logo.svg" alt="Ecoway" className="h-8 w-auto brightness-0 invert" />
            <span className="text-lg font-bold font-heading text-white">ECOWAY</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Conectando você ao futuro sustentável.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: "rgba(85, 164, 46, 0.15)" }}>
              <Instagram className="w-4 h-4" style={{ color: "#55A42E" }} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: "rgba(85, 164, 46, 0.15)" }}>
              <Facebook className="w-4 h-4" style={{ color: "#55A42E" }} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: "rgba(85, 164, 46, 0.15)" }}>
              <Youtube className="w-4 h-4" style={{ color: "#55A42E" }} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
            Institucional
          </h4>
          <ul className="space-y-2.5">
            <li><Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Página Inicial</Link></li>
            <li><Link to="/sobre" className="text-sm text-white/70 hover:text-white transition-colors">Sobre</Link></li>
            <li><Link to="/contato" className="text-sm text-white/70 hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
            Conteúdo
          </h4>
          <ul className="space-y-2.5">
            <li><Link to="/mapas" className="text-sm text-white/70 hover:text-white transition-colors">Mapas</Link></li>
            <li><Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Notícias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
            Contato
          </h4>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "#55A42E" }} />
              Saquarema, RJ
            </li>
            <li className="flex items-center gap-2 text-sm text-white/70">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#55A42E" }} />
              contato@ecoway.space
            </li>
            <li className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#55A42E" }} />
              (22) 99999-0000
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/50">
          © 2026 Ecoway. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-1 text-xs text-white/50">
          <Leaf className="w-3 h-3" style={{ color: "#55A42E" }} />
          Feito com amor pela natureza
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
