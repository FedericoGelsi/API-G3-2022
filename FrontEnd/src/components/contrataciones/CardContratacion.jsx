import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CardStatusBadge from "./CardStatusBadge";
import { Backdrop, Button, CardContent, Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Mail } from "@mui/icons-material";
import { Class, Status } from "../clases/entities";
import CardContact from "./CardContact";
import ClassDetails from "../clases/classView/classDetails";

CardContratacion.propTypes = {
  course: PropTypes.instanceOf(Class),
};

function CardContratacion(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleDisabled = () => {
    return props.contratacion.status === Status.Solicitada ||
      props.contratacion.status === Status.Cancelada
      ? true
      : false;
  };

  const handleCancelButton = () => {
    if (props.contratacion.status === Status.Solicitada) {
      return "CANCELAR";
    }
    if (props.contratacion.status === Status.Aceptada) {
      return "FINALIZAR";
    }
  };
  const clase = props.contratacion.class;

  let cardImageUrl = "/img/" + (clase.image ? clase.image : "default.png");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { md: "column", xs: "column" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "stretch" },
        maxHeight: { md: 256 },
        p: 2,
        pb: 1,
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent="space-between"
      >
        <CardMedia
          component="img"
          src={cardImageUrl}
          sx={{
            maxWidth: { md: "30%", xs: "100%" },
            objectFit: "contain",
          }}
        />
        <Stack direction="column" alignItems="flex-end" flexGrow={5}>
          <CardStatusBadge status={props.contratacion.status} />
          <Stack direction="row" justifyContent="space-between" width="100%">
            <CardContent>
              <Typography variant="h4">{clase.name}</Typography>
              <Typography variant="subtitle1">
                Profesor: {clase.professor.firstname + " " + clase.professor.lastname}
              </Typography>
              <Typography variant="subtitle1">
                Materia: {clase.subject}
              </Typography>
              <Typography variant="subtitle1">
                Solicitada por:{" "}
                {props.contratacion.student.firstname +
                  " " +
                  props.contratacion.student.lastname}
              </Typography>
            </CardContent>
            <ClassDetails clase={clase} />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Button color="secondary">{handleCancelButton()}</Button>
        <CardActions sx={{ order: { xs: 3, md: 3 } }}>
          <Fab
            disabled={handleDisabled()}
            variant="extended"
            color="secondary"
            size="medium"
            onClick={handleToggle}
          >
            <Mail sx={{ mr: 1 }} />
            Contactar
          </Fab>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CardContact
              user={props.contratacion.student}
              reason={props.contratacion.reason}
              onClick={handleClose}
            />
          </Backdrop>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default CardContratacion;
