import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Página Inicial", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Mapas", path: "/mapas" },
  { label: "Contato", path: "/contato" },
];

const languages = [
  { code: "pt", label: "PT", full: "Português" },
  { code: "en", label: "EN", full: "English" },
  { code: "es", label: "ES", full: "Español" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("pt");
  const location = useLocation();

  const selectedLang = languages.find((l) => l.code === currentLang)!;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src="/ecoway-logo.svg" alt="Ecoway" className="h-10 w-auto" />
          <span className="text-xl font-bold font-heading tracking-tight text-foreground">
            ECOWAY
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{selectedLang.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 z-50 bg-card border border-border rounded-xl shadow-lg py-1 min-w-[140px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-muted ${
                          currentLang === lang.code
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        <span className="font-semibold text-xs w-6">{lang.label}</span>
                        <span>{lang.full}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <Button asChild variant="default" size="sm">
            <Link to="/login" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Entrar
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile language selector */}
              <div className="flex items-center gap-2 py-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <div className="flex gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                        currentLang === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button asChild variant="default" size="sm" className="w-fit mt-2">
                <Link to="/login" onClick={() => setMobileOpen(false)}>
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
