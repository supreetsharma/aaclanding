interface CounselorServicesProps {
  services: string[];
}

export function CounselorServices({ services }: CounselorServicesProps) {
  return (
    <div className="mt-4">
      <p className="font-medium text-[#1C160C] mb-2">Services:</p>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <span
            key={service}
            className="bg-[#F4EFE6] text-[#4B4639] px-3 py-1 rounded-full text-sm"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}