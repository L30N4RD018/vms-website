import '../App.css'
import SearchingRecordBard from '../components/SearchingRecordBar'
import '../stylesheets/ShoppingRecord.css'
import RecordTable from '../components/RecordTable'

function ShoppingRecord() {
    return (
        <section className="App">
            <div className="record_container">
                <SearchingRecordBard/>
                <RecordTable/>
            </div>
        </section>
    )
}

export default ShoppingRecord