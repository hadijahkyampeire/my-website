import React, { useState } from 'react';
import { Box, TextField, Button, Alert, CircularProgress, useTheme } from '@mui/material';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpbrwjk'; // Replace with your Formspree endpoint

export default function ContactForm() {
  const theme = useTheme();
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        mt: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 3,
        p: 3,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        '&:hover': {
          borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.18)' : '#cbd5e1',
          boxShadow: theme.palette.mode === 'dark'
            ? 'none'
            : '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px rgba(15,23,42,0.07)',
        }
      }}
    >
      {success && (
        <Alert 
          severity="success"
          sx={{
            borderRadius: 2,
            '& .MuiAlert-icon': {
              color: theme.palette.success.main,
            }
          }}
        >
          Message sent! Thank you for reaching out.
        </Alert>
      )}
      {error && (
        <Alert 
          severity="error"
          sx={{
            borderRadius: 2,
            '& .MuiAlert-icon': {
              color: theme.palette.error.main,
            }
          }}
        >
          {error}
        </Alert>
      )}
      <TextField
        label="Your Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.accent.main,
              }
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.accent.main,
              }
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.accent.main,
          }
        }}
      />
      <TextField
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.accent.main,
              }
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.accent.main,
              }
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.accent.main,
          }
        }}
      />
      <TextField
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        fullWidth
        multiline
        minRows={4}
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.accent.main,
              }
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.accent.main,
              }
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.accent.main,
          }
        }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        disabled={loading}
        sx={{
          bgcolor: theme.palette.accent.main,
          color: theme.palette.mode === 'dark' ? '#0b0d10' : '#fff',
          fontWeight: 600,
          py: 1.5,
          borderRadius: 2,
          transition: 'background-color 0.15s ease',
          '&:hover': {
            bgcolor: theme.palette.accent.dark,
            boxShadow: 'none',
          },
          '&:disabled': {
            bgcolor: theme.palette.action.disabled,
            transform: 'none',
            boxShadow: 'none',
          }
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
      </Button>
    </Box>
  );
}
