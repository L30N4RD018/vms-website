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
        <div className="icon_toyota" style={{display: 'flex', gap: '15px'}}>
            <img src={require('../img/icons/Toyota_Icon.png')} alt="Box_icon"/>
            <div className="text" style={{ textAlign: 'center' }}>
              <br/>
              <h1>Toyota Supra Mk4</h1>
              <br/>
              <br/>
              <div className="line"></div>
              <br/>
              <br/>
              <br/>
              <br/>
              <b1>Purchase</b1><b1>Made!</b1>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            
                <CustomLink to={`/`} classname='button_start'>
                    <span>Back To Home</span>
                </CustomLink>
             
            </div>
          </div>
      </div>
    </section>
    
  )
};

export default PurchaseMade