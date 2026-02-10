
import React, { useState } from 'react';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 w-full max-w-2xl mx-auto px-4">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 bg-white overflow-hidden rounded-lg">
          <button
            onClick={() => toggle(item.id)}
            className="w-full text-left px-5 py-4 flex justify-between items-center transition-colors hover:bg-gray-50"
          >
            <span className="font-semibold text-[#644026] text-base leading-tight pr-4">
              {item.question}
            </span>
            <span className={`transform transition-transform duration-200 text-[#8E4D25] ${openId === item.id ? 'rotate-180' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
              openId === item.id ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
