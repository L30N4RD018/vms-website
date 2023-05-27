import React from 'react'
import {Button, Card, Col, Form} from "react-bootstrap";
import {CustomForm} from "../components/CustomForm";
import {MultiOptionsForm} from "../components/MultiOptionsForm";
import Upload_img from "../components/Upload_img";
import InputsJson from "../data/inputs_static.json";
import maritime_v from "../img/icons/Maritime_vehicle.png";
import land_v from "../img/icons/Land_vehicle.png";
import air_v from "../img/icons/Air_vehicle.png";
import '../stylesheets/Main.css';
import '../stylesheets/CustomForm.css'

const Options = () => {
  return (
    <Card.Body>
      <Form className="form__box" >
        <h4 className="mb-5">Type of vehicle</h4>
        <div id='types_vehicles'>
          <div>
            <h6>Maritime</h6>
            <Form.Check
              type="radio"
              label={
                <img
                  src={maritime_v}
                  alt=""
                  className="img-fluid ms3"
                />
              }
              name="option_select"
            />
          </div>
          <div>
            <h6>Land</h6>
            <Form.Check
              type="radio"
              label={
                <img
                  src={land_v}
                  alt=""
                  className="img-fluid ms3"
                />
              }
              name="option_select"
            />
          </div>
          <div>
            <h6>Air</h6>
            <Form.Check
              type="radio"
              label={
                <img
                  src={air_v}
                  alt=""
                  className="img-fluid ms3"
                />
              }
              name="option_select"
            />
          </div>
        </div>
        <Col xs={12} lg={6}>

        </Col>
        <div className='button_container'>
          <Button variant="" className='buttons'>
            Submit
          </Button>
        </div>
      </Form>
    </Card.Body>
  );
}
const Details = () => {
  return (
    <Card.Body className="form__box">
      <hr className="my-4"/>
      <CustomForm title='Vehicle Information' inputs={InputsJson[2]}/>
      <hr className="my-4"/>
    </Card.Body>
  );
}

function VehicleSeller() {
  return (
    <section className='App'>
      <section className='main_screen'>
        <section className='information_form'>
          <CustomForm title='Seller Information' inputs={InputsJson[0]}/>
          <MultiOptionsForm>
            <Details />
            <Options />
          </MultiOptionsForm>
        </section>
        <section className='other_information_container'>
          <Upload_img/>
        </section>
      </section>
    </section>

  )
}

export default VehicleSeller