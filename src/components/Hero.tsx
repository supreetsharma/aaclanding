import { Button } from './Button';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-tenor mb-6 text-text-primary leading-tight">
              If You Are Someone Who Is:
            </h1>
            <div className="text-xl text-text-secondary mb-8 space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Struggling with mental health or substance use issues
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Facing financial challenges
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Living without insurance coverage
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Unable to access reliable transportation
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Living with a disability
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Feeling unsupported in employment or family life
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Lacks self-esteem
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Lacks motivation
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#015C3B]">✔</span>
                Experiencing unstable relationships
              </p>
            </div>
            <p className="text-lg text-text-secondary mb-8">
              Then Affordable Access Counselling is here to break down the barriers and support your healing journey.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                onClick={onBookClick}
                size="lg"
                icon
                aria-label="Book counselling session"
              >
                Start Your Journey to Wellness Today
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/online-counselling.jpg"
              alt="Online counselling illustration showing a person having a video call session"
              className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}