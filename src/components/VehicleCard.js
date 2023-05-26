import React, {useState} from 'react';
import '../stylesheets/Vehicle_Card.css';
import CustomLink from './CustomLink';
import {BsStar, BsStarFill} from 'react-icons/bs';

function VehicleCard() {

  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className='vehicle_card'>
      <div className='vehicle_card_head'>
        <div className='vehicle_card_head__brand_icon_container'>
          <img
            className='vehicle_card_head__brand_icon'
            src={require('../img/icons/Toyota_Icon.png')}
            alt='Brand Icon'
          />
        </div>
        <h2 className='vehicle_card_head__title'>Toyota Supra Mk4</h2>
        <div
          className={`vehicle_card_head__favorite_icon_container ${
            isFavorite ? 'favorite' : ''
          }`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <BsStarFill className='favorite_icon'/>
          ) : (
            <BsStar className='favorite_icon'/>
          )}
        </div>

      </div>
      <div className='vehicle_card_img_container'>
        <img
          className='vehicle_img'
          src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
          alt='Vehicle'
        />
      </div>
      <div className='vehicle_card_info'>
        <div className='vehicle_card_info__box'>

        </div>
        <div className='vehicle_card_info__buttons'>
          <CustomLink to="/buy" classname='buttons'>
            <span>Buy</span>
          </CustomLink>
          <CustomLink to="/buy" classname='buttons'>
            <span>Specifications</span>
          </CustomLink>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard