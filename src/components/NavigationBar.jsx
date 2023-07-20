import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const NavigationBar = ({ isLoggedIn, isAdmin }) => {
  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" style={{ fontSize: '3rem' }}>
          <ShoppingCart />
        </IconButton>
        <Typography  variant="h4" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>
        {isLoggedIn ? (
          <>
            <input type="text" placeholder="Search" />
            <Link to="/">Home</Link>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            {isAdmin && <Link to="/add-product">Add Product</Link>}
          </>
        ) : (
          <>
              <Link to="/login"><h2>Sign in</h2></Link>&nbsp;&nbsp;<Link to="/signup"><h2>Signup</h2></Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
