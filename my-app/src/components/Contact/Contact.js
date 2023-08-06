import './Contact.scss';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Contact(){
  return(
    <div className='Contact'>
      <div className='contact-contain'>
        <h4>let's talk</h4>
        <div className='contact-list flex'>
          <a href='https://www.linkedin.com/in/kimberlynguyenh/' target="_blank">
            <ArrowForwardIcon color="$secondary-blue-100" />
            <p className='small'>linkedin</p>
          </a>
          <a href='https://github.com/kimhnyn' target="_blank">
            <ArrowForwardIcon />
            <p className='small'>github</p>
          </a>
          <a href='mailto: kimhnguyeno@g.ucla.edu' target="_blank">
            <ArrowForwardIcon />
            <p className='small'>kimhnguyeno@g.ucla.edu</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;