//about page 
import './About.scss';
import profileImg from '../assets/images/profile.png';

import PageSubHeader from "../components/PageSubheader/PageSubheader";
import Dots from '../components/Dots/Dots';
import Contact from '../components/Contact/Contact';

function About(){
  return(
    <div className='about fade'>
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
            </section>
          </div>
          <div className='right'>
            <div className='thumbnail-contain'>
              <div className='img-contain'>
                <img className='profile-img' src={profileImg} alt='Portrait of Kimberly'/>
                <Dots direction='horizontal' align='center'/>
              </div>
            </div>
          </div>
        </div>
      <section className='projects'>
        <div className='header-contain'>
          <h2 id='portfolio'>current obsessions.</h2>
          <div className='divider'></div>
        </div>
        <div className='obsessions-contain'>
          <div className='obsession-grid'>
            <a href='/notfound'><div className='obsession-grid-child'><h4>collecting fragrances</h4></div></a>
            <a href='https://open.spotify.com/playlist/4zivpxgIXRY7f3JCIg0uHm?si=300d3c8452324a98' target="_blank"><div className='obsession-grid-child'><h4>jazz music</h4></div></a>
            <a href='https://www.instagram.com/fleurcreme/' target="_blank"><div className='obsession-grid-child'><h4>cafe hopping</h4></div></a>
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