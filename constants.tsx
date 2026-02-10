
import React from 'react';
import { LearnItem, BonusItem, FAQItem } from './types';

export const COLORS = {
  primary: '#644026',
  dark: '#8E4D25',
  white: '#FFFFFF',
  accent: '#F1B151',
  success: '#009300',
};

export const CHECK_ICON = (
  <svg className="w-6 h-6 text-[#009300] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export const LEARN_ITEMS: LearnItem[] = [
  {
    id: 1,
    title: "PÃO DE MICROONDAS (PRONTO EM 5 MINUTOS)",
    description: "SEM GLÚTEN",
    image: "https://infostart.shop/wp-content/uploads/2026/02/19_19_11zon.webp",
  },
  {
    id: 2,
    title: "PÃO DE LIQUIDIFICADOR (APENAS 5 INGREDIENTES)",
    description: "SEM GLÚTEN",
    image: "https://infostart.shop/wp-content/uploads/2026/02/20_20_11zon.webp",
  },
  {
    id: 3,
    title: "PÃO FRANCÊS (SABOR DA PADARIA)",
    description: "SEM GLÚTEN, FEITO EM CASA",
    image: "https://infostart.shop/wp-content/uploads/2026/02/21_21_11zon.webp",
  },
  {
    id: 4,
    title: "PÃO SEM SOVAR (SEM TRABALHO)",
    description: "SEM GLÚTEN, MUITO SABOROSO",
    image: "https://infostart.shop/wp-content/uploads/2026/02/22_22_11zon.webp",
  },
  {
    id: 5,
    title: "PÃO DE AIRFRYER (PRONTO EM 7 MINUTOS)",
    description: "SEM GLÚTEN, TESTADO E APROVADO",
    image: "https://infostart.shop/wp-content/uploads/2026/02/23_23_11zon.webp",
  },
  {
    id: 6,
    title: "PÃO DE ALHO CASEIRO",
    description: "SEM GLÚTEN, PERFEITO PRA UM CHURRASCO",
    image: "https://infostart.shop/wp-content/uploads/2026/02/24_24_11zon.webp",
  },
  {
    id: 7,
    title: "PÃO DE FRIGIDEIRA (RÁPIDO PARA O CAFÉ DA MANHÃ)",
    description: "SEM GLÚTEN, CAMPEÃO DE POPULARIDADE",
    image: "https://infostart.shop/wp-content/uploads/2026/02/25_25_11zon.webp",
  },
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 1,
    name: "100 PIZZAS FIT SEM GLÚTEN",
    originalPrice: "R$ 97,00",
    image: "https://infostart.shop/wp-content/uploads/2025/11/BAIXA-2.webp",
  },
  {
    id: 2,
    name: "30 MARMITAS FIT P/ CONGELAR",
    originalPrice: "R$ 49,90",
    image: "https://infostart.shop/wp-content/uploads/2025/09/maxresdefault-1.webp",
  },
  {
    id: 3,
    name: "60 SUCOS DETOX",
    originalPrice: "R$ 37,00",
    image: "https://infostart.shop/wp-content/uploads/2025/08/confira-2-sucos-detox-para-emagrecer-e-perder-barriga.jpg",
  },
  {
    id: 4,
    name: "30 BISCOITOS FIT",
    originalPrice: "R$ 27,00",
    image: "https://infostart.shop/wp-content/uploads/2025/09/hq720.jpg",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Preciso ter experiência na cozinha para fazer essas receitas?",
    answer: "Não! O método foi desenvolvido para que qualquer pessoa, mesmo quem nunca fez pão, consiga resultados previsíveis e deliciosos seguindo o passo a passo."
  },
  {
    id: 2,
    question: "Os ingredientes são fáceis de encontrar?",
    answer: "Sim, todos os ingredientes podem ser encontrados em qualquer mercado comum da sua cidade."
  },
  {
    id: 3,
    question: "As receitas são 100% sem glúten?",
    answer: "Absolutamente. Todas as mais de 200 receitas foram criadas especificamente para serem seguras para celíacos e pessoas com restrição ao glúten."
  },
  {
    id: 4,
    question: "Como vou receber o acesso ao material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá o link de acesso no seu e-mail cadastrado."
  },
  {
    id: 5,
    question: "É seguro fazer a compra?",
    answer: "Sim, utilizamos uma plataforma de pagamentos 100% segura e criptografada."
  },
  {
    id: 6,
    question: "Quais as formas de pagamento?",
    answer: "Você pode pagar via Pix, Cartão de Crédito (com parcelamento) ou Boleto Bancário."
  }
];
