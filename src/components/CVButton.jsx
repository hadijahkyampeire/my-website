import React from "react";
import { Button } from "@mui/material";
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
        color: "#fff",
        backgroundColor: "transparent",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "none",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.05)",
          borderColor: "#fff",
          boxShadow: "none",
        },
        "&:focus-visible": {
          outline: "2px solid",
          outlineColor: "rgba(255,255,255,0.6)",
          outlineOffset: 2,
        },
      }}
    >
      Resume (PDF)
    </Button>
  );
}

