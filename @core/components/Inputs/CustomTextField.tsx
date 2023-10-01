import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material/styles";
import { FormControl, Skeleton } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { Controller } from "react-hook-form";

interface CustomTextFieldProps {
  id: string;
  label?: string;
  className?: string;
  variant?: "outlined" | "standard" | "filled";
  sx?: SxProps;
  rows?: number;
  size?: "small" | "medium";
  isLoading?: boolean;
  required?: boolean;
  multiline?: boolean;
  inputProps?: any;
  InputProps?: any;
  helperText?: any;
  fullWidth?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  errors?: any;
  control?: any;
  type?: string;
  [x: string]: any;
  onInput?: any;
  placeholder?: string | React.ReactNode;
  formLabelPadding?: string;
  formLabelColor?: string;
}
const CustomTextField = ({
  id,
  label,
  className,
  variant = "outlined",
  isLoading,
  errors,
  defaultValue,
  inputProps,
  disabled = false,
  required = false,
  onInput: onChangeCallback,
  helperText,
  placeholder,
  formLabelColor = "primary.main",
  formLabelPadding = "10px",
  fullWidth = true,
  type,
  size,
  control,
  ...rest
}: CustomTextFieldProps) => {
  let errorObj = errors && errors?.[id];

  return isLoading ? (
    <Skeleton sx={{ width: "100%" }} />
  ) : (
    <>
      <FormControl fullWidth={fullWidth}>
        <Controller
          render={({ field: { ref, onChange, value = defaultValue } }) => (
            <>
              {label && (
                <FormLabel
                  sx={{
                    paddingBottom: formLabelPadding,
                    color: formLabelColor,
                    fontWeight: "500",
                  }}
                  error={typeof errorObj != "undefined" ?? false}
                  component="legend"
                  required={required}
                >
                  {label as string}
                </FormLabel>
              )}
              <TextField
                fullWidth
                ref={ref}
                variant={variant ? variant : "outlined"}
                className={className}
                // label={label as string}
                title={label as string}
                placeholder={placeholder as string}
                type={type}
                size={size ? size : "small"}
                error={errorObj && Boolean(errorObj)}
                helperText={
                  errorObj && errorObj.message
                    ? errorObj.message.hasOwnProperty("key")
                      ? errorObj.message?.values || {}
                      : errorObj.message
                    : ""
                }
                onInput={(event: any) => {
                  let value =
                    type == "file" ? event.target.files : event.target.value;
                  if (onChangeCallback) {
                    onChangeCallback(value);
                  }
                }}
                onChange={(event: any) => {
                  let value =
                    type == "file" ? event.target.files : event.target.value;
                  onChange(value);
                }}
                value={value ?? ""}
                disabled={disabled ? disabled : false}
                inputProps={{ ...inputProps, ...{ required: false } }}
                {...rest}
              />
            </>
          )}
          name={id}
          control={control}
          defaultValue={defaultValue ?? ""}
        />
      </FormControl>

      {helperText && (
        <FormHelperText sx={{ color: "primary.main" }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};
export default CustomTextField;
