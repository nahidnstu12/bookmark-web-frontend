import { TypographyOptions } from "@mui/material/styles/createTypography";
import {FontWeight} from "../../common/enum";

const typography: TypographyOptions = {
  fontFamily: "inter",
  fontSize: 16,
  h1: {
    fontSize: "6rem",
    lineHeight: "112px",
    fontWeight: FontWeight.MEDIUM,
  },
  h2: {
    fontSize: "3.75rem",
    lineHeight: "72px",
    fontWeight: FontWeight.MEDIUM,
  },
  h3: {
    fontSize: "3rem",
    lineHeight: "56px",
    fontWeight: FontWeight.MEDIUM,
  },
  h4: {
    fontSize: "2rem",
    lineHeight: "40px",
    fontWeight: FontWeight.MEDIUM,
  },
  h5: {
    fontSize: "1.5rem",
    lineHeight: "32px",
    fontWeight: FontWeight.MEDIUM,
  },
  h6: {
    fontSize: "1.25rem",
    lineHeight: "32px",
    fontWeight: FontWeight.MEDIUM,
  },
  subtitle1: {
    fontWeight: FontWeight.REGULAR,
    lineHeight: "28px",
    fontSize: "1rem",
  },
  subtitle2: {
    fontWeight: FontWeight.MEDIUM,
    fontSize: "0.875rem",
    lineHeight: "21px",
  },
  body1: {
    fontWeight: FontWeight.REGULAR,
    lineHeight: "24px",
    fontSize: "1rem",
  },
  body2: {
    fontWeight: FontWeight.REGULAR,
    lineHeight: "21px",
    fontSize: "0.875rem",
  },
  caption: {
    fontWeight: FontWeight.REGULAR,
    lineHeight: "15px",
    fontSize: "0.875rem",
  },
  button: {
    textTransform: "uppercase",
    fontWeight: FontWeight.MEDIUM,
    lineHeight: "17px",
    fontSize: "0.875rem",
  },
  overline: {
    textTransform: "uppercase",
    fontWeight: FontWeight.REGULAR,
    lineHeight: "15px",
    fontSize: "0.75rem",
  },
};
export default typography;
