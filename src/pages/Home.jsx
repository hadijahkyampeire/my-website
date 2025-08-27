import React, { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Chip,
  Avatar,
  IconButton,
  useTheme,
  Stack
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Launch as LaunchIcon,
  Download as DownloadIcon,
  Visibility as VisibilityIcon,
  EmojiEvents as EmojiEventsIcon,
} from '@mui/icons-material';
import myPhoto from '../assets/omega.jpg';
import hackerRankCertificate from '../assets/hackerrank-certificate.png';
import basicReactCertificate from '../assets/basic-react-hackerrank.png';
import ContactForm from '../components/ContactForm';

// E-Learning Platform Images
import elearningImg1 from '../assets/e-learning-platform/courses-page.png';
import elearningImg2 from '../assets/e-learning-platform/enrolled-students.png';
import elearningImg3 from '../assets/e-learning-platform/student-rsources.png';
import elearningImg4 from '../assets/e-learning-platform/teacher-courses.png';
import elearningImg5 from '../assets/e-learning-platform/e-learning-signin.png';
import elearningImg6 from '../assets/e-learning-platform/orgadmin-dsahboard.png';
import elearningImg7 from '../assets/e-learning-platform/upload-resources.png';
import elearningImg8 from '../assets/e-learning-platform/e-learning-users.png';

// Tic-Tac-Toe Game Images
import tictactoeImg1 from '../assets/tictactoe-game/tictactoe-login.png';
import tictactoeImg2 from '../assets/tictactoe-game/join-game.png';
import tictactoeImg3 from '../assets/tictactoe-game/tictactoe-single-player.png';
import tictactoeImg4 from '../assets/tictactoe-game/tictactoe-won-game.png';

// Property Management App Images
import propertyImg1 from '../assets/property-app/property-mgt-list.png';
import propertyImg2 from '../assets/property-app/property-form.png';

// METS App Images
import metsImg1 from '../assets/mets-app/clinical-views.png';
import metsImg2 from '../assets/mets-app/form-builder.png';
import metsImg3 from '../assets/mets-app/DnD-form.png';

// Sigma App Images
import sigmaImg1 from '../assets/sigma-app/dashboard.png';
import sigmaImg2 from '../assets/sigma-app/networkGraph.png';
import sigmaImg3 from '../assets/sigma-app/searchResults.png';
import sigmaImg4 from '../assets/sigma-app/dashboardReport.png';
import ExperienceItem from "../components/ExperienceItem";
import CVButton from "../components/CVButton";

function Home() {
  const theme = useTheme();
  const skills = {
  "Core Strengths": [
    "Frontend & Full-Stack Development",
    "Microservices & Micro-frontend Architecture",
    "State Management (Redux, Zustand, RTK Query)",
    "API Integration (REST, Swagger)",
    "Performance Optimization",
    "Internationalization (react-i18next)",
    "Testing (Jest, React Testing Library, Cypress, Playwright)",
    "CI/CD (GitHub Actions)",
    "Agile / Scrum",
    "Team Leadership & Mentorship",
    "Version Control (Git)"
  ],
  "Languages & Web Tech": [
    "JavaScript", "TypeScript", "Java", "Python",
    "HTML", "CSS", "Sass", "TailwindCSS",
    "NodeJS", "WebSockets"
  ],
  "Frameworks & Libraries": [
    "ReactJS", "NextJS", "Angular", "Express", "Spring Boot", "Flask",
    "Material UI", "Ant Design", "Redux Toolkit", "Zustand", "TanStack Query", "SWR",
    "React Hook Form", "Zod", "Formik", "React-i18next", "Storybook",
    "Chart.js", "Cytoscape", "React PDF"
  ],
  "Tools & Platforms": [
    "Vite", "Webpack", "Create React App", "ESLint",
    "Visual Studio", "IntelliJ IDEA", "VS Code",
    "JIRA", "Trello", "Heroku", "Firebase",
    "AWS (S3, CloudFront, Lambda, API Gateway, Cognito, DynamoDB, CloudFormation, CloudWatch, CodePipeline)",
    "GitHub Actions"
  ],
  "Databases & SDLC": ["PostgreSQL", "MongoDB", "Firebase", "Neo4j", "Agile", "Scrum"],
  "Design Patterns": [
    "Component Pattern", "Context + Provider", "Higher-Order Components (HOC)",
    "JSON Schema-driven UIs", "Micro Frontends"
  ]
};

  const experiences = [
  // Skye
  {
    title: "Senior Software Developer",
    company: "Skye, New York, USA (Remote)",
    duration: "May 2024 – September 2024",
    bullets: [
      "Implemented session scheduling and interactive charts with React, Node.js, MUI Data Grid, and Recharts for dynamic coaching review insights.",
      "Raised automated test coverage to ~90% with React Testing Library, reducing regressions and improving release confidence.",
      "Established CI/CD with GitHub Actions to run build, unit, integration, and E2E pipelines before deployment.",
      "Optimized service-layer performance and lowered latency across Firestore/SQL/BigQuery data paths.",
      "Collaborated in agile ceremonies (backlog grooming, prioritization, peer reviews) to ensure clean, efficient delivery."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Material UI", "MUI Data Grid", "Recharts", "React Testing Library", "Firestore", "BigQuery", "GitHub Actions"]
  },

  // METS (as you had it—kept)
  {
    title: "Senior Software Developer",
    company: "Monitoring and Evaluation Technical Support (METS) Program, Kampala, Uganda",
    duration: "May 2024 – September 2024",
    bullets: [
      "Architected a reusable JSON-schema-driven UI workflow framework for OpenMRS, cutting code duplication by ~90%.",
      "Designed a drag-and-drop clinical form builder that reduced form creation time by ~40%.",
      "Developed micro-frontend modules, accelerating feature deployment by ~40%."
    ],
    technologies: ["React", "TypeScript", "Formik", "Micro-Frontends", "Carbon Design System", "SWR"]
  },

  // Andela – Client - Sigma360 (Senior)
  {
    title: "Senior Software Engineer",
    company: "Andela – Client - Sigma360, New York City, USA (Remote)",
    duration: "June 2020 – April 2024",
    bullets: [
      "Built a risk analytics dashboard (React, Ant Design, React PDF, Chart.js) that reduced analysis time by ~35%.",
      "Led PoC for large-scale graph-driven risk networks using Cytoscape + Neo4j, boosting product competitiveness.",
      "Modernized testing (Enzyme → React Testing Library) and introduced Storybook for isolated component docs.",
      "Migrated Redux → Zustand and integrated TanStack Query for intelligent caching and background refresh, improving code quality and dev velocity.",
      "Mentored engineers via code reviews and pair programming to uphold consistent standards."
    ],
    technologies: ["React", "TypeScript", "Ant Design", "React PDF", "Chart.js", "Cytoscape", "Neo4j", "Zustand", "TanStack Query", "Jest", "React Testing Library", "Storybook"]
  },

  // Andela – Client - Sigma360 (Software Engineer)
  {
    title: "Software Engineer",
    company: "Andela – Client - Sigma360, New York City, USA (Remote)",
    duration: "October 2018 – May 2020",
    bullets: [
      "Developed a standalone entity risk-rating app with React, Redux, and SASS, boosting analyst productivity by ~70%.",
      "Integrated Google Analytics to drive data-informed feature prioritization and improve adoption.",
      "Created reusable UI components for consistency and faster delivery, cutting UI build time by ~20%.",
      "Built Jest + Enzyme test suites to safeguard critical flows and reduce regressions."
    ],
    technologies: ["React", "Redux", "SASS", "Jest", "Enzyme", "Google Analytics"]
  },

  // Andela Uganda Limited
  {
    title: "Software Engineer",
    company: "Andela Uganda Limited, Kampala, Uganda",
    duration: "December 2017 – September 2018",
    bullets: [
      "Led the Open Concept Lab: a standalone React + Material UI app for managing medical concepts within OpenMRS.",
      "Practiced TDD with Jest/Enzyme, achieving up to 100% coverage and reducing regressions.",
      "Delivered end-to-end solutions with React, Axios, Bootstrap, Node.js, Java Spring, and Python Flask; automated CI/CD via GitHub Workflows.",
      "Mentored and onboarded developers through interviews, bootcamps, code reviews, and pair programming."
    ],
    technologies: ["React", "TypeScript", "Material UI", "Bootstrap", "Java", "Python", "Flask", "Django Templates", "Jest", "Enzyme", "GitHub Workflows"]
  }
];


  const projects = [
    {
      title: "OpenMRS Clinical Views & Form Builder (METS Program)",
      description: "Architected a reusable JSON schema-based UI workflow framework for OpenMRS HIV Reference Implementation. This included creating dynamic clinical views and a drag-and-drop form builder to empower clinicians, significantly reducing code duplication and form creation time.",
      technologies: ["ReactJs", "Typescript", "Formik", "Micro-Frontends", "Carbon design", "SWR"],
      github: "", // Add GitHub link if available
      live: "",
      images: [metsImg1, metsImg2, metsImg3]
    },
    {
      title: "Risk & Compliance Platform (Sigma360)",
      description: "Led frontend development for a sophisticated financial risk and compliance platform. Engineered an analytics dashboard, a graph-driven risk network visualization, and an advanced search feature. These innovations boosted product competitiveness and enhanced client acquisition for financial services firms.",
      technologies: ["ReactJS", "SASS", "AntDesign", "ChartJS", "Cytoscape", "Neo4j"],
      github: "", // Add GitHub link if available
      live: "",
      images: [sigmaImg1, sigmaImg2, sigmaImg3, sigmaImg4]
    },
    {
      title: "E-learning Platform – React Frontend (2025)",
      description: "A responsive and modular React frontend for a full-stack E-Learning platform. Designed key user interfaces for course management, content access, assignment submissions, and grading workflows. The project reflects my mentoring experience and aims to support interactive learning with a professional, production-ready interface.",
      technologies: ["TypeScript", "Vite", "React", "Material UI"],
      github: "https://github.com/hadijahkyampeire/MH-E-Learning-Platform-FE",
      live: "",
      images: [elearningImg1, elearningImg2, elearningImg3, elearningImg4, elearningImg5, elearningImg6, elearningImg7, elearningImg8]
    },
    {
      title: "Serverless Web Game (Tic Tac Toe)",
      description: "Developed a fully serverless, web-based game using ReactJS with user authentication via Amazon Cognito. Player scores are stored in DynamoDB and managed through a Node.js backend with AWS Lambda and API Gateway. Implemented full infrastructure provisioning and CI/CD pipelines using AWS CloudFormation, CodePipeline, and CodeBuild.",
      technologies: ["ReactJS", "AWS Cognito", "DynamoDB", "AWS Lambda", "API Gateway", "CloudFormation", "CodePipeline"],
      github: "https://github.com/hadijahkyampeire/tic-tac-toe-full-stack-aws",
      live: "https://d2w7p8nid3o5t5.cloudfront.net/",
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

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Maharishi International University, Fairfield, Iowa, USA",
      year: "In progress, expected 06/2027",
      description: "Key Courses: Algorithms, Web Application Architecture, Enterprise Architecture, Cloud Computing"
    },
    {
      degree: "Bachelor of Computer Engineering, First Class Honors",
      school: "Busitema University, Busia, Uganda",
      year: "2013 - 2017",
      description: "Key Courses: Algorithms and Data structures, Database systems, Digital Signal Process, Data Communication and Networks, Engineering Mathematics"
    }
  ];

  const certifications = [
    {
      name: "Frontend Developer (React)",
      issuer: "HackerRank",
      year: "2025",
      link: "https://www.hackerrank.com/certificates/9c2149175e41",
      image: hackerRankCertificate
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      year: "2025",
      link: "https://www.hackerrank.com/certificates/eb8d169fcfb7",
      image: basicReactCertificate
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (!project.images || project.images.length <= 1) return;

      const timer = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % project.images.length);
      }, 3000); // 3-second interval

      return () => clearInterval(timer);
    }, [project.images]);

    const projectImage = project.images && project.images.length > 0
      ? project.images[currentImageIndex]
      : 'https://via.placeholder.com/400x240';

    return (
      <Card 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(30, 58, 138, 0.15)',
          },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease',
          },
          '&:hover::before': {
            transform: 'scaleX(1)',
          }
        }}
      >
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
            borderRight: { md: `1px solid ${theme.palette.divider}` },
          }}
        />
        <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1, p: 0, pb: 2 }}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                mb: 2,
              }}
            >
              {project.title}
            </Typography>
            <Typography 
              variant="body2" 
              paragraph
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.main,
                      color: 'white',
                    }
                  }}
                />
              ))}
            </Box>
          </CardContent>
          <CardActions sx={{ p: 0 }}>
            <IconButton 
              href={project.github} 
              target="_blank" 
              size="small" 
              sx={{
                color: theme.palette.primary.main,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  transform: 'scale(1.1)',
                }
              }}
            >
              <GitHubIcon />
            </IconButton>
            {project.live && (
              <IconButton 
                href={project.live} 
                target="_blank" 
                size="small"
                sx={{
                  color: theme.palette.primary.main,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <LaunchIcon />
              </IconButton>
            )}
          </CardActions>
        </Box>
      </Card>
    );
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: theme.palette.primary.main,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-64px', // Compensate for the Toolbar spacer
          paddingTop: '64px', // Add padding to account for fixed navbar
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  animation: 'slideUp 0.8s ease-out',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hi, I'm Hadijah Kyampeire
              </Typography>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  mb: 3, 
                  opacity: 0.9,
                  animation: 'slideUp 0.8s ease-out 0.2s both',
                  color: theme.palette.secondary.light,
                }}
              >
                Senior Software Engineer (ReactJS, Node.js, TypeScript)
              </Typography>
              <Typography 
                variant="h6" 
                paragraph 
                sx={{ 
                  mb: 4, 
                  opacity: 0.8,
                  animation: 'slideUp 0.8s ease-out 0.4s both',
                  lineHeight: 1.6,
                }}
              >
                Results-driven Senior Frontend Software Engineer with 6+ years of experience building high-performance web applications using ReactJS, Node.js and the modern JavaScript ecosystem. Skilled in delivering scalable solutions in FinTech and Health Informatics with expertise in micro-frontends and modern architecture patterns.
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  animation: 'slideUp 0.8s ease-out 0.6s both',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{ 
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(234, 88, 12, 0.4)',
                    }
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      borderColor: theme.palette.secondary.light,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  View My Work
                </Button>
                <CVButton />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                src={myPhoto}
                sx={{
                  width: 300,
                  height: 300,
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  animation: 'scaleIn 0.8s ease-out 0.8s both',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h6" 
                align="center" 
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                I'm a Senior Frontend Software Engineer known for writing clean, modular code with a strong attention to detail and best practices. My experience lies in modernizing legacy systems, developing micro frontends, and collaborating effectively in Agile teams. I am skilled in delivering scalable solutions for both the FinTech and Health Informatics sectors.
              </Typography>
              <Typography 
                variant="h6" 
                align="center" 
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                Beyond coding, I'm passionate about empowering women in tech and have been involved in tech mentorship for over 6 years. I believe in the power of community and knowledge sharing to drive innovation.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skills).map(([category, skillList], index) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(30, 58, 138, 0.15)',
                    },
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillList.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.main,
                          '&:hover': {
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      {/* <Box id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }
            }}
          >
            Work Experience
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                sx={{ 
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(30, 58, 138, 0.15)',
                  },
                  animation: `slideUp 0.6s ease-out ${index * 0.2}s both`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 4,
                    height: '100%',
                    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography 
                      variant="h6" 
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 500,
                      }}
                    >
                      {exp.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography 
                      paragraph
                      sx={{
                        lineHeight: 1.7,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>
        </Container>
      </Box> */}
      <Box id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
        <Typography
        variant="h3"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{
        mb: 6,
        position: 'relative',
        '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 60,
        height: 4,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        borderRadius: 2,
        },
        }}
        >
        Work Experience
        </Typography>


        <Stack spacing={3}>
        {experiences.map((exp, index) => (
        <ExperienceItem key={`${exp.title}-${index}`} exp={exp} index={index} />
        ))}
        </Stack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }
            }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    animation: `slideUp 0.6s ease-out ${index * 0.2}s both`,
                  }}
                >
                  <ProjectCard project={project} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <Box id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }
            }}
          >
            Education
          </Typography>
          <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            alignItems="stretch"
            sx={{ width: '100%' }}
          >
            {education.map((edu, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                key={index}
                sx={{ width: '100%' }}
              >
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(30, 58, 138, 0.15)',
                    },
                    animation: `slideUp 0.6s ease-out ${index * 0.2}s both`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '100%',
                      background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    }
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {edu.year}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 1,
                      lineHeight: 1.6,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {edu.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Certifications & HackerRank Section */}
      <Box id="certifications" sx={{ py: 8 }}>
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Certifications & Achievements
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', lg: 'row' },
              gap: 4,
              justifyContent: 'center',
              alignItems: 'stretch',
              width: '100%'
            }}
          >
            {/* Certificates */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                flex: 1,
                maxWidth: { lg: '60%' }
              }}
            >
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  sx={{ 
                    p: 2, 
                    height: '100%',
                    width: { xs: '100%', md: '50%' },
                    maxWidth: { xs: '100%', md: '300px' },
                    boxSizing: 'border-box'
                  }}
                >
                  {cert.image && (
                    <Box
                      component="img"
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '200px',
                        objectFit: 'contain',
                        display: 'block',
                        mx: 'auto',
                        borderRadius: 1,
                        mb: 2,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    />
                  )}
                  <Typography variant="h6" sx={{ fontSize: '1rem' }}>{cert.name}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {cert.issuer}
                  </Typography>
                  {cert.year && (
                    <Typography variant="body2" color="text.secondary">
                      {cert.year}
                    </Typography>
                  )}
                  {cert.link && (
                    <Button
                      component="a"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<LaunchIcon />}
                      size="small"
                      sx={{mt: 1}}
                    >
                      View Certificate
                    </Button>
                  )}
                </Card>
              ))}
            </Box>

            {/* HackerRank Achievements */}
            <Card 
              sx={{ 
                p: 3, 
                flex: 1,
                maxWidth: { lg: '40%' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="h5" gutterBottom textAlign="center">
                HackerRank Achievements
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1, justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    <EmojiEventsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Badges
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {["Problem Solving", "30 Days of Code", "10 Days of JS", "React"].map(badge => 
                      <Chip key={badge} label={badge} color="primary" size="small" />
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    <CodeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Top Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {["React", "Javascript (Intermediate)", "CSS", "TypeScript", "Java"].map(skill => 
                      <Chip key={skill} label={skill} variant="outlined" size="small" />
                    )}
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                  <Button
                    variant="contained"
                    href="https://www.hackerrank.com/profile/hadijah315"
                    target="_blank"
                    endIcon={<LaunchIcon />}
                    size="small"
                  >
                    View Full Profile
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }
            }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Let's Connect
              </Typography>
              <Typography 
                paragraph
                sx={{
                  lineHeight: 1.7,
                  color: theme.palette.text.secondary,
                  mb: 3,
                }}
              >
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography>hadijahkyampeire@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography>+1 (737) 363-8389</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography>Fairfield, Iowa</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/hadijah-kyampeire-418900141/"
                  target="_blank"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(234, 88, 12, 0.4)',
                    }
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/hadijahkyampeire"
                  target="_blank"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.4)',
                    }
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href="mailto:hadijahkyampeire@gmail.com"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(234, 88, 12, 0.4)',
                    }
                  }}
                >
                  Email
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Send Me a Message
              </Typography>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
