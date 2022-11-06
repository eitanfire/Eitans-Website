import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Accordion = ({ icon, title, image, content, id  }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item" > {icon}{title}{image}{id}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <CardTitle >
          <span className='d-none d-md-block d-xxl-none' id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span>
        </CardTitle>
      </div>
      <Card>
        <CardBody className="accordion-content-theme">
          {isActive && <div className="accordion-content" >
          </div>}{content}
        </CardBody>
      </Card>
    </div>
  );
};

export default Accordion;