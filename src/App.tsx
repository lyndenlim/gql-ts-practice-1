import { Routes, Route } from "react-router-dom"
import CoinContainer from './Components/CoinContainer/CoinContainer';
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinContainer />} />
        <Route path="/coins/:coin" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
