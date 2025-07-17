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
    { label: 'About', path: '/about', icon: <PersonIcon /> },
    { label: 'Projects', path: '/projects', icon: <CodeIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactIcon /> }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
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
            key={item.path} 
            onClick={() => handleNavigation(item.path)}
            sx={{
              borderRadius: 1,
              mx: 1,
              mb: 1,
              backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
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
          background: `linear-gradient(135deg, ${theme.palette.primary.main}dd, ${theme.palette.primary.dark}dd)`,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              cursor: 'pointer',
              fontWeight: 'bold',
              background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease',
              '&:hover': { 
                opacity: 0.8,
                transform: 'scale(1.05)',
              }
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'rotate(90deg)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'rotate(180deg)',
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
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  backgroundColor: location.pathname === '/' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  borderRadius: 2,
                }}
              >
                Home
              </Button>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'rotate(180deg)',
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
