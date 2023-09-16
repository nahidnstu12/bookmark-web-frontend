import React, { useCallback, useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";

const Search = styled("div")(({ theme }: any) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "#eee",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      height: "3ch",
    },
  },
}));

interface ISearchComponent {
  setGlobalFilter: any;
}

const SearchComponent = ({ setGlobalFilter }: ISearchComponent) => {
  const [isDisableCancelIcon, setIsDisableCancelIcon] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState("");
  const onChangeGlobalSearch = useCallback(
    (e: any) => {
      const value = e.target.value;

      setGlobalFilter(value);
      setSearchValue(value);

      if (value.toString().length) {
        setIsDisableCancelIcon(false);
      } else {
        setIsDisableCancelIcon(true);
      }
    },
    [isDisableCancelIcon],
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color={"primary"} />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchValue}
        placeholder={`Search`}
        inputProps={{ "aria-label": "search" }}
        onChange={onChangeGlobalSearch}
      />
      <IconButton
        disabled={isDisableCancelIcon}
        onClick={() => {
          setIsDisableCancelIcon(true);
          setGlobalFilter("");
          setSearchValue("");
        }}
      >
        <CancelIcon />
      </IconButton>
    </Search>
  );
};

export default SearchComponent;
