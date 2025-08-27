import React from "react";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const CV_URL =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.BASE_URL)
    ? `${import.meta.env.BASE_URL}HadijahKyampeireResume.pdf`
    : "/HadijahKyampeireResume.pdf";

const openCV = (e) => {
  // Prevent SPA router from intercepting the click
  e.preventDefault();
  window.open(CV_URL, "_blank", "noopener,noreferrer");
};

export default function CVButton() {
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
      sx={(theme) => ({
        px: { xs: 3.5, sm: 4.5 },
        py: 1.75,
        borderRadius: 999,          // pill
        fontWeight: 800,
        letterSpacing: 0.3,
        textTransform: "none",
        color: "white",
        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 14px 34px rgba(0,0,0,0.28)",
        transition: "transform .18s ease, box-shadow .18s ease, filter .18s ease",
        "&:hover": {
          transform: "translateY(-2px) scale(1.02)",
          boxShadow: "0 18px 42px rgba(0,0,0,0.35)",
          filter: "brightness(1.06)",
        },
        "&:active": { transform: "translateY(0) scale(0.99)" },
        "&:focus-visible": {
          outline: "3px solid",
          outlineColor: theme.palette.secondary.light,
          outlineOffset: 2,
        },
      })}
    >
      Resume (PDF)
    </Button>
  );
}

export { CV_URL, openCV };
