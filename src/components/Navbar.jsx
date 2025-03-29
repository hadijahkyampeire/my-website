// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HK
        </Typography>

        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleTheme}>
          {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
