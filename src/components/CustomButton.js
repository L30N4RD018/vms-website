import React from 'react';
import { Button } from 'react-bootstrap';
import '../stylesheets/CustomButton.css'

function CustomButton(props){
  const {icon: Icon, variant, spanText} = props
  return(
    <Button variant={variant} className='CustomButton'>
      {Icon && <Icon className='button-icon'/>}
      {spanText && <span className='button-text'>{spanText}</span>}
    </Button>
  );
}

export default CustomButton