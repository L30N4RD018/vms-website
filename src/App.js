import Home from "./pages/Home";
import Buy from "./pages/Buy";
import VehicleSeller from "./pages/VehicleSeller";
import ShowVehicle from "./pages/ShowVehicle";
import ShoppingCar from "./pages/ShoppingCar"
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
  const [Vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchVehicles = () => {
      setLoading(true);
      fetch('https://vms-back.herokuapp.com/api/vehicle')
        .then(response => response.json())
        .then(json => {
          setVehicles(json);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching vehicles:', error);
          setLoading(false);
        });
    };

    fetchVehicles();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home Vehicles={Vehicles} Loading={loading}/>}/>
          {loading === false &&
            Vehicles.map(vehicle => (
              <Route
                key={vehicle.id_vehicle}
                path={`/buy:${vehicle.id_vehicle}`}
                element={<Buy vehicle={vehicle} />}/>
            )
          )}
          <Route path="/shopping_car" element={<ShoppingCar/>}/>
          <Route path="/show_vehicle" element={<ShowVehicle/>}/>
          <Route path="/vehicle_seller" element={<VehicleSeller />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
