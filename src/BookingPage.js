import './App.css'
import { useState } from 'react';

import BookingForm from "./BookingForm"
import Nav from "./Nav"
export default function BookingPage({ availableTimes, dispatch }) {
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');
  const [guests,setGuest]=useState('');
  const [occasion,setOccasion]=useState('');


 
   return (
          <>
            <Nav/>
            <BookingForm date={date} setDate={setDate}
                         time={setTime} setTime={setTime}
                         guests={guests} setGuest={setGuest}
                         occasion={occasion} setOccasion={setOccasion}
                         availableTimes={availableTimes} dispatch={dispatch}

            
            />
           
          
          </>

    )

}