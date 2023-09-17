import './App.css';
import { useState } from "react";
import Home from './pages/Home/Home';
import Catalog from './pages/catalog/Catalog';
import SensorDetails from './pages/SensorDetails/SensorDetails';
import Test from './pages/test/Test';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
  <Router>

    <nav className="nav">
    <li className="nav__item">
              <a href="/home" className="nav__link">
                Test
              </a>
            </li>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <head>Test</head>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/test" element={<Test />} />
          <Route path="sensorDetails/:sensorId" element={<SensorDetails />} />
          </Routes>
  </Router>
  );
}

export default App;
