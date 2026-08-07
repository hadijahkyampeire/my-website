// AI Service for portfolio chatbot
// This service can integrate with real AI APIs or fall back to keyword-based responses

const AI_SERVICE_CONFIG = {
  // Set to true to use real AI API (requires API key)
  useRealAI: false,
  
  // API configuration
  apiEndpoint: 'https://api.openai.com/v1/chat/completions',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  
  // Fallback configuration
  fallbackEnabled: true,
};

// Portfolio context for AI responses
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Hadijah Kyampeire's portfolio.

- Name: Hadijah Kyampeire
- Current Status: Open to senior full-stack engineering roles. Work-authorized in the US (on-site, hybrid, or remote); open to Canada with sponsorship. Also finishing a Master of Science in Computer Science at Maharishi International University (completing September 2026).
- Most Recent Role: Full Stack Software Engineer, Buy Now Pay Later at PayPal, Austin TX (October 2025 - July 2026)
- Previous Roles: Senior Software Engineer at Skye, Frontend Software Engineer / Development Fellow at OpenMRS (incl. the METS Program engagement), Senior Software Engineer at Sigma360 via Andela, Software Engineer at Andela Uganda
- Also: Lead engineer on two live travel-booking platforms built for a client, Zifah Voyages and MixedTrips
- Her own product: 'Litter Stars', a kids' learning app for ages 3-12 (React Native/Expo, TypeScript, serverless AWS) that she founded and builds solo — parent accounts with multiple child profiles, age-banded curriculum with subscription tiers, per-lesson progress, illustrated story reader with comprehension questions
- Experience: 8+ years across FinTech, HealthTech, TravelTech, and EdTech
- Location: Acton, Massachusetts (ET)
- Email: hadijahkyampeire@gmail.com

About METS: The Monitoring and Evaluation Technical Support (METS) Program is a CDC-supported collaboration between Makerere University School of Public Health, UCSF, and HISP Uganda. METS strengthens Uganda's health systems through innovative capacity building, focusing on evidence-based HIV and TB programming, health informatics, and strategic information. Their mission is to strengthen health systems in Uganda for an evidence-based and effective HIV response.

About Andela: Andela is a global talent marketplace that connects companies with vetted technologists from over 135 countries. Founded in 2014, Andela's mission is to ensure brilliance is evenly distributed and opportunity is accessible worldwide. Andela's AI-powered platform helps organizations build diverse, high-performing remote teams.

About Sigma360: Sigma360 is a financial risk and compliance platform that provides advanced analytics, network graph visualizations, and geolocation tools for global financial clients. The platform helps organizations manage risk, ensure compliance, and gain actionable insights from complex data.

About OpenMRS: OpenMRS is an open-source platform that provides a customizable electronic medical record system for healthcare delivery in resource-constrained environments. It is used worldwide to improve patient care and health data management, especially in low- and middle-income countries.

Skills: React, TypeScript, JavaScript, Next.js, Material UI, Ant Design, Carbon Design, Node.js, Express, GraphQL, Java, Spring Boot, Python, Flask, PostgreSQL, MongoDB, Neo4j, AWS, Git, CI/CD, Jest, React Testing Library, Cypress, Playwright, Micro-frontends, BFF pattern, Accessibility (WCAG), Agile

Projects: Litter Stars (her own kids' learning app), Zifah Voyages (global sports and event travel platform), MixedTrips (tailor-made African safari platform), OpenMRS Clinical Views & Form Builder, Risk & Compliance Platform (Sigma360)

Be helpful, professional, and concise. Answer questions about her skills, experience, projects, education, and contact information.
`;

// Suggested prompt questions for users
export const SUGGESTED_QUESTIONS = [
  "What are her core skills?",
  "Tell me about her work experience",
  "What projects has she worked on?",
  "Is she currently available for work?",
  "Whats her educational background?",
  "How can I contact her?",
  "What technologies does she use?",
  "Tell me about her recent role at METS",
  "What are her career goals?",
  "Does she work remotely?"
];

// Real AI API integration
const callRealAI = async (userMessage) => {
  if (!AI_SERVICE_CONFIG.apiKey) {
    throw new Error('No API key configured');
  }

  try {
    const response = await fetch(AI_SERVICE_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_SERVICE_CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: PORTFOLIO_CONTEXT
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('AI API Error:', error);
    throw error;
  }
};

// Enhanced fallback keyword-based responses
const generateFallbackResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Current status or open to work
  if (
    lowerMessage.includes('current status') ||
    lowerMessage.includes('currently') ||
    lowerMessage.includes('open to work') ||
    lowerMessage.includes('w2') ||
    lowerMessage.includes('available') ||
    lowerMessage.includes('hire') ||
    lowerMessage.includes('opportunity')
  ) {
    return `She's open to senior full-stack engineering roles right now. Her most recent role was at PayPal on Buy Now, Pay Later, which wrapped up in July 2026. She's work-authorized in the US (on-site, hybrid, or remote all welcome) and open to Canada for teams that can sponsor relocation. She's also finishing a Master of Science in Computer Science at Maharishi International University (completing September 2026). Reach out at hadijahkyampeire@gmail.com to discuss opportunities!`;
  }
  
  // Skills and technologies
  if (
    lowerMessage.includes('skill') || 
    lowerMessage.includes('technology') || 
    lowerMessage.includes('tech') ||
    lowerMessage.includes('programming') ||
    lowerMessage.includes('language') ||
    lowerMessage.includes('framework') ||
    lowerMessage.includes('tool')
  ) {
    return `Her core skills span the full stack: React, TypeScript, and Next.js on the frontend; Node.js, Express, GraphQL, Java/Spring Boot, and Python on the backend; and PostgreSQL, MongoDB, and Neo4j for data. She works with AWS (Lambda, API Gateway, S3, CloudFront, Cognito, DynamoDB), CI/CD via GitHub Actions, and testing with Jest, React Testing Library, Cypress, and Playwright. She specializes in micro-frontend architecture, the BFF pattern, design systems, and accessibility.`;
  }
  
  // Experience and work history
  if (
    lowerMessage.includes('experience') || 
    lowerMessage.includes('work') || 
    lowerMessage.includes('job') ||
    lowerMessage.includes('career') ||
    lowerMessage.includes('background') ||
    lowerMessage.includes('role')
  ) {
    return `She has 8+ years of experience across FinTech, HealthTech, TravelTech, and EdTech. Most recently she was a Full Stack Software Engineer at PayPal in Austin (Oct 2025 - Jul 2026), building onboarding and credit-decisioning for Buy Now, Pay Later across multiple markets. Before that: Senior Software Engineer at Skye, ~4 years contributing to OpenMRS (including Uganda's METS Program), and 5+ years at Sigma360 via Andela building financial-crime and risk-intelligence software used by Stripe and other institutions. She's also the lead engineer on two live travel-booking platforms built for a client, Zifah Voyages and MixedTrips, and the founder of her own kids' learning app.`;
  }
  
  // Projects
  if (
    lowerMessage.includes('project') || 
    lowerMessage.includes('work') ||
    lowerMessage.includes('portfolio') ||
    lowerMessage.includes('build') ||
    lowerMessage.includes('develop')
  ) {
    return `Her featured projects include Zifah Voyages and MixedTrips - two live travel-booking platforms she leads engineering on for a client, built end-to-end on Next.js, Java/Spring Boot, PostgreSQL, and Stripe/PayPal and sharing one multi-brand monorepo. Her own product is Litter Stars, a kids' learning app built with React Native and serverless AWS. Earlier work includes the OpenMRS Clinical Views & Form Builder (health informatics) and the Risk & Compliance Platform at Sigma360 (fintech). Would you like to know more about any specific project?`;
  }
  
  // Contact information
  if (
    lowerMessage.includes('contact') || 
    lowerMessage.includes('email') || 
    lowerMessage.includes('reach') ||
    lowerMessage.includes('get in touch') ||
    lowerMessage.includes('connect')
  ) {
    return `You can reach her at hadijahkyampeire@gmail.com, or by WhatsApp/SMS at +1 737 363 8389 - those are usually fastest. She's also on LinkedIn (linkedin.com/in/hadijahkyampeire) and GitHub (github.com/hadijahkyampeire).`;
  }
  
  // Education
  if (
    lowerMessage.includes('education') || 
    lowerMessage.includes('degree') || 
    lowerMessage.includes('school') ||
    lowerMessage.includes('university') ||
    lowerMessage.includes('study')
  ) {
    return `She's pursuing a Master of Science in Computer Science at Maharishi International University (completing September 2026). She also holds a Bachelor of Computer Engineering with First Class Honors from Busitema University in Uganda (2013-2017). Her studies focused on algorithms, web application architecture, enterprise architecture, and cloud computing.`;
  }
  
  // Location and remote work
  if (
    lowerMessage.includes('location') || 
    lowerMessage.includes('where') || 
    lowerMessage.includes('remote') ||
    lowerMessage.includes('timezone') ||
    lowerMessage.includes('based')
  ) {
    return `She's based in Acton, Massachusetts (Eastern time) and is work-authorized in the US - on-site, hybrid, or remote all work for her. She's also open to Canada for teams that can sponsor relocation. She's worked with distributed, international teams throughout her career.`;
  }
  
  // PayPal / BNPL specific
  if (
    lowerMessage.includes('paypal') ||
    lowerMessage.includes('bnpl') ||
    lowerMessage.includes('buy now')
  ) {
    return `At PayPal (Oct 2025 - Jul 2026) she worked on the Buy Now, Pay Later platform in Austin, Texas. She was the sole engineering owner of the US 'New To PayPal' Spinwheel prefill onboarding flow after launch - production support, triage, incident resolution, and stakeholder communication. She also built full-stack Open Banking capabilities for Nova Credit across Pay in 4 and Pay Monthly, built GraphQL resolvers on the BNPL experience layer using the backend-for-frontend pattern, and owned production releases end to end. Stack: React, TypeScript, Node.js, Express, GraphQL, and Datadog RUM.`;
  }

  // Travel platforms
  if (
    lowerMessage.includes('zifah') ||
    lowerMessage.includes('mixedtrip') ||
    lowerMessage.includes('travel') ||
    lowerMessage.includes('booking') ||
    lowerMessage.includes('safari')
  ) {
    return `Zifah Voyages and MixedTrips are two live travel-booking platforms she is the lead engineer on - she builds them, she doesn't own them. Both run off one multi-brand codebase: a Next.js App Router storefront over a shared TypeScript monorepo, backed by a Java/Spring Boot and PostgreSQL API, with Stripe and PayPal checkout selected by domain at request time. Zifah covers sports and event travel (FIFA World Cup 2026, Commonwealth Games); MixedTrips covers African safari and wildlife trips. You can see both at zifahvoyages.com and mixedtrips.com.`;
  }

  // Her own product
  if (
    lowerMessage.includes('kids') ||
    lowerMessage.includes('mobile') ||
    lowerMessage.includes('react native') ||
    lowerMessage.includes('own product') ||
    lowerMessage.includes('founded')
  ) {
    return `Her own product is 'Litter Stars', a learning app for children aged 3-12 that she founded and builds solo. It has one parent account with multiple child profiles tracked separately, an age-banded curriculum from Preschool to Upper Primary with higher levels behind a subscription, seven subjects per class with per-lesson progress, and an illustrated story reader with narration and comprehension questions. React Native (Expo) on the client, serverless AWS behind it. It's the clearest example of how she works when nobody hands her requirements - every decision from product scope to infrastructure is hers.`;
  }

  // METS Program specific
  if (
    lowerMessage.includes('mets') ||
    lowerMessage.includes('health') ||
    lowerMessage.includes('medical') ||
    lowerMessage.includes('openmrs')
  ) {
    return `She contributed to OpenMRS for around four years - the open-source EMR platform behind national health systems in 50+ countries, including UgandaEMR (1,700+ facilities) and PEPFAR HIV programs. She architected a JSON-schema-driven UI workflow framework on the OpenMRS 3 micro-frontends platform that cut clinical-module code duplication by ~90%, and built a drag-and-drop clinical form builder that cut form creation time by ~40%. She's recognized as a /dev/3 senior contributor and was named a Development Fellow. The work continued through a 2024 engagement with Uganda's METS Program at Makerere University School of Public Health.`;
  }
  
  // Sigma360 specific
  if (
    lowerMessage.includes('sigma') ||
    lowerMessage.includes('financial') ||
    lowerMessage.includes('risk') ||
    lowerMessage.includes('compliance')
  ) {
    return `She spent 5+ years at Sigma360 (Oct 2018 - Apr 2024, via Andela), promoted from Software Engineer to Senior, as one of the early frontend engineers on a financial-crime and risk-intelligence platform used by Stripe, Barclays, and other global institutions - AML screening, KYC, and adverse-media monitoring. She built the analytics dashboard that cut analyst investigation time by ~35%, prototyped a Cytoscape.js and Neo4j risk-network visualization that became a differentiator in sales demos, migrated a large Redux store to Zustand and TanStack Query, and lifted critical-flow test coverage from ~50% to ~85%.`;
  }
  
  // Salary or compensation
  if (
    lowerMessage.includes('salary') || 
    lowerMessage.includes('rate') || 
    lowerMessage.includes('compensation') ||
    lowerMessage.includes('cost')
  ) {
    return `She's open to discussing compensation based on the role and scope. With 8+ years of full-stack experience across regulated fintech, healthcare, and risk platforms, she's targeting senior-level compensation. Reach out at hadijahkyampeire@gmail.com to talk specifics.`;
  }
  
  // Career goals and aspirations
  if (
    lowerMessage.includes('goal') ||
    lowerMessage.includes('aspiration') ||
    lowerMessage.includes('future') ||
    lowerMessage.includes('plan') ||
    lowerMessage.includes('next')
  ) {
    return `She's looking for senior full-stack roles where she can own features end to end, ideally in fintech, healthcare, or another domain where correctness matters. She wants to keep mentoring engineers, keep contributing to open source, and keep building with AI-assisted tooling as part of the workflow rather than as a novelty.`;
  }
  
  // Greetings
  if (
    lowerMessage.includes('hello') || 
    lowerMessage.includes('hi') || 
    lowerMessage.includes('hey') ||
    lowerMessage.includes('good morning') ||
    lowerMessage.includes('good afternoon')
  ) {
    return `Hello! I'm here to help you learn more about Hadijah's portfolio. You can ask me about her skills, experience, projects, education, or anything else related to her work. Feel free to ask any questions!`;
  }
  
  // Default response with suggestions
  return `I'm not sure about that specific question, but I can help you learn about Hadijah's skills, experience, projects, education, or contact information. Try asking about her current status, skills, work experience, projects, or how to contact her. What would you like to know?`;
};

// Main AI response generator
export const generateAIResponse = async (userMessage) => {
  // Simulate processing delay for better UX
  await new Promise(resolve => setTimeout(resolve, 800));
  
  try {
    // Try real AI if configured
    if (AI_SERVICE_CONFIG.useRealAI && AI_SERVICE_CONFIG.apiKey) {
      return await callRealAI(userMessage);
    }
  } catch (error) {
    console.warn('Real AI failed, falling back to keyword system:', error);
  }
  
  // Fallback to keyword-based responses
  if (AI_SERVICE_CONFIG.fallbackEnabled) {
    return generateFallbackResponse(userMessage);
  }
  
  throw new Error('No AI service available');
};

// Configuration helper
export const configureAIService = (config) => {
  Object.assign(AI_SERVICE_CONFIG, config);
};

// Check if real AI is available
export const isRealAIAvailable = () => {
  return AI_SERVICE_CONFIG.useRealAI && !!AI_SERVICE_CONFIG.apiKey;
}; 