import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
