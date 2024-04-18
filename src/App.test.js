import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import BookingForm from './BookingForm';
  // Assuming checkFormValidity is exported from a module named 'formValidator'
  const { checkFormValidity } = require('./BookingForm');


 // Préparer les props nécessaires
 const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
 const dispatch = jest.fn(); // Utiliser jest.fn() pour simuler la fonction dispatch


test('Renders the BookingForm heading', () => {

 // Rendre le composant avec les props nécessaires, enveloppé dans un <MemoryRouter>
 render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
 );

 // Vérifier que le titre de la page est affiché correctement
 const pageTitle = screen.getByText('Page for reservation table');
 expect(pageTitle.textContent).toBe('Page for reservation table');
});






// Test unitaire pour initialisation et updaTime
import { initializeTimes, } from './function.js';
import { updateTimes } from './function.js';
import { fetchAPI } from './API';
//Mooker le fonction de l'API

jest.mock('./API', () => ({
  fetchAPI: jest.fn().mockResolvedValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
 }));
 

//Test pour le fonction initiazation qui retourne les liste heure 


// Mock the fetchAPI function to return a promise that resolves to the expected array of available times
jest.mock('./API', () => ({
 fetchAPI: jest.fn().mockResolvedValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
}));

describe('initializeTimes', () => {
 it('should return the expected array of available times', async () => {
    // Call initializeTimes
    const result = await initializeTimes();

    // Assert that the result matches the expected array of available times
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
 });
});



//Test pour le fonction Updaate qui retourne les liste heure disponible
describe('updateTimes', () => {
  it('should return the expected array of available times', async () => {
     const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
     // Mocking fetchAPI to return a promise that resolves to the expected array of available times
     fetchAPI.mockResolvedValue(expectedTimes);
 
     // Providing a mock state and action
     const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
     const action = { type: 'UPDATE_TIMES', payload: new Date() };
 
     // Calling updateTimes with the mock state and action
     const result = await updateTimes(state, action);
 
     // Asserting that the result matches the expected array of available times
     expect(result).toEqual(expectedTimes);
  });
 });

 //Test pour tous les champ de formulaire 


test('date input has correct attributes', () => {

   render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
   );
 const dateInput = screen.getByLabelText(/Choose date/i);
 expect(dateInput).toBeInTheDocument();
 expect(dateInput).toHaveAttribute('type', 'date');
 expect(dateInput).toHaveAttribute('required');
});

test('time select has correct attributes', () => {
   render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
   );
   const timeSelect = screen.getByLabelText(/Choose time/i);
   expect(timeSelect).toBeInTheDocument();
   expect(timeSelect).toHaveAttribute('data-testid', 'res-time');
  });

  test('guests input has correct attributes', () => {
   render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
   );
   const guestsInput = screen.getByLabelText(/Number of guests/i);
   expect(guestsInput).toBeInTheDocument();
   expect(guestsInput).toHaveAttribute('type', 'number');
   expect(guestsInput).toHaveAttribute('min', '1');
   expect(guestsInput).toHaveAttribute('max', '10');
   expect(guestsInput).toHaveAttribute('required');
  });
  
  test('occasion select has correct attributes', () => {
   render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
   );
   const occasionSelect = screen.getByLabelText(/Occasion/i);
   expect(occasionSelect).toBeInTheDocument();
  });

  test('submit button has correct attributes', () => {
   render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
   );
   const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
   expect(submitButton).toBeInTheDocument();
   expect(submitButton).toHaveAttribute('disabled');
  });
  
//Test pour le fonction de validation formulaire
  describe('BookingForm', () => {
   test('submit button is disabled when form is invalid', () => {
      render(
         <MemoryRouter>
           <BookingForm date="****" time="kkk" guests={2} occasion="Birthday" availableTimes={['12:00']} />
         </MemoryRouter>
       );
      const submitButton = screen.getByText('Make Your reservation');
      expect(submitButton).toBeDisabled();
   });
  
   test('submit button is enabled when form is valid', () => {
      // Vous devez fournir des props valides pour rendre le formulaire valide
      render(
         <MemoryRouter>
           <BookingForm date="2024-04-18" time="12:00" guests={2} occasion="Birthday" availableTimes={['12:00']} />
         </MemoryRouter>
       );
      const submitButton = screen.getByText('Make Your reservation');
      expect(submitButton).toBeEnabled();
   });
  });
  