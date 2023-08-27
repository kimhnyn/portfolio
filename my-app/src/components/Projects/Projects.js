import './Projects.scss';
import PortfolioHomeCard from '../Portfolio Home Card/PortfolioHomeCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import fanspaceImg from '../../assets/images/fanspace-card.png'
import taskclearImg from '../../assets/images/taskclear-card.png';
import classbuddiImg from '../../assets/images/ClassBuddi-card.png';
import aascImg from '../../assets/images/AASC-card.png';
import bruinhiveImg from '../../assets/images/bruinhive-card.png';

function Projects(props) {
  const title = props.title;
  const category = props.categ;
  const descr = props.descr;
  const link = props.link;
  const imgSrc = props.imgSrc;

  return(
    <div className='project-card-grid'>
          <PortfolioHomeCard 
            id='fanspace'
            categ='mobile application'
            link='/projects/fanspace'
            descr="A social platform allows concertgoers to find other attendees or those interested in attending and reach out."
            imgSrc={fanspaceImg} />
          <PortfolioHomeCard 
            id='aasc'
            categ='web application'
            link='/projects/aasc'
            descr="Currently working on the MultiMedia Textbook Project, where I use WordPress Kadence Blocks and SASS/CSS styling to build interactive components for the application."
            imgSrc={aascImg} />
          <PortfolioHomeCard 
            id='bruinhive'
            categ='web application'
            link='/projects/bruinhive'
            descr="An interdisciplinary, cross-departmental peer networking and mentoring platform for UCLA students to connect on various niches and build community."
            imgSrc={bruinhiveImg} />
          <PortfolioHomeCard
            id='classbuddi'
            categ='web application'
            link='/projects/classbuddi'
            descr='Application designed to help UCLA students easily connect with like-minded classmates in their CS courses.' 
            imgSrc={classbuddiImg} />
          <PortfolioHomeCard
            id='taskclear'
            categ='mobile application'
            link='/projects/taskclear'
            descr="Web app that provides analytics on users' average study time per course to simplify the practice of time blocking for effective time management."
            imgSrc={taskclearImg} />
        </div>
  );
};

export default Projects;