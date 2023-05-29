import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import DropdownSelect from 'react-dropdown-select'
import '../stylesheets/Button.css'

function CustomButton(props){
  const {icon: Icon, variant, spanText, options, placeholder, classname} = props
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue[0]);
  }
  const isDropdownButton = variant === 'dropdown';
  return(
    <>
      <Button variant={variant} className={classname}>
        {Icon && <Icon className='button-icon'/>}
        {spanText && <span className='button-text'>{spanText}</span>}
      </Button>
      {isDropdownButton && (
        <div className='dropdown-container'>
          <DropdownSelect
            options={options}
            values={selectedOption ? [selectedOption.value]: []}
            onChange={(value) => handleOptionChange(value)}
            multi
            closeOnSelect={false}
            placeholder={placeholder}
          />
        </div>
      )
      }
    </>
  );
}

export default CustomButton
