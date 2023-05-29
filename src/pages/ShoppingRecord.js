import '../App.css'
import SearchingRecordBard from '../components/SearchingRecordBar'
import '../stylesheets/ShoppingRecord.css'
import RecordTable from '../components/RecordTable'
import {useEffect, useState} from "react";

function ShoppingRecord() {
  const [load, setLoad] = useState(false)
  const [shoppingCar, setShoppingCar] = useState([]);
  const handleShopping = () => {
    setLoad(true)
    fetch(`https://vms-back.herokuapp.com/api/select_purchase?dni=123456&confirm=true`)
      .then(response => response.json())
      .then(json => setShoppingCar(json))
      .finally(()=>{
        setLoad(false)
      })
      .catch(error => {
        console.log('You have one error', error)
      })
  }
  useEffect(()=>{
    handleShopping()
  },[])
  return (
    <section className="App">
      <div className="record_container">
        <SearchingRecordBard/>
        <RecordTable purchases={shoppingCar} loading={load}/>
      </div>
    </section>
  )
}

export default ShoppingRecord