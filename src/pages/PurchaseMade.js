import '../App.css';
import '../stylesheets/Purchase_Made.css';
import CustomLink from '../components/CustomLink';

import React from 'react'

function PurchaseMade() {
  return (
    <section className="App">
      <div className="box_card" style={{display: 'flex', gap: '15px'}}>
        <div className="box_car">
          <img src={require('../img/vehicles/Toyota_Supra_Mk4.png')} alt="Box_Vehicle"/>
        </div>
        <div className="icon_toyota">
          <div className='head'>
            <img src={require('../img/icons/Toyota_Icon.png')} alt="Box_icon"/>
            <h1>Toyota Supra Mk4</h1>
          </div>
          <div className="text">
            <div className="line"></div>
            <h2>Purchase Made!</h2>
            <CustomLink to={`/`} classname='button_start'>
              <span>Back To Home</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PurchaseMade