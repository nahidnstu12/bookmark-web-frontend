import CommonButton from "../../@core/components/Button/CommonButton";
import { Box, Grid } from "@mui/material";
import { Body1, H1 } from "../../@core/components/Typography/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomTextField from "../../@core/components/Inputs/CustomTextField";
import { useMemo, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import CustomSelectField from "../../@core/components/Inputs/CustomSelectField";

export default function Home() {
  const [selectedType, setSelectedType] = useState<string | null | number>(
    null,
  );

  console.log("selectedType", selectedType);
  const onChangeType = (value: any) => {
    setSelectedType(value ? value : null);
    console.log("value12345", value, selectedType);
  };

  enum QuestionType {
    MCQ = 1,
    MAQ = 2,
    FILL_IN_THE_BLANK = 3,
    YES_NO = 4,
  }

  const questionTypes = useMemo(
    () => [
      {
        id: QuestionType.MCQ,
        label: "A",
      },
      {
        id: QuestionType.MAQ,
        label: "B",
      },
      {
        id: QuestionType.YES_NO,
        label: "C",
      },
      {
        id: QuestionType.FILL_IN_THE_BLANK,
        label: "D",
      },
    ],
    [],
  );

  enum OPTIONS {
    OPTION_1 = "option_1",
    OPTION_2 = "option_2",
    OPTION_3 = "option_3",
    OPTION_4 = "option_4",
    OPTION_5 = "option_5",
    OPTION_6 = "option_6",
    OPTION_7 = "option_7",
  }

  const answerOptions = useMemo(
    () => [
      {
        id: OPTIONS.OPTION_1,
        label: "option.option1",
      },
      {
        id: OPTIONS.OPTION_2,
        label: "option.option2",
      },
      {
        id: OPTIONS.OPTION_3,
        label: "option.option3",
      },
      {
        id: OPTIONS.OPTION_4,
        label: "option.option4",
      },
      {
        id: OPTIONS.OPTION_5,
        label: "option.option5",
      },
      {
        id: OPTIONS.OPTION_6,
        label: "option.option6",
      },
      {
        id: OPTIONS.OPTION_7,
        label: "option.option7",
      },
    ],
    [],
  );

  const handleBtnClick = () => {
    console.log("clicked");
  };

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      title: yup.string().trim().required().label("Book title"),
      description: yup.string().trim().required().label("Book description"),
      maq_answer: yup.array().of(yup.mixed()).required().label("maq"),
      question_type: yup.string().trim().required().label("question_type"),
    });
  }, [selectedType]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<any> = (data) => {
    reset({ ...data });
    console.log(data);
  };
  console.log("errors", errors);

  return (
    <Box>
      <CommonButton isLoading={true}>hello</CommonButton>
      <CommonButton
        isLoading={false}
        onClick={handleBtnClick}
        className={"style"}
      >
        click
      </CommonButton>
      <CommonButton variant={"contained"} isLoading={false}>
        with icon
      </CommonButton>
      <CommonButton color={"info"}>hello</CommonButton>

      <H1
        color={"error"}
        noWrap={true}
        sx={{ fontSize: "200px", color: "black" }}
      >
        helllooo
      </H1>
      <Body1>Body1</Body1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={12}>
            <CustomTextField
              id="title"
              label={"title"}
              register={register}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              id="description"
              label={"description"}
              register={register}
              errors={errors}
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomSelectField
              required
              id="question_type"
              label={"question.type"}
              isLoading={false}
              control={control}
              options={questionTypes}
              optionValueProp="id"
              optionTitleProp={"label"}
              errorInstance={errors}
              onChange={onChangeType}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={6}>
              <CustomSelectField
                id="maq_answer"
                required={true}
                label={"maq"}
                isLoading={false}
                control={control}
                options={answerOptions}
                optionValueProp={"id"}
                optionTitleProp={"label"}
                errorInstance={errors}
                multiple={true}
                defaultValue={[]}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"flex-start"}
            sx={{ my: "1rem", gap: "1rem" }}
          >
            <Button
              variant={"contained"}
              color={"primary"}
              type={"submit"}
              disabled={isSubmitting}
            >
              {"save"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
