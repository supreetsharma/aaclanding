import { FooterLinks } from './footer/FooterLinks';
import { FooterCopyright } from './footer/FooterCopyright';

export function Footer() {
  return (
    <footer className="border-t border-[#E9DFCE] py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-[#4B4639]">
          <FooterLinks />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}