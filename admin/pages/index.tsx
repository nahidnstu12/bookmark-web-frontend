import CommonButton from "../../@core/components/Button/CommonButton";
import {Box, Grid} from "@mui/material";
import {Body1, H1} from "../../@core/components/Typography/Typography";
import {SubmitHandler, useForm} from "react-hook-form";
import CustomTextField from "../../@core/components/Inputs/CustomTextField";
import {useMemo} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";

export default function Home() {
    const handleBtnClick=()=>{
        console.log('clicked')
    }

const validationSchema = useMemo(() => {
    return yup.object().shape({
        title: yup
            .string()
            .trim()
            .required()
            .label("Book title"),
        description: yup
            .string()
            .trim()
            .required()
            .label("Book description")

    });
}, []);

        const {
            register,
            handleSubmit,
            reset,
            formState: { errors,isSubmitting },
        } = useForm<any>({
            resolver: yupResolver(validationSchema),
        })
        const onSubmit: SubmitHandler<any> = (data) =>{
            reset({...data})
            console.log(data)
        }
console.log(errors)

        return (
    <Box>
        <CommonButton  isLoading={true} >hello</CommonButton>
        <CommonButton   isLoading={false} onClick={handleBtnClick} className={"style"}  >click</CommonButton>
        <CommonButton  variant={'contained'}  isLoading={false} >with icon</CommonButton>
        <CommonButton color={'info'} >hello</CommonButton>

        <H1 color={'error'} noWrap={true} sx={{fontSize:'200px',color:'black'}} >helllooo</H1>
        <Body1>Body1</Body1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid  container spacing={2} mt={5}>
                <Grid item xs={12}>
                    <CustomTextField
                        id='title'
                        label={'title'}
                        register={register}
                        errors={errors}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        id='description'
                        label={'description'}
                        register={register}
                        errors={errors}
                        multiline
                        rows={4}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    display={'flex'}
                    justifyContent={'flex-start'}
                    sx={{my: '1rem', gap: '1rem'}}>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        type={'submit'}
                        disabled={isSubmitting}>
                        {'save'}
                    </Button>

                </Grid>

            </Grid>
        </form>

    </Box>
  )
}
