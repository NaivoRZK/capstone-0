import './App.css';
import logo from "../image/Logo.svg"
import Nav from "./Nav"
import Header from './Header';
//Etat pour le quantites de pannier 
import useStore from './store';
import { Card, CardContent, CardMedia } from '@mui/material';
import { DeselectRounded } from '@mui/icons-material';
import greekSalad from '../image/greek salad.jpg';
import bruchetta from '../image/bruchetta.svg';
import dessert from '../image/dessert.jpg';

 export default function Order() {
  const { articles } = useStore();


       // Extraire les quantités de chaque article
 const greekSaladQuantity = articles.greekSalad.quantity;
 const bruchettaQuantity = articles.bruchetta.quantity;
 const dessertQuantity = articles.dessert.quantity;
 const totalQuantity=greekSaladQuantity + bruchettaQuantity + dessertQuantity;
const price=10000;

 const infoCard = [
  {
     image: greekSalad,
     alt: "Greek Salad",
     food: "Greek Salad",
     quantity: greekSaladQuantity, 
     price:10000
  },
  {
     image: bruchetta,
     alt: "Bruchetta",
     food: "Bruchetta",
     quantity: bruchettaQuantity, 
     price:10000
  },
  {
     image: dessert,
     alt: "Dessert",
     food: "Dessert",
     quantity: dessertQuantity,
     price:10000
  }
 ];
 
 // Filtrer les articles avec une quantité supérieure à 0
 const filteredItems = infoCard.filter(item => item.quantity > 0);
 
  return (
    <>
          <Header/>
            <Nav/>
  
            <h2>Your Purchases</h2>
            <b>   Total :    {totalQuantity} </b>
            <b>   Total price:    {totalQuantity * price} </b>

            {filteredItems.map((item, index) => (
        <Card key={index} style={{ border: '1px solid red' }} className='card'>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.alt}
          />
          <CardContent>
            <h2>{item.food}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>price: {item.pricey}</p>
          </CardContent>
        </Card>
      ))}
 
            
 
      
    </>
  );
}


