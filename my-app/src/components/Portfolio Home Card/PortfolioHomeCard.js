import './PortfolioHomeCard.scss';
import { Link } from 'react-router-dom'; 

function PortfolioHomeCard(props) {
  const title = props.title;
  const category = props.categ;
  const descr = props.descr;
  const link = props.link;
  const imgSrc = props.imgSrc;

  return(
    <div className='proj' id={props.id}>
      <Link to={props.link}>
        <img src={props.imgSrc}></img>
        <div className='card-overlay'>
          <div className='header'>
            <h4>{category}.</h4>
            <p>{descr}</p>
            <p className='small-paragraph'></p>
          </div>
          <div className='description'>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioHomeCard;