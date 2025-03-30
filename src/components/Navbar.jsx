import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">
          HK
        </Typography>

        <Button color="inherit" component={Link} to="/messages">
            View Messages
        </Button>

        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleTheme}>
          {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
