import { useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";
import { CounselorCard } from './counselor/CounselorCard';
import { counselors } from '../data/counselors';

interface BookingProps {
  onClose: () => void;
}

export function Booking({ onClose }: BookingProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      // Initialize 15-minute session booking
      cal("init", "15", {origin:"https://cal.com"});
      cal.ns["15"]("ui", {
        styles: { branding: { brandColor: "#015C3B" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      
      // Initialize 50-minute session booking for Ankita
      cal("init", "50", {origin:"https://cal.com"});
      cal.ns["50"]("ui", {
        styles: { branding: { brandColor: "#015C3B" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });

      // Initialize 50-minute session booking for Brittney
      cal("init", "55", {origin:"https://cal.com"});
      cal.ns["55"]("ui", {
        styles: { branding: { brandColor: "#015C3B" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1C160C]">Choose Your Counsellor</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F4EFE6] rounded-full"
            aria-label="Close booking modal"
          >
            <X className="h-6 w-6 text-[#4B4639]" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {counselors.map((counselor) => (
            <CounselorCard key={counselor.name} counselor={counselor} />
          ))}
        </div>

        <div className="mt-8 bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg p-4 flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-[#DC2626] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[#991B1B] font-semibold mb-1">Please Note</p>
            <p className="text-[#7F1D1D]">
              If you are experiencing an emergency or crisis situation, please call 911 immediately or visit your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}