import './FanSpace.scss';
import './BruinHive.scss';

import Button from '../../components/Button/Button';
import thumbnail from '../../assets/images/fanspace-card.png';

function FanSpace() {
  return(
    <div className='fanspace'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>MOBILE APP UI/UX DESIGN</p>
              <h1>FanSpace</h1>
            </div>
            <div className='divider'/>
            <div className='description descr-contain'>
              <h2>overview.</h2>
              <p className='small-paragraph'>FanSpace serves as a social platform allows concertgoers to find other attendees 
or those interested in attending and reach out. Whether it be to find a fellow fan of an artist to attend an event with or to sell a ticket to, FanSpace aims to bring connection to the concert space.</p></div>
          </section>
        </div>
        <div className='right'>
          <div className='thumbnail-contain'>
            <img src={thumbnail} alt='Thumbnail'/>
            {/* <Button className='button' type='default' link='https://www.figma.com/proto/Nei1HGvgU2bNKtPjoVPCjn/B-Hive-Wireframes?page-id=54%3A1678&node-id=819-14933&starting-point-node-id=656%3A11126&scaling=scale-down&mode=design&t=QlAc5pVz05YgigVS-1' text='view Figma protoype.'/> */}
          </div>
        </div>
      </div>
      <section className='overview descr-contain'>
          <div className='sub-descript-grid'>
            <div className='sub-descript-child'>
              <p className='sub-title'>duration</p>
              <p className='small-paragraph'>Jan 2023 - current</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>role</p>
              <p className='small-paragraph'>UI UX Design Lead</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>project type</p>
              <p className='small-paragraph'>Group Project at Creative Labs UCLA </p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>tools</p>
              <p className='small-paragraph'>Figma, FigJam, Google Docs, Google Slides, Canva</p>
            </div>
            <div className='sub-descript-child skills'>
              <p className='sub-title'>skills</p>
              <p className='small-paragraph'>Prototyping, Usability Testing, User Personas, User Surveys, Market Research/Competitive Analysis</p>
            </div>
          </div>
        </section>
        <div className='grid-contain'>
          <section className='contribution'>
            <h2>contributions.</h2>
            <div className=''>
              <div className='descr-contain'>
                <p className='sub-title'>design lead.</p>
                <p className='small-paragraph'>Currently, I am the <span id='accent-paragraph'>design lead</span> for FanSpace, where my roles consist of:</p>
                <ul className='list-contain'>
                  <li className='list-child'>Spearheading the steps in the design cycle by coordinating design sprint meetings to consistently satisfy deadlines.</li>
                  <li className='list-child'>Coordinating with the product managers and development leads to receive and provide feedback for any interface changes.</li>
                </ul>
                <p className='small-paragraph'><span id='accent-paragraph'>Currently, I am working with my fellow designers to tackle a "dark mode" interface!</span></p>
              </div>
              <div className='descr-contain'>
                <p className='sub-title'>stay tuned.</p>
                <p className='small-paragraph'>Since this project is currently ongoing, please stay tuned for the full case study once we have wrapped up our design cycle!</p>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default FanSpace;