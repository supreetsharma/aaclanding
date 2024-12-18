import { useState } from 'react';
import { FAQList } from './FAQList';
import { faqs } from '../../data/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1C160C]">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <FAQList
            faqs={faqs}
            openIndex={openIndex}
            onToggle={setOpenIndex}
          />
        </div>
      </div>
    </section>
  );
}