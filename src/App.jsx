import { useState } from "react";
// import "./App.css";
import Layout from "./components/Layout";

function App() {
  // const [events, setEvents] = useState([]);
  // const [modal, setModal] = useState(false);
  // console.log("App", events);
  return (
    <div className='hold-transition sidebar-mini'>
      {/* {modal && (
        <Modal setModal={setModal} setEvents={setEvents} events={events} />
      )} */}
      <Layout />

      {/* <div className='main'>
        <div className='sidebar-left'></div>
        <div className='sidebar-right'>
          <Booking setModal={setModal} setEvents={setEvents} events={events} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
