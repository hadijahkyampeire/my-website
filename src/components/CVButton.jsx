import React from "react";
import { Button, useTheme } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const CV_URL =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.BASE_URL)
    ? `${import.meta.env.BASE_URL}Hadijah-Kyampeire-Resume.pdf`
    : "/Hadijah-Kyampeire-Resume.pdf";

const openCV = (e) => {
  // Prevent SPA router from intercepting the click
  e.preventDefault();
  window.open(CV_URL, "_blank", "noopener,noreferrer");
};

export default function CVButton() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  // The hero is light in light mode, so the outline can't be white-on-white.
  const outline = isDark ? "rgba(255,255,255,0.3)" : theme.palette.primary.main;
  const label = isDark ? "#fff" : theme.palette.primary.main;

  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<PictureAsPdfIcon />}
      component="a"
      href={CV_URL}                 // keeps right-click “Open link in new tab”
      target="_blank"
      rel="noopener noreferrer"
      onClick={openCV}              // ensures it opens the PDF, not your SPA
      sx={{
        px: 3.5,
        py: 1.25,
        borderRadius: 1,
        fontWeight: 600,
        textTransform: "none",
        color: label,
        backgroundColor: "transparent",
        border: `1px solid ${outline}`,
        boxShadow: "none",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
        "&:hover": {
          backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,138,0.06)",
          borderColor: isDark ? "#fff" : theme.palette.primary.dark,
          boxShadow: "none",
        },
        "&:focus-visible": {
          outline: "2px solid",
          outlineColor: isDark ? "rgba(255,255,255,0.6)" : theme.palette.primary.main,
          outlineOffset: 2,
        },
      }}
    >
      Resume (PDF)
    </Button>
  );
}

