import CommonButton from "../../@core/components/Button/CommonButton";
import {Box, Grid} from "@mui/material";
import {Body1, H1} from "../../@core/components/Typography/Typography";
import {SubmitHandler, useForm} from "react-hook-form";
import CustomTextField from "../../@core/components/Inputs/CustomTextField";
import {useMemo} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Home() {
    const handleBtnClick=()=>{
        console.log('clicked')
    }

    const validationSchema=useMemo(()=>{
        return yup.object().shape({
            title: yup
                .string()
                .trim()
                .required()
                .label('Book title'),
        })
    }
},[])

const validationSchema = useMemo(() => {
    return yup.object().shape({
        title: yup
            .string()
            .trim()
            .required()
            .label("Book title")

    });
}, []);

        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<any>({
            resolver: yupResolver(validationSchema),
        })
        const onSubmit: SubmitHandler<any> = (data) => console.log(data)


        return (
    <Box >
        <CommonButton  isLoading={true} >hello</CommonButton>
        <CommonButton   isLoading={false} onClick={handleBtnClick} className={"style"}  >click</CommonButton>
        <CommonButton  variant={'contained'}  isLoading={false} >with icon</CommonButton>
        <CommonButton color={'info'} >hello</CommonButton>

        <H1 color={'error'} noWrap={true} sx={{fontSize:'200px',color:'black'}} >helllooo</H1>
        <Body1>Body1</Body1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid  container spacing={2}>
                <Grid item xs={12}>
                    <CustomTextField
                        id='title'
                        label={'title'}
                        register={register}
                        errors={errors}
                        required
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
                        {messages['common.save'] as string}
                    </Button>
                    <Button
                        variant={'outlined'}
                        color={'primary'}
                        type={'button'}
                        onClick={props.onClose}>
                        {messages['common.cancel'] as string}
                    </Button>
                </Grid>
            </Grid>
        </form>

    </Box>
  )
}
