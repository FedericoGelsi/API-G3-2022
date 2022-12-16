import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { ContratacionForm } from "./ContratacionForm";

function ClassConfirmationPopUp(props) {
  const id = props.id;
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
        <ContratacionForm idclase = {id} handleClose={props.handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default ClassConfirmationPopUp;