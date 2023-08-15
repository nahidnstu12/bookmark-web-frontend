// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useSettings} from "../../hooks/useSettings";
import AppHeader from "./AppHeader";
import Layout from "./Layout";
import menus from "./menus";


// ** Hook Import

interface Props {
    children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
    // ** Hooks
    const { settings, saveSettings } = useSettings();

    /**
     *  The below variable will hide the current layout menu at given screen size.
     *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
     *  You can change the screen size from which you want to hide the current layout menu.
     *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
     *  to know more about what values can be passed to this hook.
     *  ! Do not change this value unless you know what you are doing. It can break the template.
     */
    const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

    return (
        <Layout
            hidden={hidden}
            settings={settings}
            saveSettings={saveSettings}
            verticalNavItems={menus()} // Navigation Items
            // afterVerticalNavMenuContent={UpgradeToProImg}
            verticalAppBarContent={(
                props:any, // AppBar Content
            ) => (
                <AppHeader
                    hidden={hidden}
                    settings={settings}
                    saveSettings={saveSettings}
                    toggleNavVisibility={props.toggleNavVisibility}
                />
            )}
        >
            {children}
            {/*<UpgradeToProButton />*/}
        </Layout>
    );
};

export default AdminLayout;
