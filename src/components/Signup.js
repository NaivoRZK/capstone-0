import './App.css';
import chefsign from '../image/chef-sign.png';
import GoogleButton from 'react-google-button';

export default function Signup({ handleGoogleSignIn }) {
  return (
    <>
      <section className='container-sign'>
     
        <div className='main-sign1'>
          <h2>Discover the Magic of Little Lemon</h2>
          <p>Come explore our unique and delicious menu. Each dish is crafted to make you discover the flavors of the world.</p>
          <p>Don't miss the chance to experience an unforgettable culinary adventure at Little Lemon.</p>
        </div>

        <div className='main-sign2'>
          <h2>Welcome the Litle lemmn </h2>
          <b>Would you like to connect with: </b>

          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </section>
     

      <section>
      <img src={chefsign} alt="chef brillant" />

  


      </section>

   
    </>
  );
}
