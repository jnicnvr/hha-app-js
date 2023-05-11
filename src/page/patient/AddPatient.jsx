import React from "react";
import { useForm } from "react-hook-form";
import { addPatient } from "../../helper/_req";
const AddPatient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addPatient(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card card-primary'>
              <div className='card-header'>
                <h3 className='card-title'>Patient Information</h3>
                <div className='card-tools'>
                  <button
                    type='button'
                    className='btn btn-tool'
                    data-card-widget='collapse'
                    title='Collapse'
                  >
                    <i className='fas fa-minus'></i>
                  </button>
                </div>
              </div>
              <div className='card-body'>
                <div className='form-group'>
                  <label htmlFor='inputName'>Name</label>
                  <input
                    {...register("name")}
                    type='text'
                    id='inputName'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputName'>Mobile Number</label>
                  <input
                    {...register("phone")}
                    type='text'
                    id='phone'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputDescription'>Email Address</label>
                  <input
                    {...register("email")}
                    type='email'
                    id='address'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputStatus'>Sex</label>
                  <select
                    {...register("sex")}
                    defaultValue={"Select one"}
                    id='inputStatus'
                    className='form-control custom-select'
                  >
                    <option disabled>Select one</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='inputClientCompany'>Age</label>
                  <input
                    {...register("age")}
                    type='number'
                    max={100}
                    min={0}
                    id='inputClientCompany'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputProjectLeader'>Address</label>
                  <input
                    {...register("address")}
                    type='text'
                    id='inputProjectLeader'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card card-secondary'>
              <div className='card-header'>
                <h3 className='card-title'>Other Information</h3>
                <div className='card-tools'>
                  <button
                    type='button'
                    className='btn btn-tool'
                    data-card-widget='collapse'
                    title='Collapse'
                  >
                    <i className='fas fa-minus'></i>
                  </button>
                </div>
              </div>
              <div className='card-body'>
                <div className='form-group'>
                  <label htmlFor='inputEstimatedBudget'>Occupation</label>
                  <input
                    {...register("occupation")}
                    type='text'
                    id='occupation'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputStatus'>Marital Status</label>
                  <select
                    {...register("civil_status")}
                    defaultValue={"Select one"}
                    id='inputStatus'
                    className='form-control custom-select'
                  >
                    <option disabled>Select one</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                    <option>Separated</option>
                    <option>Divorced</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='referred'>Referred By</label>
                  <input
                    {...register("referredBy")}
                    type='text'
                    id='name'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <input
              type='submit'
              value='Create new Project'
              className='btn btn-success float-left'
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPatient;
