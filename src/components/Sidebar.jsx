import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='sidebar os-theme-dark'>
      <nav className='mt-2'>
        <ul
          className='nav nav-pills nav-sidebar flex-column'
          data-widget='treeview'
          role='menu'
          data-accordion='false'
        >
          <li className='nav-item'>
            <a href='#' className='nav-link active'>
              <i className='nav-icon fas fa-tachometer-alt'></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className='nav-item'>
            <Link to='/admin/appointments/list' className='nav-link'>
              <i className='nav-icon fas fa-th'></i>
              <p>
                Appointments
                <span className='right badge badge-danger'>99+</span>
              </p>
            </Link>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              <i className='nav-icon fas fa-money-bill'></i>
              <p>Payments</p>
            </a>
          </li>
          <li className='nav-item'>
            <Link to='/admin/invoice' className='nav-link'>
              <i className='nav-icon fas fa-receipt'></i>
              <p>Invoice</p>
            </Link>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              <i className='nav-icon fas fa-hospital-user'></i>
              <p>Patients</p>
              <i className='fas fa-angle-left right'></i>
            </a>
            <ul className='nav nav-treeview'>
              <li className='nav-item'>
                <Link to='/admin/patient/add' className='nav-link'>
                  <i className='far fa-circle nav-icon'></i>
                  <p>Add New Patient</p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/admin/patient/list' className='nav-link'>
                  <i className='far fa-circle nav-icon'></i>
                  <p>Patient List</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              <i className='nav-icon fas fa-user'></i>
              <p>Users</p>
              <i className='fas fa-angle-left right'></i>
            </a>
            <ul className='nav nav-treeview'>
              <li className='nav-item'>
                <Link to='/admin/users/add' className='nav-link'>
                  <i className='far fa-circle nav-icon'></i>
                  <p>Add New User</p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/admin/users/list' className='nav-link'>
                  <i className='far fa-circle nav-icon'></i>
                  <p>Users List</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
