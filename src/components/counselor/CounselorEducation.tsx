import { GraduationCap } from 'lucide-react';

interface CounselorEducationProps {
  education: string;
}

export function CounselorEducation({ education }: CounselorEducationProps) {
  return (
    <div className="flex items-start gap-2">
      <GraduationCap className="h-5 w-5 text-[#015C3B] mt-1" />
      <div>
        <p className="font-medium text-[#1C160C]">Education</p>
        <p className="text-[#4B4639]">{education}</p>
      </div>
    </div>
  );
}