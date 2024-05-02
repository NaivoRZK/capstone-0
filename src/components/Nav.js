import React, { useState } from 'react';
import { Drawer, List, ListItem, IconButton, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Importer l'icône Close
import './App.css';
import useStore from './store';
import Notification from './Notification';
import { Routes, Route, Link } from 'react-router-dom';

export default function Nav() {
 const { articles } = useStore();
 const [drawerOpen, setDrawerOpen] = useState(false);

 const greekSaladQuantity = articles.greekSalad.quantity;
 const bruchettaQuantity = articles.bruchetta.quantity;
 const dessertQuantity = articles.dessert.quantity;
 const notification = greekSaladQuantity > 0 || bruchettaQuantity > 0 || dessertQuantity > 0;

 const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
 };

 const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/" aria-label="Return to home page">
          HomePage
        </ListItem>
        <ListItem button component="a" href="#About">
          About
        </ListItem>
        <ListItem button component="a" href="#specialisation" aria-label="Look the menu">
          Menu
        </ListItem>
        <ListItem button component={Link} to="/BookingPage" aria-label="Redirect to the booking page">
          Reservation
        </ListItem>
        <ListItem button component={Link} to="/Order" aria-label="Redirect to the order page">
          Order online
        </ListItem>
        <ListItem button component="a" href="/Login">
          Login
        </ListItem>
      </List>
      <IconButton onClick={toggleDrawer(false)}>
        <CloseIcon /> {/* Ajouter l'icône Close */}
      </IconButton>
    </div>
 );

 return (
    <>
      <nav>
        <Hidden mdUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <div id='nt'>
            {notification && <Notification />}
          </div>
        </Hidden>

        <Hidden smDown>
          <ul>
            <li><Link to="/" aria-label="Return to home page">HomePage</Link></li>
            <li><a href="#About">About</a></li>
            <li><a href="#specialisation" aria-label="Look the menu">Menu</a></li>
            <li><Link to="/BookingPage" aria-label="Redirect to the booking page">Reservation</Link></li>
            <li><Link to="/Order" aria-label="Redirect to the order page">Order online</Link></li>
            <li><a href="/Login">Login</a></li>
            <div id='notif'>
              {notification && <Notification />}
            </div>
          </ul>
        </Hidden>
      </nav>
    </>
 );
}
