import './Header.scss';
import { useState } from 'react';
import LogoIcon from '../Images/LogoSVG';
import { Link, useLocation } from 'react-router-dom'; 
import resume from '../../../src/Sep-Resume.pdf';
//make a separate component for header loader that turns into header
//add svg for logo
function Header(){
  let location = useLocation();
  const [activeNavLink, setsActiveNavLink] = useState(`${location.pathname}`);

  const handleNavLinkClick = (navLink) => {
    setsActiveNavLink(navLink);
  };

  /* isActive stores the result of the arrow function pathname that compares the pathname param of the location object
  * that is obtained from using useLocation() with the provided pathname */

  return(
    <div>
      <nav className='nav'>
        <div className='container'>
          <Link to="/"
                onClick={()=> handleNavLinkClick('/')}
                className='logo-container'>
            <LogoIcon className="logo" />
                
          </Link>
          <ul>
            {/* <li>
              <Link to="/"
                    className={activeNavLink === '/' ? 'activeNav' : ''}
                    onClick={()=> handleNavLinkClick('/')}>Home
              </Link>
            </li> */}
            <li>
              <Link to="/portfolio" 
                    className={activeNavLink === '/portfolio' ? 'activeNav':''}
                    onClick={()=> handleNavLinkClick('/portfolio')}>Portfolio
              </Link>
            </li>
            <li>
              <a 
                href={resume}
                target="_blank"
                rel="noreferrer"
                >Resume
              </a>
            </li>
            {/* <li>
            <a href="portfolio/my-app/public/Sep-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li> */}
            <li>
              <Link to="/about" 
                    className={activeNavLink === '/about' ? 'activeNav' : ''}
                    onClick={()=> handleNavLinkClick('/about')}>About
              </Link>
            </li>
            <li>
              <Link to="/creative" 
                    className={activeNavLink === '/creative' ? 'activeNav': ''}
                    onClick={()=> handleNavLinkClick('/creative')}>Creative
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;