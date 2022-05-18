import { Routes, Route } from "react-router-dom"
import CoinContainer from './Components/CoinContainer/CoinContainer';
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoinContainer />} />
        <Route path="/coins/:coin" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
