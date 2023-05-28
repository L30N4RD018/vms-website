import '../stylesheets/Vehicle_PriceCard.css';
import '../stylesheets/Vehicle_Specifications.css'
import VehicleCard from "./VehicleCard";

function VehicleSpecifications({vehicle}) {
  return (
    <section>
      <div className="horizontal_line" style={{width: '100%'}}></div>
      <div className="vehicle_specifications_info">
        <div className="vehicle_specifications_container">
          <div className="vehicle_specifications_head">
            <span>SPECIFICATIONS</span>
          </div>
          <ul className="vehicle_specifications" style={{borderRight: '4px solid darkgray'}}>
            {Object.entries(vehicle).map(([key, value])=>{
              if(key !== "id_vehicle" && key !== "description"){
                return <li key={key}><strong>{key}:</strong> {value}</li>
              }
              return null
            })}
          </ul>
        </div>
        <div className="recommendation_container">
          <h2 style={{color: 'green', marginLeft: '10px'}}>
            You may like...
          </h2>
          <center>
            <VehicleCard
              vehicle={vehicle}
            />
            <a href={'/'} style={{color: 'dimgray', textAlign: 'center', margin: '10px'}}>
              Want to see more?...
            </a>
          </center>

        </div>
      </div>
    </section>

  )
}

export default VehicleSpecifications