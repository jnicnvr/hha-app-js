import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/dist/css/adminlte.min.css";

import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/chart.js/Chart.min.js";
import Layout from "./components/Layout";
import AddPatient from "./page/patient/AddPatient";
import PatientList from "./page/patient/PatientList";
import AddUsers from "./page/users/AddUsers";
import UsersList from "./page/users/UsersList";
import AppointmentsList from "./page/appointment/AppointmentsList";
import Invoice from "./page/invoice/Invoice";
import Error404 from "./page/Error404";
import Login from "./page/login/Login";
import Dashboard from "./page/dashboard/Dashboard";
// import "admin-lte/dist/js/demo.js";

// import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css";
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700";

// prettier-ignore
const route = [
   {
    path: "login",
    element:<Login />
  },
  {
    path: "/admin/dashboard",
    element:<Layout><Dashboard /></Layout>
  },
  {
    path: "/admin/patient/add",
    element:<Layout><AddPatient /></Layout>
  },
  {
    path: "/admin/patient/list",
    element:<Layout><PatientList /></Layout>
    
  },
  {
    path: "/admin/users/add",
    element:<Layout><AddUsers /></Layout>
    
  },
  {
    path: "/admin/users/list",
    element:<Layout><UsersList /></Layout>
    
  },
  {
    path: "/admin/appointments/list",
    element:<Layout><AppointmentsList /></Layout>
    
  },
  {
    path: "/admin/invoice",
    element:<Layout><Invoice /></Layout>
    
  },
   {
    path: "*",
    element:<Error404/>
    
  },
 
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      {route.map((r, index) => {
        return <Route key={index} path={r.path} element={r.element} />;
      })}
    </Routes>
  </Router>
);
