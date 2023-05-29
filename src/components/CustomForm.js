import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../stylesheets/CustomForm.css';

export const InputItem = ({input}) => {
  return (
    <Form.Group className='form__input'>
      <Form.Label htmlFor={input.for}>
        {input.level} <span>{input.required ? '*' : ''}</span>
      </Form.Label>
      <Form.Control
        type={input.type}
        id={input.for}
        placeholder={input.placeholder}
        required
        className='the_type_button'
      />
    </Form.Group>
  )
}

InputItem.propTypes = {
  input: PropTypes.object.isRequired
}

export const CustomForm = ({title, inputs}) => {
  return (
    <Form action='' className='form__box'>
      {title && (<h4>{title}</h4>)}
      {inputs.map((input, i) => (
        <InputItem input={input} key={i}/>
      ))}
    </Form>
  )
}