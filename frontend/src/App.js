import "./App.css";
import Header from "./components/header";
import Home from "./contents/Home";
import Team from "./contents/Team";
import Player from "./contents/Player";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
