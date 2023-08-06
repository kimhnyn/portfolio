//have view more button componentnpm install react-router-dom
import './Home.scss';

import fanspaceImg from '../assets/images/fanspace-card.png';
import bruinhiveImg from '../assets/images/bruinhive-card.png';
import taskclearImg from '../assets/images/taskclear-card.png';
import classbuddiImg from '../assets/images/ClassBuddi-card.png';
import aascImg from '../assets/images/AASC-card.png';

import PageSubHeader from '../components/PageSubheader/PageSubheader';
import Contact from '../components/Contact/Contact';
import PortfolioHomeCard from '../components/Portfolio Home Card/PortfolioHomeCard';
import Dots from '../components/Dots/Dots';
import Technologies from '../components/Technologies/Technologies';

function Home(){
  return (
    <div className='Home-Container'>
      <section className='container introduction'>
        <h1>hi, i'm kim.</h1>
        <div className='inner-introduction'>
          <div className='left'>
           <PageSubHeader text='nice to meet you!' title='home-icon'/>
           <div className='text-contain'>
              <p>I’m a junior at <span id='accent-paragraph'>UCLA</span> studying Computer Science and Linguistics. 
                  My passions lie in bringing a user-focused design perspective into software 
                  development and creating things that prioritize both the user and the 
                  developer as I study UI/UX Design and computer science. 
              </p>
              <p>Currently, I’m a <br/>
                  <span id='accent-paragraph'> frontend developer</span> at UCLA Asian American Studies Center and
                  <br/>
                  <span id='accent-paragraph'> UI/UX Design Lead</span> at Creative Labs.
              </p>
           </div>
          </div>
          <div className='right'>
            <Dots className='flex' direction='horizontal' align='start' />
            <Contact />
          </div>
        </div>
        
        {/* this container will be flex horizontal top-align */}
        {/* <div className='introduction-inner' id='info'>
          <div className='flex-child'>
            <PageSubHeader text='nice to meet you!' title='home-icon'/>
            <div className='flex horizontal'>
              <div className='text-contain'>
                <p>I’m a junior at <span id='accent-paragraph'>UCLA</span> studying Computer Science and Linguistics. 
                    My passions lie in bringing a user-focused design perspective into software 
                    development and creating things that prioritize both the user and the 
                    developer as I study UI/UX Design and computer science. 
                </p>
                <p className='no-wrap'>Currently, I’m a <br/>
                    <span id='accent-paragraph'> frontend developer</span> at UCLA Asian American Studies Center and
                    <br/>
                    <span id='accent-paragraph'> UI/UX Design Lead</span> at Creative Labs.
                </p>
              </div>
            </div>
          </div>
          <div className='flex-child'>
            <Contact />
          </div>
        </div>
    </section>
    <section className='container'>
      <div className='flex horizontal' id="portfolio">
        <h2>portfolio.</h2>
        <div className='divider'> </div>
      </div>
      <div className='grid portfolio'>
        <PortfolioHomeCard link='/projects/fanspace' imgSrc={fanspaceImg} />
        <PortfolioHomeCard link='/projects/fanspace' imgSrc={fanspaceImg} />
        <PortfolioHomeCard link='/projects/fanspace' imgSrc={fanspaceImg} />
        <PortfolioHomeCard link='/projects/fanspace' imgSrc={fanspaceImg} />
        <PortfolioHomeCard link='/projects/fanspace' imgSrc={fanspaceImg} />
      </div> */}
    </section>
    <section className='container projects'>
      <div className='header-contain'>
        <h2 id='portfolio'>portfolio.</h2>
        <div className='divider'></div>
      </div>
      <div className='projects-contain'>
        <div className='project-card-grid'>
          <PortfolioHomeCard link='/projects/fanspace' imgSrc={fanspaceImg} />
          <PortfolioHomeCard link='/projects/aasc' imgSrc={aascImg} />
          <PortfolioHomeCard link='/projects/bruinhive' imgSrc={bruinhiveImg} />
          <PortfolioHomeCard link='/projects/classbuddi' imgSrc={classbuddiImg} />
          <PortfolioHomeCard link='/projects/taskclear' imgSrc={taskclearImg} />
          <Technologies />
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;