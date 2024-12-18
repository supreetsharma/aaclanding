import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#E9DFCE]">
      <button
        className="w-full text-left py-4 flex justify-between items-center text-[#1C160C] hover:text-[#015C3B]"
        onClick={onToggle}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 text-[#4B4639]">{answer}</div>
      )}
    </div>
  );
}