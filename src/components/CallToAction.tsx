import { Button } from './Button';

interface CallToActionProps {
  onBookClick: () => void;
}

export function CallToAction({ onBookClick }: CallToActionProps) {
  return (
    <section className="py-20 bg-[#F4EFE6]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1C160C]">Ready to Begin Your Journey?</h2>
          <p className="text-[#4B4639] text-lg mb-8">
            Take the first step towards better mental health. Book your session with one of our professional counsellors today.
          </p>
          <Button
            onClick={onBookClick}
            size="lg"
            icon
            aria-label="Book counselling session"
          >
            Book Session
          </Button>
        </div>
      </div>
    </section>
  );
}