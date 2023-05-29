import React from "react";
import '../stylesheets/Main.css';
import '../stylesheets/CustomForm.css'
import VehicleCardBuy from "../components/VehicleCardBuy";
import {CustomForm} from "../components/CustomForm";
import {MultiOptionsForm, PaymentOptions} from "../components/MultiOptionsForm";
import InputsJson from '../data/inputs_static.json'
import CustomLink from "../components/CustomLink";

function Buy({vehicle}) {
  return (
    <section className='App'>
      <section className='information_form_car'>
        <div className='form__container'>
          <CustomForm title='Your Billing Details' inputs={InputsJson[0]} id/>
        </div>
        <VehicleCardBuy vehicle={vehicle}/>
      </section>
      <div className='form__container' id='payment_form'>
        <MultiOptionsForm>
          <PaymentOptions inputs={InputsJson[1]}/>
        </MultiOptionsForm>
      </div>
      <div className='button_container'>
        <CustomLink to='/Purchase_Made' classname='buttons'>
          <span>Pay Now</span>
        </CustomLink>
      </div>
    </section>
  );
}

export default Buy;



