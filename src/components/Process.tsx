import { Calendar, Clock, Video, Heart } from 'lucide-react';

const steps = [
  { Icon: Calendar, title: "1. Book Online", description: "Schedule your session through our easy booking system" },
  { Icon: Clock, title: "2. Confirm Time", description: "Receive confirmation and session details via email" },
  { Icon: Video, title: "3. Join Session", description: "Connect with your counsellor via secure video call" },
  { Icon: Heart, title: "4. Begin Healing", description: "Start your journey to better mental health" }
];

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1C160C]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center bg-[#F4EFE6] p-6 rounded-lg">
              <step.Icon className="h-12 w-12 mx-auto text-[#019863] mb-4" />
              <h3 className="font-semibold mb-2 text-[#1C160C]">{step.title}</h3>
              <p className="text-sm text-[#4B4639]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}