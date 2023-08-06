//about page 
import './About.scss';
import profileImg from '../assets/images/profile.png';

import PageSubHeader from "../components/PageSubheader/PageSubheader";
import Dots from '../components/Dots/Dots';
import Contact from '../components/Contact/Contact';

function About(){
  return(
    <div className='About-Container'>
      <section className='container introduction'>
        <h1>about.</h1>
        <div className='inner-introduction'>
          <div className='left'>
            <PageSubHeader text="hi, i'm kim!" title='about-icon' />
            <div className='text-contain'>
              <p>I’m a junior at <span id='accent-paragraph'>UCLA</span> studying Computer Science and Linguistics. 
              My passions lie in bringing a user-focused design perspective into 
              software development and creating things that prioritize both the user
               and the developer as I study UI/UX Design and computer science. 
              </p>
              <p>
                As a first-generation college student, I aim to contribute to the
               accessibility of tech literacy and computer science education in underrepresented communities!
              </p>
              <p>Currently, I’m a <br/>
                  <span id='accent-paragraph'> frontend developer</span> at UCLA Asian American Studies Center and
                  <br/>
                  <span id='accent-paragraph'> UI/UX Design Lead</span> at Creative Labs.
              </p>
           </div>
          </div>
          <div className='right'>
            <div className='img-contain'>
              <img className='profile-img' src={profileImg} alt='Portrait of Kimberly'/>
              <Dots className='flex' direction='horizontal' align='center'/>
            </div>
            <Contact/ >
          </div>
        </div>
      </section>
      <section className='container projects'>
        <div className='header-contain'>
          <h2 id='portfolio'>current obsessions.</h2>
          <div className='divider'></div>
        </div>
        <div className='obsessions-contain'>
          <div className='obsession-grid'>
            <div className='obsession-grid-child'><h4>collecting fragrances</h4></div>
            <div className='obsession-grid-child'><h4>jazz<br/>japanese folk music</h4></div>
            <div className='obsession-grid-child'><h4>cafe hopping</h4></div>
          </div>
        </div>
        <div className='obsession-descr'>
          <p>When I’m not developing or designing, I love to explore cafes in LA, 
          collecting fragrances, and pick up a new hobby (currently this is making cold brew coffee!)
          </p>
          <p><span id='accent-paragraph'>Feel free to reach out</span> -- I’d love to talk about anything! There’s always so much to learn.</p>
        </div>
    </section>
    </div>
  );
}

export default About;