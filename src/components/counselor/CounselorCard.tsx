import { CounselorHeader } from './CounselorHeader';
import { CounselorBio } from './CounselorBio';
import { CounselorServices } from './CounselorServices';
import { CounselorLanguages } from './CounselorLanguages';
import { CounselorEducation } from './CounselorEducation';
import { CounselorLocation } from './CounselorLocation';
import { CounselorBookingButtons } from './CounselorBookingButtons';

interface Counselor {
  name: string;
  title: string;
  image: string;
  bio: string;
  services: string[];
  languages: string[];
  education: string;
  location: string;
  calLink15?: string;
  calLink50?: string;
  active: boolean;
}

interface CounselorCardProps {
  counselor: Counselor;
}

export function CounselorCard({ counselor }: CounselorCardProps) {
  return (
    <div className="bg-white border border-[#E9DFCE] rounded-xl overflow-hidden h-full flex flex-col">
      <CounselorHeader 
        name={counselor.name}
        title={counselor.title}
        image={counselor.image}
      />
      <div className="p-6 flex-1 flex flex-col">
        <div className="space-y-2">
          <CounselorEducation education={counselor.education} />
          <CounselorLocation location={counselor.location} />
          <CounselorLanguages languages={counselor.languages} />
        </div>

        <CounselorBio bio={counselor.bio} />
        <CounselorServices services={counselor.services} />

        <div className="mt-auto pt-6">
          <CounselorBookingButtons
            name={counselor.name}
            calLink15={counselor.calLink15}
            calLink50={counselor.calLink50}
            active={counselor.active}
          />
        </div>
      </div>
    </div>
  );
}