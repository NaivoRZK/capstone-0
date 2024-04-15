import './App.css';
import HomePage  from './HomePage';
import BookingPage from './BookingPage';
import Nav from './Nav';

import {Routes,Route,Link} from 'react-router-dom';


function App() {
  return (
    <>


<Routes> 
<Route path="/" element={<HomePage />}></Route>
<Route path="/bookingPage" element={<BookingPage />}></Route>
</Routes>

  
    
    </>
  );
}

export default App;
