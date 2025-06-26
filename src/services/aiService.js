// AI Service for portfolio chatbot
// This service can integrate with real AI APIs or fall back to keyword-based responses

const AI_SERVICE_CONFIG = {
  // Set to true to use real AI API (requires API key)
  useRealAI: false,
  
  // API configuration
  apiEndpoint: 'https://api.openai.com/v1/chat/completions',
  apiKey: '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',
  
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

// Fallback keyword-based responses
const generateFallbackResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Current status or open to work
  if (
    lowerMessage.includes('current status') ||
    lowerMessage.includes('currently') ||
    lowerMessage.includes('open to work') ||
    lowerMessage.includes('w2')
  ) {
    return `I'm currently finishing my Master of Science in Computer Science at Maharishi International University (expected 2027) and am open to work as a W2 employee in the US.`;
  }
  
  // Skills and technologies
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
    return `I'm skilled in various technologies including ReactJS, TypeScript, JavaScript, HTML, CSS, Sass, Material UI, Ant Design, NodeJS, AWS, Git, and Agile methodologies. My core strengths are in Frontend Development, UI/UX, Micro-frontend Architecture, and State Management. I also have experience with AWS cloud computing and modern JavaScript ecosystem.`;
  }
  
  // Experience and work
  if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return `I have 6 years of experience in software development. I've worked as a Senior Software Developer at METS Program and as a Mid-level Frontend Software Engineer at Sigma360. I specialize in building high-performance web applications using ReactJS and modern JavaScript ecosystem.`;
  }
  
  // Projects
  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    return `I've worked on several interesting projects including OpenMRS Clinical Views & Form Builder, Risk & Compliance Platform (Sigma360), E-learning Platform, and more. My most recent work includes building a dynamic UI workflow for OpenMRS and developing a financial risk and compliance platform. Would you like to know more about any specific project?`;
  }
  
  // Contact information
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return `You can reach me at hadijahkyampeire@gmail.com. I'm always open to discussing new opportunities and exciting projects. Feel free to connect with me on LinkedIn or GitHub as well!`;
  }
  
  // Education
  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('school')) {
    return `I'm currently pursuing a Master of Science in Computer Science at Maharishi International University (expected 2027). I also hold a Bachelor of Computer Engineering with First Class Honors from Busitema University.`;
  }
  
  // Location and remote work
  if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('remote')) {
    return `I work remotely and am open to opportunities worldwide. I'm based in the US but have experience working with international teams.`;
  }
  
  // Greetings
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `Hello! I'm here to help you learn more about Hadijah's portfolio. You can ask me about her skills, experience, projects, or anything else related to her work.`;
  }
  
  // Salary or compensation
  if (lowerMessage.includes('salary') || lowerMessage.includes('rate') || lowerMessage.includes('compensation')) {
    return `I'm open to discussing compensation based on the role, responsibilities, and market rates. Feel free to reach out at hadijahkyampeire@gmail.com to discuss specific opportunities.`;
  }
  
  // Availability
  if (lowerMessage.includes('available') || lowerMessage.includes('hire') || lowerMessage.includes('opportunity')) {
    return `I'm always open to new opportunities! I'm currently available for full-time positions, contract work, and freelance projects. Feel free to reach out at hadijahkyampeire@gmail.com to discuss potential collaborations.`;
  }
  
  // Default response
  return `I'm not sure about that specific question, but I can help you learn about Hadijah's skills, experience, projects, education, or contact information. What would you like to know?`;
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