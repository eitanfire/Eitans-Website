import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Accordion = ({ icon, title, content, image, id, current }) => {
  const [isActive, setIsActive] = useState(false);
  return (
     <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <CardTitle>{icon}{title}{image}{id}
          <span className='d-none d-md-block d-xxl-none' id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span>
        </CardTitle>
      </div>
      <Card>
        <CardBody className="accordion-content-theme">
          {isActive && <div className="accordion-content" >{content}
          </div>}
        </CardBody>
      </Card>
    </div>
  );
};

export default Accordion;