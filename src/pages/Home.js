import '../App.css';
import VehicleCard from "../components/VehicleCard";
import CustomLink from '../components/CustomLink';

function App() {
  return (
    <section className='App'>
      <section className='main_screen'>
        <section className='filterer_options'>
        </section>
        <section className='available_vehicles'>
        <CustomLink to="/VehicleSeller"> <a className='buttons' >Sell a vehicle!</a>   </CustomLink>
          <VehicleCard/>
          <VehicleCard/>
          <VehicleCard/>
        </section>
      </section>
    </section>
  );
}

export default App;
