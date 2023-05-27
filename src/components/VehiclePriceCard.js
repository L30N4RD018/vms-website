import '../stylesheets/Vehicle_PriceCard.css';
import CustomLink from "./CustomLink";
import React from "react";

function VehiclePriceCard() {
    return (
        <div className="vehicle_info_container">
            <div className="vehicle_price_card">
                <div className="vehicle_price_card_img_container">
                    <img className="vehicle_price_img"
                         src={require('../img/vehicles/Toyota_Supra_Mk4.png')}
                         alt='Vehicle_Price'
                    />
                </div>
                <div className="vehicle_price_card_info">
                    <div className="vehicle_price_card_buy_button">
                        <span className="vehicle_price_key_word">$220.000</span>
                    </div>
                </div>
            </div>

            <section className="vehicle_info_card_container">
                <div className="vehicle_info_card">
                    <div className="vehicle_info_card_head">
                        <div className="vehicle_info_card_icon_container">
                            <img className="vehicle_info_card_icon"
                                 src={require('../img/icons/Toyota_Icon.png')}
                                 alt="Toyota"
                            />
                        </div>
                    <h2 className="vehicle_info_card_name">Toyota Supra MK4</h2>
                    </div>

                    <div className="horizontal_line_container">
                        <div className="horizontal_line"></div>
                    </div>

                    <div className="vehicle_info_description_box">
                        <h className="vehicle_info_description">
                            Do you like sports cars with aerodynamic design?  The Toyota Supra MK4 is a classic car that
                            never goes out of fashion, and that will make you feel the adrenaline of driving a supercar.
                        </h>
                    </div>
                </div>

                <div className="vehicle_buy_card_container">
                    <div className="vehicle_buy_card">
                        <div className="vehicle_buy_save_buttons">
                            <CustomLink to="/buy" classname={'buy_button'}>
                                <h1>BUY NOW</h1>
                            </CustomLink>
                            <div className={'save_button'}>
                                <h1>SAVE</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VehiclePriceCard