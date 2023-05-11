import React from "react";
const AppName = "HHA Dev";
const Brand = () => {
  return (
    <div>
      <a href='#' className='brand-link' style={{ padding: ".5rem .5rem" }}>
        <img
          src='https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png'
          alt='AdminLTE Logo'
          className='brand-image img-circle elevation-3'
        />
        <span className='brand-text font-weight-light'>{AppName}</span>
      </a>
    </div>
  );
};

export default Brand;
