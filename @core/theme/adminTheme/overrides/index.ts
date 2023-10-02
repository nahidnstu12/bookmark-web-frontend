// ** MUI Imports
import { Theme } from "@mui/material/styles";

// ** Overrides Imports

import MuiButton from "./button";
import MuiInput from "./input";

const Overrides = (theme: Theme) => {
  const button = MuiButton(theme);
  const input = MuiInput(theme);

  return Object.assign(button, input);
};

export default Overrides;
