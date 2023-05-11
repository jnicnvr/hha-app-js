

export function addCalendarEvent(calendarApi, events) {
    console.log('addCalendarEvent', calendarApi)

    calendarApi.unselect() // clear date selection
    if (events) {
        calendarApi.addEvent(events)
    }
}

