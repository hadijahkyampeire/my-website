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
        main: '#fbbf24', // Sharp Yellow with Orange Undertone
        light: '#fde68a',
        dark: '#d9770c',
        contrastText: '#1e293b',
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
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(30, 58, 138, 0.3)',
            },
            cursor: 'pointer',
          },
          containedPrimary: {
            backgroundColor: '#1e3a8a',
            '&:hover': {
              backgroundColor: '#0f172a',
            },
          },
          containedSecondary: {
            backgroundColor: '#ea580c',
            '&:hover': {
              backgroundColor: '#c2410c',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 40px rgba(30, 58, 138, 0.15)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  }),

  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000000', // Black
        light: '#1a1a1a',
        dark: '#000000',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#fbbf24', // Sharp Yellow with Orange Undertone accent
        light: '#fde68a',
        dark: '#d9770c',
        contrastText: '#1e293b',
      },
      background: {
        default: '#000000',
        paper: '#0a0a0a',
      },
      text: {
        primary: '#ffffff',
        secondary: '#a1a1aa',
      },
      divider: '#27272a',
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
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(234, 88, 12, 0.4)',
            },
          },
          containedPrimary: {
            backgroundColor: '#000000',
            '&:hover': {
              backgroundColor: '#1a1a1a',
            },
          },
          containedSecondary: {
            backgroundColor: '#ea580c',
            '&:hover': {
              backgroundColor: '#c2410c',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: '#0a0a0a',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 40px rgba(234, 88, 12, 0.2)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
  }),
};

export default theme;
