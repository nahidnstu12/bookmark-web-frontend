import { createTheme } from "@mui/material";
import palette from "@/@core/theme/adminTheme/palette";
import typography from "@/@core/theme/adminTheme/typography";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: palette,
  typography: typography,
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default theme;
