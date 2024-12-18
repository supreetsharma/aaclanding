import { AlertTriangle } from 'lucide-react';

export function EmergencyNotice() {
  return (
    <div className="mt-8 bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg p-4 flex items-start gap-3">
      <AlertTriangle className="h-6 w-6 text-[#DC2626] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-[#991B1B] font-semibold mb-1">Please Note</p>
        <p className="text-[#7F1D1D]">
          If you are experiencing an emergency or crisis situation, please call 911 immediately or visit your nearest emergency room.
        </p>
      </div>
    </div>
  );
}