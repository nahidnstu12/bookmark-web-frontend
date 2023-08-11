import React from "react";
import { Button, ButtonProps, Skeleton } from "@mui/material";

// interface CommonButtonProps extends ButtonProps {
//   onClick?: (event?: any) => void;
//   children?: React.ReactNode;
//   className?: string;
//   isLoading: boolean;
//   btnText: string;
//   color?:
//     | "inherit"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning";
//   variant?: "contained" | "outlined" | "text";
// }
const CommonButton = ({
  onClick,
  children,
  className,
  isLoading,
  btnText,
  color = "primary",
  variant = "text",
  ...props
}: any) => {
  return (
    <Button color={color} variant={variant} classes={className} {...props}>
      {children ? children : btnText}
    </Button>
  );
};
export default CommonButton;
