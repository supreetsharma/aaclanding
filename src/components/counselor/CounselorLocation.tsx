import { MapPin } from 'lucide-react';

interface CounselorLocationProps {
  location: string;
}

export function CounselorLocation({ location }: CounselorLocationProps) {
  return (
    <div className="flex items-start gap-2">
      <MapPin className="h-5 w-5 text-[#015C3B] mt-1" />
      <div>
        <p className="font-medium text-[#1C160C]">Location</p>
        <p className="text-[#4B4639]">{location}</p>
      </div>
    </div>
  );
}