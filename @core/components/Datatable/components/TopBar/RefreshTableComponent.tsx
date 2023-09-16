import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import React from "react";
import { debounce } from "lodash";
interface IRefreshTableComponent {
  onRefreshCallback: any;
}

const RefreshTableComponent = ({
  onRefreshCallback,
}: IRefreshTableComponent) => {
  return (
    <IconButton
      aria-label="refresh"
      sx={{ mx: 3 }}
      onClick={debounce(() => {
        onRefreshCallback();
      }, 500)}
    >
      <RefreshIcon color={"primary"} />
    </IconButton>
  );
};

export default RefreshTableComponent;
