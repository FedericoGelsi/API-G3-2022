import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CardStatusBadge from "./CardStatusBadge";
import { Backdrop, Button, CardContent, Divider, Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Mail } from "@mui/icons-material";
import { Course, Status } from "../cursos/entities";
import CardContact from "./CardContact";

CardContratacion.propTypes = {
  course: PropTypes.instanceOf(Course),
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
  const course = props.contratacion.course;

  let cardImageUrl = "/img/" + (course.image ? course.image : "default.png");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { md: "column", xs: "column" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "stretch" },
        maxHeight: { md: 256 },
        my: 2,
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
              <Typography variant="h4">{course.name}</Typography>
              <Typography variant="subtitle1">
                Profesor: {course.professor.getFullName()}
              </Typography>
              <Typography variant="subtitle1">
                Materia: {course.subject}
              </Typography>
              <Typography variant="subtitle1">
                Solicitada por: {props.contratacion.student.getFullName()}
              </Typography>
            </CardContent>
            <Stack
              direction="column"
              justifyContent="center"
              spacing={1}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Typography variant="body2">
                Duracion: {course.courseLength}
              </Typography>
              <Typography variant="body2">Frecuencia: {course.frec}</Typography>
              <Typography variant="body2">Precio: {course.price}</Typography>
            </Stack>
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
            <CardContact user={props.contratacion.student} onClick={handleClose} />
          </Backdrop>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default CardContratacion;
