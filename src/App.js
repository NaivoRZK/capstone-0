import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmForm from './ConfirmForm';
import BookingForm from './BookingForm';
import { fetchAPI } from './API';

function App() {
 // Définition des fonctions en dehors de useEffect
 const initializeTimes = () => {//*********** */
    let dateDuJour = new Date();
    return fetchAPI(dateDuJour);
 };

 const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const newAvailableTimes = fetchAPI(action.payload);
        return newAvailableTimes;
      default:
        return state;
    }
 };

 // Utilisation de useReducer avec les fonctions définies en dehors de useEffect
 const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

 return (
    <>



<Routes>
 <Route path="/" element={<HomePage />} />
 <Route path="/bookingPage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
 <Route path="/confirmForm" element={<ConfirmForm/>} />
</Routes>

   
    </>
 );
}

export default App;
