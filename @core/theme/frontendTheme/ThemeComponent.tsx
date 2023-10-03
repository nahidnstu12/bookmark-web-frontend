import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useState } from "react";
import breakpoints from "../adminTheme/breakpoints";
import shadows from "../adminTheme/shadows";
import typography from "../adminTheme/typography";
import { paletteDark, paletteLight } from "./palette";
import { PaletteMode } from "@mui/material";
const initialContext = {
  mode: "",
  handleChangeMode: () => {},
};

const Context = createContext(initialContext);

export function ThemeContext({ children }: any) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const handleChangeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light" ? { ...paletteLight } : { ...paletteDark }),
    },
    typography: {
      ...typography,
    },
    shadows: shadows(mode),
    breakpoints: breakpoints(),
  });

  return (
    <Context.Provider value={{ mode, handleChangeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
}
export const UseThemeContext = () => useContext(Context);
