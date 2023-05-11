import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    //isloading
    // e.preventDefault();
    navigate("/admin/dashboard");
  };
  return (
    <div className='hold-transition login-page'>
      <div className='login-box'>
        <div className='login-logo'>
          <Link to='/login'>
            <b>HHA </b> Dev
          </Link>
        </div>

        <div className='card'>
          <div className='card-body login-card-body'>
            <p className='login-box-msg'>Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Username'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-user'></span>
                  </div>
                </div>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-lock'></span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <button type='submit' className='btn btn-primary btn-block'>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
