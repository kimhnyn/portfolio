import './AASC.scss';
import thumbnail from '../../assets/images/AASC-card.png';
import Button from '../../components/Button/Button';

function AASC() {
  return(
    <div className='aasc'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>UI/UX DESIGN & FRONTEND WEB DEVELOPMENT</p>
              <h1>Asian American Studies Center</h1>
            </div>
            <div className='divider'/>
            <div className='description descr-contain'>
              <h2>overview.</h2>
              <p className='small-paragraph'>The Asian American Studies Center at UCLA revolves around in-depth exploration 
              of Asian American and Pacific Islander (AAPI) communities. By fostering collaborative efforts among researchers,
               students, and community stakeholders, the center aims to <span id='accent-paragraph'>drive societal change and shed light on lesser-known aspects of AAPI history </span>through various channels 
               like journals and digital platforms.</p></div>
          </section>
        </div>
        <div className='right'>
          <div className='thumbnail-contain'>
            <img src={thumbnail} alt='Thumbnail'/>
            <Button className='button' type='default' link='https://www.aasc.ucla.edu/textbook/' text='learn about the multimedia textbook.'/>
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
                <p className='small-paragraph'>During Fall 2022, my role as a student UI UX designer primarily consisted of:</p>
                <ul className='list-contain'>
                  <li className='list-child'>Improving information accessibility by documenting the center website's information architecture on Figma</li>
                  <li className='list-child'>Creating user personas for the multimedia textbook project.</li>
                  <li className='list-child'>Conducting competitive analysis on other research centers on Notion.</li>
                </ul>
              </div>
              <div className='frontend-contain'>
                <p className='sub-title'>frontend development</p>
                <p className='small-paragraph'>Currently, I am using WordPress and SASS/SCSS to modularize component usage within the Multimedia Textbook Project.</p>
                <p className='small-paragraph'><span id='accent-paragraph'>Features are confidential!</span></p>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default AASC;