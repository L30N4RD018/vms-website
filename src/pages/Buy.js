import '../stylesheets/Buy.css';
import '../stylesheets/CustomForm.css'
import VehicleCardBuy from "../components/VehicleCardBuy";
import {CustomForm} from "../components/CustomForm";
import {CardForm, MultiOptionsForm, Shape} from "../components/MultiOptionsForm";
import InputsJson from '../data/inputs_static.json'
import {Button, Card, Col, Form, Row} from "react-bootstrap";

const Options = () => {
  return (
    <Card.Body>
      <Form className="form__box">
        <h6>Paypal</h6>
        <Form.Check
          type="radio"
          label={<Shape className="ms-3"/>}
          name="option_select"
        />
        <h6>Debit or Credit Card</h6>
        <Form.Check
          type="radio"
          label={
            <img
              src="https://cdn.easyfrontend.com/pictures/Debit%20or%20Credit.png"
              alt=""
              className="img-fluid ms-3"
            />
          }
          name="option_select"
        />
        <Col xs={12} lg={6}>
          <CardForm inputs={InputsJson[1]}/>
        </Col>
        <div className='button_container'>
          <Button variant="">
            Pay Now
          </Button>
        </div>
      </Form>
    </Card.Body>
  );
}
const Details = () => {
  return (
    <Card.Body className="form__box">
      <h4 className="mb-5">Your Order</h4>
      <Row>
        <Col xs={4}>
          <h6 className="mb-0">Total</h6>
        </Col>
      </Row>
      <hr className="my-4"/>
      <Row>
        <Col xs={8}></Col>
        <Col xs={4}>
          <h6 className="mb-0">Price</h6>
        </Col>
      </Row>
      <hr className="my-4"/>
    </Card.Body>
  );
}

function Buy() {
  return (
    <section className='App'>
      <section className='information_form'>
        <CustomForm title='Your Billing Details' inputs={InputsJson[0]}/>
        <MultiOptionsForm>
          <Details/>
          <Options/>
        </MultiOptionsForm>
      </section>
      <section className='vehicle_buy_card_container'>
        <VehicleCardBuy/>
      </section>

    </section>
  );
}

export default Buy;



