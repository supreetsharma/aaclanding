import { Button } from '../Button';

interface CounselorBookingButtonsProps {
  name: string;
  calLink15?: string;
  calLink50?: string;
  active: boolean;
}

export function CounselorBookingButtons({ 
  name, 
  calLink15, 
  calLink50, 
  active 
}: CounselorBookingButtonsProps) {
  return (
    <div className="space-y-3">
      {calLink15 && (
        <Button
          data-cal-link={calLink15}
          data-cal-namespace="15"
          data-cal-config='{"layout":"month_view"}'
          className="w-full"
          disabled={!active}
          aria-label={`Book free 15 minute introductory session with ${name}`}
        >
          15 Minutes Free Introductory Session
        </Button>
      )}
      <Button
        data-cal-link={calLink50}
        data-cal-namespace={calLink50 === "supreetsharma/55" ? "55" : "50"}
        data-cal-config='{"layout":"month_view"}'
        className="w-full"
        disabled={!active}
        aria-label={`Book 50 minute counselling session with ${name}`}
      >
        50 Minutes Counselling Session
      </Button>
    </div>
  );
}