
import React, { useEffect, useState, useRef } from 'react';
import { 
  COLORS, 
  CHECK_ICON, 
  LEARN_ITEMS, 
  BONUS_ITEMS, 
  FAQ_ITEMS 
} from './constants';
import Accordion from './components/Accordion';

const CTA_LINK = "https://pay.cakto.com.br/63gwf6p_354211";

// Corrected interface to accept MouseEvent for onClick and made children optional to avoid compiler confusion
interface PrimaryButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
}

// Updated PrimaryButton to use the improved props interface
const PrimaryButton = ({ children, className = "", onClick, href }: PrimaryButtonProps) => (
  <a
    href={href || "#"}
    onClick={onClick}
    className={`block w-full text-center bg-[#009300] hover:bg-[#007a00] text-white font-extrabold text-xl py-6 px-4 rounded-xl shadow-lg transform transition-transform active:scale-95 uppercase tracking-wider ${className}`}
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const offerRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
        const nextScrollPosition = scrollLeft + offsetWidth;
        
        if (nextScrollPosition >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollTo({ left: nextScrollPosition, behavior: 'smooth' });
        }
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const TESTIMONIAL_IMAGES = [
    "https://infostart.shop/wp-content/uploads/2026/02/8-1.webp",
    "https://infostart.shop/wp-content/uploads/2026/02/2-2.webp",
    "https://infostart.shop/wp-content/uploads/2026/02/5.webp",
    "https://infostart.shop/wp-content/uploads/2026/02/4-1.webp",
    "https://infostart.shop/wp-content/uploads/2026/02/1-2.webp",
    "https://infostart.shop/wp-content/uploads/2026/02/6-1.webp",
    "https://infostart.shop/wp-content/uploads/2026/02/10-1.webp"
  ];

  return (
    <div className="bg-white text-gray-800 antialiased overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="bg-[#644026] py-12 px-6 text-center text-white relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Aprenda a fazer os <span className="text-[#F1B151]">Pães Artesanais Sem Glúten</span> mais incriveis da sua Vida.
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 mb-8 max-w-2xl mx-auto">
            Mesmo que você nunca tenha feito pão, siga o método e tenha resultado previsível.
          </p>
          
          <div className="mb-6 relative inline-block group">
            <img 
              src="https://infostart.shop/wp-content/uploads/2026/02/portrait-smiling-young-woman-holding-baked-croissant-cake-stand-2-scaled-1-1536x1025.jpg.webp" 
              alt="Chef Patrícia Mancini" 
              className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white/10 mx-auto"
            />
            <div className="mt-4">
              <span className="text-xl md:text-2xl font-bold text-[#F1B151]">Chef Patrícia Mancini</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS PRINCIPAIS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#644026] text-center mb-10 leading-tight">
            200 RECEITAS DE PÃES SEM GLÚTEN QUE PARECEM DE TRIGO
          </h2>
          <ul className="space-y-4 md:space-y-6">
            {[
              "Receitas testadas e aprovadas.",
              "Pães rápidos de 15 minutos.",
              "Ingredientes encontrados em qualquer mercado.",
              "Passo a Passo de Preparação",
              "Não precisa de cilindro, batedeira ou forno elétrico."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {CHECK_ICON}
                <span className="text-lg text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="py-16 px-6 bg-[#f9f5f2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#644026] text-center mb-12 uppercase">
            O QUE VOCÊ VAI APRENDER:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {LEARN_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col items-center p-4 text-center">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-lg font-bold text-[#8E4D25] mb-2 leading-tight">{item.title}</h3>
                <p className="text-xs uppercase font-semibold text-gray-400 tracking-widest">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <p className="text-2xl font-black text-[#644026] uppercase italic mb-8">
              E MUITO, MAS MUUuuUITO MAIS!
            </p>
            <PrimaryButton onClick={scrollToOffer}>QUERO AS RECEITAS AGORA!</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ENTREGA */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#8E4D25] mb-8 leading-tight">
            RECEBA AS 200 RECEITAS EM SEU E-MAIL E ACESSE COMO PREFERIR
          </h2>
          <div className="relative inline-block mb-4">
             <img 
               src="https://infostart.shop/wp-content/uploads/2026/02/26_26_11zon.webp" 
               alt="Acesso imediato ao material" 
               className="w-full rounded-2xl"
             />
             <div className="absolute -bottom-4 -right-4 bg-[#F1B151] p-4 rounded-full shadow-lg hidden md:block">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
             </div>
          </div>
        </div>
      </section>

      {/* SOBRE A CHEF */}
      <section className="py-16 px-6 bg-[#644026] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img 
              src="https://infostart.shop/wp-content/uploads/2026/02/portrait-smiling-young-woman-holding-baked-croissant-cake-stand-2-scaled-1-1536x1025.jpg.webp" 
              alt="Patrícia Mancini" 
              className="rounded-3xl shadow-2xl border-4 border-white/20"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-[#F1B151] mb-6 uppercase">
              DESENVOLVIDO PELA CHEF PATRÍCIA MANCINI
            </h2>
            <p className="text-lg leading-relaxed text-white/90 italic">
              Chef especializada em alimentação sem glúten, a especialista criou mais de 200 receitas de pães sem glúten, pensadas para oferecer sabor, maciez e saúde, provando que é totalmente possível comer pão todos os dias sem glúten e sem abrir mão do prazer.
            </p>
          </div>
        </div>
      </section>

      {/* BÔNUS SECTION */}
      <section className="py-16 px-6 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black text-[#644026] mb-4 uppercase">
            ALÉM DISSO, VOCÊ AINDA <span className="text-[#009300]">LEVA 4 BÔNUS</span> EXCLUSIVOS:
          </h2>
          <p className="text-lg font-bold text-[#8E4D25] mb-12 uppercase tracking-widest">Somente para novas alunas hoje</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {BONUS_ITEMS.map((bonus, idx) => (
              <div key={bonus.id} className="bg-white p-6 rounded-3xl shadow-xl border-dashed border-2 border-[#8E4D25]">
                <div className="bg-[#644026] text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">Bônus 0{idx + 1}</div>
                <img src={bonus.image} alt={bonus.name} className="w-full h-40 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-bold text-[#644026] mb-2 leading-tight uppercase">{bonus.name}</h3>
                <div className="flex flex-col items-center">
                  <span className="text-gray-400 line-through text-sm">{bonus.originalPrice}</span>
                  <span className="text-[#009300] font-black text-xl">HOJE É GRÁTIS!</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-inner border-4 border-[#009300] inline-block w-full">
            <p className="text-2xl font-bold text-gray-500 mb-1">TOTAL DE BÔNUS: <span className="line-through text-red-500">R$ 210,00</span></p>
            <p className="text-4xl font-black text-[#009300] uppercase">HOJE: GRÁTIS!</p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É RECOMENDADO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#644026] text-center mb-10 uppercase">PARA QUEM É RECOMENDADO:</h2>
          <ul className="space-y-6 mb-12">
            {[
              "Quem sente desconforto ao comer pão tradicional.",
              "Celíacos, diabéticos ou com restrições alimentares.",
              "Veganos ou vegetarianos.",
              "Quem tem poucas opções sem glúten no mercado.",
              "Gosta de comer pão fresco todas as manhãs."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border-l-4 border-[#009300]">
                {CHECK_ICON}
                <span className="text-lg font-semibold text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <PrimaryButton onClick={scrollToOffer}>QUERO AS RECEITAS AGORA!</PrimaryButton>
        </div>
      </section>

      {/* PROVA SOCIAL - AUTO CAROUSEL */}
      <section className="py-16 px-6 bg-[#644026]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#F1B151] mb-12 uppercase leading-tight">
            O QUE NOSSAS ALUNAS ESTÃO DIZENDO:
          </h2>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-8 snap-x scrollbar-hide"
          >
            {TESTIMONIAL_IMAGES.map((src, i) => (
              <div key={i} className="flex-none w-72 md:w-80 snap-center">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-2 h-full">
                  <img src={src} alt={`Depoimento Aluna ${i+1}`} className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-4 italic">Carrossel automático • Deslize para ver mais →</p>
        </div>
      </section>

      {/* OFERTA SECTION */}
      <section ref={offerRef} className="py-20 px-6 bg-[#8E4D25] text-white">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-8 border-[#F1B151]">
          <h2 className="text-3xl md:text-4xl font-black text-[#644026] mb-8 uppercase italic">OFERTA ESPECIAL!</h2>
          
          <div className="mb-10">
            <img 
              src="https://infostart.shop/wp-content/uploads/2026/02/26_26_11zon.webp" 
              alt="Kit Manual Completo" 
              className="w-[65%] max-w-md mx-auto rounded-3xl"
            />
          </div>

          <div className="space-y-4 mb-10 text-left md:text-center inline-block">
             {[
               "Manual Completo de Pães Sem Glúten",
               "+4 Brindes Exclusivos para alunas novas (somente hoje)",
               "Garantia incondicional de 7 dias",
               "Pagamento único e acesso vitalício (para sempre)",
               "Acesso imediato"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                 {CHECK_ICON}
                 <span className="text-[13px]">{text}</span>
               </div>
             ))}
          </div>

          <div className="mb-8">
            <p className="text-red-600 line-through text-xl mb-1">DE R$ 197,00</p>
            <p className="text-[#644026] font-bold text-2xl uppercase tracking-tighter mb-2">POR APENAS:</p>
            <p className="text-[#009300] text-[55px] font-black leading-none mb-6">R$ 27,00</p>
          </div>

          <PrimaryButton href={CTA_LINK} className="text-2xl py-8">COMPRAR AGORA!</PrimaryButton>

          <div className="mt-8">
            <p className="text-gray-500 font-bold mb-4">Pagamento 100% Seguro</p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://infostart.shop/wp-content/uploads/2025/09/UIUIUI-1-2048x1251-1-1024x626.png" 
              alt="Garantia" 
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <h2 className="text-3xl font-black text-[#644026] mb-6 uppercase">Experimente por 7 Dias sem Risco</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">
            Se por qualquer motivo você não gostar do conteúdo ou sentir que ele não é para você, basta solicitar o reembolso em até 7 dias. Sem perguntas. Sem burocracia. Seu acesso é vitalício. Sua satisfação é garantida.
          </p>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="py-16 px-6 bg-[#f9f5f2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#644026] text-center mb-12 uppercase">PERGUNTAS FREQUENTES</h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 px-6 bg-[#644026] sticky bottom-0 z-50 md:static">
        <div className="max-w-xl mx-auto">
          <PrimaryButton onClick={scrollToOffer} className="bg-[#F1B151] hover:bg-[#e0a040] text-[#644026]">
            SIM! QUERO ACESSAR AGORA!
          </PrimaryButton>
        </div>
      </section>

      {/* FOOTER LEGALS */}
      <footer className="bg-white py-10 px-6 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
           <p className="text-gray-400 text-xs mb-4">
             © 2025 Pães Artesanais Sem Glúten - Todos os direitos reservados.<br/>
             Chef Patrícia Mancini
           </p>
           <div className="flex justify-center gap-6 text-xs text-gray-300">
             <span>Termos de Uso</span>
             <span>Políticas de Privacidade</span>
           </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
