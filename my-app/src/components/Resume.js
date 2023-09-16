export default function Resume() {
  const resumePdfURL = '../../public/Sep-Resume.pdf';
  
  const openPdf = () => {
    window.open(resumePdfURL, '_blank');
  };
  return (
    <div>
      < onClick={openPdf}></button>
    </div>
  );
};