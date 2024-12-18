import { Link } from 'react-router-dom';
import { Logo } from '../logo/Logo';

export function HeaderLogo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 group"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="flex-shrink-0 group-hover:opacity-80 transition-opacity">
        <Logo />
      </div>
      <span className="text-lg font-tenor text-[#574848] group-hover:text-[#015C3B] transition-colors">
        Affordable Access Counselling
      </span>
    </Link>
  );
}