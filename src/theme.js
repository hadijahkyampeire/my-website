import { createTheme } from '@mui/material/styles';

const theme = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1e3a8a', // Navy blue
        light: '#3b5998',
        dark: '#0f172a',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ea580c', // Single warm orange accent
        light: '#fb923c',
        dark: '#c2410c',
        contrastText: '#ffffff',
      },
      background: {
        default: '#ffffff',
        paper: '#f8fafc',
      },
      text: {
        primary: '#1e293b',
        secondary: '#64748b',
      },
      divider: '#e2e8f0',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        color: '#1e3a8a',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.3,
        color: '#1e3a8a',
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.4,
        color: '#1e3a8a',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
        color: '#1e3a8a',
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4,
        color: '#1e3a8a',
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.4,
        color: '#1e3a8a',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#1e293b',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: '#64748b',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
            transition: 'background-color 0.15s ease, border-color 0.15s ease',
            cursor: 'pointer',
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          },
          containedPrimary: {
            backgroundColor: '#1e3a8a',
            '&:hover': { backgroundColor: '#0f172a' },
          },
          containedSecondary: {
            backgroundColor: '#ea580c',
            '&:hover': { backgroundColor: '#c2410c' },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: '1px solid #e2e8f0',
            boxShadow: 'none',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            '&:hover': {
              borderColor: '#cbd5e1',
              boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: 'none',
            borderBottom: '1px solid #e2e8f0',
          },
        },
      },
    },
  }),

  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0b0d10', // Softened near-black (not pure black)
        light: '#1a1d24',
        dark: '#050608',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#fb923c', // Same orange family, slightly lighter for dark mode contrast
        light: '#fdba74',
        dark: '#ea580c',
        contrastText: '#0b0d10',
      },
      background: {
        default: '#0b0d10',
        paper: '#111418',
      },
      text: {
        primary: '#e8e8ea',
        secondary: '#8b8b94',
      },
      divider: 'rgba(255,255,255,0.08)',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        color: '#ffffff',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.3,
        color: '#ffffff',
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.4,
        color: '#ffffff',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
        color: '#ffffff',
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4,
        color: '#ffffff',
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.4,
        color: '#ffffff',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#ffffff',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: '#a1a1aa',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
            transition: 'background-color 0.15s ease, border-color 0.15s ease',
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          },
          containedPrimary: {
            backgroundColor: '#1a1d24',
            '&:hover': { backgroundColor: '#262a32' },
          },
          containedSecondary: {
            backgroundColor: '#fb923c',
            color: '#0b0d10',
            '&:hover': { backgroundColor: '#fdba74' },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: '#111418',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: 'none',
            transition: 'border-color 0.15s ease',
            '&:hover': {
              borderColor: 'rgba(255,255,255,0.14)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(11, 13, 16, 0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          },
        },
      },
    },
  }),
};

export default theme;
