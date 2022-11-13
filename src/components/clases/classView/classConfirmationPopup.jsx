import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { ContratacionForm } from "./ContratacionForm";

function ClassConfirmationPopUp(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Contratar clase</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Para contratar esta clase debe ingresar los siguientes datos.
        </DialogContentText>
        <ContratacionForm handleClose={props.handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default ClassConfirmationPopUp;