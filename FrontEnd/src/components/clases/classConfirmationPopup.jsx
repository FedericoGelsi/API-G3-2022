import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";

function ClassConfirmationPopUp(props) {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom in={props.open} ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      onClose={props.handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Esta seguro de contratar esta clase?"}</DialogTitle>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancelar</Button>
        <Button onClick={props.handleClose}>Contratar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ClassConfirmationPopUp;
