import Typography from "@mui/material/Typography";
import {SxProps} from '@mui/material/styles';

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

    [x: string]: any;
}

const color = {
    primary: {color: '8px'},
    secondary: {padding: '16px'},
    success: {padding: '22px'},
    error: {padding: '40px'},
    info: {padding: 0},
    warning: {padding: 0},
    black: {padding: 0},
    white: {padding: 0},
};

export const H1 = ({
                       children,
                       align = 'right',
                       colorPrimary = false,
                       sx = {},
                       ...props
                   }: HeadingProp) => (
    <Typography
        variant='h1'
        tabIndex={0}
        sx={getHeadingStyle(sx, centered, colorPrimary)}
        {...props}>
        {children}
    </Typography>
);