import React, { useState } from 'react';
import { Box, TextField, Button, Alert, CircularProgress } from '@mui/material';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpbrwjk'; // Replace with your Formspree endpoint

export default function ContactForm() {
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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {success && <Alert severity="success">Message sent! Thank you for reaching out.</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Your Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
        fullWidth
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
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Send Message'}
      </Button>
    </Box>
  );
}
