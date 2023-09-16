import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: ".01%",
  width: "inherit",
  overflowX: "auto",
  "& > thead > tr > th, > tbody > tr > th, > tfoot > tr > th, thead > tr > td, tbody > tr > td, tfoot > tr > td":
    {
      whiteSpace: "nowrap",
    },
}));

const DataTableContainer = (props: any) => {
  return <StyledBox>{props.children}</StyledBox>;
};

export default DataTableContainer;
