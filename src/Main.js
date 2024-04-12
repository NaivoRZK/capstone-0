import './App.css';
import restaurantFood from './restauranfood.jpg';
import greekSalad from './greek salad.jpg';
import bruchetta from './bruchetta.svg';
import dessert from './dessert.jpg';
import etoile from './etoile.png';
import Selena from './Selena.jpg';
import  Brandom from './Brandom.jpg';
import peter from './peterr.jpg';
import Neba from './Neha.jpg';
import nuit from './nuit.jpg';
import chef from './chef.jpg';


 export default function Main() {
   const infoSection2=[
      {
         image:greekSalad,
         alt:"picture greek salad",
         food:"Greek Salad",
         paragraphe1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
         paragraphe2:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        
      },

      {
         image:bruchetta,
         alt:"picture bruchetta",
         food:"Greek Salad",
         paragraphe1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
         paragraphe2:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
       
      },

      {
         image:dessert,
         alt:"picture desert",
         food:"Greek Salad",
         paragraphe1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
         paragraphe2:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

      }
   ]



   const infoTestimonials=[
      {
         etoile:etoile,
         alt1:"picture notatin etoile",
         person:Selena,
         alt2:"picture of Selena",
         name:"Selena G.",
         comment:'"Really enjoyed the atmosphere."'
       
        
      },

      {
         etoile:etoile,
         alt1:"picture notatin etoile",
         person:Brandom,
         alt2:"picture of Bradom",
         name:"Brandon M.",
         comment:'"The greek salad was excellent!"'
       
        
      } ,
         {
         etoile:etoile,
         alt1:"picture notatin etoile",
         person:peter,
         alt2:"picture of Peter",
         name:"Peter R..",
         comment:'"You have to try the Greek Salad!"'
       
        
      },
      {
         etoile:etoile,
         alt1:"picture notatin etoile",
         person:Neba,
         alt2:"picture of Neba",
         name:"Neha J.",
         comment:'"Awesome place peaceful'
       
        
      }

   ]
  return (
    <>
     <main>
     <section className='section1'>
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

{/* 
    <h1 id='title'> This weeks specials!</h1>
    <button className='btn-right'>Online Menu</button> */}


   
    <section id='section2'>  
    <article >
       <h1 id='title'> This weeks specials!</h1>
        <button className='btn-right'>Online Menu</button>
   </article>


      {/* Iterate the section2 */}
            {infoSection2.map(item => (
                     <article id='sous-article' key={item.food}>  
                     <img src={item.image}  alt={item.alt}/>
                       <h2>{item.food}</h2>    
                       <p>{item.paragraphe1} </p>
                       <p>{item.paragraphe2} </p>
                       <h3>Order Delivery</h3>     
                  </article>
      ))}
      
      </section>
      
      <section className='section3'>
      <h1>Testimonials</h1>

      {infoTestimonials.map(item => (
                     <article key={item.alt}>  
                     <img src={item.etoile}  alt={item.alt1} /> 
                     <img src={item.person}  alt={item.alt2} id='pic-sct-3'/>
                       <h2>{item.name}</h2>    
                       <p>{item.comment} </p>   
                  </article>
      ))}
         
      
   




    </section>

    <section className='section4'>
      <article>
             <h1>Litle Lemon</h1>
             <h3>Chicago</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
             <p>tempor incididunt ut labore et dolore magna aliqua. </p>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
             <p>tempor incididunt ut labore et dolore magna aliqua. </p>
      
        </article>

        <article>
             <img src={chef} width='287px' height='400px' alt='picture food the chef the litle lemon'/>
             <img src={nuit} width='287px' height='400px' alt='picture food the local Ltle lemon'/>
  
      
        </article>
       </section>
      
     </main>
     
     
    
    
   
      
    </>
  );
}


