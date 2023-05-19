import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGearFill } from 'react-icons/bs';

function SettingsButton(){
  return (
    <Button variant="secondary">
      <BsGearFill className="button-icon" />
    </Button>
  );
};

export default SettingsButton
