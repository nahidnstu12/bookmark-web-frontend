import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { SxProps } from "@mui/material/styles";

type Props = {
  id: string;
  label: string | number | React.ReactNode;
  isLoading?: boolean;
  register?: any;
  errorInstance?: any;
  checked?: boolean | number;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  checkedIcon?: React.ReactNode;
  icon?: React.ReactNode;
  sx?: SxProps;
};

const CustomCheckbox = ({
  id,
  register,
  label,
  isLoading,
  errorInstance,
  checked,
  onChange,
  value,
  checkedIcon,
  icon,
  sx,
}: Props) => {
  return isLoading ? (
    <Skeleton />
  ) : (
    <Typography color={errorInstance?.[id] ? "error" : "inherit"}>
      <FormControlLabel
        sx={{
          marginLeft: "0",
        }}
        tabIndex={0}
        control={
          <Checkbox
            {...register(id)}
            checked={checked}
            onChange={onChange}
            disableFocusRipple
            disableRipple
            value={value}
            checkedIcon={checkedIcon}
            icon={icon}
            sx={sx}
          />
        }
        label={label as React.ReactNode}
      />
    </Typography>
  );
};
export default CustomCheckbox;
