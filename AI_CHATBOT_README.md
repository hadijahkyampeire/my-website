# AI Portfolio Chatbot

A smart AI-powered chatbot for your portfolio that can answer questions about your skills, experience, projects, and more.

## Features

- 🤖 **AI-Powered Responses**: Uses keyword-based responses with optional real AI API integration
- 💬 **Interactive Chat Interface**: Modern Material-UI chat interface with floating action button
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🔄 **Real-time Updates**: Auto-scrolling messages with typing indicators
- 🎯 **Portfolio-Specific**: Tailored responses about your skills, experience, and projects
- ⚡ **Fast & Lightweight**: No external dependencies beyond Material-UI

## Quick Start

The chatbot is already integrated into your portfolio! It appears as a floating chat button in the bottom-right corner of every page.

### Current Setup

The chatbot is currently running with **keyword-based responses** (no API key required). It can answer questions about:

- Skills and technologies
- Work experience
- Projects
- Education
- Contact information
- Location and availability
- Salary and opportunities

## Advanced Setup: Real AI Integration

To use a real AI API (like OpenAI), follow these steps:

### 1. Get an API Key

Sign up for an AI service like:

- [OpenAI](https://platform.openai.com/) (GPT-3.5/GPT-4)
- [Anthropic](https://www.anthropic.com/) (Claude)
- [Google AI](https://ai.google.dev/) (Gemini)

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```env
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

### 3. Enable Real AI

Update the configuration in `src/services/aiService.js`:

```javascript
const AI_SERVICE_CONFIG = {
  useRealAI: true, // Change this to true
  apiEndpoint: 'https://api.openai.com/v1/chat/completions',
  apiKey: process.env.REACT_APP_OPENAI_API_KEY || '',
  fallbackEnabled: true,
};
```

### 4. Restart Your Development Server

```bash
npm run dev
```

## Customization

### Updating Portfolio Information

Edit the `PORTFOLIO_CONTEXT` in `src/services/aiService.js` to update your information:

```javascript
const PORTFOLIO_CONTEXT = `
You are an AI assistant for [Your Name]'s portfolio. [Your information here]
...
`;
```

### Adding New Response Patterns

Add new keyword patterns in the `generateFallbackResponse` function:

```javascript
// Add new patterns
if (lowerMessage.includes('your_keyword')) {
  return `Your custom response here`;
}
```

### Styling Customization

The chatbot uses Material-UI theming. You can customize colors, spacing, and layout by modifying the `sx` props in `src/components/AIChatbot.jsx`.

## API Integration Options

### OpenAI GPT-3.5/GPT-4

```javascript
// Already configured in aiService.js
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo', // or 'gpt-4'
    messages: [...],
    max_tokens: 300,
    temperature: 0.7,
  }),
});
```

### Anthropic Claude

```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-3-sonnet-20240229',
    max_tokens: 300,
    messages: [...],
  }),
});
```

### Google Gemini

```javascript
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `System: ${PORTFOLIO_CONTEXT}\n\nUser: ${userMessage}`,
            },
          ],
        },
      ],
    }),
  }
);
```

## Usage Examples

### Sample Questions the Chatbot Can Answer:

- "What are your skills?"
- "Tell me about your experience"
- "What projects have you worked on?"
- "How can I contact you?"
- "What's your education background?"
- "Are you available for work?"
- "What's your salary range?"
- "Where are you located?"

### Sample Responses:

**Skills Question:**

> "I'm skilled in various technologies including ReactJS, TypeScript, JavaScript, HTML, CSS, Sass, Material UI, Ant Design, NodeJS, AWS, Git, and Agile methodologies. My core strengths are in Frontend Development, UI/UX, Micro-frontend Architecture, and State Management."

**Experience Question:**

> "I have 6 years of experience in software development. I've worked as a Senior Software Developer at METS Program and as a Senior Frontend Software Engineer at Sigma360. I specialize in building high-performance web applications using ReactJS and modern JavaScript ecosystem."

## Troubleshooting

### Common Issues:

1. **Chatbot not appearing**: Make sure `AIChatbot` is imported and rendered in `App.jsx`
2. **API errors**: Check your API key and network connection
3. **Responses not working**: Verify the fallback system is enabled
4. **Styling issues**: Check Material-UI theme configuration

### Debug Mode:

Enable console logging by adding this to your browser console:

```javascript
// Enable debug mode
localStorage.setItem('chatbot-debug', 'true');
```

## Security Considerations

- Never commit API keys to version control
- Use environment variables for sensitive data
- Consider rate limiting for API calls
- Implement proper error handling
- Validate user inputs

## Performance Optimization

- The chatbot uses React hooks for efficient re-rendering
- Messages are stored in component state (not persisted)
- API calls are debounced to prevent spam
- Images and assets are optimized for fast loading

## Future Enhancements

Potential improvements you could add:

- [ ] Message persistence (localStorage/database)
- [ ] File upload support
- [ ] Voice input/output
- [ ] Multi-language support
- [ ] Analytics tracking
- [ ] Custom themes
- [ ] Chat history export
- [ ] Integration with contact forms

## Support

If you need help with the chatbot:

1. Check the console for error messages
2. Verify your API configuration
3. Test with the fallback system first
4. Review the Material-UI documentation for styling issues

---

**Note**: This chatbot is designed to be lightweight and easy to customize. The keyword-based system ensures it works without any external dependencies, while the API integration option allows for more sophisticated responses when needed.
