import './Projects.scss';
import PortfolioHomeCard from '../Portfolio Home Card/PortfolioHomeCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Projects(props) {
  const title = props.title;
  const category = props.categ;
  const descr = props.descr;
  const link = props.link;
  const imgSrc = props.img;

  return(
    <div className='Projects contain'>
      <div className='left'>
        <div className='header'>
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
        <div className='description'>
          <p>{descr}</p>
        </div>
        <a className='case-study-contain' href={link}>
          <p className='link'>view case study</p>
          <ArrowForwardIcon />
        </a>
      </div>
      <div className='right'>
        <PortfolioHomeCard link={link} imgSrc={imgSrc} />
      </div>
    </div>
  );
};

export default Projects;