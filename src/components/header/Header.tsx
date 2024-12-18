import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  return (
    <header className="py-6 bg-white border-b border-[#E9DFCE] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <HeaderLogo />
          <HeaderNav onBookClick={onBookClick} />
        </div>
      </div>
    </header>
  );
}