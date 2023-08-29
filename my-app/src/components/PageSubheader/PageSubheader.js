import '../PageSubheader/PageSubHeader.scss';

function PageSubHeader(props){
  return(
    <div className='subheader-contain' title={props.title}>
      <p className='small-paragraph grey'>{props.text}</p>
    </div>
  );
};

export default PageSubHeader;