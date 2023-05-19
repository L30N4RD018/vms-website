import React from 'react';
import { FaUser} from 'react-icons/fa';

function LoginButton ()  {
  return (
    <button className="login-button">
      <FaUser className="button-icon" />
      Login
    </button>
  );
};

export default LoginButton

