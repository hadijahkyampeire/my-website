import { useState } from "react";
import {
Card,
Grid,
Stack,
Typography,
useTheme,
Box,
List,
ListItem,
ListItemIcon,
ListItemText,
Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";



const ExperienceItem = ({ exp, index }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const bullets =
    exp?.bullets && exp.bullets.length > 0
      ? exp.bullets
      : exp?.description
      ? [exp.description]
      : [];

  const MAX_BULLETS = 4; // show first 4 by default
  const isExpandable = bullets.length > MAX_BULLETS;
  const visibleBullets = expanded ? bullets : bullets.slice(0, MAX_BULLETS);

  return (
    <Card
      sx={{
        p: 3,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(30, 58, 138, 0.15)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 4,
          height: "100%",
          background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        },
      }}
    >
      <Grid container spacing={2}>
        {/* If you're on classic Grid, use: <Grid item xs={12} sx={{ mt: 2 }}> */}
        <Grid size={12} sx={{ mt: 2 }}>
          <Stack spacing={0.5}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
              {exp.title}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: theme.palette.text.secondary }}>
              <WorkOutlineIcon fontSize="small" />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {exp.company}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}>
              <CalendarMonthIcon fontSize="small" />
              <Typography variant="body2">{exp.duration}</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Bullets */}
        {/* If you're on classic Grid, use: <Grid item xs={12} sx={{ mt: 2 }}> */}
        <Grid size={12} sx={{ mt: 2, position: "relative" }}>
          <Box
            component="ul"
            id={`exp-bullets-${index}`}
            aria-label={`${exp.title} achievements`}
            sx={{ listStyle: "none", p: 0, m: 0 }}
          >
            <List disablePadding>
              {visibleBullets.map((b, i) => (
                <ListItem key={i} disableGutters alignItems="flex-start" sx={{ mb: 1.25 }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: "3px" }}>
                    <CheckCircleOutlineIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={b}
                    primaryTypographyProps={{
                      variant: "body2",
                      sx: { lineHeight: 1.7, color: theme.palette.text.primary },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Subtle fade hint when collapsed */}
          {!expanded && isExpandable && (
            <Box
              sx={{
                pointerEvents: "none",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 48,
                height: 32,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.35))"
                    : "linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.85))",
              }}
            />
          )}

          {/* Show more / fewer button */}
          {isExpandable && (
            <Button
              size="small"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
              aria-controls={`exp-bullets-${index}`}
              endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                mt: 0.5,
                textTransform: "none",
                fontWeight: 600,
                px: 1.25,
                borderRadius: 2,
                color: theme.palette.secondary.main,
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.04)",
                },
              }}
            >
              {expanded ? "Show fewer" : `Show ${bullets.length - MAX_BULLETS} more`}
            </Button>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ExperienceItem;