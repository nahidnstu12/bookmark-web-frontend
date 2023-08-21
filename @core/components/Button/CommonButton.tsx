import React from "react";
import { Button, ButtonProps, Skeleton } from "@mui/material";

interface CommonButtonProps extends ButtonProps {
  onClick?: (event?: any) => void;
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant?: "contained" | "outlined" | "text";
  disabled?:boolean
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?:'small' | 'medium' | 'large'

}
const CommonButton = ({
  onClick,
  children,
  className,
  isLoading,
  color = "primary",
  variant = "text",
  startIcon,
  endIcon,
    size='medium',
  ...props
}: CommonButtonProps) => {
  return isLoading ? (
      <Skeleton width={'70px'} height={'40px'} sx={{borderRadius:'10px'}}  />
  ) : (
      <Button  endIcon={endIcon} startIcon={startIcon} onClick={onClick} size={size} color={color} variant={variant} className={className} {...props} >
        {children}
      </Button>)

};
export default CommonButton;
