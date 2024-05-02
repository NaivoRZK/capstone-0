import './App.css';
import logo from "../image/Logo.svg"

 export default function Footer() {
  return (
    <>
     <footer>
     <div>
     <img src={logo} alt='logo de Litle Lemon'/>
    </div>
    
    <div>
    <h3>Doormat Navigation </h3>
     <ul>
     <li>       <a href='/Home'> Home </a> </li>
     <li>       <a href='/About'> About </a> </li>
     <li>       <a href='/Menu'> Menu </a> </li>
     <li>       <a href='/Reservation'> Reservation </a> </li>
     <li>       <a href='/Order-online'> Order online </a> </li>
     <li>       <a href='/Login'> LOgin </a> </li>
     </ul>
     
 
     
    </div>

     
    <div>
    <h3>Contact </h3>
    <ul>
     <li>       <a href='/Adress'> Adress  </a> </li>
     <li>       <a href='/Phone'> Phone number </a> </li>
     <li>       <a href='/Email'> Email </a> </li>

     </ul>
   
     
    </div>

     
    <div>
    <h3>Social Media Links </h3>
    <ul>
     <li>       <a href='/Adress'> Adress  </a> </li>
     <li>       <a href='/Phone'> Phone number </a> </li>
     <li>       <a href='/Email'> Email </a> </li>

     </ul>
   
    </div>
    
      
     </footer>
     
     
    
    
   
      
    </>
  );
}


