import './App.css';

import greekSalad from './greek salad.jpg';
import bruchetta from './bruchetta.svg';
import dessert from './dessert.jpg';



 export default function Specialisations() {

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
  return (
    <>
    <section id='specialisation' aria-label='specialisation'>  
    <article >
       <h1 id='title'> This weeks specials!</h1>
        <button className='btn-right'>Online Menu</button>
   </article>

      {/* Iterate the section2 */}
            {infoSection2.map(item => (
                     <article id='sous-article' key={item.food}>  
                     <img src={item.image}  alt={item.alt}/>
                       <h2 aria-label={item.food}>{item.food}</h2>    
                       <p>{item.paragraphe1} </p>
                       <p>{item.paragraphe2} </p>
                       <h3>Order Delivery</h3>     
                  </article>
      ))}
      
      </section>
      
    </>
  );
}

