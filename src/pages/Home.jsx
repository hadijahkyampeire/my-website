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
import myPhoto from '../assets/hadijah-headshot.jpg';
import ContactForm from '../components/ContactForm';

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

// Litter Stars — kids learning app screenshots (my own product)
import kidsProfiles from '../assets/kids-app/profiles.png';
import kidsLevels from '../assets/kids-app/levels.png';
import kidsClasses from '../assets/kids-app/classes.png';
import kidsSubjects from '../assets/kids-app/subjects.png';
import kidsStories from '../assets/kids-app/stories.png';
import kidsStoryReader from '../assets/kids-app/story-reader.png';

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
  const isDark = theme.palette.mode === 'dark';
  // Accent used as *text* needs the AA-contrast variant; `secondary.main` is for fills.
  const accentText = theme.palette.accent.text;
  const accentSoft = theme.palette.accent.soft;
  const accentSoftBorder = theme.palette.accent.softBorder;
  // Filled accent buttons invert per mode: dark orange + white text on light,
  // bright orange + near-black text on dark. Both land above 4.5:1.
  const accentButton = {
    bgcolor: isDark ? theme.palette.secondary.main : accentText,
    color: isDark ? '#0b0d10' : '#ffffff',
    '&:hover': {
      bgcolor: isDark ? theme.palette.secondary.light : theme.palette.accent.dark,
      boxShadow: 'none',
    },
  };
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
    companyContext: "Consumer fintech · NASDAQ: PYPL · ~430M+ active accounts. Pay Later is embedded in millions of merchant checkouts.",
    role: "Full Stack Software Engineer · Buy Now, Pay Later · via Insight Global",
    location: "Austin, TX (Hybrid)",
    duration: "October 2025 – July 2026",
    bullets: [
      "Sole engineering owner of the US 'New To PayPal' Spinwheel prefill onboarding flow post-launch: production support, triage, incidents, stakeholder comms.",
      "Built full-stack Open Banking capabilities for Nova Credit across Pay in 4 and Pay Monthly, enabling secure bank-account linking.",
      "Owned production releases end-to-end: QA validation, monitoring, rollback decisions, post-release verification.",
      "Diagnosed production issues with Datadog RUM and distributed tracing, accelerating root-cause analysis across frontend and backend.",
      "Built GraphQL schemas and resolvers on the BNPL experience layer (Apollo Server + Express, BFF pattern), aggregating four services behind one endpoint.",
      "Authored shared Postman collections used daily across the BNPL stack to validate multi-step REST and GraphQL flows."
    ],
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Apollo Server", "Express", "Datadog", "RUM", "Microservices", "BFF Pattern", "CI/CD"]
  },

  // Skye
  {
    company: "Skye",
    companyContext: "Executive coaching platform serving leaders from Google, Condé Nast, and Lyft. Acquired by Sounding Board, Nov 2024.",
    role: "Senior Software Engineer (Contract)",
    location: "New York, NY (Remote)",
    duration: "June 2024 – October 2024",
    bullets: [
      "Built session scheduling and coaching-review analytics (React, Node.js, MUI Data Grid, Recharts) used by coaches and their clients.",
      "Raised automated test coverage to ~90% with React Testing Library, reducing regressions and improving release confidence.",
      "Established CI/CD with GitHub Actions: build, unit, integration, and E2E before deploy.",
      "Optimized service-layer performance across Firestore / SQL / BigQuery data paths.",
      "Collaborated with engineering, product, and design leadership on scoping and delivery."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Material UI", "MUI Data Grid", "Recharts", "React Testing Library", "Firestore", "BigQuery", "GitHub Actions"]
  },

  // Andela – Client - Sigma360 (combined: Software Engineer → Senior, 5y 7m)
  {
    company: "Sigma360",
    companyContext: "Financial-crime prevention and risk intelligence — AML screening, KYC, adverse-media monitoring — used by Stripe, Barclays, and other institutions.",
    role: "Senior Software Engineer (promoted from Software Engineer, 2020) · Andela placement",
    location: "New York, NY (Remote)",
    duration: "October 2018 – April 2024 · 5 yrs 7 mos",
    bullets: [
      "One of the early frontend engineers scaling the risk platform for Stripe, Barclays, and other global institutions.",
      "Migrated a large Redux store to Zustand + TanStack Query, killing a recurring class of stale-data bugs and most of the boilerplate.",
      "Prototyped a Cytoscape.js + Neo4j risk-network visualization that became a differentiator in sales demos.",
      "Modernized testing: Enzyme → React Testing Library, introduced Storybook, lifted critical-flow coverage from ~50% to ~85%.",
      "Built the analytics dashboard (Chart.js + React PDF) used by compliance analysts, cutting investigation time by ~35%.",
      "Shipped reusable UI primitives adopted across product surfaces, cutting UI build time by ~20%.",
      "Set the team's PR review conventions and mentored engineers through review and pairing."
    ],
    technologies: ["React", "TypeScript", "Ant Design", "Zustand", "Redux", "TanStack Query", "Cytoscape.js", "Neo4j", "Chart.js", "React PDF", "Jest", "React Testing Library", "Storybook", "SASS"]
  },

  // OpenMRS — Open Source (multi-year, concurrent with paid roles; absorbs the METS / OHRI work)
  {
    company: "OpenMRS",
    companyContext: "Open-source EMR powering national health systems in 50+ countries, including UgandaEMR (1,700+ facilities) and PEPFAR HIV programs.",
    role: "Frontend Software Engineer · Open Source Contributor · OpenMRS HIV Reference Implementation (OHRI)",
    location: "Carmel, Indiana, USA (Remote · Concurrent with paid roles)",
    duration: "November 2020 – October 2024 · ~4 yrs",
    bullets: [
      "Multi-year contributor to OHRI, the OpenMRS 3 package supporting HIV and TB clinical workflows in national health programs.",
      "Architected a JSON-schema-driven UI workflow framework on O3 micro-frontends, cutting module code duplication by ~90%.",
      "Designed a drag-and-drop clinical form builder used by clinicians and public-health analysts; reduced form creation time by ~40%.",
      "Shipped healthcare modules and reusable UI components (React, TypeScript, Spring Boot) across OpenMRS 3 implementations.",
      "Added multilingual support and Cypress E2E coverage, cutting manual QA effort.",
      "Continued through a 2024 engagement with Uganda's METS Program (Makerere University SPH)."
    ],
    technologies: ["React", "TypeScript", "OpenMRS 3 (O3)", "OHRI", "Java", "Spring Boot", "Formik", "Micro-Frontends", "Carbon Design System", "SWR", "Cypress"]
  },

  // Andela Uganda Limited
  {
    company: "Andela",
    companyContext: "Global talent network placing engineers from emerging markets into international tech roles.",
    role: "Software Engineer · Open Concept Lab (OpenMRS)",
    location: "Kampala, Uganda",
    duration: "December 2017 – September 2018",
    bullets: [
      "Led Open Concept Lab: a React + Material UI app for the medical-concept dictionary shared across OpenMRS implementations.",
      "Practiced TDD with Jest, reaching up to 100% coverage on critical flows.",
      "Delivered end-to-end features across React, Node.js, Java Spring, and Python Flask, with CI/CD in GitHub Actions.",
      "Mentored and onboarded incoming engineers through bootcamps, code review, and pairing."
    ],
    technologies: ["React", "Material UI", "Bootstrap", "Java", "Spring", "Python", "Flask", "Jest", "Enzyme", "GitHub Workflows"]
  }
];


  const projects = [
    {
      // The one product that is hers end to end — leads the list on purpose.
      title: "Litter Stars — Kids Learning App",
      tagline: "Founded & built solo",
      orientation: "portrait",
      description: "A learning app for children aged 3–12 that I founded and build on my own, from product scope through infrastructure.",
      highlights: [
        "One parent account, multiple child profiles with separate progress",
        "Age-banded curriculum — Preschool through Upper Primary, higher levels behind a subscription",
        "Seven subjects per class with per-lesson progress and a daily 'pick up where you left off'",
        "Illustrated story reader with narration and comprehension questions",
      ],
      technologies: ["React Native (Expo)", "React", "TypeScript", "AWS (serverless)"],
      github: "",
      live: "",
      images: [kidsProfiles, kidsLevels, kidsClasses, kidsSubjects, kidsStories, kidsStoryReader]
    },
    {
      title: "Zifah Voyages — Global Sports & Event Travel Platform",
      tagline: "Live · Client platform",
      description: "Lead engineer on a live booking platform for major sporting events — FIFA World Cup 2026 and the Commonwealth Games.",
      highlights: [
        "Live fixtures and standings, tiered city packages, build-your-trip flow",
        "Stripe and PayPal checkout over a Java/Spring Boot + PostgreSQL API",
        "Next.js App Router storefront on a shared TypeScript monorepo",
        "Duffel hotel supplier integration; Playwright E2E across all apps",
      ],
      technologies: ["Next.js", "React 19", "TypeScript", "Java / Spring Boot", "PostgreSQL", "Stripe", "PayPal", "AWS S3", "Duffel", "GA4"],
      github: "",
      live: "https://zifahvoyages.com",
      images: [zifahHero, zifahPackages, zifahFixtures, zifahPartners]
    },
    {
      title: "MixedTrips — Tailor-Made African Safari Platform",
      tagline: "Live · Client platform",
      description: "A live safari and wildlife travel platform running on the same codebase as Zifah Voyages — one platform, two fully-branded sites.",
      highlights: [
        "Hand-built itineraries, interactive Africa map, build-your-safari flow",
        "Multi-currency and multi-language, Stripe/PayPal checkout",
        "Payments, analytics, and branding selected by domain at request time",
        "Adding a third brand is configuration, not a new codebase",
      ],
      technologies: ["Next.js", "React 19", "TypeScript", "TanStack Query", "Java / Spring Boot", "PostgreSQL", "Stripe", "PayPal", "AWS S3", "i18n"],
      github: "",
      live: "https://mixedtrips.com",
      images: [mixedHero, mixedItineraries, mixedDestinations, mixedMap]
    },
    {
      title: "OpenMRS Clinical Views & Form Builder (METS Program)",
      tagline: "Open source",
      description: "A JSON-schema-driven UI framework for the OpenMRS HIV Reference Implementation, used in national HIV programs.",
      highlights: [
        "Cut clinical-module code duplication by ~90%",
        "Drag-and-drop form builder cut form creation time by ~40%",
        "Dynamic clinical views on the O3 micro-frontends platform",
      ],
      technologies: ["ReactJs", "Typescript", "Formik", "Micro-Frontends", "Carbon design", "SWR"],
      github: "", // Add GitHub link if available
      live: "",
      images: [metsImg1, metsImg2, metsImg3]
    },
    {
      title: "Risk & Compliance Platform (Sigma360)",
      tagline: "Fintech · Risk",
      description: "Frontend for a financial-crime and risk platform used by Stripe, Barclays, and other institutions.",
      highlights: [
        "Analytics dashboard cut analyst investigation time by ~35%",
        "Cytoscape + Neo4j risk-network visualization, built as a POC",
        "Reusable component library adopted across multiple apps",
      ],
      technologies: ["ReactJS", "SASS", "AntDesign", "ChartJS", "Cytoscape", "Neo4j"],
      github: "", // Add GitHub link if available
      live: "",
      images: [sigmaImg1, sigmaImg2, sigmaImg3, sigmaImg4]
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Maharishi International University, Fairfield, Iowa, USA",
      year: "Completing September 2026",
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
    // Phone screenshots are ~0.58 aspect. Letterboxing them into the landscape
    // media slot leaves half the panel empty, so they get a device treatment
    // and a narrower column instead.
    const isPortrait = project.orientation === 'portrait';

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
        {hasImages && isPortrait ? (
          <Box
            sx={{
              width: { xs: '100%', md: '34%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 3, md: 4 },
              background: isDark
                ? 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                : 'linear-gradient(160deg, #eef3fc 0%, #e6edf9 100%)',
              borderRight: { md: `1px solid ${theme.palette.divider}` },
            }}
          >
            <Box
              component="img"
              src={projectImage}
              alt=""
              sx={{
                display: 'block',
                width: '100%',
                maxWidth: 260,
                maxHeight: 420,
                objectFit: 'contain',
                objectPosition: 'top',
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: isDark
                  ? '0 12px 30px rgba(0,0,0,0.45)'
                  : '0 2px 4px rgba(15,23,42,0.05), 0 14px 34px rgba(15,23,42,0.16)',
              }}
            />
          </Box>
        ) : hasImages ? (
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
            {/* Sits on a dark navy tile, so it keeps the bright accent for contrast */}
            <Typography variant="caption" sx={{ color: '#fb923c', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              {project.tagline}
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
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              {project.description}
            </Typography>
            {project.highlights?.length > 0 && (
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 2.5 }}>
                {project.highlights.map((point) => (
                  <Box
                    component="li"
                    key={point}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.25,
                      mb: 0.75,
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        flexShrink: 0,
                        width: 5,
                        height: 5,
                        mt: '9px',
                        borderRadius: '50%',
                        bgcolor: accentText,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.55 }}
                    >
                      {point}
                    </Typography>
                  </Box>
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
                  sx={{
                    borderColor: accentSoftBorder,
                    backgroundColor: accentSoft,
                    color: accentText,
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: accentButton.bgcolor,
                      borderColor: accentButton.bgcolor,
                      color: accentButton.color,
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
                  ...accentButton,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 2.5,
                  py: 1,
                  '& .MuiSvgIcon-root': { fontSize: 20 },
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
                    color: accentText,
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
          // Height comes from the content, not a forced 100vh — that was leaving
          // a screenful of dead space under the credibility row.
          display: 'flex',
          alignItems: 'center',
          background: isDark
            ? 'radial-gradient(ellipse at top, #1a1d24 0%, #0a0b0d 60%)'
            : 'linear-gradient(165deg, #ffffff 0%, #eef3fc 40%, #e3ecf9 100%)',
          color: theme.palette.text.primary,
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-64px',
          paddingTop: '64px',
          borderBottom: `1px solid ${theme.palette.divider}`,
          // Two soft washes give the light hero depth without adding clutter
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-8%',
            width: 620,
            height: 620,
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(59,89,152,0.14) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(30,58,138,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            right: '-8%',
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(194,65,12,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        {/* Same container as every section below, so all left edges line up */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ py: { xs: 7, md: 10 }, textAlign: 'left' }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
            {/* Visible H1 contains the name — critical for "Hadijah Kyampeire" search ranking. */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.05rem' },
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: accentText,
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
                fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3rem', lg: '3.5rem' },
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: isDark ? '#ffffff' : theme.palette.primary.main,
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
                color: theme.palette.text.secondary,
                fontWeight: 400,
                lineHeight: 1.7,
                animation: 'slideUp 0.7s ease-out 0.15s both',
              }}
            >
              8+ years across FinTech, HealthTech, TravelTech, and EdTech. Most recently I owned a customer-facing onboarding flow end-to-end on <Box component="strong" sx={{ color: theme.palette.text.primary, fontWeight: 700 }}>PayPal's Buy Now, Pay Later</Box> platform.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 5,
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                animation: 'slideUp 0.7s ease-out 0.25s both',
              }}
            >
              Based in Acton, Massachusetts · Work-authorized in the US (on-site, hybrid, or remote) · Open to Canada with sponsorship.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                flexWrap: 'wrap',
                animation: 'slideUp 0.7s ease-out 0.35s both',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('projects')}
                sx={{
                  ...accentButton,
                  fontWeight: 600,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 1,
                  textTransform: 'none',
                }}
              >
                View selected work →
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  borderColor: isDark ? 'rgba(255,255,255,0.3)' : theme.palette.primary.main,
                  color: isDark ? '#fff' : theme.palette.primary.main,
                  fontWeight: 600,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 1,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: isDark ? '#fff' : theme.palette.primary.dark,
                    bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(30,58,138,0.06)',
                    transform: 'none',
                  }
                }}
              >
                Email me
              </Button>
              <CVButton />
            </Box>
            </Grid>

            {/* Portrait — gives the hero a focal point instead of a wall of text */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: 300, md: 380 },
                  mx: { xs: 'auto', md: 0 },
                  ml: { md: 'auto' },
                  animation: 'scaleIn 0.7s ease-out 0.2s both',
                }}
              >
                {/* Offset accent frame behind the photo */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    transform: 'translate(18px, 18px)',
                    borderRadius: 4,
                    border: `2px solid ${accentSoftBorder}`,
                    pointerEvents: 'none',
                  }}
                />
                <Box
                  component="img"
                  src={myPhoto}
                  alt="Hadijah Kyampeire"
                  sx={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: 4,
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: isDark
                      ? '0 20px 50px rgba(0,0,0,0.5)'
                      : '0 2px 4px rgba(15,23,42,0.04), 0 20px 50px rgba(15,23,42,0.16)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

            {/* Trusted-by credibility row */}
            <Box
              sx={{
                mt: { xs: 6, md: 9 },
                pt: 4,
                borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : theme.palette.divider}`,
                animation: 'slideUp 0.7s ease-out 0.45s both',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  color: theme.palette.text.secondary,
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
                  alignItems: 'center',
                  gap: { xs: 2, md: 4 },
                  color: isDark ? 'rgba(255,255,255,0.85)' : theme.palette.primary.main,
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
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.0625rem',
                  fontWeight: 400,
                  lineHeight: 1.85,
                  color: theme.palette.text.secondary,
                }}
              >
                I build scalable web applications, and I've spent 8+ years doing it in regulated and high-stakes places: consumer fintech, clinical informatics, and financial-crime risk. Most recently at PayPal, on Buy Now, Pay Later products shipped across multiple markets.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.0625rem',
                  fontWeight: 400,
                  lineHeight: 1.85,
                  color: theme.palette.text.secondary,
                }}
              >
                React and TypeScript on the front, Node.js, Java, and Python behind it, AWS underneath. I like the work that sits between frontend architecture and product judgment, and I'm happiest owning something all the way into production.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 1 }}>
                <CVButton />
                <Button
                  variant="text"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    color: accentText,
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 1.5,
                    '&:hover': { bgcolor: accentSoft },
                  }}
                >
                  See what I've built →
                </Button>
              </Box>
            </Grid>

            {/* At-a-glance panel — the answers recruiters scan for first */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: isDark
                    ? 'none'
                    : '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px rgba(15,23,42,0.07)',
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    color: accentText,
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: '0.7rem',
                    mb: 2.5,
                  }}
                >
                  At a glance
                </Typography>
                <Stack divider={<Box sx={{ height: '1px', bgcolor: theme.palette.divider }} />} spacing={1.5}>
                  {[
                    { label: 'Experience', value: '8+ years, full stack' },
                    { label: 'Domains', value: 'FinTech · HealthTech · TravelTech · EdTech' },
                    { label: 'Most recently', value: 'PayPal — Buy Now, Pay Later, Austin TX' },
                    { label: 'Building', value: 'Kids learning app (my own) · two live travel platforms (client)' },
                    { label: 'Based in', value: 'Acton, Massachusetts · US work-authorized' },
                  ].map((fact, i) => (
                    <Box key={fact.label} sx={{ pt: i === 0 ? 0 : 1.5 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          textTransform: 'uppercase',
                          letterSpacing: 1.5,
                          fontSize: '0.66rem',
                          fontWeight: 700,
                          color: theme.palette.text.secondary,
                          mb: 0.5,
                        }}
                      >
                        {fact.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        {fact.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
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
              color: accentText,
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
                body: "Second time a pattern recurs, I document it. Third time, I refactor. Premature abstraction has cost me more than duplication ever has."
              },
              {
                title: "Tests as design tools, not coverage targets",
                body: "I test at module boundaries, regression-prone flows, and the integration seam. Coverage is the side effect, not the goal."
              },
              {
                title: "Performance is product",
                body: "Latency and bundle size are features. I set budgets up front and treat regressions like bugs, not preferences."
              },
              {
                title: "The boring path on purpose",
                body: "TypeScript over cleverness. Design systems over bespoke components. The boring path scales further than the interesting one."
              },
              {
                title: "AI as a power tool, not an autopilot",
                body: "I use AI daily for scaffolding, tests, and first-pass debugging. What I don't hand over is the review — the failure mode isn't bad syntax, it's confident wrong assumptions."
              },
              {
                title: "Own it after it ships",
                body: "Shipping is the midpoint. I was sole owner of a live PayPal onboarding flow: triage, incidents, stakeholder calls. Watching your own code fail teaches what code review can't."
              }
            ].map((principle, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={principle.title}>
                <Box sx={{ display: 'flex', gap: 2.5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: accentText,
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
              color: accentText,
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
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    color: accentText,
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
                  <Grid size={{ xs: 12, md: 4 }}>
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
                        color: accentText,
                        fontWeight: 500,
                      }}
                    >
                      {exp.duration}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }}>
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
                            color: accentText,
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
      <Box id="experience" sx={{ py: { xs: 6, md: 9 } }}>
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

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: theme.palette.text.secondary, mb: 5, mt: -3 }}
        >
          Highlights only — the full history is in my resume.
        </Typography>

        <Stack spacing={3}>
        {experiences.map((exp, index) => (
        <ExperienceItem key={`${exp.title}-${index}`} exp={exp} index={index} />
        ))}
        </Stack>
        </Container>
      </Box>

      {/* Community & Open Source Section */}
      <Box id="community" sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              letterSpacing: 3,
              color: accentText,
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
                body: "~4 years contributing to the OpenMRS 3 micro-frontends platform, OHRI, and Open Concept Lab. Recognized as /dev/3 and named a Development Fellow.",
                link: "https://talk.openmrs.org/t/my-fellowship-journey-hadijah-kyampeire/33275",
                linkLabel: "OpenMRS Fellowship Journey →"
              },
              {
                title: "Google Summer of Code (GSoC) · Primary Mentor 2023",
                body: "Primary mentor in 2023 for 'Migrating Vanilla React forms to React Hook Form'; backup mentor in 2022.",
                link: "https://talk.openmrs.org/t/gsoc-2023-migrating-vanilla-react-forms-to-reacthookform-final-evaluation/40365",
                linkLabel: "GSoC 2023 final evaluation →"
              },
              {
                title: "International Committee of the Red Cross (ICRC)",
                body: "Clinical tools and form-engine work running in ICRC field deployments — healthcare software in some of the hardest environments there are.",
                link: null,
                linkLabel: null
              },
              {
                title: "Witu (Women in Tech Uganda) Code Academy · Instructor",
                body: "Teaching frontend, data communications, and networking to women entering software engineering in East Africa.",
                link: null,
                linkLabel: null
              },
              {
                title: "Writing · Medium",
                body: "Writing on web accessibility beyond the WCAG checklist, engineering learning curves, and bootcamp realities.",
                link: "https://medium.com/@hadijah315",
                linkLabel: "Read on Medium →"
              },
              {
                title: "GitHub · 100+ repositories",
                body: "OpenMRS modules, learning projects, and the source of this site.",
                link: "https://github.com/hadijahkyampeire",
                linkLabel: "github.com/hadijahkyampeire →"
              }
            ].map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'left',
                    bgcolor: isDark ? 'transparent' : '#ffffff',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                    '&:hover': {
                      borderColor: isDark ? 'rgba(255,255,255,0.18)' : '#cbd5e1',
                      boxShadow: isDark
                        ? 'none'
                        : '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.07)',
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
                        color: accentText,
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
              <Grid size={12} key={index}>
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
                size={{ xs: 12, md: 6 }}
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
                      color: accentText,
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
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
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
                Open to senior full-stack roles. Work-authorized in the US (on-site, hybrid, or remote), and open to Canada for teams that can sponsor. WhatsApp or text is fastest.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: accentText }} />
                  <Typography>hadijahkyampeire@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationIcon sx={{ color: accentText }} />
                  <Typography>Acton, MA (ET) · US-authorized · Canada with sponsorship</Typography>
                </Box>
              </Box>
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  color: accentText,
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: '0.7rem',
                  mb: 1.5,
                }}
              >
                Connect with me
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 1.5,
                }}
              >
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
                    ...accentButton,
                    fontWeight: 600,
                    justifyContent: 'flex-start',
                    px: 2.5,
                    py: 1.25,
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
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
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
