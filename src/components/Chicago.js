import './App.css';

import nuit from '../image/nuit.jpg';
import chef from '../image/chef.jpg';


export default function Chicago() {
    return (
        <>
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

        
        </>

    )
}