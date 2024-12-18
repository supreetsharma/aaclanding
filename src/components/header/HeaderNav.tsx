import { Link } from 'react-router-dom';
import { Button } from '../Button';

export function HeaderNav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link 
        to="/about"
        className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
      >
        About Us
      </Link>
      <Link 
        to="/services"
        className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
      >
        Services
      </Link>
      <Link 
        to="/resources"
        className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
      >
        Resources
      </Link>
      <Link 
        to="/faq"
        className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
      >
        FAQ
      </Link>
      <Link 
        to="/contact"
        className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
      >
        Contact
      </Link>
      <Link to="/book">
        <Button size="sm" aria-label="Book counselling session">
          Book Session
        </Button>
      </Link>
    </nav>
  );
}