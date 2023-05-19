import './App.css';
import VehicleCard from "./components/VehicleCard";
import Header from "./components/Header";
import LoginButton from './components/LoginButton';
import RegisterButton from './components/RegisterButton'; 

function App() {
  return (
     <section className='App'>
         <Header />
         <div>
      <LoginButton />
      <RegisterButton />
    </div>
         <section className='main_screen'>
             <section className='filterer_options'>


             </section>
             <section className='available_vehicles'>
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
                 <VehicleCard />
             </section>
         </section>
     </section>
  );
}

export default App;
