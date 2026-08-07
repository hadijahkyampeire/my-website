import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Alert,
  Chip,
} from '@mui/material';
import {
  Send as SendIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  SmartToy as BotIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { generateAIResponse, SUGGESTED_QUESTIONS } from '../services/aiService';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initial greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: `Hi! I'm an AI assistant for Hadijah Kyampeire's portfolio. I can help you learn about her skills, experience, projects, and more. What would you like to know?`,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (message = null) => {
    const textToSend = message || inputValue.trim();
    if (!textToSend || isLoading) return;

    const userMessage = textToSend;
    const newMessage = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);
    setError('');

    try {
      const aiResponse = await generateAIResponse(userMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError('Sorry, I encountered an error. Please try again.');
      console.error('Chatbot error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError('');
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab
        color="secondary"
        aria-label="chat"
        onClick={() => setIsOpen(true)}
        className="chatbot-fab"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Dialog */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            height: '70vh',
            maxHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BotIcon color="primary" />
            <Typography variant="h6">AI Portfolio Assistant</Typography>
          </Box>
          <IconButton onClick={() => setIsOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ flex: 1, p: 0, display: 'flex', flexDirection: 'column' }}>
          {/* Messages Area */}
          <Box sx={{ 
            flex: 1, 
            overflowY: 'auto', 
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1,
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                    <BotIcon fontSize="small" />
                  </Avatar>
                )}
                
                <Paper
                  elevation={0}
                  sx={(t) => ({
                    p: 2,
                    maxWidth: '70%',
                    textAlign: 'left',
                    // grey.100 is near-white in both modes, so bot bubbles used to
                    // vanish against dark-mode text — key off the mode instead.
                    bgcolor: message.sender === 'user'
                      ? (t.palette.mode === 'dark' ? '#262a32' : t.palette.primary.main)
                      : (t.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : '#f1f5f9'),
                    color: message.sender === 'user' ? '#fff' : 'text.primary',
                    border: message.sender === 'user' ? 'none' : `1px solid ${t.palette.divider}`,
                    borderRadius: 2,
                  })}
                >
                  <Typography variant="body2">{message.text}</Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      opacity: 0.7, 
                      display: 'block', 
                      mt: 0.5 
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </Typography>
                </Paper>

                {message.sender === 'user' && (
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                    <PersonIcon fontSize="small" />
                  </Avatar>
                )}
              </Box>
            ))}
            
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                  <BotIcon fontSize="small" />
                </Avatar>
                <Paper
                  elevation={0}
                  sx={(t) => ({
                    p: 2,
                    bgcolor: t.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : '#f1f5f9',
                    border: `1px solid ${t.palette.divider}`,
                    borderRadius: 2,
                  })}
                >
                  <CircularProgress size={20} />
                </Paper>
              </Box>
            )}
            
            {error && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {error}
              </Alert>
            )}

            {/* Suggested Questions */}
            {!isLoading && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                  Try asking about:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {SUGGESTED_QUESTIONS.slice(0, 6).map((question, index) => (
                    <Chip
                      key={index}
                      label={question}
                      size="small"
                      variant="outlined"
                      onClick={() => handleSendMessage(question)}
                      sx={(t) => ({
                        cursor: 'pointer',
                        borderColor: t.palette.accent.softBorder,
                        backgroundColor: t.palette.accent.soft,
                        color: t.palette.accent.text,
                        fontWeight: 500,
                        transition: 'background-color 0.15s ease, color 0.15s ease',
                        '&:hover': {
                          backgroundColor: t.palette.accent.text,
                          color: t.palette.mode === 'dark' ? '#0b0d10' : '#fff',
                        }
                      })}
                    />
                  ))}
                </Box>
              </Box>
            )}
            
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box sx={{ 
            p: 2, 
            borderTop: 1, 
            borderColor: 'divider',
            display: 'flex',
            gap: 1,
            alignItems: 'flex-end'
          }}>
            <TextField
              ref={inputRef}
              fullWidth
              multiline
              maxRows={3}
              placeholder="Ask me about skills, experience, projects..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              variant="outlined"
              size="small"
            />
            <IconButton
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              color="primary"
              sx={{ alignSelf: 'flex-end' }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Button onClick={clearChat} size="small">
            Clear Chat
          </Button>
          <Typography variant="caption" color="text.secondary">
            Ask about skills, experience, projects, or contact info
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AIChatbot; 