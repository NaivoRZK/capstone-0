import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './API';
import temps from'../image/temps.png'
import invites from '../image/invites.png'
import champaine from '../image/champagne.png'



import './App.js'
export default function BookingForm({date,setDate,
                                     time,setTime,
                                     guests,setGuest,
                                     occasion,setOccasion,
                                     firstName,setFirstName,
                                     lastName,setLastName,
                                     email,setEmail,
                                     request,setRequest,
                                     phoneNumber,setPhoneNumber,
                                     seatingType,setSeatingType,
                                     availableTimes,dispatch
                                    
                                    }) {

                const navigate = useNavigate();
                //Etat de boutton de fourm
                const [isFormValid, setIsFormValid] = useState(true);
                
const checkFormValidity = () => {
  const isDateValid = date !== '';
  const isTimeValid = time !== '';
  const isGuestsValid = guests > 0 && guests <= 10;
  const isOccasionValid = occasion !== '';
  const isFirstNameValid = firstName !== '';
  const isLastNameValid = lastName !== '';
  const isPhoneNumberValid = phoneNumber !== '';
  const isEmailValid = validateEmail(email);
  const isRequestValid = request !== '';
  const isSeatingTypeValid = seatingType !== '';
  console.log('isTimeValid:', isTimeValid);
console.log('isGuestsValid:', isGuestsValid);
console.log('isOccasionValid:', isOccasionValid);
console.log('isFirstNameValid:', isFirstNameValid);
console.log('isLastNameValid:', isLastNameValid);
console.log('isPhoneNumberValid:', isPhoneNumberValid);
console.log('isEmailValid:', isEmailValid);
console.log('isRequestValid:', isRequestValid);
console.log('isSeatingTypeValid:', isSeatingTypeValid);

  
  
  setIsFormValid(
      isDateValid && isTimeValid && isGuestsValid && isOccasionValid && 
      isFirstNameValid && isLastNameValid && isPhoneNumberValid && isEmailValid && 
      isRequestValid && isSeatingTypeValid
  );
  console.log(isFormValid)

};
                useEffect(() => {
                  checkFormValidity();
               }, [date, time, guests, occasion, firstName, lastName,seatingType,email,phoneNumber]);
       

const validateEmail = (email) => {
  // Logique de validation de l'e-mail
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Exemple de validation simple
};

                let formData={
                  date,
                  time,
                  guests,
                  occasion,
                  firstName,
                  lastName,
                  phoneNumber,
                  email,
                  request,
                  seatingType
                  };    
                  
                  
               

                                      
                  const  handleDateChange =async (event) => {
                    const selectedDate = event.target.value;
                    setDate(selectedDate)
                    const dateObject = new Date(selectedDate);

                    // Dispatchez une action avec le nouveau type et la nouvelle date sélectionnée
                    dispatch({ type: 'UPDATE_TIMES', payload: dateObject });
                    };

                  const handleSubmit = (event,date) => {
                    event.preventDefault();
                    setIsFormValid(true)
                    console.log(isFormValid)
                    if(submitAPI(formData)){
                      navigate('/confirmForm');
                    
                      

                    }
                    
                

                 }; 
                                      

  
  return (
  
       <div className="form-table">
  <h2 id="title-action">Reservations</h2>
  <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
    
  <div className="seating-options">
      <input
        type="radio"
        id="indoor"
        name="seating"
        value="indoor"
        onChange={(e) => setSeatingType(e.target.value)}
      />
      <label htmlFor="indoor">Indoor Seating</label>

      <input
        type="radio"
        id="outdoor"
        name="seating"
        value="outdoor"
        onChange={(e) => setSeatingType(e.target.value)}
      />
      <label htmlFor="outdoor">Outdoor Seating</label>
    </div>

<div className="champ-saisie">
    <div className="res-date">
      <label htmlFor="res-date">Choose date</label><br/>
      <input type="date" id="res-date" required
             value={date}
             onChange={handleDateChange}
      />
    </div>

    <div className="res-time">

    <label htmlFor="res-time">Choose time</label>
    <img src={temps} alt='time' width="30px" height="25px" />

  
        <select id="res-time" 
                data-testid="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              
                >
             {availableTimes.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
        
        </select>

        </div>

        <div className="res-guest">
        <label htmlFor="guests">Number of guests</label>
        <img src={invites} alt='invites' width="30px" height="25px" /><br/>

  
        
        <input type="number" placeholder="1" min="1" max="10" id="guests" required
                value={guests}
                onChange={(e) => setGuest(e.target.value)}
        />

    </div>

    <div className="res-occasion">

        <label htmlFor="occasion">Occasion</label>
        <img src={champaine} alt='champaine' width="30px" height="25px" />

        <select id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
        >
            

          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        </div>




  {/* First name */}
<div className="res-firstName">
  <label htmlFor="res-firstName">First name</label><br/>
  <input 
    type="text" 
    id="res-name" 
    required 
    placeholder='eg:Peter' 
    value={firstName} 
    onChange={(e) => setFirstName(e.target.value)} 
  />
</div>

{/* Last name */}
<div className="res-lastName">
  <label htmlFor="res-lastName">Last name</label><br/>
  <input 
    type="text" 
    id="res-LastName" 
    required 
    placeholder='eg:Teddy' 
    value={lastName} 
    onChange={(e) => setLastName(e.target.value)} 
  />
</div>

{/* Email */}
<div className="res-email">
  <label htmlFor="res-email">*Email</label><br/>
  <input 
    type="email" 
    id="res-email" 
    required 
    placeholder='eg:Example@gmail.com' 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
  />
</div>

{/* Phone number */}
<div className="res-phoneNumber">
  <label htmlFor="res-phoneNumber">*Phone number</label><br/>
  <input 
    type="phone" 
    id="res-phoneNumber" 
    required 
    value={phoneNumber} 
    onChange={(e) => setPhoneNumber(e.target.value)} 
  />
</div>

{/* Special request */}
<div className="special-request">
  <label htmlFor="special-request">Specials request</label><br/>
  <textarea 
    name="special-request" 
    rows="10" 
    cols="50" 
    value={request} 
    onChange={(e) => setRequest(e.target.value)} 
    placeholder='your comment' 
  />
</div>
</div>


<input type="submit" value="Make Your reservation" id="btn-reservation" disabled={!isFormValid} />
</form>
</div>
);
}