import '../App.css';
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