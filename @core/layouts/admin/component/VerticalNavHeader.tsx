// ** React Import
// ** MUI Imports
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

// ** Next Import
import Link from "next/link";
import { ReactNode } from "react";
import themeConfig from "../../../configs/themeConfig";
import { Settings } from "../../../context/settingsContext";

// ** Type Import

// ** Configs

interface Props {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: theme.spacing(4.5),
  transition: "padding .25s ease-in-out",
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "uppercase",
  color: theme.palette.text.primary,
  transition: "opacity .25s ease-in-out, margin .25s ease-in-out",
}));

const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
});

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props;

  const Img = styled("img")(({ theme }) => ({
    // marginBottom: theme.spacing(10),
    [theme.breakpoints.down("lg")]: {
      height: 45,
      // marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down("md")]: {
      height: 40,
    },
    [theme.breakpoints.up("lg")]: {
      // marginTop: theme.spacing(13),
    },
  }));

  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        // <Link href="/" passHref>
        <StyledLink href="/" passHref>
          <Img
            height="48"
            alt="admin logo"
            src="/images/logos/admin-logo-2.png"
          />
          <HeaderTitle variant="h6" sx={{ ml: 3 }}>
            {themeConfig.templateName}{" "}
            <Typography
              variant={"body1"}
              sx={{ textTransform: "capitalize", textAlign: "center" }}
            >
              Admin
            </Typography>
          </HeaderTitle>
        </StyledLink>
        // </Link>
      )}
    </MenuHeaderWrapper>
  );
};

export default VerticalNavHeader;
