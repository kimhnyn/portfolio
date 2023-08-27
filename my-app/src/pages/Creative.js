import './Creative.scss';
import Button from "../components/Button/Button";

import fc3 from '../assets/images/FC-Images/FC-3.jpeg';
import fc4 from '../assets/images/FC-Images/FC-4.jpeg';
import fc5 from '../assets/images/FC-Images/FC-5.jpeg';

import fc1a from '../assets/images/FC-Images/FC-1a.jpeg';
import fc2a from '../assets/images/FC-Images/FC-2a.jpeg';
import fc3a from '../assets/images/FC-Images/FC-3a.jpeg';

import fcc1 from '../assets/images/FC-Images/FC-C1.jpeg';
import fcc2 from '../assets/images/FC-Images/FC-C2.jpg';
import fcc3 from '../assets/images/FC-Images/FC-C3.jpg';

import fcd1 from '../assets/images/FC-Images/FC-D1.jpeg';
import fcd2 from '../assets/images/FC-Images/FC-D2.PNG';
import fcd3 from '../assets/images/FC-Images/FC-D3.PNG';
function Creative(){
  return (
    <div className='creative'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>MY CREATIVE ENDEAVORS</p>
              <h1>fleurcreme</h1>
            </div>
            <div className='divider'/> 
            <div className='description descr-contain'>
              
              <p className='small-paragraph'>In high school, <span id='accent-paragraph'>fleurcreme</span> started as an attempt at adding creativity and artistic perspective to note-taking and journaling through photography and blogging on Instagram. Now, it has extended into a journal of my life, whether this involves the occasional dinner blog or capturing a study date at a cafe I’ve saved on Yelp! </p>
            </div>
          </section>
        </div>
        <div className='right'>
          <div className='thumbnail-contain'>
            
            <Button className='button' type='default' link='https://www.instagram.com/fleurcreme' text='view instagram.'/>
          </div>
        </div>
      </div>
      <section className='photo-contain descr-contain'>
        <div className='description'>
          <p className='small-paragraph'>AUG FEED</p>
        </div>
        <div className='photo-grid'>
          <div className='photo-child'><img src={fc1a} alt='Notes on limit laws from August' /></div>
          <div className='photo-child'><img src={fc2a} alt='Notes on limit laws from August'/></div>
          <div className='photo-child'><img src={fc3a} alt='Notes on limit laws from August'/></div>
        </div>
      </section>
      <section className='photo-contain descr-contain'>
        <div className='description'>
          <p className='small-paragraph'>OCT FEED</p>
        </div>
        <div className='photo-grid'>
          <div className='photo-child'><img src={fc3} alt='Fall themed notes on calculus.'/></div>
          <div className='photo-child'><img src={fc4} alt='Fall themed notes on calculus.'/></div>
          <div className='photo-child'><img src={fc5} alt='Fall themed notes on calculus.'/></div>
        </div>
      </section>
      <section className='photo-contain descr-contain'>
        <div className='description'>
          <p className='small-paragraph'>CAFES SUMMER 2023</p>
        </div>
        <div className='photo-grid'>
          <div className='photo-child'><img src={fcc1} alt='Do Mi baked goods at 10Speed Cafe.'/></div>
          <div className='photo-child'><img src={fcc2} alt='La La Land Kind cafe in Santa Monica.'/></div>
          <div className='photo-child'><img src={fcc3} alt='Vienna lattes and passionfruit tea from Yeems in Koreatown Los Angeles.'/></div>
        </div>
      </section>
      <section className='photo-contain descr-contain'>
        <div className='description'>
          <p className='small-paragraph'>CITYSCAPE SPRING 2022</p>
        </div>
        <div className='photo-grid'>
          <div className='photo-child'><img src={fcd1} alt='Downtown Los Angeles traffic.'/></div>
          <div className='photo-child'><img src={fcd2} alt='Griffith observatory at night.'/></div>
          <div className='photo-child'><img src={fcd3} alt='Americana at Brand at night.'/></div>
        </div>
      </section>

    </div>
  );
}

export default Creative;