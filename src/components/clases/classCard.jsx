import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Fab } from "@mui/material";
import { Stack } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import ClassConfirmationPopUp from "./classConfirmationPopup";

export default function CardClase(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const clase = props.clase;
  let cardImageUrl = "/img/" + (clase.image ? clase.image : "default.png");

  return (
    <Card>
      <Stack direction="column">
        <CardMedia
          component="img"
          src={cardImageUrl}
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography variant="subtitle2" color="secondary">
            Profesor -{" "}
            {clase.professor.firstname + " " + clase.professor.lastname}
          </Typography>
          <Typography variant="h4" color="text.primary">
            {clase.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" noWrap>
            {clase.description}
          </Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-between" p={1}>
          <Chip label={clase.subject} variant="outlined" color="primary" />
          {props.variant === "home" && (
            <Fab
              color="secondary"
              size="small"
              variant="extended"
              onClick={handleClickOpen}
            >
              <Typography variant="button">Contratar</Typography>
              <ShoppingCart />
            </Fab>
          )}
          <ClassConfirmationPopUp handleClose={handleClose} open={open} />
        </Stack>
      </Stack>
    </Card>
  );
}
