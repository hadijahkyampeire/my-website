import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { 
  Brightness4, 
  Brightness7, 
  Menu as MenuIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  ContactMail as ContactIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDark }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'About', sectionId: 'about', icon: <PersonIcon /> },
    { label: 'Experience', sectionId: 'experience', icon: <CodeIcon /> },
    { label: 'Community', sectionId: 'community', icon: <CodeIcon /> },
    { label: 'Projects', sectionId: 'projects', icon: <CodeIcon /> },
    { label: 'Contact', sectionId: 'contact', icon: <ContactIcon /> }
  ];

  const handleNavigation = (target) => {
    setMobileOpen(false);
    if (target === '/') {
      if (location.pathname !== '/') navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const scrollToId = () => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToId, 80);
    } else {
      scrollToId();
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          my: 2,
          fontWeight: 'bold',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.8,
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease',
          }
        }}
        onClick={() => handleNavigation('/')}
      >
        Hadijah Kyampeire
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem 
          onClick={() => handleNavigation('/')}
          sx={{
            borderRadius: 1,
            mx: 1,
            mb: 1,
            backgroundColor: location.pathname === '/' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              transform: 'translateX(8px)',
              transition: 'all 0.3s ease',
            }
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {navItems.map((item) => (
          <ListItem
            key={item.sectionId}
            onClick={() => handleNavigation(item.sectionId)}
            sx={{
              borderRadius: 1,
              mx: 1,
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transform: 'translateX(8px)',
                transition: 'all 0.3s ease',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: theme.palette.mode === 'dark'
            ? 'rgba(11, 13, 16, 0.85)'
            : 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.08)'}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.15s ease',
              '&:hover': { opacity: 0.8 }
            }}
            onClick={() => handleNavigation('/')}
          >
            Hadijah Kyampeire
          </Typography>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 1,
                  transition: 'background-color 0.15s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
                sx={{
                  transition: 'background-color 0.15s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {isDark ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                color="inherit"
                onClick={() => handleNavigation('/')}
                sx={{
                  transition: 'background-color 0.15s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  borderRadius: 2,
                }}
              >
                Home
              </Button>
              {navItems.map((item) => (
                <Button
                  key={item.sectionId}
                  color="inherit"
                  onClick={() => handleNavigation(item.sectionId)}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    borderRadius: 2,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: 2,
                      background: theme.palette.secondary.main,
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '80%',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
                sx={{ 
                  ml: 1,
                  transition: 'background-color 0.15s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {isDark ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer to prevent content from hiding behind fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
