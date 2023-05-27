import '../App.css';
import VehicleCard from "../components/VehicleCard";
import VehiclePriceCard from "../components/VehiclePriceCard";
import VehicleSpecifications from "../components/VehicleSpecifications"
import '../stylesheets/CustomForm.css'

function App() {
    return (
        <section className='App'>
            <div>
            <VehiclePriceCard/>
            <VehicleSpecifications/>
            </div>
        </section>
    )
}

export default App;