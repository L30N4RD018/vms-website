import '../stylesheets/Vehicle_PriceCard.css';
import '../stylesheets/Vehicle_Specifications.css'

function VehicleSpecifications() {
    return (
        <section>
            <div className="horizontal_line" style={{width: '100%'}}></div>

            <div className="vehicle_specifications_info">
                <div className="vehicle_specifications_container">
                    <div className="vehicle_specifications_head">
                        <span>SPECIFICATIONS</span>
                    </div>
                    <ul className="vehicle_specifications" style={{borderRight: '4px solid darkgray'}}>
                        <li>Engine: 3.0L Sequential Turbo Straight Six</li>
                        <li>Transmission: 6-Speed Manual or 4-Speed Automatic</li>
                        <li>Horsepower: 312 hp</li>
                        <li>Torque: 315 lb-ft</li>
                        <li>0-60 mph: 4.7s</li>
                        <li>1/4 mile: 13.1s @109 mph</li>
                        <li>Top Speed: 177 mph 1</li>
                    </ul>
                </div>

                <div className="recommendation_container">
                    <h2 style={{color: 'green', marginLeft: '10px'}}>
                        You may like...
                    </h2>
                    <center>
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