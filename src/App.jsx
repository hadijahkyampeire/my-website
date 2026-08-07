import React, { useState, useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import theme from './theme'
import Navbar from './components/Navbar'
import AIChatbot from './components/AIChatbot'

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  // The CSS custom properties in index.css key off [data-theme]; without this the
  // raw-CSS layer (body, #root) stayed light-mode even after toggling to dark.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} isDark={currentTheme === 'dark'} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
        <AIChatbot />
      </Router>
    </ThemeProvider>
  )
}

export default App
