import React from "react";

function Navbar() {
  return (
    <nav
      className='main-header navbar navbar-expand navbar-white navbar-light'
      style={{ padding: "0rem 1rem" }}
    >
      <ul className='navbar-nav'>
        {/* <li className='nav-item'>
          <a className='nav-link' data-widget='pushmenu' href='#' role='button'>
            <i className='fas fa-bars'></i>
          </a>
        </li> */}
        <li className='nav-item'>
          <ol
            className='breadcrumb float-sm-right'
            style={{ backgroundColor: "#fff", marginBottom: "0" }}
          >
            <li className='breadcrumb-item'>
              <a href='#'>Home</a>
            </li>
            <li className='breadcrumb-item'>
              <a href='#'>Layout</a>
            </li>
            <li className='breadcrumb-item active'>Fixed Navbar Layout</li>
          </ol>
        </li>
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item dropdown'>
          <a className='nav-link' data-toggle='dropdown' href='#'>
            <i className='far fa-bell'></i>
            <span className='badge badge-warning navbar-badge'>15</span>
          </a>
          <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
            <span className='dropdown-item dropdown-header'>
              15 Notifications
            </span>
            <div className='dropdown-divider'></div>
            <a href='#' className='dropdown-item'>
              <i className='fas fa-envelope mr-2'></i> 4 new messages
              <span className='float-right text-muted text-sm'>3 mins</span>
            </a>
            <div className='dropdown-divider'></div>
            <a href='#' className='dropdown-item'>
              <i className='fas fa-users mr-2'></i> 8 friend requests
              <span className='float-right text-muted text-sm'>12 hours</span>
            </a>
            <div className='dropdown-divider'></div>
            <a href='#' className='dropdown-item'>
              <i className='fas fa-file mr-2'></i> 3 new reports
              <span className='float-right text-muted text-sm'>2 days</span>
            </a>
            <div className='dropdown-divider'></div>
            <a href='#' className='dropdown-item dropdown-footer'>
              See All Notifications
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
