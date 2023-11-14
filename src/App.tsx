import React from 'react';
import './App.css';
import Table from "./components/Table.jsx";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import VehicleForm from "./components/VehicleForm";

function App() {
    let asd = true

  return (
      <Router >
          <div className="flex">
          <Navbar/>

          <Routes>
              <Route path="/vehicles" element={<Table/>}/>
              <Route path="/addVehicle" element={<VehicleForm/>}/>
          </Routes>
          </div>
      </Router>

  )
}

export default App;
