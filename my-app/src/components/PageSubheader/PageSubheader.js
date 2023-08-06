import '../PageSubheader/PageSubHeader.scss';

function PageSubHeader(props){
  return(
    <div className='subheader-contain' title={props.title}>
      <h3>{props.text}</h3>
    </div>
  );
};

export default PageSubHeader;