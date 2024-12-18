import { GraduationCap, Languages, Clock } from 'lucide-react';
import { Button } from './Button';

interface Counsellor {
  name: string;
  title: string;
  image: string;
  specialties: string[];
  languages: string[];
  education: string;
  availability: string;
  calLink15?: string;
  calLink50?: string;
  active: boolean;
}

interface CounselorCardProps {
  counsellor: Counsellor;
}

export function CounselorCard({ counsellor }: CounselorCardProps) {
  return (
    <div className="bg-white border border-[#E9DFCE] rounded-xl overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={counsellor.image}
          alt={counsellor.name}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1C160C] mb-2">{counsellor.name}</h3>
        <p className="text-[#015C3B] font-medium mb-4">{counsellor.title}</p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <GraduationCap className="h-5 w-5 text-[#015C3B] mt-1" />
            <div>
              <p className="font-medium text-[#1C160C]">Education</p>
              <p className="text-[#4B4639]">{counsellor.education}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Languages className="h-5 w-5 text-[#015C3B] mt-1" />
            <div>
              <p className="font-medium text-[#1C160C]">Languages</p>
              <p className="text-[#4B4639]">{counsellor.languages.join(", ")}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-[#015C3B] mt-1" />
            <div>
              <p className="font-medium text-[#1C160C]">Availability</p>
              <p className="text-[#4B4639]">{counsellor.availability}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium text-[#1C160C] mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {counsellor.specialties.map((specialty) => (
              <span
                key={specialty}
                className="bg-[#F4EFE6] text-[#4B4639] px-3 py-1 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Button
            data-cal-link={counsellor.calLink15}
            data-cal-namespace="15"
            data-cal-config='{"layout":"month_view"}'
            className="w-full"
            disabled={!counsellor.active}
            aria-label={`Book 15 minute introductory session with ${counsellor.name}`}
          >
            15 Minutes Introductory Session
          </Button>
          <Button
            data-cal-link={counsellor.calLink50}
            data-cal-namespace="50"
            data-cal-config='{"layout":"month_view"}'
            className="w-full"
            disabled={!counsellor.active}
            aria-label={`Book 50 minute counselling session with ${counsellor.name}`}
          >
            50 Minutes Counselling Session
          </Button>
        </div>
      </div>
    </div>
  );
}