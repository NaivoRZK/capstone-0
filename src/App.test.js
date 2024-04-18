import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
 // Préparer les props nécessaires
 const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
 const dispatch = jest.fn(); // Utiliser jest.fn() pour simuler la fonction dispatch

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
 
 