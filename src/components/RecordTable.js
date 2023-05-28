import '../stylesheets/Record_Table.css'
import RecordTableTuple from '../components/RecordTableTuple'

function RecordTable({purchases, loading}) {
  return (
    <section className="table_container">
      <div className="table_body">
        <div className="table_head">
          <h1 className="table_head_text_container">PURCHASE ID</h1>
          <h1 className="table_head_text_container">PRODUCT NAME</h1>
          <h1 className="table_head_text_container">PURCHASE DATE</h1>
          <h1 className="table_head_text_container">PRICE</h1>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          purchases[0]?.vehicles.map(vehicle => (
            <RecordTableTuple vehicle={vehicle}/>
          ))
        )
        }
      </div>
    </section>
  )
}

export default RecordTable