
import './Button.scss';

function Button(props) {
  const link = props.link;
  const text = props.text;
  return(
      <a target="_blank" href={link} className='button-contain'>
        <div className='button'>{text}</div>
      </a>
  );
};

export default Button;