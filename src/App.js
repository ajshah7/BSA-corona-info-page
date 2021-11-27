import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavbarComp from "./Components/NavBar";
import HomePage from "./Containers/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
