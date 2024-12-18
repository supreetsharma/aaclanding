import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Will my counselling be provided by interns?",
    answer: "No, all counselling sessions are conducted by experienced, licensed professionals—Registered Clinical Counsellors (RCCs) or Registered Social Workers (RSWs)—ensuring expert guidance without the involvement of interns."
  },
  {
    question: "What is a Registered Clinical Counsellor (RCC)?",
    answer: "An RCC is a professional designation in British Columbia, signifying that the counsellor has met specific educational and training criteria set by the BC Association of Clinical Counsellors (BCACC). RCCs hold a minimum of a master's degree in counselling or a related field and adhere to a strict code of ethics."
  },
  {
    question: "What is a Registered Social Worker (RSW)?",
    answer: "An RSW is a professional licensed by the British Columbia College of Social Workers (BCCSW). RSWs have completed accredited social work education, including a bachelor's or master's degree in social work, and are trained to assess, diagnose, treat, and evaluate individual, interpersonal, and societal issues."
  },
  {
    question: "How much does it cost?",
    answer: "Counselling sessions are offered at a flat rate of $65 per hour, including GST, with no hidden fees."
  },
  {
    question: "What payment methods are available?",
    answer: "Payments can be made securely via Interac or credit card."
  },
  {
    question: "What is the cancellation policy?",
    answer: "A 48-hour cancellation policy is in place. Appointments canceled with less than 48 hours' notice incur a cancellation fee. Missed appointments are charged the full session fee."
  },
  {
    question: "How do virtual sessions work?",
    answer: "Upon payment, a link with details on how to attend the secure video call will be sent to your email address."
  },
  {
    question: "Is therapy confidential?",
    answer: "Counselling sessions are strictly confidential. Information disclosed will not be shared without your permission, except in rare circumstances required by law, which will be discussed during the initial session."
  },
  {
    question: "How many sessions will I need?",
    answer: "The duration of therapy varies based on individual needs and objectives. Some clients find resolution in a few sessions, while others benefit from a longer-term approach. Together, we'll establish personalized goals to determine the appropriate length of therapy for you."
  },
  {
    question: "Can court-mandated counselling be provided?",
    answer: "Yes, sessions can be tailored to meet court-directed requirements."
  },
  {
    question: "Is online counselling effective?",
    answer: "Yes, online counselling offers the same professional care as in-person sessions, tailored to your needs."
  },
  {
    question: "What issues can counselling help with?",
    answer: "Counselling supports challenges such as mental health, substance use, financial stress, family issues, employment struggles, and more."
  },
  {
    question: "Is this service available outside British Columbia?",
    answer: "Currently, services are exclusively for residents of BC."
  },
  {
    question: "How quickly can I schedule a session?",
    answer: "Most clients can book a session within a few days, thanks to a quick and simple online scheduling system."
  },
  {
    question: "What technology do I need for virtual counselling?",
    answer: "A device with internet access and a camera is required for secure video sessions."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1C160C]">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E9DFCE]">
              <button
                className="w-full text-left py-4 flex justify-between items-center text-[#1C160C] hover:text-[#015C3B]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-[#4B4639]">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}