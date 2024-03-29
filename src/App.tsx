import React from 'react';
import './App.css';
import Table from "./components/vehicle/Table.jsx";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import VehicleForm from "./components/vehicle/VehicleForm";
import VehicleDetails from "./components/vehicle/VehicleDetails.jsx";
import EditVehicle from "./components/vehicle/EditVehicle";
import DriverTable from "./components/driver/DriverTable";
import DriverForm from "./components/driver/DriverForm";
import EditDriver from "./components/driver/EditDriver";
import DriverView from "./components/driver/DriverView";
import {Dashboard} from "./components/dashboard/Dashboard";
import {Assignment} from "./components/assignments/Assignment";
import TripTable from "./components/trips/TripTable";
import TripForm from "./components/trips/TripForm";

function App() {
    let asd = true

  return (
      <Router >
          <div className="flex">
          <Navbar/>

          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/vehicles" element={<Table/>}/>
              <Route path="/addVehicle" element={<VehicleForm/>}/>
              <Route path="/vehicles/:id" element={<VehicleDetails/>}/>
              <Route path="/vehicles/edit/:id" element={<EditVehicle/>}/>
              <Route path="/drivers" element={<DriverTable/>}/>
              <Route path="/addDriver" element={<DriverForm/>}/>
              <Route path="/drivers/edit/:id" element={<EditDriver/>}/>
              <Route path="/drivers/:id" element={<DriverView/>}/>
              <Route path="/assignment" element={<Assignment/>}/>
              <Route path="/trips" element={<TripTable/>}/>
              <Route path="/addTrip" element={<TripForm/>}/>
          </Routes>
          </div>
      </Router>

  )
}

export default App;
