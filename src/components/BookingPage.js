import './App.css'
import { useState } from 'react';


import BookingForm from "./BookingForm"
import Nav from "./Nav"
import Header from './Header';
export default function BookingPage({ availableTimes, dispatch }) {
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');
  const [guests,setGuest]=useState('');
  const [occasion,setOccasion]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [request,setRequest]=useState('');
  const [seatingType, setSeatingType] = useState('');


 
   return (
          <>
            <Header/>
            <Nav/>
            <BookingForm date={date} setDate={setDate}
                         time={setTime} setTime={setTime}
                         guests={guests} setGuest={setGuest}
                         occasion={occasion} setOccasion={setOccasion}
                         firstName={firstName} setFirstName={setFirstName}
                         lastName={lastName} setLastName={setLastName}
                         email={email} setEmail={setEmail}
                         phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                         request={request} setRequest={setRequest}
                         seatingType={seatingType} setSeatingType={setSeatingType}
                         availableTimes={availableTimes} dispatch={dispatch}

            
            />
           
          
          </>

    )

}