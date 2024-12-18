import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Comparison } from '../components/Comparison';
import { FAQ } from '../components/faq/FAQ';
import { Contact } from '../components/Contact';

export function Home() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book');
  };

  return (
    <>
      <Hero onBookClick={handleBookClick} />
      <Features />
      <Process />
      <Comparison />
      <FAQ />
      <Contact />
    </>
  );
}