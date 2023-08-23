import Typography from "@mui/material/Typography";
import {SxProps} from '@mui/material/styles';
import theme from "../../theme/adminTheme";

interface HeadingProp {
    children?: React.ReactNode;
    className?: string;
    noWrap?: boolean;
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    color?:"primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning"
        |"black"
        |"white";
    sx?: SxProps;
}

const colors = {
    primary: {color: theme.palette.primary.main},
    secondary: {color: theme.palette.secondary.main},
    success: {color: theme.palette.success.main},
    error: {color: theme.palette.error.main},
    info: {color: theme.palette.info.main},
    warning: {color: theme.palette.warning.main},
    black: {color: '#FFFFFF'},
    white: {color: '#000000'},
};

export const H1 = ({
                       children,
                       className,
                       align = 'left',
                       color,
                       sx = {},
                       noWrap=false
                   }: HeadingProp) => (
    <Typography
        variant='h1'
        align={align}
        className={className}
        noWrap={noWrap}
        sx={color?{...colors[color],...sx}:{...sx}}>
        {children}
    </Typography>
);