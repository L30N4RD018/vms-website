import React from 'react';
import {FaUserPlus } from 'react-icons/fa';


function RegisterButton () {
  return (
    <button className="register-button">
      <FaUserPlus className="button-icon" />
      Register
    </button>
  );
};
export default RegisterButton
