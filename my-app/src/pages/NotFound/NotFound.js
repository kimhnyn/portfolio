import '../NotFound/NotFound.scss';
import '../../assets/styles/main.scss'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
/*when i make the text responsive, make it smaller?*/
function NotFound(){
  return(
    <div className='not-found-contain'>
      <SentimentDissatisfiedIcon color="primary-brown-100" 
          sx={{fontSize: 30}}  />
      <p>Page Not Found.</p>
    </div>
  );
}

export default NotFound;