// src/components/Header.jsx
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToId(id) {
    // Se não estiver na home, primeiro navega pra home
    if (location.pathname !== '/') {
      navigate('/');
      // pequeno delay para garantir que a home carregou
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + nome */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-9 h-9 rounded-full bg-slate-900 border border-emerald-500/70 flex items-center justify-center overflow-hidden">
            {/* logo do public/logo.png */}
            <img
              src="/logo.png"
              alt="WiMEX-UP"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-emerald-400 font-semibold tracking-[0.18em]">
              WIMEX-UP
            </span>
            <span className="text-sm font-semibold text-white">
              English Course
            </span>
          </div>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <button
            onClick={() => scrollToId('method')}
            className="hover:text-white transition-colors"
          >
            Método
          </button>
          <button
            onClick={() => scrollToId('who')}
            className="hover:text-white transition-colors"
          >
            Para quem é
          </button>
          <button
            onClick={() => scrollToId('plans')}
            className="hover:text-white transition-colors"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToId('faq')}
            className="hover:text-white transition-colors"
          >
            Dúvidas
          </button>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-slate-300 hover:text-white"
          >
            Já sou aluno
          </button>
          <button
            onClick={() => navigate('/cadastro')}
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-sm font-semibold text-slate-900"
          >
            Começar agora
          </button>
        </div>
      </div>
    </header>
  );
}
