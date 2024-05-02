import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css'
function NotificationBadge() {
 return (
    <Grid container justifyContent="flex-start">
      <IconButton aria-label="1 nouveau message" >
        <Badge badgeContent={1} color="error">
          <FontAwesomeIcon icon={faShoppingCart} className="icon-card" />
        </Badge>
      </IconButton>
    </Grid>
 );
}

export default NotificationBadge;
