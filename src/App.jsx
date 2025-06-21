import React, { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import theme from './theme'
import Navbar from './components/Navbar'

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

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
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
