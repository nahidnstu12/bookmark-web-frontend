import React from "react";
import {
  DialogContent,
  DialogActions,
  Dialog,
  Slide,
  DialogTitle,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { SlClose } from "react-icons/sl";

const PREFIX = "CustomMuiModal";

const classes = {
  pageTitle: `${PREFIX}-pageTitle`,
  closeButton: `${PREFIX}-closeButton`,
};

const StyledDialog = styled(Dialog)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(3),

  [`& .${classes.pageTitle}`]: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "12px",
    },
  },

  [`& .${classes.closeButton}`]: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

interface HookFormMuiModalPopupProps {
  title: React.ReactNode;
  actions?: React.ReactNode;
  handleSubmit?: any;
  open: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  children: any;
  onClose: () => void;
  [x: string]: any;
}

const Transition = React.forwardRef(function Transition(props: any, ref: any) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HookFormMuiModal: React.FC<HookFormMuiModalPopupProps> = ({
  handleSubmit,
  children,
  actions,
  onClose,
  ...props
}) => {
  return (
    <StyledDialog
      aria-labelledby="simple-modal-title"
      TransitionComponent={Transition}
      aria-describedby="simple-modal-description"
      maxWidth="md"
      fullWidth
      scroll={"body"}
      onClose={onClose()}
      /*onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose();
        }
      }}*/
      {...props}
    >
      <DialogTitle>
        <Typography className={classes.pageTitle}>{props.title}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
            size="large"
          >
            <SlClose />
          </IconButton>
        ) : null}
      </DialogTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <DialogContent dividers>{children}</DialogContent>
        {actions && <DialogActions>{actions}</DialogActions>}
      </form>
    </StyledDialog>
  );
};

export default HookFormMuiModal;
