import { Routes, Route } from "react-router-dom"
import CoinContainer from './Components/CoinContainer/CoinContainer';
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import Navbar from "./Components/Navbar/Navbar";
import CoinTesting from "./Components/CoinTesting/CoinTesting";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinContainer />} />
        <Route path="/coins/:coin" element={<CoinDetails />} />
        <Route path="/cointesting" element={<CoinTesting />} />
      </Routes>
    </div>
  );
}

export default App;
