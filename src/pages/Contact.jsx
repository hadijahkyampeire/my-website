import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Link,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Get In Touch
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Let's Connect
              </Typography>
              <Typography variant="body1" paragraph>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Link href="mailto:hadijahkyampeire@gmail.com" color="inherit">
                    hadijahkyampeire@gmail.com
                  </Link>
                </Box>
                
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton 
                    href="https://www.linkedin.com/in/hadijah-kyampeire-418900141/" 
                    target="_blank"
                    color="primary"
                    size="large"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    href="https://github.com/hadijahkyampeire" 
                    target="_blank"
                    color="primary"
                    size="large"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    href="https://twitter.com/Hkyampeire" 
                    target="_blank"
                    color="primary"
                    size="large"
                  >
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Send Me a Message
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact; 