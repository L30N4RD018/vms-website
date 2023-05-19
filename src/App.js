import './App.css';
import Vehicle_Card from "./components/Vehicle_Card";
import Header from "./components/Header";

function App() {
  return (
     <section className='App'>
         <Header />
         <section className='main_screen'>
             <section className='filterer_options'>

             </section>
             <section className='available_vehicles'>
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
                 <Vehicle_Card />
             </section>
         </section>
     </section>
  );
}

export default App;
