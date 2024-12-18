import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './Button';

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="py-6 bg-white border-b border-[#E9DFCE] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:text-[#015C3B] transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 6.455954695410434 5.516677843119645">
              <g transform="matrix(0.8468439451398594,0,0,0.8468439451398594,3.224706823779637,4.397387790507776)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path d="M -2.1175934927376168 -1.2343126944761647 Q -2.1118228219768795 -1.2359556670782408 -2.110453678141816 -1.2311467747776264 Q -2.1049771028015627 -1.211911205575169 -2.095399851507276 -1.1709688527159834 Q -2.0852749426789634 -1.1281029429365517 -2.0800721961057222 -1.1098291521942172 Q -2.0732264769304054 -1.0857846906911455 -2.061445084397703 -1.0517083236607476 Q -2.050211349399026 -1.0195555135505956 -2.0447347740587727 -1.0003199443481383 Q -2.0436394589907216 -0.9964728305076468 -2.049410129751459 -0.9948298579055708 Q -2.055180800512196 -0.9931868853034946 -2.056276115580247 -0.997033999143986 Q -2.0633956635225768 -1.0220402391071806 -2.0718344758738985 -1.0315946331800239 Q -2.0802732882252197 -1.041149027252867 -2.0937381866669402 -1.0373154245146896 Q -2.1100884204890287 -1.032660335475474 -2.1430829835536898 -1.0024716155925093 L -2.311769376109559 -0.8463117585021314 L -2.2630278555813015 -0.6751151926002609 L -2.092586794884111 -0.6498200383525283 Q -2.061135445569383 -0.6452579526142989 -2.037090984066311 -0.6521036717896158 Q -2.002466959501888 -0.6619615074020724 -1.990214023858254 -0.6919634334754592 Q -1.97796108821462 -0.721965359548846 -1.9897357251961654 -0.7633218333341292 Q -1.9911048690312287 -0.7681307256347436 -1.9853341982704915 -0.7697736982368196 Q -1.9795635275097543 -0.7714166708388958 -1.978194383674691 -0.7666077785382814 Q -1.9732654658684625 -0.7492957662560698 -1.965878844710277 -0.7160476410778669 Q -1.957396908484041 -0.6789524020591726 -1.9497297030076859 -0.6520226051757323 Q -1.9423363262983435 -0.6260545867524149 -1.9300072762316158 -0.5900546628017713 Q -1.918773541232939 -0.5579018526916192 -1.9130231371256725 -0.5377045050290389 Q -1.911927822057622 -0.5338573911885475 -1.9176984928183591 -0.5322144185864713 Q -1.9234691635790964 -0.5305714459843953 -1.924564478647147 -0.5344185598248867 Q -1.932231684123502 -0.5613483567083271 -1.948494882988156 -0.5764731166300157 Q -1.96475808185281 -0.5915978765517044 -1.9983332929996755 -0.6017937186671647 Q -2.031908504146541 -0.6119895607826251 -2.0948112027759973 -0.6211137322590841 L -2.6130003706963567 -0.6992033362406971 Q -2.616433363610751 -0.7003054068599048 -2.6183501649798395 -0.7070378560807649 Q -2.620540795115941 -0.7147320837617478 -2.617929288502585 -0.7165153485229087 L -2.213191477875305 -1.0916837169238651 Q -2.154489214052025 -1.1447878054860658 -2.1348192572699993 -1.1743020867782343 Q -2.115149300487974 -1.2038163680704026 -2.1219950196632906 -1.2278608295734743 Q -2.123364163498354 -1.2326697218740885 -2.1175934927376168 -1.2343126944761647" fill="#574848" fillRule="nonzero"/>
                </g>
              </g>
            </svg>
            <span className="text-lg font-tenor">Affordable Access Counselling</span>
          </Link>
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
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-[#4B4639] hover:text-[#015C3B] transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={onBookClick}
              size="sm"
              aria-label="Book counselling session"
            >
              Book Session
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}