import React, { useReducer, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmForm from './ConfirmForm';
import Order from './Order';
import { fetchAPI } from './API';
import { ColorRing} from 'react-loader-spinner'
;
function App() {
 const initializeTimes = () => {
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

 const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
 const [isLoading, setIsLoading] = useState(true); // Ajout de l'état de chargement

 useEffect(() => {
    // Simulez un délai de chargement pour les données
    const timer = setTimeout(() => {
      setIsLoading(false); // Mettez à jour l'état de chargement une fois les données chargées
    }, 3000); // Ajustez le délai selon vos besoins

    return () => clearTimeout(timer); // Nettoyez le timer pour éviter les fuites de mémoire
 }, [availableTimes]); // Surveillez les changements dans availableTimes

 return (
    <>
      {isLoading ? (
        <ColorRing
         visible={true}
         height="80"
         width="80"
         ariaLabel="color-ring-loading"
         wrapperStyle={{}}
         wrapperClass="center"
         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
         />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookingPage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/confirmForm" element={<ConfirmForm />} />
          <Route path="/Order" element={<Order />} />
        


        </Routes>
      )}
    </>
 );
}

export default App;
