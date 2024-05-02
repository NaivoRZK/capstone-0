import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import greekSalad from '../image/greek salad.jpg';
import bruchetta from '../image/bruchetta.svg';
import dessert from '../image/dessert.jpg';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Etat pour le quantites de pannier 
import useStore from './store';

export default function Specialisations() {

  let navigate = useNavigate();

  // PPOur diriger la page vers order
  const DirigeOrder = () => {
    navigate('/Order');
  };

  const { articles } = useStore();
  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [quantity, setQuantity] = useState(0); // Initialisez la quantité à 0

  const handleClickOpen = (article) => {
    setSelectedArticle(article);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArticle(null);
  };

  const handleAdd = (quantity) => {
    console.log(`Ajout de ${quantity} ${selectedArticle} au panier`);
    handleClose();
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (selectedArticle) {
      articles[selectedArticle].setQuantity(value);
    }
    // Mettez à jour l'état de la quantité
    setQuantity(value);
  };

  const infoSection2 = [
    {
      image: greekSalad,
      alt: "picture greek salad",
      food: "greekSalad",
      paragraphe1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      paragraphe2: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      image: bruchetta,
      alt: "picture bruchetta",
      food: "bruchetta",
      paragraphe1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      paragraphe2: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      image: dessert,
      alt: "picture desert",
      food: "dessert",
      paragraphe1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      paragraphe2: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    }
  ];

  // Création d'un thème personnalisé avec une couleur principale rouge
  const theme = createTheme({
    palette: {
      primary: red, // Définition de la couleur principale en rouge
    },
  });

  return (
    <>
      <section id='specialisation' aria-label='specialisation'>
        <article >
          <h1 id='title'> This weeks specials!</h1>
          <button onClick={DirigeOrder} className='btn-right'>Online Menu</button>
        </article>

        {/* Iterate the section2 */}
        {infoSection2.map(item => (
          <article id='sous-article' key={item.food}>
            <img src={item.image} alt={item.alt} />
            <h2 aria-label={item.food}>{item.food}</h2>
            <p>{item.paragraphe1} </p>
            <p>{item.paragraphe2} </p>
            <h3>Order Delivery</h3>
            <ThemeProvider theme={theme}>
              <button onClick={() => handleClickOpen(item.food)} className='btn-card'>
                Ajouter au panier
              </button>
            </ThemeProvider>
          </article>
        ))}

        {/* Boite de dialogue pour le ajout des diner aux pannier  */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog-fix">
          <DialogTitle id="form-dialog-title">Ajouter au panier</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Quantité"
              type="number"
              fullWidth
              value={quantity}
              onChange={handleQuantityChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" >
              Annuler
            </Button>
            <Button onClick={() => handleAdd(quantity)} color="primary">
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
}
