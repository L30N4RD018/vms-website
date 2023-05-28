import '../App.css';
import VehicleCard from "../components/VehicleCard";
import Filter from '../components/Filter'

function App({Vehicles, Loading}) {
  return (
    <section className='App'>
      <section className='main_screen'>
        <section className='filterer_options'>
          <Filter/>
        </section>
        <section className='available_vehicles'>
          {Loading ? (
            <p>Loading...</p>
          ) : (
            Vehicles.map(vehicle => (
              <VehicleCard
                key={vehicle.id_vehicle}
                vehicle={vehicle}
              />
            ))
          )}
        </section>
      </section>
    </section>
  );
}

export default App;
