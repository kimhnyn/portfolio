import './ImageSlider.scss';
import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function ImageSlider(){
  const [currentSlide, setCurrentSlide] = useState(0);
  return(
    <section className='slider'>
      <NavigateBeforeIcon />
      <NavigateNextIcon />
      
    </section>
  )
}

export default ImageSlider;