import { Divider, Stack } from "@mui/material";
import React from "react";
import Detail from "./Detail";

function ClassDetails(props) {
  const clase = props.clase;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      spacing={1}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Detail name="Duracion" value={clase.courselength} />
      <Detail name="Tipo" value={clase.type} />
      <Detail name="Frecuencia" value={clase.frec} />
      <Detail name="Precio" value={clase.price} />
      <Detail name="Calificacion" value={clase.rating} variant="rating" />
    </Stack>
  );
}

export default ClassDetails;
