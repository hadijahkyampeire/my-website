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
  IconButton,
  useTheme,
  Stack
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Launch as LaunchIcon,
  WhatsApp as WhatsAppIcon,
  Sms as SmsIcon,
} from '@mui/icons-material';
import myPhoto from '../assets/omega.jpg';
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

// Zifah Voyages (live travel platform) screenshots
import zifahHero from '../assets/zifah-voyages/zifah-3.jpg';
import zifahPackages from '../assets/zifah-voyages/zifah-2.jpg';
import zifahFixtures from '../assets/zifah-voyages/zifah-1.jpg';
import zifahPartners from '../assets/zifah-voyages/zifah-4.jpg';

// MixedTrips (live safari/wildlife travel platform) screenshots
import mixedHero from '../assets/mixedtrips/mixedtrips-hero.jpg';
import mixedItineraries from '../assets/mixedtrips/mixedtrips-itineraries.jpg';
import mixedDestinations from '../assets/mixedtrips/mixedtrips-destinations.jpg';
import mixedMap from '../assets/mixedtrips/mixedtrips-map.jpg';

function Home() {
  const theme = useTheme();
  const stack = {
  "Frontend": [
    "React", "TypeScript", "Next.js", "React Native (Expo)",
    "Tailwind CSS", "Sass", "Material UI", "Ant Design", "Carbon Design",
    "Storybook"
  ],
  "State & Forms": [
    "Zustand", "Redux Toolkit", "TanStack Query", "RTK Query", "SWR",
    "React Hook Form", "Formik", "Zod", "react-i18next"
  ],
  "Backend & APIs": [
    "Node.js", "Express", "GraphQL", "Apollo Server",
    "REST APIs", "Swagger", "Java", "Spring Boot",
    "Python", "Flask", "SQL", "PostgreSQL", "MongoDB", "Neo4j"
  ],
  "Cloud, Infra & Practice": [
    "AWS (Lambda, API Gateway, S3, CloudFront, Cognito, DynamoDB, CloudFormation)",
    "Vercel", "Firebase", "GitHub Actions (CI/CD)",
    "Jest", "React Testing Library", "Cypress", "Playwright",
    "Micro-Frontends", "BFF Pattern", "TDD / BDD", "Accessibility (WCAG)",
    "Agile / Scrum"
  ]
};

  const experiences = [
  // PayPal — Buy Now, Pay Later (Contract via Insight Global)
  {
    company: "PayPal",
    companyContext: "Consumer fintech · NASDAQ: PYPL · ~430M+ active accounts globally. The Pay Later product family (Pay in 4, Pay Monthly) is embedded in millions of merchant checkouts.",
    role: "Full Stack Software Engineer · Buy Now, Pay Later · via Insight Global",
    location: "Austin, TX (Hybrid)",
    duration: "October 2025 – Present",
    bullets: [
      "Sole engineering owner of the US 'New To PayPal' (NTPP) Spinwheel prefill onboarding experience after launch — leading production support, issue triage, stakeholder communication, and incident resolution for a customer-facing flow.",
      "Delivered frontend and backend for Nova Credit Open Banking initiatives across Pay in 4 and Pay Monthly, enabling secure bank-account linking and a smoother credit-onboarding experience.",
      "Owned production releases end-to-end — QA validation, monitoring, rollback decisions, and post-release verification — for customer-facing credit-decisioning services.",
      "Used Datadog and Real User Monitoring (RUM) to proactively detect, investigate, and resolve production issues, measurably improving platform stability.",
      "Built GraphQL schemas and resolvers on the BNPL experience layer (Apollo Server + Express, Backend-for-Frontend pattern), aggregating credit-application, risk, offer, and user-profile services behind one endpoint — supporting the Australian Pay Later market migration.",
      "Authored shared Postman collections and environment-driven API workspaces (organized by country and product) used daily by engineers across the BNPL stack to validate multi-step REST and GraphQL flows."
    ],
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Apollo Server", "Express", "Datadog", "RUM", "Microservices", "BFF Pattern", "CI/CD"]
  },

  // Skye
  {
    company: "Skye",
    companyContext: "Tech-enabled executive coaching platform serving leaders from Google, Condé Nast, and Lyft. Acquired by Sounding Board in Nov 2024.",
    role: "Senior Software Engineer (Contract)",
    location: "New York, NY (Remote)",
    duration: "June 2024 – October 2024",
    bullets: [
      "Built session scheduling and interactive coaching-review analytics (React, Node.js, MUI Data Grid, Recharts) used by coaches and their leadership clients.",
      "Raised automated test coverage to ~90% with React Testing Library, reducing regressions and improving release confidence.",
      "Established CI/CD with GitHub Actions running build, unit, integration, and E2E pipelines before deployment.",
      "Optimized service-layer performance across Firestore / SQL / BigQuery data paths.",
      "Collaborated in agile ceremonies (backlog grooming, prioritization, peer reviews) to ensure clean, efficient delivery."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Material UI", "MUI Data Grid", "Recharts", "React Testing Library", "Firestore", "BigQuery", "GitHub Actions"]
  },

  // OpenMRS — Open Source (multi-year, concurrent with paid roles; absorbs the METS / OHRI work)
  {
    company: "OpenMRS",
    companyContext: "Community-developed open-source enterprise EMR platform powering national health systems across 50+ countries. Foundation of UgandaEMR / UgandaEMR+ (1,700+ health facilities) and a backbone of PEPFAR-supported HIV programs across Africa.",
    role: "Frontend Software Engineer · Open Source Contributor · OpenMRS HIV Reference Implementation (OHRI)",
    location: "Carmel, Indiana, USA (Remote · Concurrent with paid roles)",
    duration: "November 2020 – October 2024 · ~4 yrs",
    bullets: [
      "Multi-year contributor to OHRI — the OpenMRS HIV Reference Implementation, a specialized OpenMRS 3 (O3) package supporting HIV, TB, and related clinical workflows in national HIV programs.",
      "Architected a reusable JSON-schema-driven UI workflow framework on the O3 micro-frontends platform, cutting clinical-module code duplication by ~90%.",
      "Designed a drag-and-drop clinical form builder used by clinicians and public-health analysts; reduced form creation time by ~40%.",
      "Shipped healthcare modules and reusable UI components (React, TypeScript, Java Spring Boot) supporting clinical workflows across OpenMRS 3 implementations.",
      "Implemented multilingual support and automated end-to-end tests (Cypress) to improve international accessibility and reduce manual QA effort.",
      "Continued contributions during a 2024 engagement with Uganda's METS Program (Makerere University SPH), Uganda's lead PEPFAR strategic-information mechanism."
    ],
    technologies: ["React", "TypeScript", "OpenMRS 3 (O3)", "OHRI", "Java", "Spring Boot", "Formik", "Micro-Frontends", "Carbon Design System", "SWR", "Cypress"]
  },

  // Andela – Client - Sigma360 (combined: Software Engineer → Senior, 5y 7m)
  {
    company: "Sigma360",
    companyContext: "AI-powered financial-crime prevention and risk-intelligence platform used by Stripe and other major banks, payments firms, and fintechs — covering AML / watchlist screening, perpetual KYC, adverse-media monitoring, counterparty risk, and entity due diligence. Founded by former US national-security leadership.",
    role: "Senior Software Engineer (promoted from Software Engineer, 2020) · Andela placement",
    location: "New York, NY (Remote)",
    duration: "October 2018 – April 2024 · 5 yrs 7 mos",
    bullets: [
      "Built intelligent risk-decisioning software used by Stripe and other large financial institutions — supporting AML / watchlist screening, perpetual KYC, adverse-media monitoring, counterparty risk, and entity due diligence.",
      "Migrated a large Redux store to Zustand + TanStack Query, removing significant boilerplate, eliminating a recurring class of stale-data bugs, and enabling background refresh without manual cache invalidation.",
      "Designed and prototyped a Cytoscape.js + Neo4j risk-network visualization that became a key competitive differentiator in sales demos for the financial-crime use case.",
      "Modernized testing infrastructure: Enzyme → React Testing Library across the codebase, introduced Storybook, and stabilized the CI suite; lifted coverage on critical flows from ~50% to ~85%.",
      "Built the analytics dashboard (Chart.js + React PDF export) used by compliance analysts for client deliverables — reduced report-prep time by ~35%.",
      "Shipped reusable UI primitives adopted across product surfaces, cutting UI build time by ~20%.",
      "Established the team's PR review conventions and mentored engineers through code review and pairing."
    ],
    technologies: ["React", "TypeScript", "Ant Design", "Zustand", "Redux", "TanStack Query", "Cytoscape.js", "Neo4j", "Chart.js", "React PDF", "Jest", "React Testing Library", "Storybook", "SASS"]
  },

  // Andela Uganda Limited
  {
    company: "Andela",
    companyContext: "Global talent network placing engineers from emerging markets into senior roles at international tech companies. Kampala campus 2017–2018 was Andela's most selective intake.",
    role: "Software Engineer · Open Concept Lab (OpenMRS)",
    location: "Kampala, Uganda",
    duration: "December 2017 – September 2018",
    bullets: [
      "Led the Open Concept Lab project: a standalone React + Material UI app for managing the medical-concept dictionary shared across OpenMRS implementations.",
      "Practiced TDD with Jest / Enzyme, achieving up to 100% coverage on critical flows and reducing regressions.",
      "Delivered end-to-end features across React, Node.js, Java Spring, and Python Flask; automated CI/CD via GitHub Workflows.",
      "Mentored and onboarded incoming engineers through interviews, bootcamps, code reviews, and pair programming."
    ],
    technologies: ["React", "Material UI", "Bootstrap", "Java", "Spring", "Python", "Flask", "Jest", "Enzyme", "GitHub Workflows"]
  }
];


  const projects = [
    {
      title: "Zifah Voyages — Global Sports & Event Travel Platform",
      description: "Founder and principal engineer of a live travel-booking platform for major sporting events (FIFA World Cup 2026, Commonwealth Games). Built as a Next.js App Router storefront over a shared TypeScript monorepo, with live fixtures and group standings, tiered city packages, a build-your-trip flow, and Stripe/PayPal checkout. The same platform powers a second brand (MixedTrips) via per-domain payment routing — deploy once, serve two fully-branded sites. Backed by a Java/Spring Boot + PostgreSQL API, Duffel hotel supplier integration, AWS S3 media, and Playwright E2E across all apps.",
      technologies: ["Next.js", "React 19", "TypeScript", "Java / Spring Boot", "PostgreSQL", "Stripe", "PayPal", "AWS S3", "Duffel", "GA4"],
      github: "",
      live: "https://zifahvoyages.com",
      images: [zifahHero, zifahPackages, zifahFixtures, zifahPartners]
    },
    {
      title: "MixedTrips — Tailor-Made African Safari Platform",
      description: "A live, tailor-made safari and wildlife travel platform (Uganda gorilla treks, the Great Migration, Victoria Falls) built on the same multi-brand monorepo as Zifah Voyages. Features hand-built itineraries with luxury pricing tiers, an interactive Africa destinations map, a build-your-safari flow, multi-currency and multi-language support, and Stripe/PayPal checkout over a Java/Spring Boot + PostgreSQL API. Demonstrates true multi-tenancy: one shared atomic-design component library serves both brands, with payments, analytics, and branding selected by domain at request time — adding another brand is mostly configuration, not a new codebase.",
      technologies: ["Next.js", "React 19", "TypeScript", "TanStack Query", "Java / Spring Boot", "PostgreSQL", "Stripe", "PayPal", "AWS S3", "i18n"],
      github: "",
      live: "https://mixedtrips.com",
      images: [mixedHero, mixedItineraries, mixedDestinations, mixedMap]
    },
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

    const hasImages = project.images && project.images.length > 0;
    const projectImage = hasImages ? project.images[currentImageIndex] : null;

    return (
      <Card 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: theme.palette.secondary.main,
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease',
          },
          '&:hover::before': {
            transform: 'scaleX(1)',
          }
        }}
      >
        {hasImages ? (
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
        ) : (
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              minHeight: { xs: 220, md: 'auto' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              p: 4,
              textAlign: 'center',
              color: '#fff',
              background: 'linear-gradient(135deg, #1a2960 0%, #0f172a 100%)',
              borderRight: { md: `1px solid ${theme.palette.divider}` },
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {project.title.split('—')[0].trim()}
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Live · Same platform, second brand
            </Typography>
          </Box>
        )}
        <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1, p: 0, pb: 2 }}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
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
          <CardActions sx={{ p: 0, gap: 1.5 }}>
            {project.live && (
              <Button
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                endIcon={<LaunchIcon />}
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  '& .MuiSvgIcon-root': { fontSize: 20 },
                  '&:hover': { bgcolor: theme.palette.secondary.dark },
                }}
              >
                Visit site
              </Button>
            )}
            {project.github && (
              <Button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<GitHubIcon />}
                aria-label={`${project.title} GitHub repository`}
                sx={{
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.divider,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  '& .MuiSvgIcon-root': { fontSize: 22 },
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    bgcolor: 'transparent',
                  },
                }}
              >
                Code
              </Button>
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
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(ellipse at top, #1a1d24 0%, #0a0b0d 60%)'
            : 'radial-gradient(ellipse at top, #1a2960 0%, #0f172a 70%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-64px',
          paddingTop: '64px',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ py: { xs: 8, md: 12 } }}>
            {/* Visible H1 contains the name — critical for "Hadijah Kyampeire" search ranking. */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.05rem' },
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: theme.palette.secondary.main,
                mb: 2,
                animation: 'slideUp 0.6s ease-out',
              }}
            >
              Hadijah Kyampeire — Senior Full-Stack Engineer
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                mb: 4,
                animation: 'slideUp 0.7s ease-out 0.05s both',
              }}
            >
              Building production-scale web applications for regulated industries.
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 3,
                color: 'rgba(255, 255, 255, 0.85)',
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: 680,
                animation: 'slideUp 0.7s ease-out 0.15s both',
              }}
            >
              I'm <Box component="strong" sx={{ color: '#fff', fontWeight: 700 }}>Hadijah Kyampeire</Box>, a senior full-stack engineer building onboarding and credit-decisioning on <Box component="strong" sx={{ color: '#fff', fontWeight: 700 }}>PayPal's Buy Now, Pay Later</Box> platform — where I own a customer-facing onboarding flow end-to-end. Eight years across consumer fintech, B2B risk analytics, and clinical informatics, and the <Box component="strong" sx={{ color: '#fff', fontWeight: 700 }}>founder-engineer behind two live travel-booking platforms</Box> (Java, Next.js, Stripe/PayPal, AWS).
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 5,
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: 1.6,
                maxWidth: 680,
                animation: 'slideUp 0.7s ease-out 0.25s both',
              }}
            >
              Based in Austin, Texas · Work-authorized in the US (on-site, hybrid, or remote) · Open to Canada with sponsorship.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                flexWrap: 'wrap',
                animation: 'slideUp 0.7s ease-out 0.35s both',
                mb: 8,
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('projects')}
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: '#fff',
                  fontWeight: 600,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 1,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: theme.palette.secondary.dark,
                    boxShadow: 'none',
                    transform: 'none',
                  }
                }}
              >
                View selected work →
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#fff',
                  fontWeight: 600,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 1,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transform: 'none',
                  }
                }}
              >
                Email me
              </Button>
              <CVButton />
            </Box>

            {/* Trusted-by credibility row */}
            <Box
              sx={{
                pt: 4,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                animation: 'slideUp 0.7s ease-out 0.45s both',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  opacity: 0.5,
                  mb: 1.5,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              >
                Engineering teams I've worked with
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 2, md: 4 },
                  opacity: 0.85,
                  fontWeight: 600,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  letterSpacing: '-0.01em',
                }}
              >
                <Box component="span">PayPal</Box>
                <Box component="span" sx={{ opacity: 0.3 }}>·</Box>
                <Box component="span">Sigma360</Box>
                <Box component="span" sx={{ opacity: 0.3 }}>·</Box>
                <Box component="span">OpenMRS</Box>
                <Box component="span" sx={{ opacity: 0.3 }}>·</Box>
                <Box component="span">Andela</Box>
                <Box component="span" sx={{ opacity: 0.3 }}>·</Box>
                <Box component="span">Skye</Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
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
                background: theme.palette.secondary.main,
                borderRadius: 2,
              }
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Box
                component="img"
                src={myPhoto}
                alt="Hadijah Kyampeire"
                sx={{
                  width: { xs: 160, md: 220 },
                  height: { xs: 160, md: 220 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  display: 'block',
                }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                I'm a senior full-stack engineer with eight years across regulated software — consumer fintech, B2B risk analytics, and clinical informatics. I currently build on PayPal's Buy Now, Pay Later platform, where I own a customer-facing onboarding experience end-to-end. On the side, I founded and operate two production travel-booking platforms (Zifah Voyages and MixedTrips) on Java, Next.js, and AWS — payments, admin, and infrastructure included.
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                My strongest work happens at the intersection of frontend architecture and product judgment — designing the abstractions that let small teams move fast inside large codebases, and pushing back when "fast" would mean "fragile." I care about performance budgets, accessibility, and the kind of testing that catches real bugs.
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                Outside paid work, I've contributed to OpenMRS for ~4 years (recognized as a Development Fellow / <code style={{ fontFamily: 'inherit' }}>/dev/3</code> contributor), mentored a Google Summer of Code student in 2023, and facilitate frontend modules at Witu (Women in Tech Uganda) Code Academy. I'm pursuing an MSc in Computer Science at Maharishi International University while working full-time.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Engineering Approach Section */}
      <Box id="approach" sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              letterSpacing: 3,
              color: theme.palette.secondary.main,
              fontWeight: 600,
              mb: 1,
            }}
          >
            How I work
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{ mb: 5, fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Engineering Approach
          </Typography>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {[
              {
                title: "Architecture before abstraction",
                body: "Three repeated lines is fine; the second time a pattern recurs, I document it. The third time, I refactor. Premature abstraction has cost me more than duplication ever has."
              },
              {
                title: "Tests as design tools, not coverage targets",
                body: "I write tests where they reduce ambiguity — at module boundaries, around regression-prone flows, and at the integration seam. Coverage is the side effect, not the goal."
              },
              {
                title: "Performance is product",
                body: "On consumer-facing surfaces, latency and bundle size are features. I instrument what I ship, set budgets up front, and treat regressions like bugs — not stylistic preferences."
              },
              {
                title: "The boring path on purpose",
                body: "TypeScript over runtime cleverness. Server-driven where it removes deploy coupling. Design systems over bespoke components. The boring path scales further than the interesting one."
              }
            ].map((principle, idx) => (
              <Grid item xs={12} md={6} key={principle.title}>
                <Box sx={{ display: 'flex', gap: 2.5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 700,
                      fontVariantNumeric: 'tabular-nums',
                      minWidth: 40,
                      lineHeight: 1.1,
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </Typography>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {principle.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {principle.body}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stack Section */}
      <Box id="skills" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              letterSpacing: 3,
              color: theme.palette.secondary.main,
              fontWeight: 600,
              mb: 1,
            }}
          >
            Technical stack
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{ mb: 5, fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            What I work with
          </Typography>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {Object.entries(stack).map(([category, items]) => (
              <Grid item xs={12} sm={6} md={3} key={category}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: '0.7rem',
                    mb: 2,
                    pb: 1.5,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  {category}
                </Typography>
                <Stack spacing={1}>
                  {items.map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      sx={{
                        color: theme.palette.text.primary,
                        lineHeight: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      {/* <Box id="experience" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
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
                background: theme.palette.secondary.main,
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
                    background: theme.palette.secondary.main,
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography 
                      variant="h6" 
                      sx={{
                        color: theme.palette.text.primary,
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
      <Box id="experience" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
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
        background: theme.palette.secondary.main,
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

      {/* Community & Open Source Section */}
      <Box id="community" sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              letterSpacing: 3,
              color: theme.palette.secondary.main,
              fontWeight: 600,
              mb: 1,
            }}
          >
            Open Source & Community
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{ mb: 5, fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Beyond the day job
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {[
              {
                title: "OpenMRS · /dev/3 Contributor & Development Fellow",
                body: "Multi-year contributor to OpenMRS — recognized as /dev/3 (senior community contributor) and named a Development Fellow with a presentation at the OpenMRS symposium. Work spans the OpenMRS 3 micro-frontends platform, OHRI (HIV Reference Implementation), and Open Concept Lab.",
                link: "https://talk.openmrs.org/t/my-fellowship-journey-hadijah-kyampeire/33275",
                linkLabel: "OpenMRS Fellowship Journey →"
              },
              {
                title: "Google Summer of Code (GSoC) · Primary Mentor 2023",
                body: "Primary mentor for the 2023 GSoC project 'Migrating Vanilla React forms to React Hook Form' under OpenMRS. Backup mentor in 2022 for the OCL Subscription Module for OpenMRS 3.",
                link: "https://talk.openmrs.org/t/gsoc-2023-migrating-vanilla-react-forms-to-reacthookform-final-evaluation/40365",
                linkLabel: "GSoC 2023 final evaluation →"
              },
              {
                title: "International Committee of the Red Cross (ICRC)",
                body: "Contributed clinical tools and form-engine work through OpenMRS implementations used in ICRC field deployments — humanitarian healthcare software running in some of the hardest operating environments in the world.",
                link: null,
                linkLabel: null
              },
              {
                title: "Witu (Women in Tech Uganda) Code Academy · Instructor",
                body: "Facilitating frontend (JavaScript / React), data communications, and networking modules at Witu's Code Academy — supporting women entering software engineering in East Africa.",
                link: null,
                linkLabel: null
              },
              {
                title: "Writing · Medium",
                body: "Published on Medium about web accessibility (going beyond the WCAG checklist), engineering learning curves, and the realities of joining an engineering bootcamp.",
                link: "https://medium.com/@hadijah315",
                linkLabel: "Read on Medium →"
              },
              {
                title: "GitHub · 100+ repositories",
                body: "Open-source code, learning projects, contributions to OpenMRS modules, and the source of this portfolio.",
                link: "https://github.com/hadijahkyampeire",
                linkLabel: "github.com/hadijahkyampeire →"
              }
            ].map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    transition: 'border-color 0.15s ease',
                    '&:hover': {
                      borderColor: theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.18)'
                        : 'rgba(15,23,42,0.18)',
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: theme.palette.text.primary,
                      letterSpacing: '-0.005em',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      mb: item.link ? 1.5 : 0,
                    }}
                  >
                    {item.body}
                  </Typography>
                  {item.link && (
                    <Button
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        p: 0,
                        minWidth: 0,
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                        }
                      }}
                    >
                      {item.linkLabel}
                    </Button>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: { xs: 6, md: 9 } }}>
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
                background: theme.palette.secondary.main,
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
      <Box id="education" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
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
                background: theme.palette.secondary.main,
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
                      background: theme.palette.secondary.main,
                    }
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.text.primary,
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

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 6, md: 9 } }}>
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
                background: theme.palette.secondary.main,
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
                  color: theme.palette.text.primary,
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
                Currently open to senior full-stack roles. I'm work-authorized in the US — on-site, hybrid, or remote all welcome. For Canada, I'm open to teams that can sponsor relocation. The fastest way to reach me is WhatsApp or text; email also works well.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography>hadijahkyampeire@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography>Austin, TX (CST) · US-authorized · Canada with sponsorship</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  href="https://wa.me/17373638389?text=Hi%20Hadijah%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: '#25D366',
                    color: '#fff',
                    fontWeight: 600,
                    justifyContent: 'flex-start',
                    px: 2.5,
                    py: 1.25,
                    '&:hover': { bgcolor: '#1ebe57' }
                  }}
                >
                  WhatsApp me
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<SmsIcon />}
                  href="sms:+17373638389?body=Hi%20Hadijah%2C%20I%20saw%20your%20portfolio."
                  sx={{
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    justifyContent: 'flex-start',
                    px: 2.5,
                    py: 1.25,
                    '&:hover': {
                      borderColor: theme.palette.text.primary,
                      bgcolor: theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(15,23,42,0.04)',
                    }
                  }}
                >
                  Text me (SMS)
                </Button>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href="mailto:hadijahkyampeire@gmail.com"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: '#fff',
                    fontWeight: 600,
                    justifyContent: 'flex-start',
                    px: 2.5,
                    py: 1.25,
                    '&:hover': { bgcolor: theme.palette.secondary.dark }
                  }}
                >
                  Email
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/hadijahkyampeire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    justifyContent: 'flex-start',
                    px: 2.5,
                    py: 1.25,
                    '&:hover': {
                      borderColor: theme.palette.text.primary,
                      bgcolor: theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(15,23,42,0.04)',
                    }
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/hadijahkyampeire"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    justifyContent: 'flex-start',
                    px: 2.5,
                    py: 1.25,
                    '&:hover': {
                      borderColor: theme.palette.text.primary,
                      bgcolor: theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(15,23,42,0.04)',
                    }
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  color: theme.palette.text.primary,
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
