import { useNavigate } from 'react-router-dom';
import { Users, Heart, Globe, GraduationCap, Clock, Smile } from 'lucide-react';
import { CallToAction } from '../components/CallToAction';

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

const team = [
  {
    Icon: GraduationCap,
    title: "Professional Expertise",
    description: "Our counsellors hold advanced degrees in counselling psychology and are registered with professional governing bodies."
  },
  {
    Icon: Clock,
    title: "Flexible Support",
    description: "We offer convenient scheduling options to accommodate your busy lifestyle."
  },
  {
    Icon: Smile,
    title: "Client-Centered Approach",
    description: "Your unique needs and goals guide our therapeutic approach, ensuring personalized support."
  }
];

export function About() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book');
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-[#1C160C]">About Us</h1>
            <p className="text-[#4B4639] leading-relaxed text-lg mb-8">
              Affordable Access Counselling was founded with a simple mission: to make professional mental health support accessible to everyone in British Columbia. We believe that quality counselling should be both affordable and convenient.
            </p>
            <p className="text-[#4B4639] leading-relaxed">
              Our team of registered counsellors brings diverse expertise and cultural understanding to support your mental health journey. We're committed to breaking down barriers to mental healthcare through affordable online counselling services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

          <div className="bg-[#F4EFE6] rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1C160C]">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-8 text-center">
                  <div className="bg-[#F4EFE6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <item.Icon className="h-8 w-8 text-[#019863]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#1C160C]">{item.title}</h3>
                  <p className="text-[#4B4639]">{item.description}</p>
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