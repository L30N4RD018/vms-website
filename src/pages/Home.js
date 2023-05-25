import '../App.css';
import VehicleCard from "../components/VehicleCard";
import Filter from '../components/Filter'

function App() {
  return (
    <section className='App'>
      <section className='main_screen'>
        <section className='filterer_options'>
          <Filter />
        </section>
        <section className='available_vehicles'>
          <VehicleCard/>
          <VehicleCard/>
          <VehicleCard/>
          <VehicleCard/>
        </section>
      </section>
    </section>
  );
}

export default App;
