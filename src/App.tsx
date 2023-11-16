import React from 'react';
import './App.css';
import Table from "./components/Table.jsx";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import VehicleForm from "./components/VehicleForm";
import VehicleDetails from "./components/VehicleDetails.jsx";
import EditVehicle from "./components/EditVehicle";

function App() {
    let asd = true

  return (
      <Router >
          <div className="flex">
          <Navbar/>

          <Routes>
              <Route path="/vehicles" element={<Table/>}/>
              <Route path="/addVehicle" element={<VehicleForm/>}/>
              <Route path="/vehicles/:id" element={<VehicleDetails/>}/>
              <Route path="/vehicles/edit/:id" element={<EditVehicle/>}/>
          </Routes>
          </div>
      </Router>

  )
}

export default App;
