import { FormControl, Skeleton } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import { Controller } from "react-hook-form";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";

interface Props {
  id: string;
  label?: string;
  radios: Array<any>;
  isLoading?: boolean;
  required?: boolean;
  control: any;
  defaultValue?: string | number | undefined;
  onChange?: (e: any) => any;
  styles?: any;
  errorInstance?: any;
  optionInline?: boolean;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}
const getErrorObject = (id: any, errorInstance: any) => {
  const keyArray = id
    .replaceAll(".", ",")
    .replaceAll("[", ",")
    .replaceAll("]", "")
    .split(",");
  let errorObj = errorInstance;
  keyArray.forEach((key: string) => {
    errorObj = errorObj?.[key];
  });
  return errorObj;
};

const CustomRadioButton = ({
  id,
  label,
  radios,
  isLoading,
  required = false,
  control,
  defaultValue = "",
  onChange: onChangeCallback,
  styles = {},
  errorInstance,
  optionInline = true,
  icon,
  checkedIcon,
}: Props) => {
  let errorObj = getErrorObject(id, errorInstance);
  let helperText =
    errorObj && errorObj.message
      ? errorObj.message.hasOwnProperty("key")
        ? errorObj.message?.values || {}
        : errorObj.message
      : "";
  return isLoading ? (
    <Skeleton />
  ) : (
    <FormControl component="fieldset">
      {label && (
        <FormLabel
          error={typeof errorObj != "undefined" ?? false}
          component="legend"
          required={required}
        >
          {label}
        </FormLabel>
      )}
      <Controller
        render={({ field: { onChange, value = defaultValue.toString() } }) => (
          <RadioGroup
            aria-label={id}
            value={value}
            name={id}
            onChange={(e) => {
              onChange(e.target.value);
              if (onChangeCallback && typeof onChangeCallback === "function") {
                onChangeCallback(e.target.value);
              }
            }}
            sx={{ flexDirection: optionInline ? "column" : "row" }}
          >
            {radios.map((status) => (
              <FormControlLabel
                disabled={status.disabled}
                key={status.id}
                value={status.id}
                sx={styles}
                control={<Radio icon={icon} checkedIcon={checkedIcon} />}
                label={status.label}
              />
            ))}
          </RadioGroup>
        )}
        name={id}
        control={control}
        defaultValue={defaultValue}
      />
      {errorObj && (
        <FormHelperText error={true} id={id}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
export default CustomRadioButton;
