import './PortfolioHomeCard.scss';

function PortfolioHomeCard(props) {
  const title = props.title;
  const category = props.categ;
  const descr = props.descr;
  const link = props.link;
  const imgSrc = props.imgSrc;

  return(
    <div className='proj' id={props.id}>
      <a href={props.link}>
        <img src={props.imgSrc}></img>
        <div class='card-overlay'>
          <div className='header'>
            <h4>{category}.</h4>
            <p>{descr}</p>
            <p className='small-paragraph'></p>
          </div>
          <div className='description'>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioHomeCard;