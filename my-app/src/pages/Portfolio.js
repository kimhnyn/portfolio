import './Portfolio.scss';
import '../assets/styles/main.scss';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';

function Portfolio(){
  return(
    <div className='portfolio'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>CURRENT EXPERIENCES</p>
              <h1>portfolio.</h1>
            </div>
            <div className='divider'/>
            <div className='description descr-contain'>
              <div className='text-contain'>
                <p>With my experiences both as an application designer and developer, I have been able to bring a <span id='accent-paragraph'>designer's perspective into development</span> and vice versa. </p>
                <p>My priority is to make designs that are easily understood by developers and develop with a meticulousness that truly realizes a designer's vision.</p>
              </div>
            </div>
          </section>
        </div>
        <div className='right'>
          <Technologies />
        </div>
      </div>
    
      <div className='Portfolio-Container'>
          <div className='works-container'>
            <Projects />
            {/* <Projects 
              title='FanSpace'
              categ='mobile application'
              link='/projects/fanspace'
              descr="A social platform allows concertgoers to find other attendees or those interested in attending and reach out. 
                Whether it be to find a fellow fan of an artist to attend an event with or to sell a ticket to, FanSpace aims to bring connection to the concert space."
              imgSrc={fanspaceImg}
            />
            <Projects 
              title='UCLA Asian American Studies Center'
              categ='web application'
              link='/projects/aasc'
              descr="Currently working on the MultiMedia Textbook Project, where I use WordPress Kadence Blocks and SASS/CSS styling to build interactive components for the application."
              imgSrc={aascImg}
            />
            <Projects 
              title='BruinHive'
              categ='web application'
              link='/projects/bruinhive'
              descr="An interdisciplinary, cross-departmental peer networking and mentoring platform for UCLA students to connect on various niches and build community."
              imgSrc={bruinhiveImg}
            />
            <Projects 
              title='ClassBuddi'
              categ='web application'
              link='/projects/classbuddi'
              descr="Application designed to help UCLA students easily connect with like-minded classmates in their CS courses."
              imgSrc={classbuddiImg}
            />
            <Projects 
              title='task.clear'
              categ='web application'
              link='/projects/fanspace'
              descr="A study timer that aims to improve student productivity through a combination of features including:
  A feed where students can send and receive requests to study in a group together
  Statistics of average study time per course on a daily and weekly basis. "
              imgSrc={taskclearImg}
            /> */}
          </div>        
      </div>
    </div>
  );
}

export default Portfolio;