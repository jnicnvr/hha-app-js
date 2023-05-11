import React, { useState } from 'react'
import './style.css'
import { v4 as uuidv4 } from 'uuid';


const Modal = ({ setModal, setEvents }) => {
  const [services, setServices] = useState("")

  const handleSumit = (e) => {
    e.preventDefault()
    console.log('submitted!')

    let service = {
      id: uuidv4(),
      services: services,
      start: "2023-02-07T07:30:00+08:00",
      end: "2023-02-07T08:00:00+08:00",
      allDay: false
    }
    console.log(service)

    setEvents(service)

  }


  return (
    <div className="backshadow">
      <div className="modal">
        <div className='modal-header'>Book New Appointment</div>
        <form onSubmit={handleSumit}>
          <div className='modal-body'>
            <input type='text'
              placeholder='Name'
              value={services}
              onChange={(e) => setServices(e.target.value)}
            />
            <select
              name="services"
              id="services"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              placeholder='Services'>
              <option value="acupuncture">Acupuncture</option>
              <option value="botox">Botox</option>
            </select>
          </div>
          <div className='card-footer'>
            <button type='submit'>Submit</button>
            <button onClick={() => setModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal