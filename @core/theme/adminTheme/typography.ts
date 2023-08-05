import { Fonts } from "@/@core/common/enum";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "inter",
  fontSize: 16,
  h1: {
    fontSize: "6rem",
    lineHeight: "112px",
    fontWeight: Fonts.MEDIUM,
  },
  h2: {
    fontSize: "3.75rem",
    lineHeight: "72px",
    fontWeight: Fonts.MEDIUM,
  },
  h3: {
    fontSize: "3rem",
    lineHeight: "56px",
    fontWeight: Fonts.MEDIUM,
  },
  h4: {
    fontSize: "2rem",
    lineHeight: "40px",
    fontWeight: Fonts.MEDIUM,
  },
  h5: {
    fontSize: "1.5rem",
    lineHeight: "32px",
    fontWeight: Fonts.MEDIUM,
  },
  h6: {
    fontSize: "1.25rem",
    lineHeight: "32px",
    fontWeight: Fonts.MEDIUM,
  },
  subtitle1: {
    fontWeight: Fonts.REGULAR,
    lineHeight: "28px",
    fontSize: "1rem",
  },
  subtitle2: {
    fontWeight: Fonts.MEDIUM,
    fontSize: "0.875rem",
    lineHeight: "21px",
  },
  body1: {
    fontWeight: Fonts.REGULAR,
    lineHeight: "24px",
    fontSize: "1rem",
  },
  body2: {
    fontWeight: Fonts.REGULAR,
    lineHeight: "21px",
    fontSize: "0.875rem",
  },
  caption: {
    fontWeight: Fonts.REGULAR,
    lineHeight: "15px",
    fontSize: "0.875rem",
  },
  button: {
    textTransform: "uppercase",
    fontWeight: Fonts.MEDIUM,
    lineHeight: "17px",
    fontSize: "0.875rem",
  },
  overline: {
    textTransform: "uppercase",
    fontWeight: Fonts.REGULAR,
    lineHeight: "15px",
    fontSize: "0.75rem",
  },
};
export default typography;
