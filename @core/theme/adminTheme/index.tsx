import {createTheme} from "@mui/material";
import palette from "@/@core/theme/adminTheme/palette";
import typography from "@/@core/theme/adminTheme/typography";
import {Theme} from "@mui/material/styles/createTheme";

const theme: Theme = createTheme({
    palette:palette,
    typography:typography
});

export default theme;