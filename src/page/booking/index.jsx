import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { v4 as uuidv4 } from 'uuid';
import { addCalendarEvent } from '../../hha/hha'
import './style.css'


const Booking = ({ setModal, setEvents, events }) => {

  console.log('booking', events)
  const handleDateSelect = (selectInfo) => {
    setModal(true) //modal show

    let calendarApi = selectInfo.view.calendar
    // addCalendarEvent(calendarApi, events)
    // calendarApi.unselect() // clear date selection

    // const myEvent = {
    //   id: uuidv4(),
    //   title: "Nico Dev",
    //   start: selectInfo.startStr,
    //   end: selectInfo.endStr,
    //   allDay: selectInfo.allDay
    // }
    console.log('selectInfo', selectInfo)
    addCalendarEvent(calendarApi, events)

  }


  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (event) => {
    setEvents(event)
  }
  return (
    <div className="container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventsSet={handleEvents}

      />
    </div>
  )
}

export default Booking