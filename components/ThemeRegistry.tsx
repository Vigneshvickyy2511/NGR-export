"use client";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005b32",
      dark: "#003f26",
      light: "#1e7a4f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffd000",
      dark: "#b6a700",
      light: "#ffe14d",
      contrastText: "#143c28",
    },
    text: {
      primary: "#173e2a",
      secondary: "#5f6d65",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 6,
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
