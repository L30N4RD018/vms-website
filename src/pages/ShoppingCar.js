import React from 'react'
import '../App.css'
import '../stylesheets/ShoppingCar.css'
const ShoppingCar = () => {
  return(
    <section className='App'>
      <section className='purchase_in_transit'>
        <div className='head_row'>
          <span>Product</span>
          <span>Price</span>
          <span>Actions</span>
        </div>
        <div className='products_container'>
          <div className='product'>
            <div className='product_description'>
              <div className='product_img_container'>
                <img
                  src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
                  alt='Product Image'
                />
              </div>
              <div className='product_title_container'>
                <span>Toyota Supra Mk4</span>
              </div>
            </div>
            <span>
              $150.000.000
            </span>
            <span>
              None for now
            </span>
          </div>
          <div className='product'>
            <div className='product_description'>
              <div className='product_img_container'>
                <img
                  src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
                  alt='Product Image'
                />
              </div>
              <div className='product_title_container'>
                <span>Toyota Supra Mk4</span>
              </div>
            </div>
            <span>
              $150.000.000
            </span>
            <span>
              None for now
            </span>
          </div>
          <div className='product'>
            <div className='product_description'>
              <div className='product_img_container'>
                <img
                  src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
                  alt='Product Image'
                />
              </div>
              <div className='product_title_container'>
                <span>Toyota Supra Mk4</span>
              </div>
            </div>
            <span>
              $150.000.000
            </span>
            <span>
              None for now
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
export default ShoppingCar