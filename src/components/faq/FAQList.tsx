import { FAQItem } from './FAQItem';
import type { FAQItem as FAQItemType } from '../../types/faq';

interface FAQListProps {
  faqs: FAQItemType[];
  openIndex: number | null;
  onToggle: (index: number) => void;
}

export function FAQList({ faqs, openIndex, onToggle }: FAQListProps) {
  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => onToggle(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}