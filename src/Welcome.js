import './App.css';
import restaurantFood from './restauranfood.jpg'

 export default function Welcome() {
  return (
    <>

<section className='welcome' aria-label='welcome '>
         <article className='it'>
             <h1>Litle Lemon</h1>
             <h3>Chicago</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
             <p>tempor incididunt ut labore et dolore magna aliqua. </p>
             <button>Reserve a table</button>
  
      
        </article>

        <article >
             <img src={restaurantFood} width='287px' height='400px' alt='picture food the retaurant'/>
        </article>
  
      
    </section >
    
     
    
        
    
      
     
     
     
    
    
   
      
    </>
  );
}

