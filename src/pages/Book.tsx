import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { BookingHeader } from '../components/booking/BookingHeader';
import { CounselorGrid } from '../components/booking/CounselorGrid';
import { EmergencyNotice } from '../components/booking/EmergencyNotice';

export function Book() {
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
      
      // Initialize 50-minute session bookings
      cal("init", "50", {origin:"https://cal.com"});
      cal.ns["50"]("ui", {
        styles: { branding: { brandColor: "#015C3B" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });

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
        <BookingHeader />
        <CounselorGrid />
        <EmergencyNotice />
      </div>
    </div>
  );
}