import './App.css';
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import MainDB from "./pages/mainDB.js"
import eventWinnerCard from "./components/eventWinnerCard"
import Pergame from "./pages/per-game.js"
function App() {
  return (
   <>

    <Router>

      <Routes>

          <Route path="/DB" element={<MainDB/>}/>
          <Route path="/" element={<Pergame/>}/>
      </Routes>

    </Router>

   </>
  );
}

export default App;
