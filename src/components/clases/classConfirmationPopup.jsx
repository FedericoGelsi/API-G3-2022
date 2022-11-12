import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";

function ClassConfirmationPopUp(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{"Esta seguro de contratar esta clase?"}</DialogTitle>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancelar</Button>
        <Button color="secondary" variant="contained" onClick={props.handleClose}>Contratar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ClassConfirmationPopUp;
