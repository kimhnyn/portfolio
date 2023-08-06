import './Technologies.scss';
import Dots from '../Dots/Dots';
function Technologies() {
  return(
    <div className='Technologies'>
      <Dots className='flex' direction='vertical' align='center'/>
      <div className='technologies-contain'>
        <h4>technologies</h4>
        <div className='tech-list flex'>
          <p>figma, wordpress, notion</p>
          <p>github, git</p>
          <p>html, css/sass, javascript (react, vanilla)</p>
          <p>python, c++</p>
        </div>
      </div>
  </div>
  );
};

export default Technologies;