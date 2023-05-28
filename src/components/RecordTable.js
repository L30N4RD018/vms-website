import '../stylesheets/Record_Table.css'
import RecordTableTuple from '../components/RecordTableTuple'


function RecordTable() {
    return (
        <section className="table_container">
            <div className="table_body">
                <div className="table_head">
                    <h1 className="table_head_text_container">PURCHASE ID</h1>
                    <h1 className="table_head_text_container">PRODUCT NAME</h1>
                    <h1 className="table_head_text_container">PURCHASE DATE</h1>
                    <h1 className="table_head_text_container">PRICE</h1>
                </div>
                <RecordTableTuple/>
                <RecordTableTuple/>

            </div>
        </section>
    )
}

export default RecordTable