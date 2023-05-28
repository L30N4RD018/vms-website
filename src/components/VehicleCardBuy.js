import React from 'react';
import '../stylesheets/Vehicle_Card.css';

function VehicleCardBuy({vehicle}) {
  return (
    <div className='vehicle_card_buy'>
      <div className='vehicle_card_buy_head'>
        <div className='vehicle_card_buy_head__brand_icon_container'>
          <img
            className='vehicle_card_buy_head__brand_icon'
            src={require('../img/icons/Toyota_Icon.png')}
            alt='Brand Icon'
          />
        </div>
        <h2 className='vehicle_card_buy_head__title'>{vehicle.model}</h2>
      </div>
      <div className='vehicle_card_buy_img_container'>
        <img
          className='vehicle_img'
          src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
          alt='Vehicle'
        />
      </div>
      <div className='vehicle_card_buy_info'>
        <h4 className='key_word'>Sumary</h4>
      </div>
    </div>
  );
}

export default VehicleCardBuy