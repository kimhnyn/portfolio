import './PortfolioHomeCard.scss';

function PortfolioHomeCard(props) {
  return(
    <div className='container proj'>
      <a href={props.link}>
        <img src={props.imgSrc}></img>
      </a>
    </div>
  );
};

export default PortfolioHomeCard;