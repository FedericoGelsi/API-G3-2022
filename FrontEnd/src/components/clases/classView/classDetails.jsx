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
      <Detail name="Duracion" value={clase.duration} />
      <Detail name="Tipo" value={clase.type} />
      <Detail name="Frecuencia" value={clase.frequency} />
      <Detail name="Precio" value={clase.cost + " " + clase.currency} />
      <Detail name="Calificacion" value={clase.rating} variant="rating" />
      
    </Stack>
  );
}

export default ClassDetails;
