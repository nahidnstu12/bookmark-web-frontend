import { InputBase, useTheme } from "@mui/material";
import { useDeferredValue, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SearchContainer = styled(Box)(({ theme, normal, width }: any) => ({
  background: `${theme.palette.background.dark}`,
  border: `1px solid ${theme.palette.background.dark}`,
  borderRadius: "7px",
  padding: "8px 15px",
  display: "flex",
  alignItems: "center",
  width: `${width}`,
  svg: {
    color: `${theme.palette.text.secondary}`,
    fontSize: "22px",
    cursor: "pointer",
    marginRight: "10px",
    "&:hover": {
      color: `${theme.palette.action.hover}`,
    },
  },
  [theme.breakpoints.down("lg")]: {
    display: `${normal ? "none" : ""}`,
  },
}));
function SearchBar({
  searchHandler,
  normal = true,
  initialState = "",
  placeholder = "Search Books (at least 3 char)",
}: any) {
  const theme = useTheme();
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState(initialState);
  const deferredText = useDeferredValue(searchText);

  useEffect(() => {
    if (searchHandler) {
      searchHandler(deferredText);
    }
  }, [deferredText]);

  useEffect(() => {
    setSearchText(initialState);
  }, [initialState]);

  const changeHandler = (e: any) => setSearchText(e.target.value);

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  return (
    <SearchContainer
      sx={
        focus
          ? {
              border: `1px solid ${theme.palette.primary.main}`,
              background: `${theme.palette.background.default}`,
            }
          : { border: `1px solid ${theme.palette.background.dark}` }
      }
      normal={normal}
    >
      <BiSearch />
      <InputBase
        value={searchText}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={changeHandler}
        fullWidth
      />
    </SearchContainer>
  );
}

export default SearchBar;
