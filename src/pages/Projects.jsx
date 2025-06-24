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

function Projects() {
  const projects = [
    {
      title: "OpenMRS Clinical Views & Form Builder (METS Program)",
      description: "Architected a reusable JSON schema-based UI workflow framework for OpenMRS HIV Reference Implementation. This included creating dynamic clinical views and a drag-and-drop form builder to empower clinicians, significantly reducing code duplication and form creation time.",
      technologies: ["ReactJs", "Typescript", "Formik", "Micro-Frontends", "Carbon design", "SWR"],
      github: "",
      live: "",
      images: [metsImg1, metsImg2, metsImg3]
    },
    {
      title: "Risk & Compliance Platform (Sigma360)",
      description: "Led frontend development for a sophisticated financial risk and compliance platform. Engineered an analytics dashboard, a graph-driven risk network visualization, and an advanced search feature. These innovations boosted product competitiveness and enhanced client acquisition for financial services firms.",
      technologies: ["ReactJS", "SASS", "AntDesign", "ChartJS", "Cytoscape", "Neo4j"],
      github: "",
      live: "",
      images: [sigmaImg1, sigmaImg2, sigmaImg3, sigmaImg4]
    },
    {
      title: "E-learning Platform – React Frontend (2025)",
      description: "A responsive and modular React frontend for a full-stack E-Learning platform. Designed key user interfaces for course management, content access, assignment submissions, and grading workflows. The project reflects my mentoring experience and aims to support interactive learning with a professional, production-ready interface.",
      technologies: ["TypeScript", "Vite", "React", "Material UI"],
      github: "https://github.com/hadijahkyampeire/MH-E-Learning-Platform-FE",
      live: "",
      images: [elearningImg1, elearningImg2, elearningImg3, elearningImg4]
    },
    {
      title: "Serverless Web Game (Tic Tac Toe)",
      description: "Developed a fully serverless, web-based game using ReactJS with user authentication via Amazon Cognito. Player scores are stored in DynamoDB and managed through a Node.js backend with AWS Lambda and API Gateway. Implemented full infrastructure provisioning and CI/CD pipelines using AWS CloudFormation, CodePipeline, and CodeBuild.",
      technologies: ["ReactJS", "AWS Cognito", "DynamoDB", "AWS Lambda", "API Gateway", "CloudFormation", "CodePipeline"],
      github: "https://github.com/hadijahkyampeire/tic-tac-toe-full-stack-aws",
      live: "https://main.d357es8u6sf7j.amplifyapp.com/",
      images: [tictactoeImg1, tictactoeImg2, tictactoeImg3, tictactoeImg4]
    },
    {
      title: "Property Management System",
      description: "A system for property owners to list properties for sale or rent, and for customers to find properties to rent or buy. Built with a Spring Boot backend, MySQL database, RESTful APIs, and JWT authentication. The frontend is built with React and Material UI.",
      technologies: ["React", "Material UI", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com/hadijahkyampeire/WAA-Group-One-Realtor-Frontend",
      live: "",
      images: [propertyImg1, propertyImg2]
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
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            minHeight: { xs: 300, md: 'auto' },
            backgroundImage: `url(${projectImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.5s ease-in-out',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          }}
        />
        <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {project.description}
            </Typography>
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
          <CardActions>
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
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects; 