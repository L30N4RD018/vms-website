import React, {useEffect, useState} from 'react'
import '../App.css'
import '../stylesheets/ShoppingCar.css'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [shoppingCar, setShoppingCar] = useState([]);
  const handleShopping = () => {
    setLoading(true)
    fetch(`https://vms-back.herokuapp.com/api/select_purchase?dni=123456&confirm=false`)
      .then(response => response.json())
      .then(json => setShoppingCar(json))
      .finally(()=>{
        setLoading(false)
      })
      .catch(error => {
        console.log('You have an error', error)
      })
  }
  useEffect(() => {
    handleShopping()
  }, [])
  const handleDeleteClick = (dni_p, id_v) => {
    localStorage.setItem(`isFavorite_${id_v}`, JSON.stringify(false))
    const options = {
      method: 'DELETE',
      headers: {"Content-type": "application/json"}
    }
    fetch(`https://vms-back.herokuapp.com/api/delete_purchase?dni=123456&id_v=${id_v}&confirm=false`, options).then(res => res.json())
    handleShopping()
  }
  return (
    <section className='App'>
      <section className='purchase_in_transit'>
        <div className='head_row'>
          <span>Product</span>
          <span>Price</span>
          <span>Actions</span>
        </div>
        <div className='products_container'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            shoppingCar[0]?.vehicles?.map(vehicle => (
              <div className='product' key={vehicle.id_vehicle}>
                <div className='product_description'>
                  <div className='product_img_container'>
                    <img
                      src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
                      alt='Product'
                    />
                  </div>
                  <div className='product_title_container'>
                    <span>{vehicle.model}</span>
                  </div>
                </div>
                <span>{vehicle.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                <div className='delete_button_container'>
                  <button className='delete_button' onClick={() => handleDeleteClick(shoppingCar[0].dni, vehicle.id_vehicle)}>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          )
          }
        </div>
      </section>
    </section>
  );
}
export default App;