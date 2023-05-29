import React from 'react'
import {CustomForm} from './CustomForm'
import CustomButton from "./CustomButton";
import InputsJson from '../data/inputs_static.json'
const Filter = () => {
  return(
    <div className='form__container' id='filter_options_container'>
      <h4>Filtration</h4>
      <CustomForm
        title='Price'
        inputs={InputsJson[3]}
      />
      {
        InputsJson[4].map((input, i) => (
          <div key={i}>
            <h4>{input['level']}</h4>
            <CustomButton
              variant={input['type']}
              placeholder={input['placeholder']}
              options={input['options']}
              classname = 'drop_button'
            />
          </div>
        ))
      }
      <CustomForm
        title='Location'
        inputs={InputsJson[5]}
      />
      <div className='button_container'>
        <CustomButton
          variant='submit'
          spanText='Filter'
          classname='buttons'
        />
      </div>
    </div>
  );
}

export default Filter;