import '../App.css';
import Forml_seller from "../components/Forml_seller";
import Upload_img from "../components/Upload_img";
import {Route, Routes} from "react-router-dom";


import React from 'react'

function VehicleSeller() {
  return (

    <section className='App'>
    <section className='main_screen'>     
      <section className='Upload_img'>
      <section className='Forml_seller'>
      <Forml_seller/>  
      </section>
      </section>
      <Upload_img/> 
      </section>
  </section>
   
  )
}

export default VehicleSeller