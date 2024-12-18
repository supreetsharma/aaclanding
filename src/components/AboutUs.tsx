import { Users, Heart, Globe } from 'lucide-react';

const values = [
  {
    Icon: Heart,
    title: "Compassionate Care",
    description: "We believe in providing empathetic, non-judgmental support to every client, creating a safe space for healing and growth."
  },
  {
    Icon: Users,
    title: "Cultural Sensitivity",
    description: "Our diverse team understands and respects the unique cultural backgrounds and experiences of our clients."
  },
  {
    Icon: Globe,
    title: "Accessibility",
    description: "We're committed to making mental health support accessible to all British Columbians through affordable online counselling."
  }
];

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#1C160C]">About Us</h2>
          <p className="text-[#4B4639] leading-relaxed">
            Affordable Access Counselling was founded with a simple mission: to make professional mental health support accessible to everyone in British Columbia. We believe that quality counselling should be both affordable and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#F4EFE6] rounded-lg p-8 text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <value.Icon className="h-8 w-8 text-[#019863]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1C160C]">{value.title}</h3>
              <p className="text-[#4B4639]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}