import { Brain, Heart, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { CallToAction } from '../components/CallToAction';
import { useNavigate } from 'react-router-dom';

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

const benefits = [
  "Professional RCC & RSW counsellors",
  "Secure online therapy",
  "Flexible scheduling",
  "Affordable rates",
  "Cultural sensitivity",
  "Evidence-based approaches"
];

export function Services() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book');
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-[#1C160C]">Our Services</h1>
            <p className="text-[#4B4639] leading-relaxed text-lg">
              We offer comprehensive counselling services to support your mental health and well-being. Our experienced counsellors provide personalized care through secure online sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F4EFE6] rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3">
                    <service.Icon className="h-6 w-6 text-[#019863]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1C160C]">{service.title}</h3>
                    <p className="text-[#4B4639] mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.areas.map((area, areaIndex) => (
                        <div
                          key={areaIndex}
                          className="bg-white px-3 py-1 rounded-full text-sm text-[#4B4639]"
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

          <div className="bg-[#F4EFE6] rounded-xl p-12">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#1C160C]">Why Our Services Stand Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-[#019863]" />
                  <span className="text-[#4B4639]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CallToAction onBookClick={handleBookClick} />
    </div>
  );
}