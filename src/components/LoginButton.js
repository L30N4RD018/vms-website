import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';

function LoginButton ()  {
  return (    
    <Button variant="primary">
      <BsFillPersonFill className="button-icon" />
      Login
    </Button>
  );
};

export default LoginButton

