import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const PREFIX = "ReactTable";

export const classes = {
  tableRoot: `${PREFIX}-tableRoot`,
  leftIcons: `${PREFIX}-leftIcons`,
  rightIcons: `${PREFIX}-rightIcons`,
  tablePagination: `${PREFIX}-tablePagination`,
};

export const StyledGridForTable = styled(Grid)(({ theme }): any => ({
  position: "relative",
  backgroundColor: "#f5f7f9",
  [`& .${classes.tableRoot}`]: {
    border: "1px solid lightgray",
  },
  [`& .${classes.leftIcons}`]: {
    "&:first-of-type": {
      marginLeft: -12,
    },
  },
  [`& .${classes.rightIcons}`]: {
    padding: 12,
    marginTop: "-6px",
    width: 48,
    height: 48,
    "&:last-of-type": {
      marginRight: -12,
    },
  },
  [`& .${classes.tablePagination}`]: {
    display: "flex",
    justifyContent: "center",
  },
  ["& .MuiTableBody-root"]: {
    ["& .MuiTableRow-root"]: {
      background: "#fff",
    },
    ["& .MuiTableRow-root td:first-of-type"]: {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    ["& .MuiTableRow-root td:last-child"]: {
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    /*[`& .MuiTableCell-root`]: {
          borderBottom: '2px solid #f5f7f9',
          color: '#868787',
        },*/
  },
  [`& .MuiTableHead-root`]: {
    [`& .MuiTableCell-root`]: {
      color: "#091C32",
      borderBottom: "none",
    },
  },
  [`& .MuiTableCell-root`]: {
    paddingLeft: "5px",
    paddingRight: "5px",
    "&:first-of-type": {
      paddingLeft: "16px",
    },
  },
  [`& .MuiTableCell-body`]: {
    fontSize: "0.875rem",
    padding: "3px",
  },
}));
