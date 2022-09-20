import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Accordion = ({ icon, title, content, image }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

        {/* const icon = [📽, 👩🏿‍💻, ⚔, 🧭 ]
        const fancyTitle = icon.map(icon => {
            return icon+{title} 
        }) */}
{/* <CardImg>{icon}</CardImg> */}
      <CardTitle>{icon}{title}{image}
      <span className='d-none d-md-block d-xxl-none' id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span>
      </CardTitle>
      </div>
      <Card>
      <CardBody className="accordion-content-theme">
      {isActive && <div className="accordion-content" >{content}
      {/* <CardImg>{image}</CardImg> */}
      </div>}
      </CardBody>
      </Card>
    </div>
  );
};

export default Accordion;