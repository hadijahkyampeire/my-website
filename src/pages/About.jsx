import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid 
} from '@mui/material';

function About() {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          About Me
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h6" align="center" paragraph>
              I'm a Frontend Software Engineer known for writing clean, modular code with a strong attention to detail and best practices. My experience lies in modernizing legacy systems, developing micro frontends, and collaborating effectively in Agile teams. I am skilled in delivering scalable solutions for both the FinTech and Health Informatics sectors.
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              Beyond coding, I'm passionate about empowering women in tech and have been involved in tech mentorship for over 6 years. I believe in the power of community and knowledge sharing to drive innovation.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 