import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import greekSalad from '../image/greek salad.jpg';
import bruchetta from '../image/bruchetta.svg';
import dessert from '../image/dessert.jpg';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions'; // Import DialogActions from '@mui/material/DialogActions'
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// State for the basket quantities
import useStore from './store';

export default function Specialisations() {

  let navigate = useNavigate();

  // To navigate to the order page
  const goToOrder = () => {
    navigate('/Order');
  };

  const { articles } = useStore();
  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleClickOpen = (article) => {
    setSelectedArticle(article);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArticle(null);
  };

  const handleAdd = (quantity) => {
    console.log(`Adding ${quantity} ${selectedArticle} to basket`);
    handleClose();
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (selectedArticle) {
      articles[selectedArticle].setQuantity(value);
    }
    setQuantity(value);
  };

  const infoSection2 = [
    {
      image: greekSalad,
      alt: "picture greek salad",
      food: "greekSalad",
      paragraphe1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      paragraphe2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      image: bruchetta,
      alt: "picture bruchetta",
      food: "bruchetta",
      paragraphe1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      paragraphe2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      image: dessert,
      alt: "picture dessert",
      food: "dessert",
      paragraphe1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      paragraphe2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    }
  ];

  // Create a custom theme with primary color red
  const theme = createTheme({
    palette: {
      primary: red,
    },
  });

  return (
    <>
      <section id='specialisation' aria-label='specialisation'>
        <article>
          <h1 id='title'> This week's specials!</h1>
          <button onClick={goToOrder} className='btn-right'>Online Menu</button>
        </article>

        {infoSection2.map(item => (
          <article id='sous-article' key={item.food}>
            <img src={item.image} alt={item.alt} />
            <h2 aria-label={item.food}>{item.food}</h2>
            <p>{item.paragraphe1} </p>
            <p>{item.paragraphe2} </p>
            <h3>Order Delivery</h3>
            <ThemeProvider theme={theme}>
              <button onClick={() => handleClickOpen(item.food)} className='btn-card'>
                Add to basket
              </button>
            </ThemeProvider>
          </article>
        ))}

        {/* Dialog box for adding items to basket */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog-fix">
          <DialogTitle id="form-dialog-title">Add to basket</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              fullWidth
              value={quantity}
              onChange={handleQuantityChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" >
              Cancel
            </Button>
            <Button onClick={() => handleAdd(quantity)} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
}
