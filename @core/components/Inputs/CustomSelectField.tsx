import { FormControl, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

type Props = {
  id: string;
  isLoading?: boolean;
  className?: string;
  defaultValue?: number | Array<string>;
  inputProps?: any;
  isDisabled?: boolean;
  required?: boolean;
  label?: string | React.ReactNode;
  multiple?: boolean;
  onChange?: (e: any) => any;
  renderValue?: (value?: any) => React.ReactNode;
  variant?: "outlined" | "standard" | "filled";
  options?: Array<any>;
  errorInstance?: any;
  optionValueProp?: any;
  optionTitleProp?: string;
  formLabelPadding?: string;

  control: any;

  [x: string]: any;
};

const CustomSelectField = ({
  id,
  isLoading,
  control,
  size,
  errorInstance,
  variant,
  options,
  defaultValue,
  optionValueProp,
  optionTitleProp,
  multiple,
  onChange: onChangeCallback,
  inputProps,
  isDisabled = false,
  required = false,
  label,
  formLabelPadding = "10px",
  ...props
}: Props) => {
  const getTitle = (option: any, optionTitleProp: string | undefined) => {
    let title = "";
    if (option && optionTitleProp) {
      title = option[optionTitleProp];
    }
    return title;
  };
  let errorObj = errorInstance?.[id];

  return (
    <>
      <FormControl
        variant={variant ? variant : "outlined"}
        fullWidth={true}
        disabled={isDisabled}
        error={!!errorObj}
      >
        <Controller
          render={({ field: { onChange, value = defaultValue } }) => {
            return (
              <>
                {label && (
                  <FormLabel
                    sx={{
                      paddingBottom: formLabelPadding,
                      color: "primary.main",
                      fontWeight: "500",
                    }}
                    error={typeof errorObj != "undefined" ?? false}
                    component="legend"
                    required={required}
                  >
                    {label as string}
                  </FormLabel>
                )}
                <Select
                  MenuProps={{
                    style: {
                      maxHeight: 400,
                    },
                  }}
                  labelId="select-outlined-label"
                  aria-label={id}
                  label={label as React.ReactNode}
                  value={value ? value : ""}
                  multiple={multiple}
                  onChange={(e) => {
                    onChange(e.target.value);
                    if (
                      onChangeCallback &&
                      typeof onChangeCallback === "function"
                    ) {
                      onChangeCallback(e.target.value);
                    }
                  }}
                  inputProps={inputProps}
                  {...props}
                >
                  {(options || []).map((option: any, index: number) => {
                    let value =
                      option[optionValueProp] && option[optionValueProp];
                    let title = getTitle(option, optionTitleProp);
                    return (
                      <MenuItem key={index} value={value}>
                        {option?.icon}
                        {title}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errorObj && (
                  <FormHelperText>
                    {errorObj.message
                      ? errorObj.message.hasOwnProperty("key")
                        ? errorObj.message?.values
                        : errorObj.message
                      : ""}
                  </FormHelperText>
                )}
              </>
            );
          }}
          name={id}
          control={control}
        />
      </FormControl>
    </>
  );
};
export default CustomSelectField;