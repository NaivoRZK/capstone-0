import './App.css';
import logo from "../image/Logo.svg"
import hotels from '../image/hotels.avif'
import GoogleButton from 'react-google-button';


 export default function Signup({handleGoogleSignIn}) {
  return (
    <>
   <div className='containers'>
     <div className='main-signup'>
     <h2>Welcome the Litle lemmn </h2>
     <b>Would you like to connect with: </b>

     <GoogleButton
        className="g-btn"
        type="dark"
        onClick={handleGoogleSignIn}
     />
     </div> 
 <div className='main-publish'>
<h2>Discover the Magic of Little Lemon</h2>
<p>Come explore our unique and delicious menu. Each dish is crafted to make you discover the flavors of the world.</p>
<p>Don't miss the chance to experience an unforgettable culinary adventure at Little Lemon.</p>

     </div>

</div>  

<section className='qualites'>  
<article className='galerie'>
<img src={hotels} alt="hotels"/>  
</article>

<article id='article-qualites'>
    <h3>Qualities of their work:</h3>
    <ul>
        <li>Culinary creativity</li>
        <li>Mastery of cooking techniques</li>
        <li>Neat presentation of dishes</li>
        <li>Consistency in dish quality</li>
    </ul>
</article>

</section>  

     
    
    
   
      
    </>
  );
}


