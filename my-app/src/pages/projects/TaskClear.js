import './TaskClear.scss';
import './BruinHive.scss';
import thumbnail from '../../assets/images/taskclear-card.png';
import overall from '../../assets/images/TC-overall.png';
import overlay from '../../assets/images/TC-overlay.png';
import Button from '../../components/Button/Button';

function TaskClear() {
  return(
    <div className='taskclear'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>UI/UX DESIGN & FRONTEND WEB DEVELOPMENT</p>
              <h1>TaskClear | LA Hacks 2023</h1>
            </div>
            <div className='divider'/>
            <div className='description descr-contain'>
              <h2>overview.</h2>
              <p className='small-paragraph'>
                <span id='accent-paragraph'>Time blocking</span>, a trending time management method, divides the day 
                into task-specific blocks. Yet, students often hesitate due to uncertain 
                task durations, and tracking times can be bothersome. 
              </p>
              <p className='small-paragraph'><span id='accent-paragraph'>The app tackles this 
                by furnishing analytics, presenting users with their average study time
                 per course, simplifying time blocking.</span></p>
            </div>
          </section>
        </div>
        <div className='right'>
          <div className='thumbnail-contain'>
            <img src={thumbnail} alt='Thumbnail'/>
            <Button className='button' type='default' link='https://www.aasc.ucla.edu/textbook/' text='see devpost.'/>
          </div>
        </div>
      </div>
      <section className='overview descr-contain'>
          <div className='sub-descript-grid'>
            <div className='sub-descript-child'>
              <p className='sub-title'>duration</p>
              <p className='small-paragraph'>Fall 2022 - current</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>role</p>
              <p className='small-paragraph'>UI UX Designer (prev), Frontend Developer (current)</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>project type</p>
              <p className='small-paragraph'>Multimedia Textbook (to be deployed for LAUSD)</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>tools</p>
              <p className='small-paragraph'>Git, WordPress, SCSS/SASS, JavaScript, Figma</p>
            </div>
            <div className='sub-descript-child skills'>
              <p className='sub-title'>skills</p>
              <p className='small-paragraph'>Global Styling/Inheritance, Version Control, User Personas, Market Research/Competitive Analysis</p>
            </div>
          </div>
        </section>
        <div className='grid-contain'>
        <section className='contribution'>
          <h2>contributions.</h2>
          <div className='content'>
            <div className='design-contain'>
              <p className='sub-title'>design</p>
              <p className='small-paragraph'>During this hackathon, I spearheaded the ideation and iteration of the application's user interface. Using Figma, I designed a style guide that I applied to each frame
              and implemented <span id='accent-paragraph'>overlays</span> that pop up on-click in the prototype.</p>
            </div>
            <div className='frontend-contain'>
              <p className='sub-title'>frontend development</p>
              <p className='small-paragraph'></p>
              <p className='small-paragraph'>I implemented the popup overlays as well as the list of tasks created by the user. We utilized Vite to optimize rendering our application.</p>
            </div>
            <div className='image-contain'>
              <img src={overall} alt='Whole Frame Image' />
              <img src={overlay} alt='Overlay Popup Image' />
            </div>
          </div>
        </section>
        </div>
    </div>
  );
};

export default TaskClear;