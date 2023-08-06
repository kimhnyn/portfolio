import './Dots.scss';

function Dots(props){
  return(
    <div className={`flex dots-contain ${props.direction} ${props.align} `}>      <div className='dots-child' id='brown'></div>
      <div className='dots-child' id='blue'></div>
      <div className='dots-child' id='beige'></div>
    </div>
  );
};

export default Dots;