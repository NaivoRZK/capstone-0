import './App.css';
import etoile from './etoile.png';
import Selena from './Selena.jpg';
import  Brandom from './Brandom.jpg';
import peter from './peterr.jpg';
import Neba from './Neha.jpg';



export default function Testimonials() {
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
    return(
        <>
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
      </>

    )



}