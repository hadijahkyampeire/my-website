import React from "react";
import ContactForm from "../components/ContactForm";
import { Paper, Typography, Avatar, Button, Box } from '@mui/material';
import myPhoto from '../assets/omega.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Paper sx={{ p: 4, boxShadow: 3, width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          alt="Hadijah Kyampeire"
          src={myPhoto}
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        <Typography variant="h4" gutterBottom>
          I am Hadijah Kyampeire
        </Typography>


        <Typography variant="h6" align="center" paragraph>
          I'm a Software Engineer with over 5 years of experience, specializing in Frontend Development with ReactJS. I am passionate about empowering women in tech and have been involved in tech mentorship for over 6 years.
        </Typography>

        <Box sx={{ marginBottom: 2 }}>

          <Button 
            component={Link} 
            to="https://www.linkedin.com/in/hadijah-kyampeire-418900141/" 
            variant="outlined" 
            color="primary" 
            startIcon={<LinkedInIcon />}
            sx={{ margin: 1 }}>
              LinkedIn
          </Button>
          <Button 
            component={Link}
            to="https://github.com/hadijahkyampeire"
            variant="outlined" 
            color="primary" 
            startIcon={<GitHubIcon />}
            sx={{ margin: 1 }}>
              GitHub
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 4, boxShadow: 3, width: '100%', maxWidth: '1200px', marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Me
        </Typography>
        <ContactForm />
      </Paper>
    </div>
  );
}

export default Home;
