import React from 'react';

interface CounselorBioProps {
  bio: string;
}

export function CounselorBio({ bio }: CounselorBioProps) {
  return (
    <div className="mt-4">
      <p className="text-[#4B4639] whitespace-pre-line text-sm">{bio}</p>
    </div>
  );
}