import './Footer.scss';
import LogoIcon from '../Images/LogoSVG';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'; 

function Footer(){
  return(
    <div className='footer container'>
    <div className='divider'></div>
    <section className='footer-contents'>
      <div className='logo-left'>
        <LogoIcon/>
        <p><span id='accent-paragraph'>designed + developed <br/> by kimberly nguyen.</span></p>
      </div>
      <div className='navigation'>
      <div className='nav-links'>
        <p className='small-paragraph grey'>REACH OUT</p>
        <div className='contact-list flex'>
          <a href='https://www.linkedin.com/in/kimberlynguyenh/' target="_blank">

            <p className='small-paragraph'>linkedin</p>
          </a>
          <a href='https://github.com/kimhnyn' target="_blank">

            <p className='small-paragraph'>github</p>
          </a>
          <a href='mailto: kimhnguyeno@g.ucla.edu' target="_blank">

            <p className='small-paragraph'>kimhnguyeno@g.ucla.edu</p>
          </a> 
        </div>
      </div>
      <div className='nav-links'>
      <p className='small-paragraph grey'>QUICK FIND</p>
        <div className='contact-list flex'>
          <Link to='/'><p className='small-paragraph'>home</p></Link>
          <Link to='/portfolio'><p className='small-paragraph'>portfolio</p></Link>
          <Link to='/about'><p className='small-paragraph'>about</p></Link>
         <Link to='/creative'><p className='small-paragraph'>creative</p></Link>
        </div>
      </div>
        
      </div>
    </section>
    </div>
  );
}
export default Footer;