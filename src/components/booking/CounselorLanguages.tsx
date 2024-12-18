import { Languages } from 'lucide-react';

interface CounselorLanguagesProps {
  languages: string[];
}

export function CounselorLanguages({ languages }: CounselorLanguagesProps) {
  return (
    <div className="flex items-start gap-2">
      <Languages className="h-5 w-5 text-[#015C3B] mt-1" />
      <div>
        <p className="font-medium text-[#1C160C]">Languages</p>
        <p className="text-[#4B4639]">{languages.join(", ")}</p>
      </div>
    </div>
  );
}