import React, { ReactElement, useCallback, useState } from "react";
import ViewColumnsIcon from "@mui/icons-material/ViewColumn";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "ColumnVisibilityPage";

const classes = {
  columnsPopOver: `${PREFIX}-columnsPopOver`,
  popoverTitle: `${PREFIX}-popoverTitle`,
  grid: `${PREFIX}-grid`,
};

const StyledPopover = styled(Popover)({
  [`& .${classes.columnsPopOver}`]: {
    width: "400px",
    padding: 20,
  },
  [`& .${classes.popoverTitle}`]: {
    fontWeight: 500,
    padding: "0 20px 20px 0",
    textTransform: "uppercase",
  },
});

type Index<T extends object> = {
  anchorEl?: Element;
  onClose: () => void;
  show: boolean;
  table: any;
};

const id = "popover-column-hide";

function ColumnVisibilityPopover<T extends object>({
  anchorEl,
  onClose,
  show,
  table,
}: Index<T>): ReactElement | null {
  return (
    <StyledPopover
      anchorEl={anchorEl}
      id={id}
      onClose={onClose}
      open={show}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <div className={classes.columnsPopOver}>
        <Typography className={classes.popoverTitle}>
          Visible Columns
        </Typography>
        <Grid container spacing={1}>
          {table.getAllLeafColumns().map((column: any) => {
            return (
              <Grid item xs={6} key={column.id}>
                <FormControlLabel
                  key={column.id}
                  control={
                    <Checkbox
                      value={`${column.id}`}
                      disabled={column.isVisible}
                    />
                  }
                  label={
                    typeof column.columnDef.header === "string"
                      ? (column.columnDef.header as String)
                      : "Checkbox"
                  }
                  checked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </StyledPopover>
  );
}

type ActionButton<T extends object> = {
  icon?: JSX.Element;
  onClick: any;
  enabled?: boolean;
  label: string;
};
const SmallIconActionButton = <T extends object>({
  icon,
  onClick,
  label,
  enabled = true,
}: ActionButton<T>) => {
  return (
    <Tooltip title={label} aria-label={label}>
      <span>
        <IconButton onClick={onClick} disabled={!enabled} size="large">
          {icon}
        </IconButton>
      </span>
    </Tooltip>
  );
};

interface IColumnVisibilityComponent {
  tableInstance: any;
}

const ColumnVisibilityComponent = ({
  tableInstance,
}: IColumnVisibilityComponent) => {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const [isColumnsOpen, setIsColumnsOpen] = useState(false);

  const onVisibilityIconClick = useCallback(
    (event: any) => {
      setAnchorEl(event.currentTarget);
      setIsColumnsOpen(true);
    },
    [setIsColumnsOpen],
  );

  const handleColumnVisibilityClose = useCallback(() => {
    setIsColumnsOpen(false);
    setAnchorEl(undefined);
  }, []);

  return (
    <>
      <SmallIconActionButton
        icon={<ViewColumnsIcon color={"primary"} />}
        onClick={onVisibilityIconClick}
        label="Show / hide columns"
      />
      <ColumnVisibilityPopover
        onClose={handleColumnVisibilityClose}
        show={isColumnsOpen}
        anchorEl={anchorEl}
        table={tableInstance}
      />
    </>
  );
};

export default ColumnVisibilityComponent;
