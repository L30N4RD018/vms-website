import '../stylesheets/Record_Table.css'

function RecordTableTuple({vehicle}) {
    return (
        <section className="table_tuples_container">
            <div className="table_tuple">
                <span className="table_tuple_text">{vehicle.id_vehicle}</span>
                <span className="table_tuple_text">{vehicle.brand}</span>
                <span className="table_tuple_text">03/05/2004</span>
                <span className="table_tuple_text">$ {vehicle.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
        </section>
    )
}

export default RecordTableTuple