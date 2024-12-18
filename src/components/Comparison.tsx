import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: "Licensed Therapists", aac: true, traditional: true },
  { feature: "Affordable Flat Fee Including GST ($65/hr)", aac: true, traditional: false },
  { feature: "Simple Steps to Get Counselling", aac: true, traditional: false },
  { feature: "No Travel Required", aac: true, traditional: false },
  { feature: "No Insurance Required", aac: true, traditional: false },
  { feature: "Simple Steps to Get Counselling", aac: true, traditional: false },
  { feature: "Evening Sessions", aac: true, traditional: false },
  { feature: "Quick Scheduling", aac: true, traditional: false },
  { feature: "Secure Video Chat", aac: true, traditional: false }
];

export function Comparison() {
  return (
    <section className="py-20 bg-[#F4EFE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1C160C]">AAC vs. Traditional Therapy</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-[#F4EFE6]">
            <div className="font-semibold text-[#1C160C]">Features</div>
            <div className="font-semibold text-[#015C3B] text-center">AAC Online</div>
            <div className="font-semibold text-[#1C160C] text-center">Traditional</div>
          </div>
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-4 px-4 border-t border-[#E9DFCE]">
              <div className="text-[#1C160C]">{item.feature}</div>
              <div className="flex justify-center">
                {item.aac ? (
                  <Check className="h-6 w-6 text-[#015C3B]" />
                ) : (
                  <X className="h-6 w-6 text-[#4B4639]" />
                )}
              </div>
              <div className="flex justify-center">
                {item.traditional ? (
                  <Check className="h-6 w-6 text-[#015C3B]" />
                ) : (
                  <X className="h-6 w-6 text-[#4B4639]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}