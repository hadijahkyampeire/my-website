import React, { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Chip,
  IconButton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';

// Import all project images
import elearningImg1 from '../assets/e-learning-platform/courses-page.png';
import elearningImg2 from '../assets/e-learning-platform/enrolled-students.png';
import elearningImg3 from '../assets/e-learning-platform/student-rsources.png';
import elearningImg4 from '../assets/e-learning-platform/teacher-courses.png';

import tictactoeImg1 from '../assets/tictactoe-game/tictactoe-login.png';
import tictactoeImg2 from '../assets/tictactoe-game/join-game.png';
import tictactoeImg3 from '../assets/tictactoe-game/tictactoe-single-player.png';
import tictactoeImg4 from '../assets/tictactoe-game/tictactoe-won-game.png';

import propertyImg1 from '../assets/property-app/property-mgt-list.png';
import propertyImg2 from '../assets/property-app/property-form.png';

import metsImg1 from '../assets/mets-app/clinical-views.png';
import metsImg2 from '../assets/mets-app/form-builder.png';
import metsImg3 from '../assets/mets-app/DnD-form.png';

import sigmaImg1 from '../assets/sigma-app/dashboard.png';
import sigmaImg2 from '../assets/sigma-app/networkGraph.png';
import sigmaImg3 from '../assets/sigma-app/searchResults.png';
import sigmaImg4 from '../assets/sigma-app/dashboardReport.png';
import sigmaImg5 from '../assets/sigma-app/searchInitial.png';
import sigmaImg6 from '../assets/sigma-app/googleMap.png';

function Projects() {
  const projects = [
    {
      title: "OpenMRS Clinical Views & Form Builder (METS Program)",
      description: "Built a dynamic UI workflow and drag-and-drop form builder for OpenMRS, enabling clinicians to create and manage clinical forms with ease.",
      technologies: ["ReactJs", "Typescript", "Formik", "Micro-Frontends", "Carbon design", "SWR"],
      github: "",
      live: "",
      images: [metsImg1, metsImg2, metsImg3],
      features: [
        'Dynamic clinical views',
        'Drag-and-drop form builder',
        'Reusable JSON schema workflows',
        'Reduced code duplication'
      ]
    },
    {
      title: "Risk & Compliance Platform (Sigma360)",
      description: "Developed a financial risk and compliance platform with advanced search, network graph analytics, geolocation, and interactive dashboards for global financial clients.",
      technologies: ["ReactJS", "SASS", "AntDesign", "ChartJS", "Cytoscape", "Neo4j", "react-google-maps"],
      github: "",
      live: "",
      images: [sigmaImg1, sigmaImg2, sigmaImg3, sigmaImg4, sigmaImg5, sigmaImg6],
      features: [
        'Open search',
        'Risk network graph',
        'Geolocation map (react-google-maps)',
        'Analytics visual dashboard'
      ]
    },
    {
      title: "E-learning Platform – React Frontend (2025)",
      description: "Designed a modular React frontend for an E-Learning platform, supporting course management, student enrollment, assignments, and grading.",
      technologies: ["TypeScript", "Vite", "React", "Material UI"],
      github: "https://github.com/hadijahkyampeire/MH-E-Learning-Platform-FE",
      live: "",
      images: [elearningImg1, elearningImg2, elearningImg3, elearningImg4],
      features: [
        'Course management',
        'Student enrollment',
        'Assignment submission',
        'Grading workflows'
      ]
    },
    {
      title: "Serverless Web Game (Tic Tac Toe)",
      description: "Created a serverless Tic Tac Toe game with real-time play, user authentication, and AWS-powered backend.",
      technologies: ["ReactJS", "AWS Cognito", "DynamoDB", "AWS Lambda", "API Gateway", "CloudFormation", "CodePipeline"],
      github: "https://github.com/hadijahkyampeire/tic-tac-toe-full-stack-aws",
      live: "https://main.d357es8u6sf7j.amplifyapp.com/",
      images: [tictactoeImg1, tictactoeImg2, tictactoeImg3, tictactoeImg4],
      features: [
        'Serverless architecture',
        'User authentication',
        'Real-time gameplay',
        'Score tracking'
      ]
    },
    {
      title: "Property Management System",
      description: "A platform for listing, searching, and managing rental or sale properties with secure authentication and RESTful APIs.",
      technologies: ["React", "Material UI", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com/hadijahkyampeire/WAA-Group-One-Realtor-Frontend",
      live: "",
      images: [propertyImg1, propertyImg2],
      features: [
        'Property listing',
        'Search and filter',
        'User authentication',
        'RESTful API integration'
      ]
    }
  ];

  const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (!project.images || project.images.length <= 1) return;

      const timer = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % project.images.length);
      }, 3000);

      return () => clearInterval(timer);
    }, [project.images]);

    const projectImage = project.images && project.images.length > 0
      ? project.images[currentImageIndex]
      : 'https://via.placeholder.com/400x240';

    return (
      <Card sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: 400 }, // Fixed height for consistency
        width: '100%', // Ensure full width
        maxWidth: '100%', // Prevent overflow
        boxSizing: 'border-box', // Include padding in width calculation
      }}>
        <Box
          sx={{
            width: { xs: '100%', md: '40%' }, // Fixed width percentage
            height: { xs: 300, md: '100%' }, // Fixed height
            backgroundImage: `url(${projectImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.5s ease-in-out',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            flexShrink: 0, // Prevent image from shrinking
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              backdropFilter: 'blur(1px)',
            },
          }}
        />
        <Box sx={{ 
          flex: 1, 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column',
          minWidth: 0, // Allow content to shrink if needed
        }}>
          <CardContent sx={{ flexGrow: 1, p: '16px 0' }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', lineHeight: 1.3 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
              {project.description}
            </Typography>
            {project.features && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {project.features.map((feature) => (
                  <Chip
                    key={feature}
                    label={feature}
                    size="small"
                    color="secondary"
                  />
                ))}
              </Box>
            )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Box>
          </CardContent>
          <CardActions sx={{ p: 0, mt: 'auto' }}>
            <IconButton href={project.github} target="_blank" size="small" color="primary">
              <GitHubIcon />
            </IconButton>
            {project.live && (
              <IconButton href={project.live} target="_blank" size="small" color="primary">
                <LaunchIcon />
              </IconButton>
            )}
          </CardActions>
        </Box>
      </Card>
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Featured Projects
        </Typography>
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              key={index}
              sx={{ width: '100%', mb: 3 }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects; 