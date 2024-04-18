import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './API';

import './App.js'
export default function BookingForm({date,setDate,
                                     time,setTime,
                                     guests,setGuest,
                                     occasion,setOccasion,
                                     availableTimes,dispatch
                                    
                                    }) {

                const navigate = useNavigate();
                //Etat de boutton de fourm
                const [isFormValid, setIsFormValid] = useState(false);
                
 useEffect(() => {
  // Vérifie si le formulaire est valide
  const checkFormValidity = () => {
    // Vérifie si les champs requis sont remplis
    const isDateValid = date !== '';
    const isTimeValid = time !== '';
    const isGuestsValid = guests > 0 && guests <= 10;
    const isOccasionValid = occasion !== '';

    // Vérifie si l'horaire sélectionné est disponible pour la date choisie
    const isTimeAvailable = availableTimes.includes(time);

    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid && isTimeAvailable);
  };

  checkFormValidity();
}, [date, time, guests, occasion, availableTimes]);



                let formData={
                  date,
                  time,
                  guests,
                  occasion
                  };      

                                      
                  const  handleDateChange =async (event) => {
                    const selectedDate = event.target.value;
                    const dateObject = new Date(selectedDate);
                    // Dispatchez une action avec le nouveau type et la nouvelle date sélectionnée
                    dispatch({ type: 'UPDATE_TIMES', payload: dateObject });
                    };

                  const handleSubmit = (event,date) => {
                    event.preventDefault();
                    if(submitAPI(formData)){
                      navigate('/confirmForm');

                    }
                

                 }; 
                                      

  
  return (
    <>
        <h2>Page for reservation table</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required
               value={date}
               onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" 
                data-testid="res-time"
                value={time}
                onChange={setTime}
                >
             {availableTimes.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
        
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" required
                value={guests}
                onChange={setGuest}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
                value={occasion}
                onChange={setOccasion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" id="btn-reservation" disabled={!true} />
      </form>
    </>
  );
}
