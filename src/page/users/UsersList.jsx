import React from "react";
import appointment_data from "../../hha/appointments.json";
const headerTables = [
  "id",
  "appointment_no",
  "Name",
  "Phone",
  "Email",
  "Date of Appointment",
  "Status",
  "Service",
  "Created At",
  "Updated At",
];
const UsersList = () => {
  return (
    <>
      <div className='card'>
        <div className='row mb-2 d-flex justify-content-between'>
          <div style={{ padding: "1rem 0 0 2rem" }}>
            <h6>Total 0</h6>
          </div>
          <div></div>
        </div>
        <div className='card-body p-0'>
          <table
            className='table table-striped projects'
            style={{ fontSize: "13px", margin: "0", padding: "0" }}
          >
            <thead>
              <tr>
                {headerTables.map((t, index) => {
                  return <th key={index}>{t}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {/* // prettier-ignore */}
              {appointment_data.map((t, index) => {
                return (
                  <tr key={index}>
                    <td>{t._id}</td>
                    <td>{t.appointment_no}</td>
                    <td>{t.name}</td>
                    <td>{t.phone}</td>
                    <td>{t.email}</td>
                    <td>{t.dateOfAppointment}</td>
                    <td>
                      <span className='badge badge-warning'> {t.status}</span>
                    </td>
                    <td>{t.service}</td>
                    <td>{t.createdAt}</td>
                    <td>{t.updatedAt}</td>
                    <td className='project-actions text-right'>
                      <a className='btn btn-primary btn-sm' href='#'>
                        <i className='fas fa-folder'></i>
                        View
                      </a>
                      <a className='btn btn-info btn-sm' href='#'>
                        <i className='fas fa-pencil-alt'></i>
                        Edit
                      </a>
                      <a className='btn btn-danger btn-sm' href='#'>
                        <i className='fas fa-trash'></i>
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersList;
