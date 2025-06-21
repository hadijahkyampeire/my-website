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
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Brightness4, 
  Brightness7, 
  Menu as MenuIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  ContactMail as ContactIcon,
  WorkspacePremium as CertificateIcon,
  EmojiEvents as AchievementsIcon
} from '@mui/icons-material';

const Navbar = ({ toggleTheme, isDark }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { label: 'About', id: 'about', icon: <PersonIcon /> },
    { label: 'Skills', id: 'skills', icon: <CodeIcon /> },
    { label: 'Experience', id: 'experience', icon: <WorkIcon /> },
    { label: 'Projects', id: 'projects', icon: <CodeIcon /> },
    { label: 'Education', id: 'education', icon: <SchoolIcon /> },
    { label: 'Certifications', id: 'certifications', icon: <CertificateIcon /> },
    { label: 'HackerRank', id: 'hackerrank', icon: <AchievementsIcon /> },
    { label: 'Contact', id: 'contact', icon: <ContactIcon /> }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Hadijah Kyampeire
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} onClick={() => scrollToSection(item.id)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              cursor: 'pointer',
              fontWeight: 'bold',
              '&:hover': { opacity: 0.8 }
            }}
            onClick={() => scrollToSection('home')}
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
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
              >
                {isDark ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                    } 
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
                sx={{ ml: 1 }}
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
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
