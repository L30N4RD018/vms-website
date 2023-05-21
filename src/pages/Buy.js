import '../App.css';
import VehicleCardBuy from "../components/VehicleCardBuy";
import Forml from "../components/Forml";
import {Route, Routes} from "react-router-dom";

function Buy() {
  return (
    <section className='App'>
      <section className='main_screen'>     
        <section className='Forml'>
          <Forml/>     
        </section>
        <section className='available_vehicles'>
          <VehicleCardBuy/>
        </section>
    </section>
  </section>
  );
}

export default Buy;



