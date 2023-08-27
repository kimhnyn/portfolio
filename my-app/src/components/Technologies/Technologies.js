import './Technologies.scss';
import Dots from '../Dots/Dots';
function Technologies() {
  return(
    <div className='Technologies'>
      <Dots className='flex' direction='vertical' align='center'/>
      <div className='technologies-contain'>
        <h4>technologies</h4>
        <div className='tech-list flex'>
          <p className='small-paragraph'>figma, wordpress, notion</p>
          <p className='small-paragraph'>github, git</p>
          <p className='small-paragraph'>html, css/sass, javascript (react, vanilla)</p>
          <p className='small-paragraph'>python, c++</p>
        </div>
      </div>
  </div>
  );
};

export default Technologies;