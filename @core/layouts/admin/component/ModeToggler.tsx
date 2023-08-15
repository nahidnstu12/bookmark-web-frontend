// ** MUI Imports
import { PaletteMode } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Settings } from "../../../context/settingsContext";
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";

// ** Icons Imports

// ** Type Import

interface Props {
    settings: Settings;
    saveSettings: (values: Settings) => void;
}

const ModeToggler = (props: Props) => {
    // ** Props
    const { settings, saveSettings } = props;

    const handleModeChange = (mode: PaletteMode) => {
        saveSettings({ ...settings, mode });
    };

    const handleModeToggle = () => {
        if (settings.mode === "light") {
            handleModeChange("dark");
        } else {
            handleModeChange("light");
        }
    };

    return (
        <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
            {settings.mode === "dark" ? <TiWeatherSunny /> : <TiWeatherNight />}
        </IconButton>
    );
};

export default ModeToggler;
