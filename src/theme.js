import { createTheme } from '@mui/material/styles';

/**
 * Accent tokens — ONE orange per mode.
 * Every accent on the page (text, icons, rules, chips, filled buttons) uses
 * `main`/`text`; `dark` is only the hover state. Light mode picks #c2410c
 * because the brighter #ea580c is 3.6:1 on white and fails AA for body text.
 */
const accent = {
  light: {
    main: '#c2410c',
    text: '#c2410c',
    dark: '#9a3412',
    soft: '#fff4ed',
    softBorder: '#fdba74',
  },
  dark: {
    main: '#fb923c',
    text: '#fb923c',
    dark: '#fdba74',
    soft: 'rgba(251, 146, 60, 0.12)',
    softBorder: 'rgba(251, 146, 60, 0.35)',
  },
};

const theme = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1e3a8a', // Navy blue
        light: '#3b5998',
        dark: '#152c69',
        contrastText: '#ffffff',
      },
      secondary: {
        // Same value as accent.main so decoration and text never disagree
        main: '#c2410c',
        light: '#ea580c',
        dark: '#9a3412',
        contrastText: '#ffffff',
      },
      accent: accent.light,
      background: {
        default: '#ffffff',
        paper: '#f4f7fc', // Soft blue-tinted surface for alternating sections
      },
      text: {
        // Near-black rather than slate — reads as black without the harshness
        // of pure #000, and drops the blue cast that made body copy look faded.
        primary: '#121417',
        secondary: '#3d4148', // 10.3:1 on white
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
        lineHeight: 1.7,
        color: '#121417',
      },
      body2: {
        fontSize: '0.9375rem',
        lineHeight: 1.7,
        color: '#3d4148',
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
            '&:hover': { backgroundColor: '#152c69' },
          },
          containedSecondary: {
            backgroundColor: '#c2410c',
            '&:hover': { backgroundColor: '#9a3412' },
          },
          outlinedSecondary: {
            borderColor: '#c2410c',
            color: '#c2410c',
            '&:hover': { borderColor: '#9a3412', backgroundColor: '#fff4ed' },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: '#ffffff', // Cards stay white so they lift off tinted sections
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            '&:hover': {
              borderColor: '#cbd5e1',
              boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.07)',
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
      accent: accent.dark,
      background: {
        default: '#0b0d10',
        paper: '#111418',
      },
      text: {
        primary: '#e8e8ea',
        secondary: '#a1a1aa',
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
        lineHeight: 1.7,
        color: '#e8e8ea',
      },
      body2: {
        fontSize: '0.9375rem',
        lineHeight: 1.7,
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
            cursor: 'pointer',
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
