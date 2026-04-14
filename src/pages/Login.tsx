import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, User } from "lucide-react";
import { Link } from "react-router-dom";
import loginBg from "@/assets/login-bg.jpg";

const Login = () => {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden font-['Poppins']">
      {/* Image Background */}
      <img
        src={loginBg}
        alt="Pedra Branca - Saquarema"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass-strong w-full max-w-[420px] rounded-3xl p-8 md:p-10"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <img src="/ecoway-logo.svg" alt="Ecoway" className="h-10 w-auto mx-auto mb-3 brightness-0 invert opacity-80" />
            <h1 className="text-xl font-medium tracking-[0.3em] text-white">ECOWAY</h1>
            <p className="text-white/50 text-xs mt-1 font-['Source_Serif_4'] italic">Access your ecosystem</p>
          </div>

          {/* Tabs with pill border */}
          <div className="relative flex mb-8 p-1 rounded-full border border-white/20 bg-white/5">
            {/* Sliding indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-white/15"
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                width: "calc(50% - 4px)",
                left: tab === "login" ? 4 : "calc(50% + 0px)",
              }}
            />
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative z-10 flex-1 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  tab === t ? "text-white" : "text-white/50 hover:text-white/70"
                }`}
              >
                {t === "login" ? "Entrar" : "Criar conta"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === "login" ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block">E-mail</label>
                  <div className="liquid-glass rounded-xl">
                    <input placeholder="Digite seu e-mail" type="email" className="w-full h-12 bg-transparent px-4 text-sm text-white placeholder:text-white/40 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block">Senha</label>
                  <div className="liquid-glass rounded-xl relative">
                    <input placeholder="Digite sua senha" type={showPass ? "text" : "password"} className="w-full h-12 bg-transparent px-4 pr-12 text-sm text-white placeholder:text-white/40 outline-none" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="liquid-glass-strong w-full h-12 rounded-full text-sm font-medium text-white transition-transform duration-300">
                  Entrar
                </motion.button>
                <p className="text-center">
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">Esqueceu a senha?</a>
                </p>
              </motion.form>
            ) : (
              <motion.form
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex justify-center mb-1">
                  <div className="liquid-glass w-16 h-16 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white/50" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block">Nome completo</label>
                  <div className="liquid-glass rounded-xl">
                    <input placeholder="Digite seu nome completo" className="w-full h-12 bg-transparent px-4 text-sm text-white placeholder:text-white/40 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block">Gênero</label>
                    <div className="liquid-glass rounded-xl">
                      <select className="w-full h-12 bg-transparent px-4 text-sm text-white outline-none appearance-none">
                        <option className="text-black">Selecione</option>
                        <option className="text-black">Masculino</option>
                        <option className="text-black">Feminino</option>
                        <option className="text-black">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block">Nascimento</label>
                    <div className="liquid-glass rounded-xl">
                      <input type="date" className="w-full h-12 bg-transparent px-4 text-sm text-white outline-none [color-scheme:dark]" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block">Celular</label>
                  <div className="liquid-glass rounded-xl">
                    <input placeholder="(00) 00000-0000" className="w-full h-12 bg-transparent px-4 text-sm text-white placeholder:text-white/40 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60 mb-1.5 block">E-mail</label>
                  <div className="liquid-glass rounded-xl">
                    <input placeholder="Digite seu e-mail" type="email" className="w-full h-12 bg-transparent px-4 text-sm text-white placeholder:text-white/40 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block">Senha</label>
                    <div className="liquid-glass rounded-xl relative">
                      <input placeholder="Sua senha" type={showPass ? "text" : "password"} className="w-full h-12 bg-transparent px-4 pr-10 text-sm text-white placeholder:text-white/40 outline-none" />
                      <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors">
                        {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/60 mb-1.5 block">Confirmar</label>
                    <div className="liquid-glass rounded-xl relative">
                      <input placeholder="Confirme" type={showConfirm ? "text" : "password"} className="w-full h-12 bg-transparent px-4 pr-10 text-sm text-white placeholder:text-white/40 outline-none" />
                      <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors">
                        {showConfirm ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="liquid-glass-strong w-full h-12 rounded-full text-sm font-medium text-white transition-transform duration-300">
                  Criar conta
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-[11px] text-white/50">ou</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="liquid-glass w-full h-12 rounded-full flex items-center justify-center gap-2 text-sm text-white/80 transition-transform duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#fff" fillOpacity="0.8" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#fff" fillOpacity="0.6" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#fff" fillOpacity="0.5" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#fff" fillOpacity="0.7" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Fazer login com o Google
          </motion.button>

          <p className="text-center mt-5">
            <Link to="/" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Continuar sem login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
