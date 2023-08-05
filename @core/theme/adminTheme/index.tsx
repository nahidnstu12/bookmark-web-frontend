import palette from "@/@core/theme/adminTheme/palette";
import { createTheme } from "@mui/material/styles";
import { Fonts } from "@/@core/common/enum";
import typography from "@/@core/theme/adminTheme/typography";

const theme = createTheme({
  palette: palette,
  typography: typography,
});

export default theme;
