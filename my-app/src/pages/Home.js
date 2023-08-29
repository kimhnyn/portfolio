//have view more button componentnpm install react-router-dom
import './Home.scss';

import Projects from '../components/Projects/Projects';
import PageSubHeader from '../components/PageSubheader/PageSubheader';
import Contact from '../components/Contact/Contact';
import PortfolioHomeCard from '../components/Portfolio Home Card/PortfolioHomeCard';
import Dots from '../components/Dots/Dots';
import Technologies from '../components/Technologies/Technologies';

function Home(){
  return (
    <div className='home fade'>
      <div className='flex'>
          <div className='left'>
            <section className='title'>
              <div className='description'>
                <p className='small-paragraph'>NICE TO MEET YOU!</p>
                <h1>hi, i'm kim.</h1>
              </div>
              <div className='divider'/> 
              <div className='description descr-contain'>
                <div className='text-contain'>
                  <p>I’m a junior at <span id='accent-paragraph'>UCLA</span> studying Computer Science and Linguistics. 
                  My passions lie in bringing a user-focused design perspective into 
                  software development and creating things that prioritize both the user
                  and the developer as I study UI/UX Design and computer science. 
                  </p>
                  <p>Currently, I’m a <br/>
                      <span id='accent-paragraph'> frontend developer</span> at UCLA Asian American Studies Center and
                      <br/>
                      <span id='accent-paragraph'> UI/UX Design Lead</span> at Creative Labs.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className='right'>
            <Dots direction='horizontal' align='start' />
            <Contact />
          </div>
        </div>
    
    
    <section className='projects'>
      <div className='header-contain'>
        <h2 id='portfolio'>portfolio.</h2>
        <div className='divider'></div>
      </div>
      <div className='projects-contain'>
      <Projects />
      </div>
    </section>
    </div>
  );
}

export default Home;