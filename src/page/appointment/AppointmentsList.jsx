import React from "react";
import Table from "../../components/Table";
const AppointmentsList = () => {
  return (
    <>      <div className='card'>
        <div className='row mb-2 d-flex justify-content-between'>
          <div style={{ padding: "1rem 0 0 2rem" }}>
            <h6>Total 0</h6>
          </div>
          <div style={{ padding: "1rem 2rem 0 0" }}>
            <button type='submit' className='btn btn-primary'>
              <i className='fas fa-plus'></i> <strong>New Appointment</strong>
            </button>
          </div>
        </div>
        <div className='card-body p-0'>
          <Table />
        </div>
      </div>
    </>
  );
};

export default AppointmentsList;
