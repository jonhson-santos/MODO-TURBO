import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  ArrowRight,
  Play,
  Lock,
  Gift,
  AlertTriangle,
  Flame,
  DollarSign,
  Eye,
  Brain,
  Rocket,
  Crown,
  Diamond,
  Banknote,
  TrendingDown,
  X,
  ChevronDown,
  MousePointer,
  Smartphone,
  Laptop,
  CreditCard,
  Timer,
  Lightbulb,
  Skull
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 32
  });

  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Countdown timer mais agressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer para animações
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleElements(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const painPoints = [
    "💸 Você trabalha 8h+ por dia e o salário não sobra nada",
    "😰 Vê todo mundo com renda extra na internet menos VOCÊ",
    "🤡 Já tentou mil cursos e NADA funcionou",
    "😡 Está CANSADO de viver apertado enquanto outros prosperam",
    "💔 Sonha em ter uma renda extra mas não sabe como",
    "⏰ O tempo está passando e você CONTINUA no mesmo lugar",
    "🔥 Sente RAIVA de ver outros ganhando dinheiro online",
    "💀 Tem MEDO de nunca conseguir uma renda extra"
  ];

  const secrets = [
    "🎯 O método EXATO para gerar R$ 3k a R$ 15k/mês",
    "💰 Como vender R$ 5.000 a R$ 15.000/mês sem aparecer",
    "🧠 A psicologia SUJA que faz qualquer um comprar de você",
    "⚡ Scripts prontos que convertem 47% dos visitantes",
    "🎪 Como criar urgência REAL que deixa o cliente desesperado",
    "🔥 O segredo para gerar R$ 10.000/mês que NINGUÉM conta",
    "💎 Funis que geram renda no automático",
    "🚀 Como escalar de 0 a R$ 15.000/mês em 90 dias"
  ];

  const testimonials = [
    {
      name: "Marcus Silva",
      result: "R$ 12.700 em 30 dias",
      text: "Cara, isso é INSANO! Em 30 dias ganhei mais que meu salário. Método funciona MESMO!",
      days: "30 dias"
    },
    {
      name: "Ana Costa",
      result: "R$ 8.950 no primeiro mês",
      text: "Nunca pensei que seria TÃO fácil! Literalmente copy e paste. Agora tenho minha renda extra!",
      days: "28 dias"
    },
    {
      name: "Roberto Lima",
      result: "R$ 23.400 em 60 dias",
      text: "Método BRUTAL! Saí do zero absoluto para quase 25k. Agora tenho liberdade financeira!",
      days: "60 dias"
    },
    {
      name: "Carla Santos",
      result: "R$ 15.600 em 45 dias",
      text: "FUNCIONOU! Estava desempregada, agora tenho uma renda extra incrível. Vingança doce!",
      days: "45 dias"
    }
  ];

  const bonuses = [
    {
      title: "SCRIPTS MILIONÁRIOS",
      value: "R$ 2.997",
      description: "Scripts exatos para gerar R$ 5k a R$ 15k/mês"
    },
    {
      title: "FUNIS PRONTOS",
      value: "R$ 4.997",
      description: "Funis que convertem 47% dos visitantes"
    },
    {
      title: "TRÁFEGO GRATUITO",
      value: "R$ 1.997",
      description: "Como ter 100k visitantes sem gastar R$ 1"
    },
    {
      title: "MENTALIDADE MILIONÁRIA",
      value: "R$ 3.997",
      description: "Mentalidade para renda extra consistente"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Barra de Urgência Extrema */}
      <div className="bg-red-600 text-center py-3 relative z-50 animate-pulse">
        <div className="flex items-center justify-center space-x-4">
          <Skull className="w-5 h-5 animate-bounce" />
          <span className="text-sm font-black uppercase tracking-wider">
            🚨 ÚLTIMAS 2 HORAS! DEPOIS DISSO NUNCA MAIS! 🚨
          </span>
          <Skull className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      {/* Hero Section Agressivo */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Particles mais intensas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Timer Urgente */}
          <div data-index="0" className={`mb-12 ${visibleElements.has(0) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl">
              <Timer className="w-6 h-6 mr-3 animate-spin" />
              <span className="font-black text-lg">OFERTA EXPIRA EM:</span>
            </div>
            
            <div className="flex justify-center space-x-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gradient-to-b from-red-500 to-red-700 text-white p-6 rounded-2xl min-w-[100px] shadow-2xl border-4 border-yellow-400">
                  <div className="text-4xl font-black">{value.toString().padStart(2, '0')}</div>
                  <div className="text-sm uppercase font-bold">{unit === 'hours' ? 'HORAS' : unit === 'minutes' ? 'MIN' : 'SEG'}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Headline Brutal */}
          <div data-index="1" className={`mb-16 ${visibleElements.has(1) ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-9xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-glow">
                GANHE UMA
              </span>
              <br />
              <span className="text-red-500 text-shadow-lg">
                RENDA EXTRA!
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-5xl font-bold mb-8 text-gray-300">
              Descubra o método SECRETO para gerar
              <br />
              <span className="text-green-400 font-black">R$ 3.000 a R$ 15.000/mês</span> vendendo pela internet
              <br />
              <span className="text-yellow-400">SEM APARECER</span>
            </h2>
          </div>

          {/* Prova Social Agressiva */}
          <div data-index="2" className={`mb-16 ${visibleElements.has(2) ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400">
              <div className="text-6xl font-black text-white mb-4">
                R$ 847.392
              </div>
              <div className="text-xl text-green-200 mb-4">
                Faturamento dos últimos 6 meses
              </div>
              <div className="flex items-center justify-center space-x-8 text-yellow-300">
                <div className="flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  <span className="font-bold text-2xl">47.382 alunos</span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                  <span className="ml-3 font-bold text-2xl">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-lg text-gray-400 mb-8">
            ⚡ Acesso IMEDIATO • 🛡️ Garantia BLINDADA • 💰 Resultados em 24h
          </div>
        </div>
      </section>

      {/* Seção de Dor Extrema */}
      <section className="py-32 bg-gradient-to-b from-red-900 to-black relative">
        <div className="max-w-6xl mx-auto px-4">
          <div data-index="4" className={`text-center mb-20 ${visibleElements.has(4) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-red-400">
              VOCÊ ESTÁ CANSADO DE...
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Enquanto você lê isso, MILHARES estão gerando R$ 5k a R$ 15k/mês na internet.
              <br />
              <span className="text-red-400 font-bold">E você? Ainda dependendo só do salário?</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                data-index={5 + index}
                className={`p-8 bg-gradient-to-r from-red-900/50 to-red-800/30 rounded-2xl border-2 border-red-600/50 transform hover:scale-105 transition-all duration-300 ${visibleElements.has(5 + index) ? 'animate-slideInLeft' : 'opacity-0'}`}
              >
                <div className="text-xl font-bold text-white">{pain}</div>
              </div>
            ))}
          </div>

          <div data-index="13" className={`text-center ${visibleElements.has(13) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-12 rounded-3xl shadow-2xl border-4 border-red-500">
              <h3 className="text-4xl font-black text-black mb-6">
                🔥 CHEGA DE VIVER APERTADO! 🔥
              </h3>
              <p className="text-2xl text-black font-bold">
                Hoje você decide: continua apertado ou ganha sua RENDA EXTRA!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revelação do Método */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div data-index="14" className={`text-center mb-20 ${visibleElements.has(14) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                O MÉTODO SECRETO
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Depois de perder R$ 12.700 em "cursos", descobri o método que pessoas comuns usam
              para gerar renda extra na internet. Agora vou revelar TUDO para você.
            </p>
            
            <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400">
              <h3 className="text-3xl font-black text-white mb-6">
                💎 MÉTODO DIAMANTE NEGRO 💎
              </h3>
              <p className="text-xl text-purple-200">
                O sistema EXATO para gerar R$ 5k a R$ 15k/mês vendendo produtos digitais
                <br />
                <span className="text-yellow-400 font-bold">SEM APARECER, SEM ESTOQUE, SEM FUNCIONÁRIOS</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {secrets.map((secret, index) => (
              <div 
                key={index}
                data-index={15 + index}
                className={`p-8 bg-gradient-to-br from-green-900/50 to-green-700/30 rounded-2xl border-2 border-green-500/50 transform hover:scale-105 transition-all duration-300 ${visibleElements.has(15 + index) ? 'animate-slideInRight' : 'opacity-0'}`}
              >
                <div className="flex items-center mb-4">
                  <Diamond className="w-8 h-8 text-yellow-400 mr-4" />
                  <div className="text-xl font-bold text-white">{secret}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Brutais */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div data-index="23" className={`text-center mb-20 ${visibleElements.has(23) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-green-400">
              RESULTADOS REAIS
            </h2>
            <p className="text-2xl text-gray-300">
              Enquanto você hesita, eles estão GANHANDO sua renda extra!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                data-index={24 + index}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border-4 border-green-500 shadow-2xl transform hover:scale-105 transition-all duration-300 ${visibleElements.has(24 + index) ? 'animate-slideInLeft' : 'opacity-0'}`}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-green-400 mb-2">{testimonial.result}</div>
                  <div className="text-lg text-yellow-400 font-bold">em apenas {testimonial.days}</div>
                </div>
                
                <div className="flex mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 text-lg italic text-center">"{testimonial.text}"</p>
                
                <div className="text-center">
                  <div className="font-bold text-white text-xl">{testimonial.name}</div>
                  <div className="text-green-400 font-bold">✅ RESULTADO VERIFICADO</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Irresistível */}
      <section className="py-32 bg-gradient-to-b from-black to-red-900 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div data-index="28" className={`mb-20 ${visibleElements.has(28) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-yellow-400">
              OFERTA INSANA!
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Tudo que precisa para gerar R$ 5k a R$ 15k/mês na internet
            </p>
          </div>

          {/* Bônus */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                data-index={29 + index}
                className={`bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl ${visibleElements.has(29 + index) ? 'animate-slideInRight' : 'opacity-0'}`}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-white mb-2">{bonus.title}</div>
                  <div className="text-3xl font-black text-yellow-400 mb-4">VALOR: {bonus.value}</div>
                  <div className="text-lg text-purple-200">{bonus.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div data-index="33" className={`mb-16 ${visibleElements.has(33) ? 'animate-bounce' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-12 rounded-3xl shadow-2xl border-4 border-yellow-400">
              <div className="text-gray-300 text-2xl mb-4">Valor total: R$ 13.988</div>
              <div className="text-gray-400 text-3xl line-through mb-4">De R$ 497 por:</div>
              <div className="text-8xl font-black text-white mb-6">
                R$ 19,97
              </div>
              <div className="text-yellow-300 font-bold text-2xl mb-8">
                💳 À vista no PIX ou cartão
              </div>
              
              <a href="https://app.pushinpay.com.br/service/pay/9f670379-9735-4f46-ac6d-a9059e25e799" target="_blank" rel="noopener noreferrer" className="block">
                <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-black text-3xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400 w-full animate-glow">
                  <div className="flex items-center justify-center">
                    <Crown className="w-8 h-8 mr-4" />
                    SIM! QUERO MINHA RENDA EXTRA POR R$ 19,97
                    <ArrowRight className="w-8 h-8 ml-4" />
                  </div>
                </button>
              </a>
            </div>
          </div>

          <div className="text-lg text-gray-400 mb-6">
            🔒 Pagamento 100% seguro • ⚡ Acesso em 2 minutos • 🎯 Garantia de 7 dias
          </div>
        </div>
      </section>

      {/* Garantia Blindada */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-black relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div data-index="34" className={`${visibleElements.has(34) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-12 rounded-3xl shadow-2xl border-4 border-yellow-400">
              <Shield className="w-20 h-20 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-6 text-white">GARANTIA BLINDADA</h2>
              <p className="text-xl mb-6 text-green-200">
                Se em 7 dias você não gerar pelo menos R$ 500 de renda extra,
                <br />
                <span className="text-yellow-400 font-black">EU DEVOLVO SEU DINHEIRO + R$ 50 DE MULTA!</span>
              </p>
              <div className="text-2xl font-bold text-yellow-300">
                💰 RISCO ZERO + RENDA EXTRA GARANTIDA!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência Final Brutal */}
      <section className="py-20 bg-gradient-to-b from-black to-red-900 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div data-index="35" className={`mb-12 ${visibleElements.has(35) ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-7xl font-black mb-6 text-red-400">
              ÚLTIMA CHANCE!
            </h2>
            <p className="text-2xl mb-8 text-white">
              Em <span className="text-red-400 font-black">2 HORAS</span> esta página SAI DO AR para sempre!
              <br />
              <span className="text-yellow-400">Depois disso, NUNCA MAIS por R$ 19,97!</span>
            </p>
          </div>

          {/* CTA Final */}
          <div data-index="36" className={`mb-8 ${visibleElements.has(36) ? 'animate-bounce' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-10 rounded-3xl shadow-2xl border-4 border-yellow-400 mb-6">
              <div className="text-gray-300 text-xl mb-3">ÚLTIMA CHANCE - Por apenas:</div>
              <div className="text-7xl font-black text-white mb-4">
                R$ 19,97
              </div>
              <div className="text-yellow-300 font-bold text-xl mb-6">
                💳 À vista no PIX ou cartão
              </div>
              
              <a href="https://app.pushinpay.com.br/service/pay/9f670379-9735-4f46-ac6d-a9059e25e799" target="_blank" rel="noopener noreferrer" className="block">
                <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-black text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400 w-full animate-glow">
                  <div className="flex items-center justify-center">
                    <Flame className="w-8 h-8 mr-4 animate-bounce" />
                    SIM! QUERO MINHA RENDA EXTRA ANTES QUE ACABE!
                    <ArrowRight className="w-8 h-8 ml-4" />
                  </div>
                </button>
              </a>
            </div>

            <div className="text-lg text-gray-400 mb-6">
              🔒 Compra 100% segura • ⚡ Acesso IMEDIATO • 🎯 Garantia BLINDADA
            </div>

            <div className="bg-red-600 p-4 rounded-2xl border-4 border-yellow-400">
              <p className="text-lg font-bold text-white">
                ⚠️ ATENÇÃO: Após o prazo, o preço volta para R$ 497 e as vagas se esgotam!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-black py-12 border-t-4 border-yellow-400 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-2xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              MÉTODO DIAMANTE NEGRO
            </span>
          </div>
          <p className="text-gray-400 mb-6 text-base">
            Ajudando pessoas comuns a gerarem renda extra na internet desde 2023
          </p>
          <div className="text-sm text-gray-500">
            © 2024 Método Diamante Negro. Todos os direitos reservados.
            <br />
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;