import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
export const StyledLogoText = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.logo}`,
  fontSize: "1.7rem",
  fontWeight: "700",
}));
export const StyledLogoMark = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  fontSize: "1.7rem",
  fontWeight: "700",
}));

const Logo = () => {
  return (
    <Stack direction={"row"} justifyContent="flex-start">
      <StyledLogoText variant="h2">{"Book"}</StyledLogoText>
      <StyledLogoMark variant="h2">{"Store"}</StyledLogoMark>
    </Stack>
  );
};

export default Logo;
