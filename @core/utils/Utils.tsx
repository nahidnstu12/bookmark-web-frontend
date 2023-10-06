import { createTheme } from "@mui/material";

export const isBreakPointDown = (key: "xs" | "sm" | "md" | "lg" | "xl") => {
  const defaultTheme = createTheme();
  return window.innerWidth < defaultTheme.breakpoints.values[key];
};

export const isBreakPointUp = (key: "xs" | "sm" | "md" | "lg" | "xl") => {
  const defaultTheme = createTheme();
  return window.innerWidth > defaultTheme.breakpoints.values[key];
};
