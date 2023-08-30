import TextField from "@mui/material/TextField";
import {SxProps} from "@mui/material/styles";
import {Skeleton} from "@mui/material";
import {Body1} from "../Typography/Typography";
import FormHelperText from "@mui/material/FormHelperText";


// interface CustomTextFieldProps extends TextFieldProps,TextFieldVariants{
interface CustomTextFieldProps {
    id: string;
    label?: string;
    className?: string;
    variant?: 'outlined' | 'standard' | 'filled';
    sx?:SxProps;
    rows?: number;
    size?: 'small' | 'medium' |string;
    isLoading?: boolean;
    required?: boolean;
    multiline?: boolean;
    inputProps?: any;
    InputProps?:any;
    helperText?: any;
    fullWidth?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    errors?: any;



    // register?: any;
    control?: any;
    type?: string;
    [x: string]: any;
    onInput?: any;
};
const CustomTextField = ({id,
                             label,
                             className,
                             variant='outlined',
                             isLoading,
                             register,
                             errors,
                             multiline,
                             rows,
                             defaultValue,
                             inputProps,
                             InputProps,
                             disabled=false,
                             required=false,
                             onInput: onChangeCallback,
                             helperText,
                             ...rest}:CustomTextFieldProps) => {
    let errorObj={};
    return isLoading ? (
        <Skeleton sx={{width: '100%'}} />
    ) : (
        <>
            <TextField
                required={required}
                fullWidth
                variant={variant}
                id={id}
                name={id}
                // error={typeof errorObj != 'undefined' ?? false}
                error={false}
                className={className}
                label={label}
                disabled={disabled}
                InputProps={InputProps}
                inputProps={{...inputProps, ...{required: false}}}
                helperText={
                    errorObj && errorObj?.message ? (
                        errorObj?.message.hasOwnProperty('key') ? (
                                <Body1>{errorObj?.message?.values || {}}</Body1>
                        ) : (
                            <Body1>{ errorObj?.message}</Body1>

                        )
                    ) : (
                        ''
                    )
                }
                {...register(id)}
                {...rest}
            />
            {helperText && (
                <FormHelperText sx={{color: 'primary.main'}}>
                    {helperText}
                </FormHelperText>
            )}

        </>
    )

}
export default CustomTextField;