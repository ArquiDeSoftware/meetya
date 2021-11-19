import './App.css';
import Home from "./pages/home/Home";
import CreateTrip from "./pages/components/createTrip/create_trip"
import Matches from "./pages/components/matches"
// import Details from "./pages/details/Details";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/createTrip" element={<CreateTrip/>} />
        <Route exact path="/matches" element={<Matches/>} />
      </Routes>
    </Router>
  )
}

export default App;
