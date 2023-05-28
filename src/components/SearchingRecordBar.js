import '../stylesheets/Searching_Record_Bar.css';
import {CustomForm} from './CustomForm'
import InputsJson from '../data/inputs_static.json'

function SearchingRecordBar(){
    return (
        <section className="searching_record_bar_container">
            <div className="searching_record_card">
                <div className="searching_record_card_head">
                    <span className="searching_record_card_keyword">RECORD FILTER</span>
                </div>

                <div className="searching_product_options_container" id="product_name_container">
                    <div className="search_parameter_input">
                        <CustomForm title="Search by product name"
                                    inputs={InputsJson[6]}
                        />
                    </div>
                </div>

                <div className="searching_product_options_container" style={{marginTop:'70px'}}>
                    <div className="search_parameter_input">
                            <CustomForm title="Filter between dates"
                                        inputs={InputsJson[7]}
                            />
                    </div>
                </div>
            </div>

            <div></div>
        </section>
    )
}

export default SearchingRecordBar