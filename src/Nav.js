import './App.css';

import {Routes,Route,Link} from 'react-router-dom';

 export default function Nav() {
  return (
    <>
     <nav>
     <ul>
     <li>       <Link to='/'> HomePage </Link> </li>
     <li>       <a href='/About'> About </a> </li>
     <li>       <a href='/Menu'> Menu </a> </li>
     <li>       <Link to='/BookingPage'> Reservation </Link> </li>
     <li>       <a href='/Order-online'> Order online </a> </li>
     <li>       <a href='/Login'> LOgin </a> </li>
     
    
        
    
      
     </ul>
     
    
        
    
      
     </nav>
     
     
    
    
   
      
    </>
  );
}


