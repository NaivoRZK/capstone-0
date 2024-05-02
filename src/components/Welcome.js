import './App.css';
import restaurantFood from '../image/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/bookingPage');
  };

  return (
    <>
      <section className='welcome' aria-label='welcome' id='About'>
        <article className='it'>
          <h1>Litle Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          <p>tempor incididunt ut labore et dolore magna aliqua. </p>
          <button onClick={handleClick}>Réserver une table</button>
        </article>

        <article>
          <img src={restaurantFood} width='287px' height='400px' alt='picture food the retaurant' />
        </article>
      </section>
    </>
  );
}
