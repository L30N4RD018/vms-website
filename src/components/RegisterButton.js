import React from 'react';
import { Button } from 'react-bootstrap';
import { BsPersonPlusFill } from 'react-icons/bs';

function RegisterButton () {
  return (
    <Button variant="success">
      <BsPersonPlusFill className="button-icon" />
      Register
    </Button>
  );
};
export default RegisterButton;


