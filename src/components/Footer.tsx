import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/ecoway-logo.svg" alt="Ecoway" className="h-8 w-auto brightness-0 invert" />
            <span className="text-lg font-bold font-heading">ECOWAY</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Conectando você ao futuro sustentável.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">
            Institucional
          </h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Página Inicial</Link></li>
            <li><Link to="/sobre" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Sobre</Link></li>
            <li><Link to="/contato" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">
            Conteúdo
          </h4>
          <ul className="space-y-2">
            <li><Link to="/mapas" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Mapas</Link></li>
            <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Notícias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">
            Conta
          </h4>
          <ul className="space-y-2">
            <li><Link to="/login" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Entrar</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-60">
          © 2026 Ecoway. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-1 text-xs opacity-60">
          <Leaf className="w-3 h-3" />
          Feito com amor pela natureza
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
