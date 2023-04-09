import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from 'react-bootstrap/Button'

import './ButtonComponent.css'

function ButtonComponent({ buttonText, icon}) {
  return (
    <Button variant="success">
      <FontAwesomeIcon icon={icon} style={{color: "#ffffff", fontSize: "16px"}} />
      <span>{buttonText}</span>
    </Button>
  );
}

export default ButtonComponent;
