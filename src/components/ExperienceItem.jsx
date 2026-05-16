import { useState } from "react";
import {
  Card,
  Stack,
  Typography,
  useTheme,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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

  const MAX_BULLETS = 3;
  const isExpandable = bullets.length > MAX_BULLETS;
  const visibleBullets = expanded ? bullets : bullets.slice(0, MAX_BULLETS);

  // Support both new shape ({ company, role, ... }) and legacy ({ title, company, ... })
  const companyName = exp.company || "";
  const roleLine = exp.role || exp.title || "";
  const locationLine = exp.location || "";
  const durationLine = exp.duration || "";
  const contextLine = exp.companyContext || "";

  return (
    <Card
      sx={{
        p: { xs: 3, md: 4 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 3,
          height: "100%",
          background: theme.palette.secondary.main,
        },
      }}
    >
      {/* Top row: company (lg, bold) on left · duration on right */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "flex-end" }}
        spacing={{ xs: 0.5, md: 2 }}
        sx={{ mb: 0.5 }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {companyName}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: theme.palette.secondary.main,
            whiteSpace: "nowrap",
            mt: { xs: 0.5, md: 0 },
          }}
        >
          {durationLine}
        </Typography>
      </Stack>

      {/* Role + location */}
      <Typography
        variant="subtitle1"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 600,
          mb: locationLine ? 0.25 : 1.5,
        }}
      >
        {roleLine}
      </Typography>
      {locationLine && (
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 1.5,
          }}
        >
          {locationLine}
        </Typography>
      )}

      {/* Company context one-liner */}
      {contextLine && (
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            fontStyle: "italic",
            lineHeight: 1.6,
            mb: 2.5,
            borderLeft: `2px solid ${theme.palette.divider}`,
            pl: 1.5,
          }}
        >
          {contextLine}
        </Typography>
      )}

      {/* Bullets */}
      <Box
        component="ul"
        id={`exp-bullets-${index}`}
        aria-label={`${companyName} achievements`}
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
            mb: 1,
            textTransform: "none",
            fontWeight: 600,
            px: 1.25,
            borderRadius: 1,
            color: theme.palette.secondary.main,
            "&:hover": {
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.04)",
            },
          }}
        >
          {expanded ? "Show fewer" : `Show ${bullets.length - MAX_BULLETS} more`}
        </Button>
      )}

      {/* Technology chips */}
      {exp.technologies && exp.technologies.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 2.5, pt: 2.5, borderTop: `1px solid ${theme.palette.divider}` }}>
          {exp.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                borderColor: theme.palette.divider,
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: "0.72rem",
                height: 24,
                "& .MuiChip-label": { px: 1 },
              }}
            />
          ))}
        </Box>
      )}
    </Card>
  );
};

export default ExperienceItem;
