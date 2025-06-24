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

function Home() {
  const skills = {
    "Core Strengths": ["Frontend Development", "UI/UX", "Micro-frontend Architecture", "State Management", "Object-Oriented Programming", "Testing & Debugging", "Agile", "Team Leadership & Mentorship", "Cross-functional Collaboration", "Version Control (Git)", "API Integration", "AWS cloud computing"],
    "Languages & Web Tech": ["JavaScript", "TypeScript", "ReactJS", "HTML", "CSS", "Sass", "TailwindCSS", "NodeJS", "REST"],
    "Frameworks & Libraries": ["NextJS", "Material UI", "Ant Design", "Formik", "SWR", "Redux", "TanStack Query", "Chart.js"],
    "Tools & Platforms": ["Webpack", "Create React App", "Redux DevTools", "Eslint", "Visual Studio", "IntelliJ", "JIRA", "Trello", "Heroku", "Firebase", "AWS"],
    "Databases & SDLC": ["Postgres", "MongoDB", "Agile", "Scrum"],
    "Design Patterns": ["Higher Order Components (HOC)", "Component Pattern", "Micro Frontends"]
  };

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Monitoring and Evaluation Technical Support (METS) Program, Kampala, Uganda",
      duration: "May 2024 – September 2024",
      description: "Architected a reusable JSON schema-based UI workflow framework for OpenMRS, reducing code duplication by 90%. Designed a drag-and-drop UI for a clinical form builder, reducing form creation time by 40%. Developed micro-frontend modules, accelerating feature deployment by 40%.",
      technologies: ["ReactJs", "Typescript", "Formik", "Micro-Frontends", "Carbon design", "SWR"]
    },
    {
      title: "Mid-level Frontend Software Engineer",
      company: "Sigma360, New York, US (Remote)",
      duration: "June 2020 – April 2024",
      description: "Led frontend development through 3 iterations for clients like Stripe and Barclays. Spearheaded a PoC for a graph-driven risk network, boosting product competitiveness by 40%. Engineered an Analytics Dashboard, reducing data analysis time by 35%. Designed a SigmaSearch feature, significantly increasing client acquisition.",
      technologies: ["ReactJS", "TypeScript", "AntDesign", "ReactPDF", "ChartJS", "Cytoscape", "Neo4j"]
    },
    {
      title: "Junior Front-end Software Engineer",
      company: "Sigma360, New York, US (Remote)",
      duration: "October 2018 – May 2020",
      description: "Developed a standalone front-end app for entity risk rating, improving productivity by 70%. Mentored a new developer, enabling them to contribute to production code 60% faster. Integrated Google Analytics for data-driven feature prioritization. Designed reusable UI components, reducing UI development time by 20%.",
      technologies: ["JavaScript", "React", "Ant Design", "ChartJs", "React PDF", "SASS", "TanStack Query", "Redux"]
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
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Hi, I'm Hadijah Kyampeire
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ mb: 3, opacity: 0.9 }}>
                Frontend Javascript Software Engineer
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.8 }}>
                Results-driven Frontend Software Engineer with 6 years of experience building high-performance web applications using ReactJS and the modern Javascript ecosystem. Skilled in delivering scalable solutions in FinTech and Health Informatics.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'grey.100' }
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
                    '&:hover': { borderColor: 'grey.300', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  View My Work
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                src={myPhoto}
                sx={{
                  width: 300,
                  height: 300,
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
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

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Skills & Technologies
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skills).map(([category, skillList]) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <Card sx={{ height: '100%', p: 2 }}>
                  <Typography variant="h6" gutterBottom color="primary">
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillList.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        color="primary"
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
      <Box id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Work Experience
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {experiences.map((exp, index) => (
              <Card key={index} sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" color="primary">
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography paragraph>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
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

      {/* Education Section */}
      <Box id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Education
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.school}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.year}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {edu.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Certifications Section */}
      <Box id="certifications" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Certifications
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 2, height: '100%' }}>
                  {cert.image && (
                    <Box
                      component="img"
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '300px',
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
                  <Typography variant="h6">{cert.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
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
                      sx={{mt: 1}}
                    >
                      View Certificate
                    </Button>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* HackerRank Section */}
      <Box id="hackerrank" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            HackerRank Achievements
          </Typography>
          <Card sx={{ p: 3 }}>
            <Grid container spacing={4} alignItems="flex-start">
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom><EmojiEventsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />Badges</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {["Problem Solving", "30 Days of Code", "10 Days of JS", "React"].map(badge => <Chip key={badge} label={badge} color="primary" />)}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom><CodeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />Top Skills</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {["React", "Javascript (Intermediate)", "CSS", "TypeScript", "Java"].map(skill => <Chip key={skill} label={skill} variant="outlined" />)}
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                href="https://www.hackerrank.com/profile/hadijah315"
                target="_blank"
                endIcon={<LaunchIcon />}
              >
                View Full HackerRank Profile
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            Get In Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Let's Connect
              </Typography>
              <Typography paragraph>
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon color="primary" />
                  <Typography>hadijahkyampeire@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon color="primary" />
                  <Typography>+1 (737) 363-8389</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationIcon color="primary" />
                  <Typography>Remote</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/hadijah-kyampeire-418900141/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/hadijahkyampeire"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href="mailto:hadijahkyampeire@gmail.com"
                >
                  Email
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
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
