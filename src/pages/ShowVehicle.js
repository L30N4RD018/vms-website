import '../App.css';
import '../stylesheets/CustomForm.css'
import VehiclePriceCard from "../components/VehiclePriceCard";
import VehicleSpecifications from "../components/VehicleSpecifications"

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