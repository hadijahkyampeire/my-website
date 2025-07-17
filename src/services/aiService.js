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
- Current Status: Currently finishing her Master of Science in Computer Science at Maharishi International University (expected 2027) and open to work as a W2 employee in the US.
- Most Recent Role: Senior Software Developer at METS Program
- Previous Roles: Frontend Software Engineer at Sigma360, Andela Fellow
- Location: Remote
- Email: hadijahkyampeire@gmail.com

About METS: The Monitoring and Evaluation Technical Support (METS) Program is a CDC-supported collaboration between Makerere University School of Public Health, UCSF, and HISP Uganda. METS strengthens Uganda's health systems through innovative capacity building, focusing on evidence-based HIV and TB programming, health informatics, and strategic information. Their mission is to strengthen health systems in Uganda for an evidence-based and effective HIV response.

About Andela: Andela is a global talent marketplace that connects companies with vetted technologists from over 135 countries. Founded in 2014, Andela's mission is to ensure brilliance is evenly distributed and opportunity is accessible worldwide. Andela's AI-powered platform helps organizations build diverse, high-performing remote teams.

About Sigma360: Sigma360 is a financial risk and compliance platform that provides advanced analytics, network graph visualizations, and geolocation tools for global financial clients. The platform helps organizations manage risk, ensure compliance, and gain actionable insights from complex data.

About OpenMRS: OpenMRS is an open-source platform that provides a customizable electronic medical record system for healthcare delivery in resource-constrained environments. It is used worldwide to improve patient care and health data management, especially in low- and middle-income countries.

Skills: ReactJS, TypeScript, JavaScript, HTML, CSS, Material UI, NodeJS, AWS, Git, Agile, Micro-frontends, UI/UX

Projects: OpenMRS Clinical Views & Form Builder, Risk & Compliance Platform (Sigma360), E-learning Platform, Serverless Tic Tac Toe Game, Property Management System

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
    return `She's currently finishing her Master of Science in Computer Science at Maharishi International University (expected 2027) and is open to work as a W2 employee in the US. She's available for full-time positions, contract work, and freelance projects. Feel free to reach out at hadijahkyampeire@gmail.com to discuss opportunities!`;
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
    return `Her core skills include ReactJS, TypeScript, JavaScript, HTML, CSS, Material UI, Ant Design, NodeJS, AWS, Git, and Agile methodologies. She specializes in Frontend Development, UI/UX, Micro-frontend Architecture, State Management, and modern JavaScript ecosystem. She also has experience with AWS cloud computing, REST APIs, and various testing frameworks.`;
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
    return `She has 6+ years of experience in software development. Her most recent role was as a Senior Software Developer at METS Program, where she architected reusable UI workflows and developed micro-frontend modules. Previously, she worked as a Mid-level Frontend Software Engineer at Sigma360, leading frontend development for financial risk and compliance platforms. She's also been an Andela Fellow, mentoring developers and contributing to global tech projects.`;
  }
  
  // Projects
  if (
    lowerMessage.includes('project') || 
    lowerMessage.includes('work') ||
    lowerMessage.includes('portfolio') ||
    lowerMessage.includes('build') ||
    lowerMessage.includes('develop')
  ) {
    return `She's worked on several impactful projects including OpenMRS Clinical Views & Form Builder (health informatics), Risk & Compliance Platform for Sigma360 (fintech), E-learning Platform (education), Serverless Tic Tac Toe Game (AWS), and Property Management System. Her most recent work includes building dynamic UI workflows for OpenMRS and developing sophisticated financial risk visualization tools. Would you like to know more about any specific project?`;
  }
  
  // Contact information
  if (
    lowerMessage.includes('contact') || 
    lowerMessage.includes('email') || 
    lowerMessage.includes('reach') ||
    lowerMessage.includes('get in touch') ||
    lowerMessage.includes('connect')
  ) {
    return `You can reach her at hadijahkyampeire@gmail.com. She's always open to discussing new opportunities and exciting projects. Feel free to connect with her on LinkedIn (linkedin.com/in/hadijah-kyampeire-4189141 or GitHub (github.com/hadijahkyampeire) as well!`;
  }
  
  // Education
  if (
    lowerMessage.includes('education') || 
    lowerMessage.includes('degree') || 
    lowerMessage.includes('school') ||
    lowerMessage.includes('university') ||
    lowerMessage.includes('study')
  ) {
    return `She's currently pursuing a Master of Science in Computer Science at Maharishi International University (expected 2027. She also holds a Bachelor of Computer Engineering with First Class Honors from Busitema University (2013-2017er studies focused on algorithms, web application architecture, enterprise architecture, and cloud computing.`;
  }
  
  // Location and remote work
  if (
    lowerMessage.includes('location') || 
    lowerMessage.includes('where') || 
    lowerMessage.includes('remote') ||
    lowerMessage.includes('timezone') ||
    lowerMessage.includes('based')
  ) {
    return `She works remotely and is open to opportunities worldwide. Shes based in the US but has experience working with international teams and clients from different time zones. She's comfortable with remote collaboration and has worked with distributed teams throughout her career.`;
  }
  
  // METS Program specific
  if (
    lowerMessage.includes('mets') ||
    lowerMessage.includes('health') ||
    lowerMessage.includes('medical') ||
    lowerMessage.includes('openmrs')
  ) {
    return `At METS Program, she worked as a Senior Software Developer on health informatics projects. She architected a reusable JSON schema-based UI workflow framework for OpenMRS, reducing code duplication by 90%. She also designed a drag-and-drop UI for clinical form building, reducing form creation time by 40%. This work focused on improving healthcare delivery in resource-constrained environments.`;
  }
  
  // Sigma360 specific
  if (
    lowerMessage.includes('sigma') ||
    lowerMessage.includes('financial') ||
    lowerMessage.includes('risk') ||
    lowerMessage.includes('compliance')
  ) {
    return `At Sigma360he worked on frontend development for a sophisticated financial risk and compliance platform. She engineered analytics dashboards, graph-driven risk network visualizations, and advanced search features. These innovations boosted product competitiveness by 40% and enhanced client acquisition for financial services firms. She worked with technologies like ReactJS, TypeScript, Ant Design, ChartJS, and Cytoscape.`;
  }
  
  // Salary or compensation
  if (
    lowerMessage.includes('salary') || 
    lowerMessage.includes('rate') || 
    lowerMessage.includes('compensation') ||
    lowerMessage.includes('pay') ||
    lowerMessage.includes('cost')
  ) {
    return `She's open to discussing compensation based on the role, responsibilities, and market rates. Her experience level and specialized skills in frontend development, health informatics, and fintech justify competitive compensation. Feel free to reach out at hadijahkyampeire@gmail.com to discuss specific opportunities and compensation details.`;
  }
  
  // Career goals and aspirations
  if (
    lowerMessage.includes('goal') ||
    lowerMessage.includes('aspiration') ||
    lowerMessage.includes('future') ||
    lowerMessage.includes('plan') ||
    lowerMessage.includes('next')
  ) {
    return `Her career goals include continuing to work on impactful projects in health informatics and fintech, mentoring other developers, and contributing to open-source projects. She's passionate about using technology to solve real-world problems and is always looking for opportunities to grow and learn new technologies.`;
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