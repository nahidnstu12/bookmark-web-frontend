import {createTheme} from "@mui/material";
import palette from "@/@core/theme/adminTheme/palette";
import typography from "@/@core/theme/adminTheme/typography";

const theme = createTheme({
    palette:palette,
    typography:typography
});

export default theme;