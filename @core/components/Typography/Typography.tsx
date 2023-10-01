import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import { useTheme } from "@mui/material";

interface HeadingProp {
  children?: React.ReactNode;
  className?: string;
  noWrap?: boolean;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "black"
    | "white";
  sx?: SxProps;
}

const Colors = () => {
  const theme = useTheme();
  return {
    primary: { color: theme.palette.primary.main },
    secondary: { color: theme.palette.secondary.main },
    success: { color: theme.palette.success.main },
    error: { color: theme.palette.error.main },
    info: { color: theme.palette.info.main },
    warning: { color: theme.palette.warning.main },
    black: { color: "#FFFFFF" },
    white: { color: "#000000" },
  };
};

export const H1 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="h1"
    align={align}
    className={className}
    noWrap={noWrap}
    // sx={sx}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const H2 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="h2"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const H3 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="h3"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const H4 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="h4"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const H5 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="h5"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const H6 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="h6"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const Subtitle1 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="subtitle1"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const Subtitle2 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="subtitle2"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const Body1 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="body1"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const Body2 = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="body2"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const Caption = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="caption"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);

export const Overline = ({
  children,
  className,
  align = "left",
  color,
  sx = {},
  noWrap = false,
}: HeadingProp) => (
  <Typography
    variant="overline"
    align={align}
    className={className}
    noWrap={noWrap}
    sx={color ? { ...Colors()[color], ...sx } : { ...sx }}
  >
    {children}
  </Typography>
);
