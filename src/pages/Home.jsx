// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO PRINCIPAL */}
        <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-400 text-xs font-semibold mb-2">
              INGLÊS PARA SITUAÇÕES REAIS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Inglês prático, focado no que você
              <span className="text-emerald-400"> realmente usa</span>.
            </h1>
            <p className="text-slate-300 mb-6 text-sm md:text-base">
              WiMEX-UP é um curso 100% online voltado para situações do dia a dia:
              check-in em aeroportos, entrevistas, reuniões, imigração, atendimento
              ao cliente, leitura de manuais, filmes, séries e muito mais.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate('/cadastro')}
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-900 text-sm"
              >
                Quero me matricular
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-3 rounded-full border border-slate-600 hover:border-emerald-400 text-sm"
              >
                Já sou aluno
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Aulas curtas, diretas ao ponto, com um professor-avatar de IA disponível
              24 horas por dia para praticar com você.
            </p>
          </div>

          {/* Card lateral – benefícios principais */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 space-y-4">
            <p className="text-sm text-emerald-400 font-semibold">
              Por que o WiMEX-UP é diferente?
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <span className="text-emerald-400 mr-1">✓</span>
                Avatar de IA disponível 24h para praticar conversação e pronúncia.
              </li>
              <li>
                <span className="text-emerald-400 mr-1">✓</span>
                Foco total em situações reais de viagem, trabalho e vida cotidiana.
              </li>
              <li>
                <span className="text-emerald-400 mr-1">✓</span>
                Acesso vitalício ao conteúdo — estude no seu tempo.
              </li>
              <li>
                <span className="text-emerald-400 mr-1">✓</span>
                Conteúdo atualizado, suporte ao aluno e certificado digital.
              </li>
            </ul>
            <div className="mt-4 text-xs text-slate-400">
              Assim que sua matrícula é confirmada, você recebe login e senha para acessar
              todos os módulos da plataforma.
            </div>
          </div>
        </section>

        {/* SEÇÃO MÉTODO */}
        <section
          id="method"
          className="bg-slate-900/40 border-t border-slate-800"
        >
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-3">Como funciona o método WiMEX-UP?</h2>
            <p className="text-sm text-slate-300 mb-8">
              Em vez de focar apenas em gramática e regras, o WiMEX-UP foi pensado para
              quem precisa usar o inglês em situações específicas. Você aprende com
              diálogos, simulações, exercícios práticos e um avatar de IA que conversa
              com você como um professor particular.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-2">Aulas curtas e objetivas</h3>
                <p className="text-slate-300">
                  Cada módulo é dividido em aulas rápidas, para você estudar mesmo
                  com pouco tempo disponível e sem ficar sobrecarregado.
                </p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-2">Treino com avatar de IA</h3>
                <p className="text-slate-300">
                  Pratique diálogos reais com o avatar-professor, que responde em inglês,
                  corrige sua pronúncia e adapta o nível à sua evolução.
                </p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-2">Revisão ilimitada</h3>
                <p className="text-slate-300">
                  Assista novamente às aulas sempre que quiser, revisando antes de
                  viagens, entrevistas, reuniões ou apresentações importantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO PARA QUEM É */}
        <section
          id="who"
          className="border-t border-slate-800 bg-slate-950"
        >
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-6">Para quem é o WiMEX-UP?</h2>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-2">Quem nunca conseguiu “destravar” o inglês</p>
                <p className="text-slate-300">
                  Pessoas que já tentaram cursos tradicionais, mas não sentiram evolução
                  ou não conseguiram levar o curso até o fim.
                </p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-2">Profissionais que precisam do inglês</p>
                <p className="text-slate-300">
                  Para entrevistas, reuniões, ligações, atendimento a clientes ou contato
                  com equipes internacionais.
                </p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-2">Quem vai viajar ou morar fora</p>
                <p className="text-slate-300">
                  Para quem precisa se virar em aeroportos, imigração, hotéis, restaurantes,
                  transporte e situações do dia a dia em outro país.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO PLANOS / INVESTIMENTO */}
        <section
          id="plans"
          className="border-t border-slate-800 bg-slate-950"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Um único investimento, acesso vitalício
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                Você paga uma vez e pode revisar as aulas sempre que quiser. Sem
                mensalidades, sem contratos complicados. Ideal para quem quer aprender
                com calma e revisar o conteúdo antes de momentos importantes.
              </p>
              <ul className="text-sm text-slate-300 space-y-2 mb-4">
                <li>• 30 módulos práticos divididos por níveis</li>
                <li>• Atualizações incluídas</li>
                <li>• Suporte ao aluno por e-mail</li>
                <li>• Certificado digital de conclusão</li>
              </ul>
              <p className="text-xs text-slate-500">
                *Valores e condições demonstrativos. A integração com pagamento real
                será configurada em uma próxima etapa do projeto.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-emerald-500/60 rounded-3xl p-6 text-center">
              <p className="text-xs uppercase tracking-[0.15em] text-emerald-400 font-semibold mb-2">
                ACESSO VITALÍCIO
              </p>
              <p className="text-4xl font-bold mb-1">R$ 197</p>
              <p className="text-xs text-slate-400 mb-4">
                ou 12x de R$ 19,90 no cartão*
              </p>
              <button
                onClick={() => navigate('/cadastro')}
                className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-900 text-sm mb-2"
              >
                Quero começar hoje
              </button>
              <button
                onClick={() => {
                  const contatoSection = document.getElementById('contato-section');
                  if (contatoSection) {
                    contatoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-2.5 rounded-full border border-slate-700 hover:border-emerald-400 text-xs text-slate-200"
              >
                Falar com um consultor
              </button>
            </div>
          </div>
        </section>

        {/* SEÇÃO DÚVIDAS / FAQ */}
        <section
          id="faq"
          className="border-t border-slate-800 bg-slate-950"
        >
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-6">Dúvidas frequentes</h2>

            <div className="space-y-4 text-sm">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-1">
                  O curso é totalmente online?
                </p>
                <p className="text-slate-300">
                  Sim. Você assiste às aulas, pratica com o avatar de IA e acompanha
                  seu progresso 100% online, do computador, tablet ou celular.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-1">
                  Por quanto tempo terei acesso ao conteúdo?
                </p>
                <p className="text-slate-300">
                  O acesso é vitalício. Isso significa que você pode retornar às aulas
                  sempre que precisar revisar o conteúdo.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-1">
                  Preciso saber inglês básico para começar?
                </p>
                <p className="text-slate-300">
                  Não. O curso começa do zero, com módulos introdutórios para quem
                  nunca estudou ou está muito tempo sem praticar.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
                <p className="font-semibold mb-1">
                  Como funciona a parte de conversação com IA?
                </p>
                <p className="text-slate-300">
                  Você interage com um professor-avatar, que responde em inglês, sugere
                  frases, corrige pronúncia e se adapta ao seu ritmo. A implementação
                  completa dessa função será ativada em etapas futuras do projeto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO CONTATO / FALE COM CONSULTOR */}
        <section
          id="contato-section"
          className="bg-slate-950 border-t border-slate-800"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Fale com um consultor
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                Ainda está em dúvida se o WiMEX-UP é para você? Envie seus dados e nossa
                equipe entra em contato para te orientar sobre o melhor caminho.
              </p>
              <p className="text-xs text-slate-500">
                Resposta em até 24h úteis, diretamente no seu WhatsApp ou e-mail.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              {/* Formulário demonstrativo */}
              <div className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                    placeholder="Como você gostaria de ser chamado(a)?"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-900 text-sm"
                >
                  Enviar e receber contato em 24h
                </button>
                <p className="text-[11px] text-slate-500">
                  Este formulário é demonstrativo nesta versão. Em breve, os dados serão
                  integrados com um sistema de atendimento real.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
