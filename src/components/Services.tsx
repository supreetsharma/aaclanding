import { Brain, Heart, Users, Sparkles } from 'lucide-react';

const services = [
  {
    Icon: Brain,
    title: "Individual Counselling",
    description: "One-on-one therapy sessions tailored to your unique needs and goals.",
    areas: ["Anxiety & Depression", "Stress Management", "Personal Growth", "Life Transitions"]
  },
  {
    Icon: Heart,
    title: "Relationship Counselling",
    description: "Support for couples and individuals dealing with relationship challenges.",
    areas: ["Communication Issues", "Conflict Resolution", "Trust Building", "Separation Support"]
  },
  {
    Icon: Users,
    title: "Family Counselling",
    description: "Helping families improve communication and resolve conflicts.",
    areas: ["Parent-Child Relations", "Family Dynamics", "Blended Families", "Family Transitions"]
  },
  {
    Icon: Sparkles,
    title: "Specialized Support",
    description: "Focused therapy for specific challenges and life situations.",
    areas: ["Cultural Issues", "Career Stress", "Identity & Self-esteem", "Grief & Loss"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#F4EFE6] scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#1C160C]">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#F4EFE6] rounded-full p-3">
                  <service.Icon className="h-6 w-6 text-[#019863]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1C160C]">{service.title}</h3>
                  <p className="text-[#4B4639] mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.areas.map((area, areaIndex) => (
                      <div
                        key={areaIndex}
                        className="bg-[#F4EFE6] px-3 py-1 rounded-full text-sm text-[#4B4639]"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}