import '../App.css';
import '../stylesheets/CustomForm.css'
import VehiclePriceCard from "../components/VehiclePriceCard";
import VehicleSpecifications from "../components/VehicleSpecifications"

function App({vehicle}) {
    return (
        <section className='App'>
            <div>
            <VehiclePriceCard vehicle={vehicle}/>
            <VehicleSpecifications vehicle={vehicle}/>
            </div>
        </section>
    )
}

export default App;