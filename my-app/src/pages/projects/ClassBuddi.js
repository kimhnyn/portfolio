import './ClassBuddi.scss';
import '../../assets/styles/main.scss';
import thumbnail from '../../assets/images/ClassBuddi-card.png';
import Button from '../../components/Button/Button';
import dashboard from '../../assets/images/CB-dashboard.png';
import finding from '../../assets/images/CB-finding.png';

function ClassBuddi() {
  return(
    <div className='classbuddi'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>UI/UX DESIGN & FRONTEND WEB DEVELOPMENT</p>
              <h1>ClassBuddi</h1>
            </div>
            <div className='divider'/>
            <div className='description descr-contain'>
              <h2>overview.</h2>
              <p className='small-paragraph'>
              UCLA faces the challenge of large class sizes, hindering the formation of 
              meaningful connections among peers in courses. </p>
              <p className='small-paragraph'>
                ClassBuddi, a web app, facilitates student connections
                 in computer science classes by creating profiles,
                  selecting interests, and searching for peers in
                   shared courses. Users can then connect through
                    email or social media, strengthening their 
                    support system.
              </p>
            </div>
          </section>
        </div>
        <div className='right'>
          <div className='thumbnail-contain'>
            <img src={thumbnail} alt='Thumbnail'/>
            <div className='button-group'>
            <Button className='button' type='default' link='https://github.com/jainsujay02/classbuddi' text='view github.'/>
            <Button className='button' type='default' link='https://www.figma.com/file/FtZYuAiJ3KqUT2kqG09gPm/ClassBuddi-Wireframes?type=design&node-id=171%3A4297&mode=design&t=Gq74fktVS0j8Awg1-1' text='view prototype.'/>
            </div>
          </div>
        </div>
      </div>
      <section className='overview descr-contain'>
          <div className='sub-descript-grid'>
            <div className='sub-descript-child'>
              <p className='sub-title'>duration</p>
              <p className='small-paragraph'>Jan 2023 - Mar 2023 (10 weeks)</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>role</p>
              <p className='small-paragraph'>Frontend Developer and UI UX Designer</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>project type</p>
              <p className='small-paragraph'>Class Project - COM SCI 35L (Software Construction)</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>tools</p>
              <p className='small-paragraph'>ReactJS, CSS, Material UI, Firebase, Git, WordPress, SCSS/SASS, Figma</p>
            </div>
            <div className='sub-descript-child skills'>
              <p className='sub-title'>skills</p>
              <p className='small-paragraph'>Nested Component Creation, Google Authentication Implementation, Version Control, Wireframing and Prototyping</p>
            </div>
          </div>
        </section>
        <div className='grid-contain'>
          <section className='contribution'>
            <h2>contributions.</h2>
            <div className=''>
              <div className='descr-contain'>
                <p className='sub-title'>design</p>
                <p className='small-paragraph'>In this class project, I created various sketches based off of the user flow that 
                our team created and translated them into wireframes and a functional low-fidelity prototype.</p>
                <p className='small-paragraph'>Afterward, I created a style guide that included typography guidelines as well as a color palette 
                that I translated into an interactive high fidelity prototype to <span id='accent-paragraph'>streamline the styling and page routing in the development process.</span></p>
              </div>
              <div className='descr-contain'>
                <p className='sub-title'>frontend development</p>
                <p className='small-paragraph'>In this project, I utilized <span id='accent-paragraph'>Material UI</span> with the ReactJS framework to implement the frontend interface. I primarily 
                nested components within each other in order to create larger layouts and then passed in props in order to populate each component with data dynamically pulled from the database.</p>
              </div>
              <div className=' descr-contain image-contain'><img src={dashboard} alt='Dashboard Image' />
                <img src={finding} alt='Dashboard Image' />
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default ClassBuddi;