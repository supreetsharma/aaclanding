import { DollarSign, Video, GraduationCap } from 'lucide-react';

const features = [
  {
    Icon: DollarSign,
    title: "Affordable Care",
    description: "$65/hour including GST",
    content: "Low-cost professional counselling with no-hidden-fees. Pay directly with your credit card or Interac."
  },
  {
    Icon: Video,
    title: "Accessible for All",
    description: "Convenient online sessions",
    content: "Our secure virtual services ensure you get the help you need from the comfort of your home."
  },
  {
    Icon: GraduationCap,
    title: "Expert Counsellors",
    description: "RCC & RSW Licensed Counsellors",
    content: "Experienced counsellors registered with professional governing bodies"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-[#F4EFE6]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-[#E9DFCE] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#015C3B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="bg-[#F4EFE6] rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#E6D1C0] transition-colors duration-300">
                  <feature.Icon className="h-8 w-8 text-[#015C3B]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1C160C]">
                  {feature.title}
                </h3>
                <p className="text-[#015C3B] font-bold text-lg mb-3">
                  {feature.description}
                </p>
                <p className="text-[#4B4639] leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}